import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "250px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
