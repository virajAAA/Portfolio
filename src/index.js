import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import GlobalStyle from "./themes/globalStyles";

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
