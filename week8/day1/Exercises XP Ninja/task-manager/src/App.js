import React from "react";
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h1>✅ Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
