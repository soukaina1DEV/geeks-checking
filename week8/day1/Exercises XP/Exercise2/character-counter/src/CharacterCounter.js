import React, { useRef, useState, useEffect } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null); // reference to input
  const [count, setCount] = useState(0); // state for character count

  useEffect(() => {
    const handleInput = () => {
      setCount(inputRef.current.value.length);
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener("input", handleInput);

    // cleanup when component unmounts
    return () => {
      inputElement.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>📝 Character Counter</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "300px",
          fontSize: "16px",
        }}
      />
      <p style={{ marginTop: "15px", fontSize: "18px" }}>
        Character Count: <strong>{count}</strong>
      </p>
    </div>
  );
};

export default CharacterCounter;
