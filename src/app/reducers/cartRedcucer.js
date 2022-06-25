import * as actionTypes from "../constants/cartConstants.js";
import produce from "immer";

const initialState = {
  products:[], // { id , name , price , picture , quantity }
  quantity:0,
  total:0
}

const reducer = (state = initialState , action)=>{
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return produce(state , (draft)=>{
        const newProduct = action.payload;

        const exists = draft.products.find((product)=> product.id === newProduct.id);

        if(exists)
        {
          draft.products.forEach((product)=>{
            if(product.id === newProduct.id)
            {
              product.quantity++;
            }
          })

          draft.total += parseFloat(newProduct.price);
        }
        else
        {
          draft.products.push(newProduct);
          draft.total += parseFloat(newProduct.price);
          draft.quantity++;
        }
      })
    case actionTypes.REMOVE_FROM_CART:
      break;
    default:
      return state;
  }
}

export default reducer;