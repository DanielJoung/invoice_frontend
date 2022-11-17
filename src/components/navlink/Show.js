import React from "react";
import { NavLink } from "react-router-dom";

function Show() {
  return (
    <nav id="regNav">
      <NavLink to="/show/products">My Product</NavLink>
      <NavLink to="/show/stores">My Store</NavLink>
    </nav>
  );
}

export default Show;
