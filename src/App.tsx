import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

import "./assets/reset.css";
import "./assets/styled.css";

// メモ化によるパフォーマンス
//  全体的デザイン
// Contactデザイン改良

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
