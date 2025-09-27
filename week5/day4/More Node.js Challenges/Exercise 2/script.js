import { minutesLived } from "./date.js";
import prompt from "prompt-sync";

const ask = prompt();
const birthdate = ask("Enter your birthdate (YYYY-MM-DD): ");
console.log(minutesLived(birthdate));
