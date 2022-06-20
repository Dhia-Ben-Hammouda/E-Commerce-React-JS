import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store.js";

ReactDom.render(   
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App/>
      </Router>
    </PersistGate>
  </Provider>
, document.getElementById("root") );