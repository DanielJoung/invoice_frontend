import React from "react";

function CompanyReigster(props) {
  return (
    <>
      <h1 id="tag">Reigster</h1>
      <form onSubmit={props.registerCompany}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Company Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Company Name"
              name="companyname"
              id="companyname"
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Company Phone
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="tel"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="companyphone"
              id="companyphone"
            />
          </div>
        </div>
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
        <div id="register">
          <label className="label" htmlFor="name">
            Address{" "}
          </label>
          <textarea
            className="textarea"
            placeholder="e.g. 44-44 444th st..."
            name="address"
            id="address"
          ></textarea>
        </div>
        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default CompanyReigster;
