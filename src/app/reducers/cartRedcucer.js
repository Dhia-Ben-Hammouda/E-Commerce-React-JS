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
    case actionTypes.REMOVE_FROM_CART:
      return produce(state , (draft) => {

      })
    default:
      return state;
  }
}

export default reducer;