import * as actionTypes from "../constants/cartConstants.js";

export const cartReducer = (state = { products : [] } , action)=>{
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return{
        products : [...state.products , action.payload]
      }
    default:
      return state;
  }
}