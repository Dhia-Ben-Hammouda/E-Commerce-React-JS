import * as actionTypes from "../constants/cartConstants.js";

const initialState = {
  cartItems : [], // { id , name , picture , price , quantity , total }
  quantity : 0 ,
  total : 0
}

const cartReducer = (state = initialState , action) => {
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload;
      newItem.price = parseFloat(newItem.price).toFixed(3);

      console.log(newItem.price);

      // const exists = state.cartItems.find((item)=> item.id === newItem.id);

      // if(exists)
      // {

      //   const array = state.cartItems;

      //   array.forEach((item)=>{
      //     if(item.id === newItem.id)
      //     {
      //       item.quantity++;
      //       item.total+= parseFloat(item.price);
      //     }
      //   })

      //   return {
      //     ...state,
      //     cartItems : array,
      //     quantity : state.quantity+1,
      //     total : state.total + parseFloat(newItem.price)
      //   }
      // }
      // else
      // {
      //   return {
      //     ...state ,
      //     cartItems : [...state.cartItems , newItem],
      //     quantity : state.quantity + 1,
      //     total : state.total + newItem.price
      //   }
      // }

    case actionTypes.REMOVE_FROM_CART:
      break;
    default:
      return state;
  }
}

export default cartReducer;