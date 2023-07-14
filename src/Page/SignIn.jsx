import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connexion } from "../Redux/Actions/ArgenBankActions";
import argentBankLogo from "../asset/argentBankLogo.png";
import { Link, Navigate } from "react-router-dom";
import User from "./User";

const SignIn = () => {
  const state = useSelector((state) => state);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleConnexion = () => {
    dispatch(connexion(userName, password));
  };

  if (state.token || localStorage.getItem("token")) {
    return <Navigate to="/user" />;
  }

  return (
    <div className="signIn">
      <nav className="main-nav">
        <Link className="main-nav-logo" to={`/`}>
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to={`/signIn`}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link className="main-nav-item" to={`/user`}>
              <button
                type="button"
                className="sign-in-button"
                onClick={handleConnexion}
              >
                Sign In
              </button>
            </Link>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default SignIn;
