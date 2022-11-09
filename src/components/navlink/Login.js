import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <nav id="regNav">
      <NavLink to="/user/login">Salesperson Login</NavLink>
      <NavLink to="/company/login">Company Login</NavLink>
    </nav>
  );
}

export default Login;
