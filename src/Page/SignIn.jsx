import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setBearer, {
  connexion,
  getUserName,
} from "../Redux/Actions/ArgenBankActions";
import { isAuthenticated } from "../Redux/selectors/is-authenticated";
import { Link, Navigate } from "react-router-dom";

const SignIn = () => {
  const state = useSelector((state) => state);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userAuthenticated = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  const handleConnexion = () => {
    dispatch(connexion(userName, password));
  };

  if (userAuthenticated) {
    if (state.token) {
      setBearer(state.token);
    } else {
      setBearer(localStorage.getItem("token"));
    }
    dispatch(getUserName());
    return <Navigate to="/user" />;
  }

  return (
    <div className="signIn">
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
