import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  let activeStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link to="/">Invoice Maker</Link>
      <NavLink
        to="/register"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Login
      </NavLink>
      <NavLink to="/create/product">Create Product</NavLink>
      <NavLink to="/show/products">My Product</NavLink>
    </nav>
  );
}

export default Header;
