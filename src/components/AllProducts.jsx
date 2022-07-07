import React from "react";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AllProducts = ()=>{
  const { searchTerm } = useParams();
  const products = useSelector(state => state.search.products);
  
  console.log(products);

  return(
    <>
      <Navbar/>
      <div className="products-grid">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </>
  );
}

export default AllProducts;