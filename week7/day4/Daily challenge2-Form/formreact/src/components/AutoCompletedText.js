import React, { Component } from "react";
import countries from "./countries";
import "./AutoCompletedText.css";

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="suggestions-list">
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.suggestionSelected(item)}>
            <span className="bar"></span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text, suggestions } = this.state;
    return (
      <div className="auto-complete-container">
        <h2>Auto Completed</h2>
        <input
          type="text"
          value={text}
          onChange={this.onTextChanged}
          placeholder="Start typing a country..."
        />
        {this.renderSuggestions()}
        <div className="suggestions-count">
          Suggestions: {suggestions.length}
        </div>
      </div>
    );
  }
}

export default AutoCompletedText;
