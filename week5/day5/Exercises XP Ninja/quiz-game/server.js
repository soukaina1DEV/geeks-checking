const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which programming language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "2 + 2 * 2 = ?",
    options: ["6", "8", "4", "10"],
    answer: "6",
  },
];

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`🚀 Quiz Game running at http://localhost:${PORT}`);
});
