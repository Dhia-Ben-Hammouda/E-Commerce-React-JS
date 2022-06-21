import * as actionTypes from "../constants/cartConstants.js";

export const addToCart = (item)=>{
  return {
    type:actionTypes.ADD_TO_CART,
    payload:item
  }
}

export const removeFromCart = (item)=>{
  return {
    type:actionTypes.REMOVE_FROM_CART,
    payload:item
  }
}
