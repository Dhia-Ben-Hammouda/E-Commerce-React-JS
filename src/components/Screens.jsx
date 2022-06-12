import React from "react";
import Navbar from "./Navbar.jsx";
import Screen from "./Screen.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { MdArrowForwardIos } from "react-icons/md";
import { getAllScreens } from "../redux/actions/productActions.js";

const Screens = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllScreens());
  }, [dispatch]);

  const screens = useSelector((state) => state.screenReducer.screens);
  const loading = useSelector((state)=> state.screenReducer.loading);

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
              <FormControlLabel className="label" control={<Checkbox />} label="Samsung" />
            </FormGroup>
          </div>
          <div className="size">
            <h1>Size</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="21'" />
              <FormControlLabel className="label" control={<Checkbox />} label="24'" />
              <FormControlLabel className="label" control={<Checkbox />} label="27'" />
              <FormControlLabel className="label" control={<Checkbox />} label="32'" />
            </FormGroup>
          </div>
          <div className="resolution">
            <h1>Resolution</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="HD" />
              <FormControlLabel className="label" control={<Checkbox />} label="Full HD" />
              <FormControlLabel className="label" control={<Checkbox />} label="QHD" />
              <FormControlLabel className="label" control={<Checkbox />} label="4K" />
            </FormGroup>
          </div>
        </div>
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
            <CircularProgress style={{margin:"3rem"}}/>
            </div> : screens.map((screen, index) => {
              return (
                <Screen key={index}
                  picture={screen.picture}
                  description={screen.description}
                  brand={screen.brand}
                  price={screen.price}
                  name={screen.name}
                  size={screen.size}
                  resolution={screen.resolution}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Screens;