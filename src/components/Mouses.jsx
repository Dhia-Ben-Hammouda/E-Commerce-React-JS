import React from "react";
import Navbar from "./Navbar.jsx";
import Mouse from "./Mouse.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { MdArrowForwardIos } from "react-icons/md";
import { getAllMouses } from "../redux/actions/productActions.js";

const Mouses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMouses());
  }, [dispatch]);

  const mouses = useSelector((state) => state.mouseReducer.mouses);
  const loading = useSelector((state)=> state.mouseReducer.loading);

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
            </div> : mouses.map((mouse, index) => {
              return (
                <Mouse key={index}
                  picture={mouse.picture}
                  description={mouse.description}
                  brand={mouse.brand}
                  price={mouse.price}
                  name={mouse.name}
                  wireless={mouse.wireless}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Mouses;