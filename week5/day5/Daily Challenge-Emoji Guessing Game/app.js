const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "😂", name: "Laugh" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "😍", name: "HeartEyes" },
  { emoji: "🤔", name: "Thinking" },
];
let leaderboard = [];
function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}
app.get("/game", (req, res) => {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correct = emojis[correctIndex];
  const names = [correct.name];
  while (names.length < 3) {
    const cand = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!names.includes(cand)) names.push(cand);
  }
  const options = shuffle(names);
  res.json({
    emoji: correct.emoji,
    options,
    correct: correct.name
  });
});
app.post("/submit", (req, res) => {
  const { player, score } = req.body;
  if (!player || typeof score !== "number") {
    return res
      .status(400)
      .json({ success: false, message: "player et score requis" });
  }
  leaderboard.push({ player, score });
  leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
  res.json({ success: true, leaderboard });
});
app.get("/leaderboard", (req, res) => {
  res.json(leaderboard);
});
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
