const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

router.get("/", (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({
    message: "🎉 Quiz started!",
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

router.post("/", (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ error: "Please provide an answer" });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Wrong! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({
      feedback,
      message: "🏁 Quiz finished! Go to /quiz/score to see your result.",
    });
  }
});

router.get("/score", (req, res) => {
  res.json({
    message: "📊 Your final score",
    score: `${score} / ${triviaQuestions.length}`,
  });
});

module.exports = router;
