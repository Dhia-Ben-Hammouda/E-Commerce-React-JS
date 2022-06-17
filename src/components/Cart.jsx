import React from "react";
import Navbar from "./Navbar.jsx";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          <div className="product"></div>
          <div className="product"></div>
          <div className="product"></div>
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