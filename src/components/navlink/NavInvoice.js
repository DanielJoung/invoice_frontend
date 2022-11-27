import React from "react";
import { NavLink } from "react-router-dom";

function NavInvoice() {
  return (
    <nav id="regNav">
      <NavLink to="/create/invoice">Create Invoice</NavLink>
      <NavLink to="/show/invoice">Show Invoice</NavLink>
    </nav>
  );
}

export default NavInvoice;
