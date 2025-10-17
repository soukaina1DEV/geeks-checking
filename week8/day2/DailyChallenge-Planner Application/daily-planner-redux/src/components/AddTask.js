import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = ({ selectedDate, addTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(selectedDate, text);
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
          color: "white",
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

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
});

export default connect(mapStateToProps, { addTask })(AddTask);
