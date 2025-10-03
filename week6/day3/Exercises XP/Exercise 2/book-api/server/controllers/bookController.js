const Book = require("../models/bookModel");

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const getBook = async (req, res, next) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const book = await Book.getBookById(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newBook = await Book.createBook(title, author, publishedYear);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

module.exports = { getBooks, getBook, createBook };
