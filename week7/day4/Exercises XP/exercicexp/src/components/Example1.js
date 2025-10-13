import React, { Component } from "react";
import data from "../data/data.json";

class Example1 extends Component {
  render() {
    return (
      <div style={{ textAlign: "left", margin: "20px" }}>
        <ul>
          {data.SocialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
