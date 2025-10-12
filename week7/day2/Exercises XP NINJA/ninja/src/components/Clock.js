import React, { useState, useEffect } from "react";

function Clock() {
  // 1. 
  const [currentDate, setCurrentDate] = useState(new Date());

  // 2. 
  const tick = () => {
    setCurrentDate(new Date());
  };

  // 3. 
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // 4. 
    return () => {
      clearInterval(timerID);
    };
  }, []); 

  // 5.
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        width: "300px",
        padding: "20px",
        margin: "30px auto",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Hello, world!</h1>
      <h2>It is {currentDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
