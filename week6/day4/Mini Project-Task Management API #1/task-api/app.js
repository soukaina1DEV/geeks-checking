const express = require("express");
const taskRoutes = require("./server/routes/taskRoutes");

const app = express();
const PORT = 5000;

app.use(express.json()); 
app.use("/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
