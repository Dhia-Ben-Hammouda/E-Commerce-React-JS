import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./app/Store.js";

ReactDom.render(   
  <Provider store={Store}>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.getElementById("root") );