import React, { useState } from "react";
import InvoiceForm from "../ui/InvoiceForm";

function Invoice(props) {
  // console.log(props.users);
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");
  const [price, setPrice] = useState(0);
  const [invoice, setInvoice] = useState({
    company: props.users.user,
    store: props.users.store,
    product: props.users.product,
    case: "",
    balance: "",
    created_at: "",
  });
  // console.log(invoice.product[0].quantity);
  // console.log(invoice);
  const handleChange = (e) => {
    setWord(e.target.value);
    // console.log(e.target.value);
  };

  const handleProduct = (e) => {
    setLetter(e.target.value);
  };

  const handlePrice = (e) => {
    const { className, value } = e.target;
    setPrice((prevState) => {
      return {
        ...prevState,
        [className]: value,
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

  const searchProduct = (e) => {
    const nameProd = document.querySelector(".nameProd");
    const priceProd = document.querySelector(".priceProd");
    const searchProd = document.querySelector("#searchProd");
    const totalPrice = document.querySelector(".totalPrice");
    const prodCase = document.querySelector(".prodCase");
    const invoicetd = document.querySelector("#invoicetd");
    invoicetd.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
    });
    // const addButton = document.querySelector("#addButton");

    nameProd.value = e.target.innerText;
    // console.log(typeof prodCase.value);
    for (let i in props.users) {
      let prodName = props.users["product"];
      for (let j of prodName) {
        if (e.target.innerText === j["productname"]) {
          priceProd.innerHTML = `$${j["price"]}`;

          prodCase.addEventListener("keypress", (e) => {
            const isNumber = isFinite(e.key);
            // console.log(number);
            if (isNumber) {
              // console.log(number);
              totalPrice.innerHTML = "$" + j["price"] * Number(e.key);
            }
          });
        }
      }
    }

    if (nameProd.value === e.target.innerText) {
      for (let i of searchProd.children) {
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
            company: invoice.company,
            store: invoice.store,
            product: invoice.product,
            case: invoice.case,
            balance: invoice.balance,
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
        company: "",
        store: "",
        product: "",
        case: "",
        balance: "",
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

      <div id="address">
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

      <ul id="searchProd">
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
      </ul>
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
                  onChange={handleProduct}
                  type="text"
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
              <td className="priceProd"></td>
              <td id="td-item" className="totalPrice"></td>
            </tr>

            <tr className="copyTr">
              <td>
                <input
                  id="invoicetd"
                  className="nameProd"
                  onChange={handleProduct}
                  type="text"
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
              <td className="priceProd"></td>
              <td id="td-item" className="totalPrice"></td>
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
