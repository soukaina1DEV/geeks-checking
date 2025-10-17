import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../features/books/booksSlice";

const BookList = () => {
  const [genre, setGenre] = useState("All");

  // Base selectors
  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  // Function to select the right list
  const getBooksByGenre = () => {
    switch (genre) {
      case "Horror":
        return horrorBooks;
      case "Fantasy":
        return fantasyBooks;
      case "Science Fiction":
        return sciFiBooks;
      default:
        return allBooks;
    }
  };

  const booksToDisplay = getBooksByGenre();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📚 Book Inventory</h1>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="genre">Select Genre: </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          <option value="All">All</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {booksToDisplay.map((book) => (
          <li
            key={book.id}
            style={{
              backgroundColor: "#f8f9fa",
              margin: "10px auto",
              width: "60%",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "left",
            }}
          >
            <strong>{book.title}</strong> — {book.author} <br />
            <em>Genre: {book.genre}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
