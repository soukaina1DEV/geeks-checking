const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const postRoutes = require("./server/routes/postRoutes");
app.use("/posts", postRoutes);

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
