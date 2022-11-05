import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/register/login/Login";
import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CompanyReigster from "./components/register/login/CompanyRegister";

function App() {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    companyname: "",
    email: "",
    password: "",
    address: "",
    companyphone: "",
  });

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
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        navigate("login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/company/register"
          element={<CompanyReigster registerCompany={registerCompany} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
