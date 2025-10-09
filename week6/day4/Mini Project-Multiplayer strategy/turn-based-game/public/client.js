const board = document.getElementById("board");
const statusDiv = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
let currentPlayer = "p1";

async function getGame() {
  const res = await fetch("/api/game");
  const game = await res.json();
  renderBoard(game);
}

function renderBoard(game) {
  board.innerHTML = "";
  for (let y = 0; y < game.gridSize; y++) {
    for (let x = 0; x < game.gridSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const { p1, p2 } = game.players;
      if (x === p1.base.x && y === p1.base.y) cell.classList.add("base1");
      if (x === p2.base.x && y === p2.base.y) cell.classList.add("base2");

      if (x === p1.x && y === p1.y) cell.textContent = "🧍‍♂️";
      if (x === p2.x && y === p2.y) cell.textContent = "🤺";

      if (game.obstacles.some((o) => o.x === x && o.y === y))
        cell.classList.add("obstacle");

      board.appendChild(cell);
    }
  }

  if (game.winner) {
    statusDiv.textContent = `🏆 ${game.winner} wins!`;
  } else {
    statusDiv.textContent = `🎯 It's ${game.turn.toUpperCase()}'s turn`;
  }
}

document.querySelectorAll("#controls button").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const direction = btn.getAttribute("data-dir");
    const res = await fetch("/api/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ player: currentPlayer, direction }),
    });
    const data = await res.json();

    statusDiv.textContent = data.message;
    if (data.game) {
      currentPlayer = data.game.turn;
    }

    getGame();
  });
});


resetBtn.addEventListener("click", async () => {
  await fetch("/api/reset", { method: "POST" });
  getGame();
});

getGame();
