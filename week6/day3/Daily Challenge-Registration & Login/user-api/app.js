const express = require("express");
const userRoutes = require("./server/routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
