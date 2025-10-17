import React from "react";
import DatePicker from "./components/DatePicker";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>🗓️ Daily Planner (React + Redux Toolkit)</h1>
      <DatePicker />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
