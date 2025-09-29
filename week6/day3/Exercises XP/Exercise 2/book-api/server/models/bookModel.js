let books = [
  { id: 1, title: "Book One", author: "Author One", publishedYear: 2020 },
  { id: 2, title: "Book Two", author: "Author Two", publishedYear: 2021 },
];

const getAllBooks = () => books;

const getBookById = (id) => books.find((b) => b.id === id);

const createBook = (title, author, publishedYear) => {
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  return newBook;
};

module.exports = { getAllBooks, getBookById, createBook };
