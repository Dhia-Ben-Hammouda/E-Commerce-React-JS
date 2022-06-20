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
                  key={item.id}
                  id={item.id}
                  picture={item.picture} 
                  name={item.name}
                  price={item.price}
                />
              )
            })
          }
        </div>
        <div className="checkout">
          <div className="wrapper">
            <h2>Total</h2>
            <h3>0 DT</h3>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;