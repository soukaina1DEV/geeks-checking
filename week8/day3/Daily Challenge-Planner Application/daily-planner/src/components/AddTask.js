import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/planner/plannerSlice";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTask({ date: selectedDate, text }));
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        style={{
          padding: "10px",
          borderRadius: "5px",
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
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
