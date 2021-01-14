import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    almost_grey: "#0D0D0D",
    white: "#FFFFFF",
    dark_grey: "#F5F5F5",
    light_grey: "#f5f5f570",
    orange: "#FF6F43",
  },
  font: {
    xxs: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    xxl: 30,
    xxxl: 40,
  },

  height: {
    header: 64,
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
