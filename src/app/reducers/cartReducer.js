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
      return {
        ...state,
        cartItems : [ ...state.cartItems , action.payload ],
        quantity : state.quantity + 1
      }
    case actionTypes.REMOVE_FROM_CART:
      break;
    default:
      return state;
  }
}

export default cartReducer;