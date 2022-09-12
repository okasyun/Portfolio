import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/material";

import { theme } from "./theme-option";
import "./assets/reset.css";
import "./assets/styled.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;