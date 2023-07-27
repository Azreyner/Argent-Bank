import React, { useState, useEffect } from "react";
import argentBankLogo from "../asset/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateName, getUserName } from "../Redux/Actions/ArgenBankActions";
import Header from "../component/Header";

const User = () => {
  const [editNameIsClicked, setEditNameIsClicked] = useState(false);
  const store = useSelector((state) => state);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const dispatch = useDispatch();

  const updateNomPrenom = () => {
    dispatch(updateName(prenom, nom));
  };

  useEffect(() => {
    dispatch(getUserName());
  }, []);

  //console.log(editNameIsClicked);

  return (
    <div className="user">
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {store.firstName && store.firstName + " " + store.lastName}
          </h1>
          {!editNameIsClicked ? (
            <button
              className="edit-button"
              onClick={() => setEditNameIsClicked(true)}
            >
              Edit Name
            </button>
          ) : (
            <div className="edition">
              <div className="edition__champs">
                <input
                  type="text"
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <input type="text" onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className="edition__boutons">
                <button
                  type="button"
                  className="sign-in-button"
                  onClick={updateNomPrenom}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="sign-in-button"
                  onClick={() => setEditNameIsClicked(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default User;
