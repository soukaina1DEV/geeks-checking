const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");

const router = express.Router();
const usersFile = "./users.json";

function loadUsers() {
  try {
    const data = fs.readFileSync(usersFile, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const users = loadUsers();
  const existingUser = users.find(
    (u) => u.username === username || u.email === email
  );
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "❌ Username or Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  saveUsers(users);

  res
    .status(201)
    .json({ message: "✅ User registered successfully", user: newUser });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ message: "❌ User not found" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "❌ Invalid credentials" });
  }

  res.json({ message: `✅ Welcome back, ${user.username}!` });
});

router.get("/users", (req, res) => {
  const users = loadUsers();
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const users = loadUsers();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

router.put("/users/:id", (req, res) => {
  const { firstName, lastName, email } = req.body;
  let users = loadUsers();
  const userIndex = users.findIndex((u) => u.id == req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    firstName: firstName || users[userIndex].firstName,
    lastName: lastName || users[userIndex].lastName,
    email: email || users[userIndex].email,
  };

  saveUsers(users);
  res.json({ message: "✅ User updated", user: users[userIndex] });
});

module.exports = router;
