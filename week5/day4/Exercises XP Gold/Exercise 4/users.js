const prompt = require("prompt-sync")({ sigint: true });

let users = [];

function addUserManual() {
  const name = prompt("Enter name: ");
  const street = prompt("Enter street: ");
  const country = prompt("Enter country: ");

  const user = { name, street, country };
  users.push(user);
  console.log("✅ User added manually:", user);
}

module.exports = { users, addUserManual };
