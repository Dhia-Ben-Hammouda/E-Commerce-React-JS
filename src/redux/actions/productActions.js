import * as actionTypes from "../constants/productConstants.js";

export const getAllComputers = () =>async (dispatch) => {
  try{
    dispatch({type:actionTypes.FETCH_ALL_COMPUTERS_REQUEST});
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/computers/getAllComputers");
    const data = await response.json();
    dispatch({type:actionTypes.FETCH_ALL_COMPUTERS_SUCCESS , payload : data});
  }catch(err){
    console.error(err);
  }
}

export const getAllKeyboards = () => async (dispatch) => {
  try{
    dispatch({type:actionTypes.FETCH_ALL_KEYBOARDS_REQUEST});
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/keyboards/getAllKeyboards");
    const data = await response.json();
    dispatch({type:actionTypes.FETCH_ALL_KEYBOARDS_SUCCESS , payload : data});
  }catch(err){
    console.error(err);
  }
}

export const getAllScreens = () => async (dispatch) => {
  try{
    dispatch({type:actionTypes.FETCH_ALL_SCREENS_REQUEST});
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/screens/getAllScreens");
    const data = await response.json();
    dispatch({type:actionTypes.FETCH_ALL_SCREENS_SUCCESS , payload : data});
  }catch(err){
    console.error(err);
  }
}

export const getAllMouses = () => async (dispatch) => {
  try{
    dispatch({type:actionTypes.FETCH_ALL_MOUSES_REQUEST});
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/mouses/getAllMouses");
    const data = await response.json();
    dispatch({type:actionTypes.FETCH_ALL_MOUSES_SUCCESS , payload : data});
  }catch(err){
    console.error(err);
  }
}