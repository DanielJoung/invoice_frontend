import React from "react";

function UserReigster(props) {
  const compName = [];
  for (let comp of props.company) {
    compName.push(comp.companyname.toLowerCase());
  }

  // if (props.handleChange === compName.includes(props.handleChange)) {
  //   return compName.includes(props.handleChange);
  // }
  return (
    <>
      <h1 id="tag">Reigster</h1>
      <form onSubmit={props.registerUser}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="username"
              id="username"
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
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Company
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Company Name"
              name="company"
              id="company"
              // onChange={props.handleChange}
            />
            {/* <ul>
              {compName.map((comp, i) => {
                // console.log(comp.match(/[a-z]/g), "comp");
                return <p key={i}>{comp}</p>;
              })}
            </ul> */}
          </div>
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

export default UserReigster;
