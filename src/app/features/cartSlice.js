import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    products:[], //  product { itemId , itemPrice , itemQuantity , itemPicture , itemName  }
    quantity:0,
    total:0
  },
  reducers:{
    addToCart(state,action){
      const newItem = action.payload;

      let match = false;

      state.products.forEach((product)=>{
        if(product.id === newItem.id)
        {
          match = true;
        }
      })
      
      if(match === false)
      {
        state.products.push({
          itemId : newItem.id,
          itemPrice : newItem.price,
          itemQuantity : 1,
          itemPicture : newItem.picture,
          itemName : newItem.name,
          itemTotalQuantity : 1
        })
        state.quantity += 1;
        state.total += newItem.price;
      }
    },
    removeFromCart(state,action){

    },
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
