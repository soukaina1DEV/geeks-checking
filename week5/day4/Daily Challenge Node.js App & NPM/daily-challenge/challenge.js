import greet from "./greeting.js";
import colorfulMessage from "./colorful-message.js";
import { readFile } from "./files/read-file.js";

console.log("=== Daily Challenge in Action ===\n");

// 1. Greeting
console.log(greet("Soukaina"));

// 2. Colorful message
colorfulMessage();

// 3. Read file
readFile();

console.log("\n=== End of Challenge ===");
