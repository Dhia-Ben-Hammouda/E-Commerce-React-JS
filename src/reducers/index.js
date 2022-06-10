import { combineReducers } from "redux";
import computers from "./computerReducer.js";
import keyboards from "./keyboardReducer.js";
import screens from "./screenReducer.js";
import mouses from "./mouseReducer.js";

export default combineReducers({
  computers,
  keyboards,
  screens,
  mouses
})