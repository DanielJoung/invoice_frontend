import React, { useState } from "react";

function Invoice(props) {
  // console.log(props.users);
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const searchBar = (e) => {
    e.preventDefault();
    const company = document.querySelector("#company");
    const searchUl = document.querySelector("#searchUl");
    const storename = document.querySelector("#storename");
    const storeaddress = document.querySelector("#storeaddress");
    const storephone = document.querySelector("#storephone");
    company.value = e.target.innerText;
    storename.innerHTML = e.target.innerText;
    // console.log((storename.innerText = e.target.innerText));
    for (let i in props.users) {
      let storeName = props.users["store"];
      for (let j of storeName) {
        console.log(j["storename"]);
        if (e.target.innerText === j["storename"]) {
          storeaddress.innerHTML = j["address"];
          storephone.innerHTML = j["storephone"];
        }
      }
    }
    if (company.value === e.target.innerText) {
      for (let i of searchUl.children) {
        for (let j of i.children) {
          j.innerText = "";
        }
      }
    }
  };

  // const tr = document.querySelector(".copyTr");
  const handleInput = () => {
    let tbody = document.querySelector(".tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `<td >
      <input id="invoicetd" />
    </td>
    <td >
      <input id="invoicetd" />
    </td>
    <td >
      <input id="invoicetd" />
    </td>
    <td id="td-item">

    </td>`;

    tbody.appendChild(tr);
    // console.log(tbody);
  };

  return (
    <>
      <form id="searchbar">
        <div className="field" id="register">
          <input
            type="text"
            className="input"
            onChange={handleChange}
            id="company"
            placeholder="Search Store..."
          />
        </div>
        <ul id="searchUl">
          {" "}
          {word === "" ? (
            <li></li>
          ) : (
            props.users.store
              .filter((store) => store.storename.includes(word))
              .map((store, key) => (
                <li key={store.id} onClick={searchBar}>
                  <a id="compName" href={() => false}>
                    {store.storename}
                  </a>
                </li>
              ))
          )}
        </ul>
      </form>

      <div id="address">
        <div id="compAddress">
          <p>{localStorage.getItem("usercompname")}</p>
          <p>{localStorage.getItem("compaddress")}</p>
          <p>{localStorage.getItem("compphone")}</p>
        </div>
        <div id="store">
          <p id="storename" onClick={searchBar}></p>
          <p id="storeaddress" onClick={searchBar}></p>
          <p id="storephone" onClick={searchBar}></p>
        </div>
      </div>

      <form>
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Case</td>
              <td>Price</td>
              <td>Total Price</td>
              {/* <td>Add</td> */}
              {/* <td>Product</td> */}
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="copyTr">
              <td>
                <input id="invoicetd" />
              </td>
              <td>
                <input id="invoicetd" />
              </td>
              <td>
                <input id="invoicetd" />
              </td>
              <td id="td-item"></td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="buttons" id="register">
        <button className="is-primary is-small button" onClick={handleInput}>
          Add Row
        </button>
      </div>
    </>
  );
}

export default Invoice;
