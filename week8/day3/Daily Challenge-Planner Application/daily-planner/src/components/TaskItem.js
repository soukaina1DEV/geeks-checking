import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, deleteTask } from "../features/planner/plannerSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);

  const handleSave = () => {
    const newText = inputRef.current.value.trim();
    if (newText) {
      dispatch(editTask({ date: selectedDate, id: task.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
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
              marginRight: "10px",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ flex: 1 }}>{task.text}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                marginRight: "10px",
                backgroundColor: "#ffc107",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch(deleteTask({ date: selectedDate, id: task.id }))
              }
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              X
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
