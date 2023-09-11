import React from "react";
import { useState } from "react";
import "../Style/layout/login-register.css";
import LoginInfo from "../components/Login-Register/LoginInfo";
import SignUpInfo from "../components/Login-Register/SignUpInfo";
const LoginRegisterPage = () => {
  const [isInfoShow, setInfoShow] = useState(1);
  const handleShow = (index) => {
    setInfoShow(index);
  };
  return (
    <>
      <div className="login-sign-up ">
        <div className="container">
          <div className="login-sign-up-wrapper">
            <div className="login-sign-up-header">
              <button
                className={isInfoShow === 1 ? "login-btn active" : "login-btn"}
                onClick={() => {
                  handleShow(1);
                }}
              >
                Login
              </button>
              <button
                className={isInfoShow === 2 ? "login-btn active" : "login-btn"}
                onClick={() => {
                  handleShow(2);
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="login-sign-up-content">
              <div
                className={
                  isInfoShow === 1 ? "login-content active" : "login-content"
                }
              >
                <LoginInfo />
              </div>
              <div
                className={
                  isInfoShow === 2 ? "login-content active" : "login-content"
                }
              >
                <SignUpInfo />
              </div>         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterPage;
