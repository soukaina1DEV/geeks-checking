exports.readFile = function (filePath) {
  const fs = require("fs");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File contents:", data);
  });
};
exports.writeFile = function (filePath, content) {
  const fs = require("fs");
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully.");
  });
};
