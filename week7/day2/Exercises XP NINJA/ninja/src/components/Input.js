import React from "react";

function Input({ label, name, type, value, onChange, error }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;
