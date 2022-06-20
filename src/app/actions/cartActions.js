import * as actionTypes from "../constants/cartActions.js";

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