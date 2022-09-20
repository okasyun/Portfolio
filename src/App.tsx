import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

import "./assets/reset.css";
import "./assets/styled.css";

// フォント
// ボタンのデザイン
// cardhover時のアクション
// memo化によるパフォーマンス
// netlifyurlエラー

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
