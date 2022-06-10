const reducer = (computers = [] , action)=>{
  switch(action.type)
  {
    case "FETCH_ALL_COMPUTERS":
      return action.payload;
    default:
      return computers;
  }
}

export default reducer;