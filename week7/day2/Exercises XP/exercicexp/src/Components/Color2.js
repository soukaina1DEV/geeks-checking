import React, { useState, useEffect } from "react";

function Color() {
  // Step 1️⃣: Define state
  const [favoriteColor, setFavoriteColor] = useState("red");

  // Step 2️⃣: useEffect runs after render
  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); // runs every time favoriteColor changes

  // Step 3️⃣: function to change color
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  // Step 4️⃣: Render UI
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "400px",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Color;
