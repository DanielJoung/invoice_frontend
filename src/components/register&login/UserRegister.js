import React, { useState } from "react";

function UserReigster(props) {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const searchBar = (e) => {
    e.preventDefault();
    const li = document.querySelector("#compName").innerHTML;
    document.querySelector("#company").value = li;
    console.log(li);
  };

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
              onChange={handleChange}
            />
            <ul>
              {word === "" ? (
                <li></li>
              ) : (
                props.company
                  .filter((comp) => comp.companyname.includes(word))
                  .map((comp, key) => (
                    <a key={comp.id}>
                      <li id="compName" onClick={searchBar}>
                        {comp.companyname}
                      </li>
                    </a>
                  ))
              )}
            </ul>
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
