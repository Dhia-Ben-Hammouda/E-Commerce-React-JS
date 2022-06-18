import * as actionTypes from "../constants/cartConstants.js";

export const addToCart = (id) => async (dispatch)=>{
  try{
    const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/product/${id}`);
    const data = await response.json();

    dispatch({type:actionTypes.ADD_TO_CART , payload:data})
  }catch(err){
    console.error(err);
  }
}