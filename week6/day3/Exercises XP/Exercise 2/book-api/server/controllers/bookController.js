const Book = require("../models/bookModel");

const getBooks = (req, res) => {
  res.status(200).json(Book.getAllBooks());
};

const getBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = Book.getBookById(bookId);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newBook = Book.createBook(title, author, publishedYear);
  res.status(201).json(newBook);
};

module.exports = { getBooks, getBook, createBook };
