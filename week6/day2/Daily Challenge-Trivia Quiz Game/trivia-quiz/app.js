const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const quizRouter = require("./routes/quiz");
app.use("/quiz", quizRouter);

app.listen(PORT, () => {
  console.log(`🚀 Trivia Quiz running at http://localhost:${PORT}`);
});
