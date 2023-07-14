import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const leToken = localStorage.getItem("token");
    console.log("test token expiration");
    if (leToken) {
      const decodedJwt = parseJwt(leToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        console.log("Le token est expiré");
        props.logOut();
      }
    }
  }, [location, props]);

  return;
};

export default AuthVerify;
