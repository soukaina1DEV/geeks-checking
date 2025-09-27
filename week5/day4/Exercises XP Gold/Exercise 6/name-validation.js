const prompt = require("prompt-sync")({ sigint: true });

const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

function validateName(name) {
  if (nameRegex.test(name)) {
    console.log("✅ Valid name:", name);
  } else {
    console.log("❌ Invalid name");
  }
}

const fullName = prompt("Enter your full name (e.g., John Doe): ");
validateName(fullName);
