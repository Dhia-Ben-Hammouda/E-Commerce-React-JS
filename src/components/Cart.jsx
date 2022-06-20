import React from "react";
import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux"

const Cart = () => {
  const items = useSelector(state => state.cartReducer.cartItems);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {
            items.map((item)=>{
              return(
                <CartItem
                  
                />
              );
            })
          }
        </div>
        <div className="checkout">
          <div className="wrapper">
            <h2>Total</h2>
            <h3>7347.000 DT</h3>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;