import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CompanyReigster from "./components/company/CompanyRegister";

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
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/company/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyname: "",
          email: "",
          password: "",
          address: "",
          companyphone: "",
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <Routes>
        <Route path="/company/register" element={<CompanyReigster />} />
      </Routes>
    </div>
  );
}

export default App;
