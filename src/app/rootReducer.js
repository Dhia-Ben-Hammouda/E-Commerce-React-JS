import { combineReducers } from "redux";
import cartReducer from "./reducers/cartRedcucer.js"

const rootReducer = combineReducers({
  cartReducer
})

export default rootReducer;