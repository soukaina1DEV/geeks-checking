import fs from "fs";
import path from "path";

export default function readFile(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
      console.error("❌ File does not exist:", absolutePath);
      return;
    }
    const content = fs.readFileSync(absolutePath, "utf8");
    console.log("File content:\n", content);
  } catch (err) {
    console.error("❌ Error reading file:", err.message);
  }
}
