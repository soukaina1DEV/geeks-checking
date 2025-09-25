import chalk from "chalk";

function colorfulMessage() {
  console.log(chalk.blue.bold("🌈 This is a colorful message with Chalk!"));
  console.log(chalk.green("Success! Everything is working fine ✅"));
  console.log(chalk.red("Be careful of errors ❌"));
}

export default colorfulMessage;
