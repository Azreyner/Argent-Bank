import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./GestionRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { deconnexion } from "./Redux/Actions/ArgenBankActions";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import User from "./Page/User";
import AuthVerify from "./common/AuthVerify";

const App = () => {
  const dispatch = useDispatch();

  const handleDeconnexion = () => {
    dispatch(deconnexion());
  };

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>

        <AuthVerify logOut={handleDeconnexion} />
      </main>
    </div>
  );
};

export default App;
