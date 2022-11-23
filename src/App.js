import "./App.css";
import Home from "./components/Home";
import Header from "./components/navlink/Header";
import Create from "./components/navlink/Create";
import Show from "./components/navlink/Show";
// Invocie
import Invoice from "./components/invocie/Invoice";
// login, register
import Register from "./components/navlink/Register";
import Login from "./components/navlink/Login";
import CompanyLogin from "./components/register&login/CompanyLogin";
import CompanyReigster from "./components/register&login/CompanyRegister";
import UserReigster from "./components/register&login/UserRegister";
import UserLogin from "./components/register&login/UserLogin";
// product
import CreateProduct from "./components/product/CreateProduct";
import ShowProduct from "./components/product/ShowProduct";
import EditProduct from "./components/product/EditProduct";
//store
import CreateStore from "./components/store/CreateStore";
import EditStore from "./components/store/EditStore";
import ShowStore from "./components/store/ShowStore";
import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [currentStoreId, setCurrentStoreId] = useState("");
  const [users, setUsers] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const setId = (id) => {
    setCurrentId(id);
  };
  const setStoreId = (id) => {
    setCurrentStoreId(id);
  };
  // console.log(currentStoreId);

  // console.log(users);

  const getCompany = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/company/search_company",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setCompany(data.data);
      // console.log(data, "company");
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/user/search_user",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setUsers(data);
      // console.log(data, "company");
    } catch (err) {
      console.log(err);
    }
  };

  const getProduct = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/products/all_item",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setProducts(data.data);
      // console.log(data.data);
    } catch (err) {
      console.log(err);
    }
    // console.log(products);
  };

  const getStore = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/stores/all_store",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setStores(data.data);
      // console.log(data.data);
    } catch (err) {
      console.log(err);
    }
    // console.log(products);
  };

  const getInvoice = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/invoices/all_invoice",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setInvoices(data.data);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // login register
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/user/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("usercompname", data.data.company.companyname);
        localStorage.setItem("compaddress", data.data.company.address);
        localStorage.setItem("compphone", data.data.company.companyphone);
        console.log(data);
        // getProduct();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company: e.target.company.value,
            email: e.target.email.value,
            password: e.target.password.value,
            username: e.target.username.value,
          }),
        }
      );
      const data = await res.json();
      console.log(data.data);
      if (res.status === 201) {
        console.log("register");
        getCompany();
        navigate("user/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginCompany = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/company/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("companyname", data.data.companyname);

        console.log(data);
        getProduct();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerCompany = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/company/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyname: e.target.companyname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            companyphone: e.target.companyphone.value,
          }),
        }
      );
      console.log(res.json());
      if (res.status === 201) {
        console.log("register");
        navigate("company/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // product
  const createProduct = (product) => {
    const createProducts = [...products, product];
    setProducts(createProducts);
  };

  const deleteProduct = (id) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/products/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        const findIndex = products.findIndex((product) => product.id === id);
        const copyProduct = [...products];
        copyProduct.splice(findIndex, 1);
        if (res.status === 200) {
          setProducts(products);
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const updateProduct = (product) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/products/" + currentId, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        if (res.status === 200) {
          return await res.json();
        }
      })
      .then((data) => {
        console.log(data, "update data");
        navigate("/show/products");
      });
  };

  //store
  const createStore = (store) => {
    const createStore = [...stores, store];
    setStores(createStore);
    // console.log(createStore);
  };

  const deleteStore = (id) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/stores/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        const findIndex = stores.findIndex((store) => store.id === id);
        const copyStore = [...stores];
        copyStore.splice(findIndex, 1);
        if (res.status === 200) {
          setStores(stores);
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const updateStore = (store) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/stores/" + currentStoreId, {
      method: "PUT",
      body: JSON.stringify(store),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        if (res.status === 200) {
          return await res.json();
        }
      })
      .then((data) => {
        console.log(data, "update data");
        navigate("/show/stores");
      });
  };

  //invoice
  const createInvoice = (invoice) => {
    const createInvoices = [...invoices, invoice];
    setProducts(createInvoices);
  };

  useEffect(() => {
    getUser();
    getCompany();
    getProduct();
    getStore();
    getInvoice();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
        {/* Register */}
        <Route
          path="/company/register"
          element={<CompanyReigster registerCompany={registerCompany} />}
        />
        <Route
          path="/user/register"
          element={
            <UserReigster registerUser={registerUser} company={company} />
          }
        />

        {/* Login */}
        <Route
          path="/company/login"
          element={<CompanyLogin loginCompany={loginCompany} />}
        />
        <Route
          path="/user/login"
          element={<UserLogin loginUser={loginUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* product */}
        <Route
          path="/products/create"
          element={
            <CreateProduct
              createProduct={createProduct}
              products={products}
              // handleChange={handleChange}
              company={company}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/products/all_item"
          element={
            <ShowProduct
              products={products}
              deleteProduct={deleteProduct}
              currentId={currentId}
              navigate={navigate}
              setId={setId}
            />
          }
        />
        <Route
          path="/edit/product/:id"
          element={
            <EditProduct
              products={products}
              updateProduct={updateProduct}
              currentId={currentId}
              setId={setId}
            />
          }
        />
        {/* store */}
        <Route
          path="/stores/create"
          element={
            <CreateStore
              createStore={createStore}
              stores={stores}
              // handleChange={handleChange}
              company={company}
              setStores={setStores}
            />
          }
        />
        <Route
          path="/stores/all_store"
          element={
            <ShowStore
              stores={stores}
              deleteStore={deleteStore}
              currentStoreId={currentStoreId}
              navigate={navigate}
              setStoreId={setStoreId}
            />
          }
        />
        <Route
          path="/edit/store/:id"
          element={
            <EditStore
              stores={stores}
              updateStore={updateStore}
              currentStoreId={currentStoreId}
              setStoreId={setStoreId}
            />
          }
        />
        <Route
          path="/invoice"
          element={<Invoice users={users} createInvoice={createInvoice} />}
        />
      </Routes>
    </div>
  );
}

export default App;
