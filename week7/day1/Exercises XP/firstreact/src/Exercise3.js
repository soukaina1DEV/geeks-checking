import React from "react";
import "./Exercise.css"; 

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={style_header}>This is a header styled with an object</h1>

        <p className="para">
          This is a paragraph styled using an external CSS file.
        </p>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          Visit React Documentation
        </a>

        <form style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width="100"
          style={{ display: "block", margin: "20px auto" }}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
