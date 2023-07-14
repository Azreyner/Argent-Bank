import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { logDOM } from "@testing-library/react";
import thunk from "redux-thunk";
import { compose } from "redux";
import setBearer from "../Actions/ArgenBankActions";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  firstName: null,
  lastName: null,
  token: null,
};

/**
 * REDUCER
 * @param {*} state
 * @param {*} action
 * @returns
 */

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CONNEXION":
      localStorage.setItem("token", action.leToken);
      setBearer(action.leToken);
      return { ...state, token: action.leToken };
    case "DECONNEXION":
      localStorage.clear();
      return { ...state, token: null };
    case "GETNAME":
      return { ...state, firstName: action.lePrenom, lastName: action.leNom };
    case "UPDATE":
      return { ...state, firstName: action.lePrenom, lastName: action.leNom };
    default:
      return state;
  }
}

const verificationAPI = (store) => {
  return (next) => {
    return (action) => {
      //console.log("middleWare", action);
      return next(action);
    };
  };
};

export const store = createStore(
  reducer,
  compose(applyMiddleware(verificationAPI, logger, thunk), ReactReduxDevTools)
);
