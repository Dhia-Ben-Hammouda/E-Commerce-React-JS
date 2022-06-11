import { combineReducers } from "redux";
import { computerReducer, screenReducer, keyboardReducer, mouseReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer.js";

const reducer = combineReducers({
  computerReducer,
  screenReducer,
  keyboardReducer,
  mouseReducer
})

export default reducer;