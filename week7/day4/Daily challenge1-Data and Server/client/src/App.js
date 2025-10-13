import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    post: "",
    response: "",
  };

  async componentDidMount() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    this.setState({ message: data.message });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });

    const body = await response.json();
    this.setState({ response: body.message });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{this.state.message}</h2>

        <form onSubmit={this.handleSubmit}>
          <p>Post to Server:</p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        <p style={{ marginTop: "20px", color: "blue" }}>
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
