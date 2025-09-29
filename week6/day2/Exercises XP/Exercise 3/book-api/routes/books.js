const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json({ message: "Book added successfully", book: newBook });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  res.json({ message: "Book updated successfully", book });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
});

module.exports = router;
