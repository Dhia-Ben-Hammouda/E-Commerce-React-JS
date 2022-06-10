export const getAllKeyboards = () => async (dispatch) => {
  try{
   const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/keyboards/getAllKeyboards")
   const data = await response.json();

   dispatch({type:"FETCH_ALL_KEYBOARDS" , payload : data});
 }catch(err){
    console.error(err);
  }
}