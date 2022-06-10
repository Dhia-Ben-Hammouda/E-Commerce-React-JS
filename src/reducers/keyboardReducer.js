const reducer = (state = [], action)=>{
  switch(action.type)
  {
    case "FETCH_ALL_KEYBOARDS":
      return action.payload;
    default:
      return state;
  }
}

export default reducer;