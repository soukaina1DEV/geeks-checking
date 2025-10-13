import React, { Component } from "react";
import data from "../data/data.json";

class Example2 extends Component {
  render() {
    const { ProgrammingLanguage, WebDevelopment } = data.Skills;

    return (
      <div style={{ textAlign: "left", margin: "20px" }}>
        <h3>Programming Language</h3>
        <ul>
          {ProgrammingLanguage.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>

        <h3>Web-Based Application Development</h3>
        <ul>
          {WebDevelopment.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
