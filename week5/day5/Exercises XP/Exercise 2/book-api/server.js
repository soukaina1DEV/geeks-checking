const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
let data = [
  { id: 1, title: "Book One", author: "Author One", publishedYear: 2020 },
  { id: 2, title: "Book Two", author: "Author Two", publishedYear: 2021 },
  { id: 3, title: "Book Three", author: "Author Three", publishedYear: 2022 },
];

app.get("/api/books", (req, res) => {
  res.json(data);
});

app.get("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = data.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});


app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: data.length + 1,
    title,
    author,
    publishedYear,
  };
  
  data.push(newBook);
  res.status(201).json({ message: "Book created successfully", book: newBook });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});



 


