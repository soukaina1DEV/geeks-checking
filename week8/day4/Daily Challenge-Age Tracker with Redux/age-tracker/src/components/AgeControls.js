import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../features/age/ageSlice";

const AgeControls = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.age.loading);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <button
        onClick={() => dispatch(ageUpAsync())}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Age Up
      </button>

      <button
        onClick={() => dispatch(ageDownAsync())}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Age Down
      </button>
    </div>
  );
};

export default AgeControls;
