import { combineReducers } from "redux";
import { computerReducer, screenReducer, keyboardReducer, mouseReducer , productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer.js";

const reducer = combineReducers({
  computerReducer,
  screenReducer,
  keyboardReducer,
  mouseReducer,
  productReducer
})

export default reducer;