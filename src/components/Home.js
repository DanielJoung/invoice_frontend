import React from "react";
import UserLogin from "./register&login/UserLogin";

function Home() {
  return (
    <div id="home">
      {localStorage.getItem("companyname") ||
      localStorage.getItem("username") ? (
        ""
      ) : (
        <p>
          If you want to Login <a href="/login">Click</a>
        </p>
      )}
      <br></br>
      {localStorage.getItem("companyname") ||
      localStorage.getItem("username") ? (
        ""
      ) : (
        <p>
          If you don't have account please <a href="/register">Register</a>{" "}
          first
        </p>
      )}
    </div>
  );
}

export default Home;
