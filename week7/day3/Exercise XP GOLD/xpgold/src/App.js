import React, { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <ErrorBoundary>
          <button
            onClick={() => {
              throw new Error("Something went wrong!");
            }}
          >
            Occur an error
          </button>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
