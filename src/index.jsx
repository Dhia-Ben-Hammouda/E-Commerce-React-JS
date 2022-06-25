import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
);