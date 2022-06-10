import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousell.jsx";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";

const Home = ()=>{
  return(
    <>
      <Navbar/>
      <Carousel/>
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