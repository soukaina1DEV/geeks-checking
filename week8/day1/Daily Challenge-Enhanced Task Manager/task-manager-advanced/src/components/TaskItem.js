import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleSave = () => {
    const newText = inputRef.current.value.trim();
    if (newText !== "") {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: newText } });
      setIsEditing(false);
    }
  };

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
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            defaultValue={task.text}
            style={{
              flex: 1,
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          <button onClick={handleSave} style={{ marginRight: "10px" }}>
            Save
          </button>
        </>
      ) : (
        <span
          onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          style={{
            flex: 1,
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {task.text}
        </span>
      )}

      <div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              marginRight: "10px",
              backgroundColor: "#ffc107",
              border: "none",
              borderRadius: "5px",
              padding: "5px 8px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 8px",
            cursor: "pointer",
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
