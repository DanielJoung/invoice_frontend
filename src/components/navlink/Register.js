import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <nav id="regNav">
      <NavLink to="/user/register">Salesperson Register</NavLink>
      <NavLink to="/company/register">Company Register</NavLink>
    </nav>
  );
}

export default Register;
