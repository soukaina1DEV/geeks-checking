const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
