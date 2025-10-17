import { createSlice, createSelector } from "@reduxjs/toolkit";

// Mock data for book inventory
const initialState = {
  books: [
    { id: 1, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
    { id: 2, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 5, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    {
      id: 6,
      title: "Foundation",
      author: "Isaac Asimov",
      genre: "Science Fiction",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;

// --- Selectors ---

// Get all books
export const selectBooks = (state) => state.books.books;

// Genre-based selectors using createSelector
export const selectHorrorBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);
