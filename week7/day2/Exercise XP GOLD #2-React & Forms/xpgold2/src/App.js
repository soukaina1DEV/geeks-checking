// Exercise 1 : Use data from a Form

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Genre: "",
    YearReleased: "",
  });

  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setMessage("data sent!"); 
  };

  return (
    <div
      style={{
        textAlign: "left",
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>New Book</h2>
      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Author</label>
          <br />
          <input
            type="text"
            name="Author"
            value={formData.Author}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Genre</label>
          <br />
          <input
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Year Published</label>
          <br />
          <input
            type="text"
            name="YearReleased"
            value={formData.YearReleased}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;





// Exercise 2 : Display the user input from a Form with React

import React from "react";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default App;
