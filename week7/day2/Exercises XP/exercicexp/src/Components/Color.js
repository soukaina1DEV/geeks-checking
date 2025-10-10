import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); // will trigger when favoriteColor changes

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={() => setFavoriteColor("blue")}>Change color</button>
    </div>
  );
}

export default Color;
