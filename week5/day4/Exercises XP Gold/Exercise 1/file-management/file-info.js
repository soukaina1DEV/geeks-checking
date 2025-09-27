const fs = require("fs");
const path = require("path");

function getFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);

    console.log("File exists:", filePath);
    console.log("Size:", stats.size, "bytes");
    console.log("Created at:", stats.birthtime);
  } else {
    console.log("File does not exist:", filePath);
  }
}

module.exports = getFileInfo;
