import React from "react";
import { useState } from "react";

const CartItem = ({id , name , picture , price})=>{
  const [val , setVal ] = useState(1);

  return(
    <>
      <div className="product">
        <div className="left">
          <div className="img-wrapper">
            <img alt="" src={picture}/>
          </div>
          <h1>{name}</h1>
        </div>
        <div className="right">
          <div>
            <input 
              type="number" 
              min="1" 
              value={val}
              onChange={(e)=>{setVal(e.target.value)}}
            />
            <h2>{price} DT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;