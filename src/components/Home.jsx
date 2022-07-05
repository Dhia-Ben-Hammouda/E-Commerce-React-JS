import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousell.jsx";
import img1 from "../images/ads/img1.jpg";
import img2 from "../images/ads/img2.jpg";
import img3 from "../images/ads/img3.jpg";
import img4 from "../images/ads/img4.jpg";
import img8 from "../images/ads/img8.jpg";
import img9 from "../images/ads/img9.jpg";
import img10 from "../images/ads/img10.jpg";
import img11 from "../images/ads/img11.jpg";
import { FaSearch } from "react-icons/fa";
import { useDispatch , useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { fetchAllProducts } from "../app/actions/searchActions.js";

const Home = () => {
  const [searchTerm , setSearchTerm ] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllProducts());
  } , [dispatch]) 

  return (
    <>
      <Navbar />
      <div className="search-wrapper">
        <div className="search-container">
          <div className="search-icon">
            <FaSearch color="white" size={"1.25rem"} />
          </div>
          <input 
            placeholder="Search for products" 
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
        </div>
      </div>
      <Carousel />
      <div className="add-container">
        <div className="add-grid">
          <div className="item">
            <img alt="" src={img2} />
          </div>
          <div className="item">
            <img alt="" src={img3} />
          </div>
          <div className="item">
            <img alt="" src={img4} />
          </div>
          <div className="item">
            <img alt="" src={img1} />
          </div>
          <div className="item">
            <img alt="" src={img8} />
          </div>
          <div className="item">
            <img alt="" src={img9} />
          </div>
          <div className="item">
            <img alt="" src={img10} />
          </div>
          <div className="item">
            <img alt="" src={img11} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;