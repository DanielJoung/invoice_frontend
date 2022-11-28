import React, { useState } from "react";
import InvoiceForm from "../ui/InvoiceForm";

function Invoice(props) {
  const product = props.users.product;
  // console.log(product);
  const [word, setWord] = useState("");
  const [quantity, setQuantity] = useState([]);
  const [invoice, setInvoice] = useState({
    product: product,
    user: "",
    case: 0,
    balance: 0,
    user: localStorage.getItem("username"),
  });

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleCase = (e) => {
    const prodCase = document.querySelectorAll(".prodCase");
    const { id, value } = e.target;
    let num = 0;
    let balance = 0;
    prodCase.forEach((prod) => {
      num += Number(prod.value);
      balance += Number(prod.value) * Number(prod.id);
    });
    // console.log(balance.toFixed(2));
    invoice.case = num;
    invoice.balance = balance.toFixed(2);

    setQuantity((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };
  // const storeInfo = "";
  const searchBar = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const company = document.querySelector("#company");
    const searchUl = document.querySelector("#searchUl");
    const storename = document.querySelector("#storename");
    const storeaddress = document.querySelector("#storeaddress");
    const storephone = document.querySelector("#storephone");
    company.value = e.target.innerText;
    storename.innerHTML = "Store: " + e.target.innerText;
    for (let i in props.users) {
      let storeName = props.users["store"];
      for (let j of storeName) {
        if (e.target.innerText === j["storename"]) {
          storeaddress.innerHTML = "Address: " + j["address"];
          storephone.innerHTML = "Phone: " + j["storephone"];
        }
      }
    }
    // storeInfo = props.store;

    if (company.value === e.target.innerText) {
      for (let i of searchUl.children) {
        for (let j of i.children) {
          j.innerText = "";
        }
      }
    }
  };
  console.log(invoice);

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
            store: props.store,
            case: invoice.case,
            balance: invoice.balance,
            user: invoice.user,
          }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.status === 201) {
        props.createInvoice(data);
        props.getInvoice();
        console.log(data);
      }
      setInvoice({
        product: props.users.product,
        case: 0,
        balance: 0,
        user: localStorage.getItem("username"),
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(invoice);

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
          <p>Comapny: {localStorage.getItem("usercompname")}</p>
          <p>Address: {localStorage.getItem("compaddress")}</p>
          <p>Phone: {localStorage.getItem("compphone")}</p>
        </div>
        <div id="store">
          <p>To:</p>
          <p id="storename"></p>
          <p id="storeaddress"></p>
          <p id="storephone"></p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Discount</td>
              <td>Case</td>
            </tr>
          </thead>
          <tbody className="tbody">
            {invoice.product.map((prod, i) => {
              return (
                <tr key={prod.id} className="tr">
                  <td id="td-item">{prod.productname}</td>
                  <td id="td-item">${prod.price}</td>
                  <td id="td-item">{prod.discount}%</td>
                  <td id="td-item">
                    <input
                      className="prodCase"
                      id={prod.price * (1 - prod.discount / 100)}
                      type="number"
                      onChange={handleCase}
                      // value={prod.case}
                    />
                  </td>
                  {/* <td id="td-item">${prod.balance}</td> */}
                </tr>
              );
            })}
            <tr className="invoiceInfo">
              <td>Rep: {invoice.user}</td>
              <td className="totalCase">Total Case: {invoice.case} case</td>
              <td className="balance">Balance: ${invoice.balance}</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons" id="register">
          <button className="is-primary is-rounded button">Create</button>
        </div>
      </form>
    </>
  );
}

export default Invoice;
