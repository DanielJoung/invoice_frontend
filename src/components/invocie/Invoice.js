import React, { useState } from "react";
import InvoiceForm from "../ui/InvoiceForm";

function Invoice(props) {
  // console.log(props.users);
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");
  const [price, setPrice] = useState(0);
  const [invoice, setInvoice] = useState({
    product: props.users.product,
    case: 0,
    total_case: 0,
    balance: 0,
    total_price: 0,
    created_at: "",
  });

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handlePrice = (e) => {
    const prodCase = document.querySelector(".prodCase");
    const priceProd = document.querySelector(".priceProd");
    const totalPrice = document.querySelector(".totalPrice");
    const { id, value } = e.target;
    // console.log(typeof e.target.value);
    for (let i in props.users) {
      const prod = props.users["product"];
      for (let j of prod) {
        if (j["productname"] === e.target.value) {
          priceProd.innerHTML = j["price"];

          // console.log(typeof priceProd.innerHTML);
        }
      }
      if (e.target.className === "prodCase") {
        totalPrice.innerHTML =
          Number(e.target.value) * Number(priceProd.innerHTML);
      }
      // console.log(priceProd.innerHTML);
    }

    setPrice((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const searchBar = (e) => {
    e.preventDefault();
    console.log(e.target);
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
      // console.log(storeName);
      for (let j of storeName) {
        if (e.target.innerText === j["storename"]) {
          // console.log(j["storephone"]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/invoices/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product: invoice.product,
            case: invoice.case,
            total_case: invoice.total_case,
            balance: invoice.balance,
            total_price: invoice.total_price,
            created_at: invoice.created_at,
          }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.status === 201) {
        props.createInvoice(data);
      }
      setInvoice({
        product: props.users.product,
        case: 0,
        total_case: 0,
        balance: 0,
        total_price: 0,
        created_at: "",
      });

      setInvoice({});
    } catch (err) {
      console.log(err);
    }
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
                  <a id="compName">{store.storename}</a>
                </li>
              ))
          )}
        </ul>
      </form>

      <div className="address">
        <div id="compAddress">
          <p>From:</p>
          <p>{localStorage.getItem("usercompname")}</p>
          <p>{localStorage.getItem("compaddress")}</p>
          <p>{localStorage.getItem("compphone")}</p>
        </div>
        <div id="store">
          <p>To:</p>
          <p id="storename"></p>
          <p id="storeaddress"></p>
          <p id="storephone"></p>
        </div>
      </div>

      {/* <ul id="searchProd">
        {letter === "" ? (
          <li></li>
        ) : (
          props.users.product
            .filter((prod) => prod.productname.includes(letter))
            .map((prod, key) => (
              <li key={prod.id} onClick={searchProduct}>
                <a>{prod.productname}</a>
              </li>
            ))
        )}
      </ul> */}
      <form onSubmit={handleSubmit}>
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
                <input
                  id="invoicetd"
                  className="nameProd"
                  type="text"
                  onChange={handlePrice}
                />
              </td>

              <td>
                <input
                  id="invoicetd"
                  type="number"
                  className="prodCase"
                  onChange={handlePrice}
                />
              </td>
              <td className="priceProd" onChange={handlePrice}></td>
              <td
                id="td-item"
                className="totalPrice"
                onChange={handlePrice}
              ></td>
            </tr>
            <tr className="copyTr">
              <td>
                <input
                  id="invoicetd"
                  className="nameProd"
                  type="text"
                  onChange={handlePrice}
                />
              </td>

              <td>
                <input
                  id="invoicetd"
                  type="number"
                  className="prodCase"
                  onChange={handlePrice}
                />
              </td>
              <td className="priceProd" onChange={handlePrice}></td>
              <td
                id="td-item"
                className="totalPrice"
                onChange={handlePrice}
              ></td>
            </tr>
            <tr className="copyTr">
              <td>
                <input
                  id="invoicetd"
                  className="nameProd"
                  type="text"
                  onChange={handlePrice}
                />
              </td>

              <td>
                <input
                  id="invoicetd"
                  type="number"
                  className="prodCase"
                  onChange={handlePrice}
                />
              </td>
              <td className="priceProd" onChange={handlePrice}></td>
              <td
                id="td-item"
                className="totalPrice"
                onChange={handlePrice}
              ></td>
            </tr>
          </tbody>
        </table>
        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Invoice;
