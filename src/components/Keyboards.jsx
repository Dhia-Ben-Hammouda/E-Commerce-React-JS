import React from "react";
import Navbar from "./Navbar.jsx";
import Keyboard from "./Keyboard.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { MdArrowForwardIos } from "react-icons/md";
import { getAllKeyboards } from "../redux/actions/productActions.js";

const Keyboards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllKeyboards());
  }, [dispatch]);

  const keyboards = useSelector((state) => state.keyboardReducer.keyboards);
  const loading = useSelector((state)=> state.keyboardReducer.loading);

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
          <div className="mechanical">
            <h1>Mechanical</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="Yes" />
              <FormControlLabel className="label" control={<Checkbox />} label="No" />
            </FormGroup>
          </div>
          <div className="wireless">
            <h1>Wireless</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="Yes" />
              <FormControlLabel className="label" control={<Checkbox />} label="No" />
            </FormGroup>
          </div>
        </div>
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
            <CircularProgress style={{margin:"3rem"}}/>
            </div> : keyboards.map((keyboard, index) => {
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