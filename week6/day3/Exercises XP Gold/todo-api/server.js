const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const todoRoutes = require("./server/routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
