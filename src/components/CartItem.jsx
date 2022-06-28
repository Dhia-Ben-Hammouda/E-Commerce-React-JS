import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity , incrementQuantity} from "../app/actions/cartActions.js";


const CartItem = ({id , name , picture , price , quantity})=>{
  const dispatch = useDispatch();

  function increment()
  {
    dispatch(incrementQuantity(id));
  }

  function decrement()
  {
    dispatch(decrementQuantity(id));
  }

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
          <div className="wrap">
            <div>
              <span onClick={decrement}>-</span>
              <span style={{marginInline:"1rem"}}>{quantity}</span>
              <span onClick={increment}>+</span>
            </div>
            <h2>{price * quantity}.000 DT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;