import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import CompanyLogin from "./components/register&login/CompanyLogin";
import CompanyReigster from "./components/register&login/CompanyRegister";
import UserReigster from "./components/register&login/UserRegister";
import UserLogin from "./components/register&login/UserLogin";
import "bulma/css/bulma.min.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);

  const getCompany = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/company/search",
        {
          credentials: "include",
        }
      )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return [];
          }
        })
        .then((data) => {
          setCompany(data.data);
        });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(company[0]["companyname"]);
    company.filter((comp) => comp["companyname"].includes(e.target.value));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
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
        console.log("login");
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
        process.env.REACT_APP_BACKEND_URL + "/users/register",
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
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.json());
      if (res.status === 201) {
        console.log("register");
        getCompany();
        navigate("/login");
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
      console.log(res.status);
      if (res.status === 200) {
        console.log("login");
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
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.json());
      if (res.status === 201) {
        console.log("register");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/company/register"
          element={<CompanyReigster registerCompany={registerCompany} />}
        />
        <Route
          path="/user/register"
          element={
            <UserReigster
              registerUser={registerUser}
              handleChange={handleChange}
              company={company}
            />
          }
        />
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
      </Routes>
    </div>
  );
}

export default App;
