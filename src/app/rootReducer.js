import { combineReducers } from "redux";
import cartReducer from "./reducers/cartRedcucer.js"

const rootReducer = combineReducers({
  cart :cartReducer
});

export default rootReducer;