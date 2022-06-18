import * as actionTypes from "../constants/cartConstants.js";

export const cartReducer = (state = { products : [] } , action)=>{
  console.log(state);
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return {
        ...state ,
        products : [...state.products , action.payload]
      }
    default:
      return state;
  }
}