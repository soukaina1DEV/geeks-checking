import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Search />
        <NavBar />
        <Routes>
          <Route path="/" element={<Gallery category="mountains" />} />
          <Route path="/mountain" element={<Gallery category="mountains" />} />
          <Route path="/beaches" element={<Gallery category="beaches" />} />
          <Route path="/birds" element={<Gallery category="birds" />} />
          <Route path="/food" element={<Gallery category="food" />} />
          <Route path="/search/:query" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
