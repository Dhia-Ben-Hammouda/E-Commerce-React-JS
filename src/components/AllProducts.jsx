import React from "react";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const { searchTerm } = useParams();
  const products = useSelector(state => state.search.products);

  console.log(searchTerm);
  console.log(products);

  return (
    <>
      <Navbar />
      <div className="products-grid">
        {
          products.map((product, index) => {
            return (
              <div key={index} className="grid-item">
                <div className="img-wrapper">
                  <img src={product.picture} />
                </div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default AllProducts;