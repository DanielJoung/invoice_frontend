import React from "react";
import Logout from "./Logout";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const companyname = localStorage.getItem("companyname");
  const username = localStorage.getItem("username");
  const usercompname = localStorage.getItem("usercompname");
  return (
    <>
      <nav id="navHeader">
        <Link to="/" className="headerLink">
          Invoice Maker
        </Link>

        {companyname ? (
          <NavLink to="/show" className="headerLink">
            Company Info
          </NavLink>
        ) : (
          ""
        )}
        {username ? (
          <a href="/invoice" className="headerLink">
            Invoice
          </a>
        ) : (
          ""
        )}
        {companyname ? (
          <NavLink to="/create" className="headerLink">
            Create
          </NavLink>
        ) : (
          ""
        )}
        {companyname || username ? <Logout /> : ""}
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
