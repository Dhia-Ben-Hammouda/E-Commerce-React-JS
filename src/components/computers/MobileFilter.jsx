import React from "react";
import { ImCross } from "react-icons/im";
import { FormControlLabel , CheckBox } from "@mui/material";
import { clickHandler } from "./Computers.jsx";
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";

const MobileFilter = () => {
  return (
    <div className="mobile-filter">
      <div style={{background:"#FCC312" , alignSelf:"stretch" , display:"flex" , justifyContent:"flex-end" , alignItems:"center" , padding:".5rem 1rem" }}  onClick={clickHandler}>
        <ImCross/>
      </div>
      <div className="filter-container">
        <div className="filter">
          <div className="header">
            <h2>Brand</h2>
            <IoIosArrowDown color="#777"/>
          </div>
          <div className="content">

          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Brand</h2>
            <IoIosArrowDown color="#777"/>
          </div>
          <div className="content">

          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Brand</h2>
            <IoIosArrowDown color="#777"/>
          </div>
          <div className="content">

          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Brand</h2>
            <IoIosArrowDown color="#777"/>
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;