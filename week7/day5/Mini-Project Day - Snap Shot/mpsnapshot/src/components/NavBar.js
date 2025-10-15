import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/mountain">Mountain</NavLink>
      <NavLink to="/beaches">Beaches</NavLink>
      <NavLink to="/birds">Birds</NavLink>
      <NavLink to="/food">Food</NavLink>
    </nav>
  );
}

export default NavBar;
