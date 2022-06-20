import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
  cartReducer
});

export default rootReducer;