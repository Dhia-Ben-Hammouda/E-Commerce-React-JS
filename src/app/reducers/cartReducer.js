import * as actionTypes from "../constants/cartActions.js";

const initialState = {
  cartItems : [],
  quantity : 0 ,
  total : 0
}

const cartReducer = (state = initialState , action) => {
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      break;
    case actionTypes.REMOVE_FROM_CART:
      break;
    case actionTypes.NUMBER_OF_ITEMS:
      return{
        ...state,
        
      }
    default:
      return state;
  }
}

export default cartReducer;