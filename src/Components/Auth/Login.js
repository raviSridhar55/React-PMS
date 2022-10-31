import React from "react";
import { Link } from "react-router-dom";
import NavBarGuest from "../Layout/NavBarGuest";
import loginGIF from "../img/login.gif";

const Login = () => {
  return (
    <>
      <div className="login-page">
        <NavBarGuest />
        <secttion className="login-card-section">
          <div className="login-card">
            <div className="login-card-gif">
              <img src={loginGIF} alt="login-gif" />
            </div>
            <div className="login-card-main">
              <form>
                <div className="login-head">
                  user <span style={{ color: "#377dff" }}>login</span>
                </div>
                <div className="form-container1">
                  <input type="email" className="input" placeholder="Email" />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
              <p style={registerLink}>
                New User?{" "}
                <Link to="/register" style={{ color: "#377dff" }}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </secttion>
      </div>
    </>
  );
};

export default Login;

const registerLink = {
  color: "#111",
  textAllign: "center",
};
