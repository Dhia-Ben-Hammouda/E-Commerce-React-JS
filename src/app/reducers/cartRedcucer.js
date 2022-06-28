import * as actionTypes from "../constants/cartConstants.js";
import produce from "immer";

const initialState = {
  products: [],  // { id , name , price , picture , quantity }
  quantity: 0,
  total: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const newProduct = action.payload;

        const existingProduct = draft.products.find((product) => product.id === newProduct.id);

        if(existingProduct)
        {
          existingProduct.quantity++;
          draft.total = parseFloat(draft.total) + parseFloat(newProduct.price);
        }
        else
        {
          draft.products.push(newProduct);
          draft.quantity++;
          draft.total = parseFloat(draft.total) + parseFloat(newProduct.price);
        }
      });
      case actionTypes.DECREMENT_QUANTITY:
        return produce(state , (draft)=>{
          let id = action.payload;

          let item = draft.products.find((product) => product.id = id);

          if(item.quantity === 1)
          {
            draft.products = draft.products.filter((product) => product.id !== id);
          }
          else
          {
            draft.products.forEach((product)=>{
              if(product.id === id)
              {
                product.quantity--;
              }
            })
          }

        })
      case actionTypes.INCREMENT_QUANTITY:
        return produce(state , (draft)=>{
          let id = action.payload;

          draft.products.forEach((product)=>{
            if(product.id === id)
            {
              product.quantity--;
            }
          })
        })
    default:
      return state;
  }
}

export default reducer;