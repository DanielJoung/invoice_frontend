import React from "react";

function CompanyLogin(props) {
  return (
    <div id="login-register">
      <h1 id="tag">Login</h1>
      <p id="error">{props.error}</p>
      <form onSubmit={props.loginCompany}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Email
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Company Email"
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
    </div>
  );
}

export default CompanyLogin;
