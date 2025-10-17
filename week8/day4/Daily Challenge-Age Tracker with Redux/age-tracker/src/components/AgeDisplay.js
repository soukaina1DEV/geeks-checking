import React from "react";
import { useSelector } from "react-redux";
import logo from "../logo.svg"; 

const AgeDisplay = () => {
  const { value, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2>Your Age: {value}</h2>
      {loading && (
        <img
          src={logo}
          alt="loading..."
          style={{
            width: "50px",
            height: "50px",
            animation: "spin 1s linear infinite",
          }}
        />
      )}
    </div>
  );
};

export default AgeDisplay;
