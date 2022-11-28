import React, { useState } from "react";

function UserLogin(props) {
  return (
    <>
      <h1 id="tag">Login</h1>
      <p id="error">{props.error}</p>

      <form onSubmit={props.loginUser}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Email
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Password
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
        </div>
        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default UserLogin;
