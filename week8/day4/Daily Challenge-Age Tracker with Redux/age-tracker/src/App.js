import React from "react";
import AgeDisplay from "./components/AgeDisplay";
import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>🎂 Age Tracker (Redux Toolkit + Thunk)</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
