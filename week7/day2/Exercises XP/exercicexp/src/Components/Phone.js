import React, { useState } from "react";

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhone((prevPhone) => ({
      ...prevPhone,
      color: "blue",
    }));
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "30px auto",
        width: "400px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>My phone is a {phone.brand}</h1>
      <p>
        It is a {phone.color} {phone.model} from {phone.year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
