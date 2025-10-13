import React, { Component } from "react";
import data from "../data/data.json";

class Example3 extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        {data.Experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              margin: "20px auto",
              width: "300px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={exp.logo}
              alt={exp.companyName}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h5>
              <a
                href="#"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {exp.companyName}
              </a>
            </h5>
            <h6>{exp.position}</h6>
            <p>
              {exp.startDate} | {exp.location}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
