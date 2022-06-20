import * as actionTypes from "../constants/cartActions.js";

export const addToCart = (data)=>{
  return {
    type:actionTypes.ADD_TO_CART,
    payload:data
  }
}