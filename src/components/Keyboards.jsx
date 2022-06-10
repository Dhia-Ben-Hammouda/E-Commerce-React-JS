import React from "react";
import Navbar from "./Navbar.jsx";
import Keyboard from "./Keyboard.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { getAllKeyboards } from "../actions/keyboardActions.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Keyboards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllKeyboards());
  }, [dispatch]);

  const keyboards = useSelector((state) => state.keyboards);

  return (
    <>
      <Navbar />
      <div className="pagination-filter">
        <button>
          Filter by
        </button>
        <div className="pages">
          <div className="page">1</div>
          <div className="page">2</div>
          <div className="page">3</div>
          <div className="page">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
      <div className="computer-wrapper">
        <div className="filter-container">
          <div className="header">
            <h2>Filter By</h2>
          </div>
          <div className="price">
            <h1>Price</h1>
          </div>
          <div className="brand">
            <h1>Brand</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="HP" />
              <FormControlLabel className="label" control={<Checkbox />} label="Redragon" />
              <FormControlLabel className="label" control={<Checkbox />} label="Dell" />
            </FormGroup>
          </div>
        </div>
        <div className="computer-container">
          {
            keyboards.map((keyboard, index) => {
              return (
                <Keyboard key={index}
                  picture={keyboard.picture}
                  description={keyboard.description}
                  brand={keyboard.brand}
                  price={keyboard.price}
                  name={keyboard.name}
                  mechanical={keyboard.mechanical}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Keyboards;