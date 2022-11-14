import React from "react";
import Logout from "./Logout";
import { NavLink, Link } from "react-router-dom";

function Header() {
  let activeStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link to="/">Invoice Maker</Link>

      {localStorage.getItem("companyname") ||
      localStorage.getItem("username") ? (
        <Logout />
      ) : (
        <div id="header">
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Register
          </NavLink>
        </div>
      )}

      {localStorage.getItem("companyname") ? (
        <NavLink to="/products/create">Create Product</NavLink>
      ) : (
        ""
      )}

      {localStorage.getItem("companyname") ? (
        <NavLink to="/show/products">My Product</NavLink>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Header;
