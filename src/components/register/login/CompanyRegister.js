import React from "react";

function CompanyReigster(props) {
  return (
    <>
      <h1 id="tag">Reigster</h1>
      <form onSubmit={props.CompanyReigster}>
        <div className="field" id="register">
          <label className="label" htmlFor="companyname">
            Company Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Company Name"
              name="companyname"
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="companyphone">
            Company Phone
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Company Phone"
              name="companyphone"
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div id="register">
          <label className="label" htmlFor="address">
            Address{" "}
          </label>
          <textarea
            className="textarea"
            placeholder="e.g. 44-44 444th st..."
          ></textarea>
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

export default CompanyReigster;
