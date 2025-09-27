import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 5000;
app.use(express.json());

let users = [];

const JWT_SECRET = "mysecretkey123";

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
});


app.get("/api/profile", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token required" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.id === decoded.id);
    res.json({ id: user.id, username: user.username });
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
