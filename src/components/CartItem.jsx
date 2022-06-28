import React from "react";
import { useState } from "react";

const CartItem = ({id , name , picture , price , quantity})=>{
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
            <span>
              {
                quantity
              }
            </span>
            <h2>{price * quantity}.000 DT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;