import React from "react";
import argentBankLogo from "../asset/argentBankLogo.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deconnexion } from "../Redux/Actions/ArgenBankActions";

function Header() {
  const store = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleDeconnexion = () => {
    dispatch(deconnexion());
  };

  return (
    <div>
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
          {!window.location.toString().includes("user") ? (
            <Link className="main-nav-item" to={`/signIn`}>
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          ) : (
            <Link className="main-nav-item" to={`/`}>
              <i className="fa fa-sign-out"></i>
              <button
                type="button"
                className="sign-out-button"
                onClick={handleDeconnexion}
              >
                Sign Out
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
