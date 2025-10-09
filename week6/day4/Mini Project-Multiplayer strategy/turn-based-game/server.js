const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let game = {
  gridSize: 10,
  players: {
    p1: { x: 0, y: 0, base: { x: 0, y: 0 }, symbol: "🏠" },
    p2: { x: 9, y: 9, base: { x: 9, y: 9 }, symbol: "🏰" },
  },
  turn: "p1",
  obstacles: [
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 4 },
  ],
  winner: null,
};

function isValidMove(player, direction) {
  const p = game.players[player];
  let { x, y } = p;

  switch (direction) {
    case "up":
      y -= 1;
      break;
    case "down":
      y += 1;
      break;
    case "left":
      x -= 1;
      break;
    case "right":
      x += 1;
      break;
    default:
      return false;
  }

  if (x < 0 || x >= game.gridSize || y < 0 || y >= game.gridSize) return false;

  if (game.obstacles.some((o) => o.x === x && o.y === y)) return false;

  p.x = x;
  p.y = y;
  checkWinner();
  return true;
}

function checkWinner() {
  const { p1, p2 } = game.players;

  if (p1.x === p2.base.x && p1.y === p2.base.y) {
    game.winner = "Player 1";
  } else if (p2.x === p1.base.x && p2.y === p1.base.y) {
    game.winner = "Player 2";
  }
}


app.get("/api/game", (req, res) => {
  res.json(game);
});

app.post("/api/move", (req, res) => {
  const { player, direction } = req.body;

  if (game.winner) {
    return res.json({ message: "Game over", winner: game.winner });
  }

  if (player !== game.turn) {
    return res.json({ message: `It's not your turn!` });
  }

  const success = isValidMove(player, direction);

  if (!success) {
    return res.json({ message: "Invalid move!" });
  }

  game.turn = game.turn === "p1" ? "p2" : "p1";
  res.json({ message: "Move successful", game });
});

app.post("/api/reset", (req, res) => {
  game.players.p1.x = 0;
  game.players.p1.y = 0;
  game.players.p2.x = 9;
  game.players.p2.y = 9;
  game.turn = "p1";
  game.winner = null;
  res.json({ message: "Game reset!" });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
