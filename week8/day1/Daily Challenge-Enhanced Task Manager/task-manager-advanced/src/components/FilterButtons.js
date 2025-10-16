import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterButtons = () => {
  const { state, dispatch } = useContext(TaskContext);

  const filters = ["ALL", "ACTIVE", "COMPLETED"];

  return (
    <div style={{ marginBottom: "20px" }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: filter })}
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: state.filter === filter ? "#007bff" : "#e0e0e0",
            color: state.filter === filter ? "white" : "black",
            cursor: "pointer",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
