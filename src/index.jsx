import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import store , { persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDom.render(   
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App/>
      </Router>
    </PersistGate>
  </Provider>
, document.getElementById("root") );