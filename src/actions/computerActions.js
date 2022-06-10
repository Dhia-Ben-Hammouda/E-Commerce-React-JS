export const getAllComputers = () => async (dispatch) => {
   try{
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/computers/getAllComputers")
    const data = await response.json();

    dispatch({type:"FETCH_ALL_COMPUTERS" , payload : data});
  }catch(err){
     console.error(err);
   }
}