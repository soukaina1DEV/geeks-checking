const bcrypt = require("bcryptjs");
const db = require("../config/db");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

async function register(req, res) {
  const { email, username, first_name, last_name, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await db.transaction(async (trx) => {
      const hashedPwd = await bcrypt.hash(password, 10);

      const newUser = await userModel.createUser(
        { email, username, first_name, last_name },
        trx
      );

      await userModel.storePassword({ username, password: hashedPwd }, trx);

      res.status(201).json({ message: "User registered", user: newUser });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const pwdRecord = await userModel.getPasswordByUsername(username);
    if (!pwdRecord) return res.status(404).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, pwdRecord.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

async function getUser(req, res) {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch {
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

async function updateUser(req, res) {
  try {
    const updated = await userModel.updateUser(req.params.id, req.body);
    if (!updated.length)
      return res.status(404).json({ error: "User not found" });
    res.json(updated[0]);
  } catch {
    res.status(500).json({ error: "Failed to update user" });
  }
}

module.exports = { register, login, getUsers, getUser, updateUser };
