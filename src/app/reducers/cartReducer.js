import { isOptionGroup } from "@mui/base";
import * as actionTypes from "../constants/cartActions.js";

const initialState = {
  cartItems: [],  // { id , name , totalPrice , price , quantity , picture }
  quantity: 0,
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      const newItem = action.payload;
      const exist = state.cartItems.find((item) => item.id === newItem.id);

      if (exist) {


        const array = state.cartItems;

        array.forEach((item) => {
          if (item.id === newItem.id) {
            item.quantity++;
            item.totalPrice += parseInt(item.price.slice(0 , item.price.length - 1))
          }
        })

        return {
          ...state,
          cartItems : array,
          quantity : state.quantity + 1,
          total: state.total + parseInt(newItem.price.slice(0, newItem.price.length - 1))
        }





      }
      else {



        return {
          ...state,
          cartItems: [...state.cartItems, { id: newItem.id, name: newItem.name, totalPrice: newItem.price, price: newItem.price, quantity: 1, picture: newItem.picture }],
          quantity: state.quantity + 1,
          total: state.total + parseInt(newItem.price.slice(0, newItem.price - 1))
        }



      }
    case actionTypes.REMOVE_FROM_CART:


      const item = action.payload;

      return{
        ...state,
        cartItems : state.cartItems.filter(x => x.id !== item.id),
        total : state.total - item.totalPrice
      }




    default:
      return state;
  }
}

export default cartReducer;