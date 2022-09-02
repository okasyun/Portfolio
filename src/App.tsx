import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import "./App.css";
import "./assets/reset.css";
import "./assets/styled.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
