import React from "react";

const CardSection = ({ icon, title, text }) => {
  return (
    <div className="container my-4 p-3 border rounded bg-light">
      <div className="row align-items-center">
        <div className="col-md-2 text-center text-danger">
          <i className={`fa-solid fa-${icon} fa-4x`}></i>
        </div>
        <div className="col-md-10">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
