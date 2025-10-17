import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../features/planner/plannerSlice";

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.planner.selectedDate);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select a day:</h3>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => dispatch(setSelectedDate(e.target.value))}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default DatePicker;
