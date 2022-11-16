import React from "react";
import { NavLink } from "react-router-dom";

function Create() {
  return (
    <nav id="regNav">
      <NavLink to="/products/create">Create Product</NavLink>
      <NavLink to="/stores/create">Create Store</NavLink>
    </nav>
  );
}

export default Create;
