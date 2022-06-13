import * as actionTypes from "../constants/productConstants.js";

export const computerReducer = (state = { computers : [] } , action)=>{
  switch(action.type)
  {
    case actionTypes.FETCH_ALL_COMPUTERS_REQUEST:
      return {
        loading:true,
        computers:[]
      }
    case actionTypes.FETCH_ALL_COMPUTERS_SUCCESS:
      return {
        loading:false,
        computers : action.payload
      }
    default:
      return state;
  }
}

export const screenReducer = (state = { screens : [] } , action) =>{
  switch(action.type)
  {
    case actionTypes.FETCH_ALL_SCREENS_REQUEST:
      return {
        loading:true,
        screens:[]
      }
    case actionTypes.FETCH_ALL_SCREENS_SUCCESS:
      return {
        loading:false,
        screens : action.payload
      }
    default:
      return state;
  }
}

export const keyboardReducer = (state = { keyboards : [] }, action) =>{
  switch(action.type)
  {
    case actionTypes.FETCH_ALL_KEYBOARDS_REQUEST:
      return {
        loading:true,
        keyboards:[]
      }
    case actionTypes.FETCH_ALL_KEYBOARDS_SUCCESS:
      return {
        loading:false,
        keyboards : action.payload
      }
    default:
      return state;
  }
}

export const mouseReducer = (state = { mouses : [] } , action) =>{
  switch(action.type)
  {
    case actionTypes.FETCH_ALL_MOUSES_REQUEST:
      return {
        loading:true,
        mouses:[]
      }
    case actionTypes.FETCH_ALL_MOUSES_SUCCESS:
      return {
        loading:false,
        mouses : action.payload
      }
    default:
      return state;
  }
}

export const productReducer = (state =  {product : []} , action ) =>{
  switch(action.type)
  {
    case actionTypes.FETCH_PRODUCT_BY_ID_REQUEST:
      return {
        loading:true,
        product : []
      }
    case actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        loading:false,
        product : action.payload
      }
    default:
      return state;
  }
}
