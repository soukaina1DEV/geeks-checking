import React from "react";
import { connect } from "react-redux";
import { setSelectedDate } from "../redux/actions";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select a day:</h3>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
});

export default connect(mapStateToProps, { setSelectedDate })(DatePicker);
