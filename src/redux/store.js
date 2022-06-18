import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./rootReducer.js";

const store = createStore( reducer ,  composeWithDevTools((applyMiddleware(thunk))) );

export default store;