import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice.js";

const store = configureStore({
  reducer : {
    cart : cartSlice.reducer
  }
});

export default store;


