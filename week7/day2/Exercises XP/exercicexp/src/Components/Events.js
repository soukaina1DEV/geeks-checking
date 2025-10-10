import React, { useState } from "react";

const Events = () => {
  // --- Part I ---
  const clickMe = () => {
    alert("I was clicked");
  };

  // --- Part II ---
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // --- Part III ---
  const [isToggleOn, setIsToggleOn] = useState(true);
  const toggleButton = () => setIsToggleOn(!isToggleOn);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* ---- Part I ---- */}
      <h3>Click Event:</h3>
      <button onClick={clickMe}>Click Me</button>

      <hr />

      {/* ---- Part II ---- */}
      <h3>KeyDown Event:</h3>
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
      />

      <hr />

      {/* ---- Part III ---- */}
      <h3>Exercise 9:</h3>
      <button onClick={toggleButton}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Events;
