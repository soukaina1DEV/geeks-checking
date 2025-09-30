const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const filePath = path.join(__dirname, "../users.json");

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

exports.register = async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const users = readUsers();
  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find((u) => u.username === username);
  if (!user)
    return res.status(404).json({ error: "Username is not registered" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  res.json({ message: `Hi ${username}, welcome back again!` });
};

exports.getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

exports.updateUser = (req, res) => {
  const { firstName, lastName, email } = req.body;
  const users = readUsers();
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1)
    return res.status(404).json({ error: "User not found" });

  users[userIndex] = {
    ...users[userIndex],
    firstName: firstName || users[userIndex].firstName,
    lastName: lastName || users[userIndex].lastName,
    email: email || users[userIndex].email,
  };

  writeUsers(users);
  res.json({ message: "User updated successfully", user: users[userIndex] });
};
