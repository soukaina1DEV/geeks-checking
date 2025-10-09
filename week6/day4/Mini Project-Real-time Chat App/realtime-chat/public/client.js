const socket = io();
const joinDiv = document.getElementById("join");
const chatDiv = document.getElementById("chat");
const usernameInput = document.getElementById("username");
const joinBtn = document.getElementById("joinBtn");
const userList = document.getElementById("userList");
const messages = document.getElementById("messages");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

let username = "";

joinBtn.addEventListener("click", () => {
  username = usernameInput.value.trim();
  if (username) {
    socket.emit("join", username);
    joinDiv.classList.add("hidden");
    chatDiv.classList.remove("hidden");
  }
});

socket.on("message", ({ user, text }) => {
  const div = document.createElement("div");
  div.classList.add("msg");
  div.innerHTML = `<strong>${user}:</strong> ${text}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  if (user !== username) document.title = "💬 New Message!";
});

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener(
  "keypress",
  (e) => e.key === "Enter" && sendMessage()
);

function sendMessage() {
  const msg = msgInput.value.trim();
  if (msg) {
    socket.emit("sendMessage", msg);
    msgInput.value = "";
  }
}

socket.on("userList", (users) => {
  userList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = u;
    userList.appendChild(li);
  });
});
