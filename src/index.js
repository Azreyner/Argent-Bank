import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

// on importe le Provider
import { Provider } from "react-redux";
// on importe le store
import { store } from "./Redux/Reducer/ArgentBankReducer";

import "./Style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
