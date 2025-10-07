// import logo from './logo.svg';
// import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/





// Exercise 1: with JSX

import React from 'react'

function App(){
const message = <p>Hello World!</p>;
const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;

return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    {message}
    {myelement}
    <p>React is {sum} times better with JSX</p>
  </div>
);
}

export default App;


Exercise 2 : Object

import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;


// Exercise 3 : HTML Tags in React

import React from "react";
import Exercise from "./Exercise3";

function App() {
  return (
    <div>
      <Exercise />
    </div>
  );
}

export default App;
