import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import User from "./Page/User";

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
