import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/usercontext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User_login } from "./pages/User_login";
import { User_signup } from "./pages/User_signup";
import { Adminlogin } from "./pages/Adminlogin";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<User_login />}></Route>
          <Route path="/signup" element={<User_signup />}></Route>
          <Route path="/adminlogin" element={<Adminlogin />}></Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
