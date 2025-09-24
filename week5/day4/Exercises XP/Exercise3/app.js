const fileManager = require("./fileManager.js");
fileManager.readFile("Hello_World.txt");
fileManager.writeFile(
  "ByeWorld.txt",
  "Writing to the file"
);
fileManager.readFile("ByeWorld.txt");
