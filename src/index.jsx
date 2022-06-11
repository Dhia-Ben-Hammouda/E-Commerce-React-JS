import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDom.render(   
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.getElementById("root") );