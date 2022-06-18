import React from "react";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";

const Cart = () => {

  const products = useSelector((state)=>state.cartReducer.products);

  console.log(products);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {
            products.map((product , index)=>{
              return(
                <div key={index} className="product"></div>
              )
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