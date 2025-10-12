// Exercise 1 : React Error Boundary Simulation

import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h3>
        Click on the numbers to increase the counters. <br />
        The counter is programmed to throw error when it reaches 5. This
        simulates a JavaScript error in a component.
      </h3>

      <hr />

      {/* -------- Simulation 1 -------- */}
      <h4>Simulation 1: One ErrorBoundary wrapping two counters</h4>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* -------- Simulation 2 -------- */}
      <h4>Simulation 2: Each counter has its own ErrorBoundary</h4>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      {/* -------- Simulation 3 -------- */}
      <h4>Simulation 3: No ErrorBoundary</h4>
      <BuggyCounter />
      <BuggyCounter />
    </div>
  );
}

export default App;



// Exercise 2 : Lifecycle

import React from "react";
import FavoriteColor from "./FavoriteColor";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <FavoriteColor />
    </div>
  );
}

export default App;



// Exercise 3 : Lifecycle #2

import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        {myHeader}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;
