import React from "react";

const CartItem = ({id , name , picture , price})=>{
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
            <input type="number" />
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;