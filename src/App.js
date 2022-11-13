import "./App.css";
import Home from "./components/Home";
import Header from "./components/navlink/Header";
import Register from "./components/navlink/Register";
import Login from "./components/navlink/Login";
import CompanyLogin from "./components/register&login/CompanyLogin";
import CompanyReigster from "./components/register&login/CompanyRegister";
import UserReigster from "./components/register&login/UserRegister";
import UserLogin from "./components/register&login/UserLogin";
import CreateProduct from "./components/product/CreateProduct";
import ShowProduct from "./components/product/ShowProduct";
import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [products, setProducts] = useState([]);
  // console.log(products);
  const getCompany = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/company/search",
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
      console.log(res.status);
      if (res.status === 200) {
        // console.log("login");
        navigate("/");
        getProduct();
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
      // console.log(res.status);
      const data = await res.json();
      if (res.status === 200) {
        // console.log("login", data.data.company);
        localStorage.setItem("companyname", data.data.companyname);
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

  const createProduct = (product) => {
    const createProducts = [...products, product];
    // console.log(createDog);
    setProducts(createProducts);
    // console.log(setProducts(createDog));
    // console.log(products);
  };

  useEffect(() => {
    getCompany();
    getProduct();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
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
          element={<UserLogin loginCompany={loginUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Product */}
        <Route
          path="/create/product"
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
          path="/show/products"
          element={<ShowProduct products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
