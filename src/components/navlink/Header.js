import React from "react";
import Logout from "./Logout";
import { NavLink, Link } from "react-router-dom";

function Header() {
  let activeStyle = {
    color: "white",
  };

  const companyname = localStorage.getItem("companyname");
  const username = localStorage.getItem("username");
  const usercompname = localStorage.getItem("usercompname");
  return (
    <>
      <nav>
        <Link to="/">Invoice Maker</Link>

        {companyname || username ? (
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

        {companyname ? <NavLink to="/create">Create</NavLink> : ""}
        {companyname ? <NavLink to="/show">Company Info</NavLink> : ""}
        {username ? <NavLink to="/invoice">Invoice</NavLink> : ""}
      </nav>
      {/* <div>
        {!companyname ? "" : <p>welcome {companyname}</p>}
        {!username ? (
          ""
        ) : (
          <p>
            <span>{usercompname} company</span>
            <br></br>
            <span>welcome {username}</span>
          </p>
        )}
      </div> */}
    </>
  );
}

export default Header;
