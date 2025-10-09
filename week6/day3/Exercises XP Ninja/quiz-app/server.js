const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const quizRoutes = require("./server/routes/quizRoutes");
app.use("/api", quizRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Quiz Game running on http://localhost:${PORT}`);
});
