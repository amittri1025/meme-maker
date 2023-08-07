import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./Store/store";
import MemeProvider from "./Contexts/MemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <MemeProvider>
    <App />
  </MemeProvider>
  // </Provider>
);
