import React, { Component } from "react";
import quotes from "./quotes";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      colors: [
        "#007B83",
        "#E74C3C",
        "#27AE60",
        "#8E44AD",
        "#F39C12",
        "#16A085",
      ],
    };
  }

  getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColor =
      this.state.colors[Math.floor(Math.random() * this.state.colors.length)];

    // pick a new quote different from current
    while (quotes[randomIndex].quote === this.state.quote) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }

    document.body.style.backgroundColor = randomColor;

    this.setState({
      quote: quotes[randomIndex].quote,
      author: quotes[randomIndex].author,
      color: randomColor,
    });
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#004f61";
  }

  render() {
    const { quote, author, color } = this.state;

    return (
      <div className="quote-container" style={{ color: color || "#2c3e50" }}>
        <div className="quote-box">
          <h2 className="quote">"{quote}"</h2>
          <p className="author">- {author} -</p>
          <button
            className="new-quote-btn"
            style={{ backgroundColor: color || "#2c3e50" }}
            onClick={this.getRandomQuote}
          >
            New quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
