import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.scss";
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="loginContainer">
      <img src="./assets/logo.png" alt="logo" className="logo" />
      <div className="loginWrapper">
        <figure className="heroWrapper">
          <img src="./assets/hero.png" alt="hero" />
        </figure>
        <div className="formWrapper">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form action="">
            <input type="email" placeholder="Email" />
            <br />
            <div className="inner_box">
              <input type={show ? "text" : "password"} placeholder="Password" />
              <span onClick={() => setShow(!show)}>
                {show ? "HIDE" : "SHOW"}
              </span>
            </div>
            <br />
            <p className="pswd">Forgot PASSWORD?</p>
            <NavLink to="/Users" style={{ textDecoration: "none" }}>
              <button>LOG IN</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
