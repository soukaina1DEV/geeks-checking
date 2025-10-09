const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const users = {}; // { socketId: username }

io.on("connection", (socket) => {
  console.log("✅ New user connected:", socket.id);

  socket.on("join", (username) => {
    users[socket.id] = username;
    io.emit("userList", Object.values(users));
    io.emit("message", { user: "System", text: `${username} joined the chat` });
  });

  socket.on("sendMessage", (msg) => {
    const username = users[socket.id];
    io.emit("message", { user: username, text: msg });
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit("userList", Object.values(users));
    if (username) {
      io.emit("message", { user: "System", text: `${username} left the chat` });
    }
  });
});

server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
