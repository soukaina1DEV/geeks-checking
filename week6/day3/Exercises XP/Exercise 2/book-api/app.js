const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json()); 

const bookRoutes = require("./server/routes/bookRoutes");
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
