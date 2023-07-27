import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./GestionRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { deconnexion } from "./Redux/Actions/ArgenBankActions";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import User from "./Page/User";
import Header from "./component/Header";
import { isTokenExpired } from "./Redux/selectors/is-authenticated";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    // check dans localstorge si j'ai un token
    if (tokenStorage) {
      if (isTokenExpired(tokenStorage)) {
        localStorage.clear();
      } else {
        dispatch({ type: "SET_TOKEN", payload: tokenStorage });
      }
    }
  }, []);

  return (
    <div className="App">
      <Header />
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
      </main>
    </div>
  );
};

export default App;
