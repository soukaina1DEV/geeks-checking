const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const greetRoutes = require("./routes/greetRoutes");
app.use("/", greetRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`🚀 Emoji Greeting App running on http://localhost:${PORT}`);
});
