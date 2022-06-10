import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import reducer from "./reducers";

const store = createStore( reducer , applyMiddleware(thunk));

ReactDom.render(   
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.getElementById("root") );