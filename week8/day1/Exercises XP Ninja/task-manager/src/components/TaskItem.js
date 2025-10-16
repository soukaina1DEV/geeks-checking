import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <span
        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </li>
  );
};

export default TaskItem;
