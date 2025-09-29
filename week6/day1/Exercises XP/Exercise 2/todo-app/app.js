const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
