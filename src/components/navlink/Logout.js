import React from "react";

function Logout() {
  const handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <>
      <a onClick={handleClick}>Logout</a>
    </>
  );
}

export default Logout;
