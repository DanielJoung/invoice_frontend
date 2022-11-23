import React from "react";
import { NavLink } from "react-router-dom";

function Show() {
  return (
    <nav id="regNav">
      <NavLink to="/products/all_item">My Product</NavLink>
      <NavLink to="/stores/all_store">My Store</NavLink>
    </nav>
  );
}

export default Show;
