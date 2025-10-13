const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// GET request
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello From Express" });
});

// POST request
app.post("/api/world", (req, res) => {
  console.log(req.body); 
  const { post } = req.body;
  res.send({
    message: `I received your POST request. This is what you sent me: ${post}`,
  });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
