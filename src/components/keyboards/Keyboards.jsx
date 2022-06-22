import React from "react";
import Navbar from "../Navbar.jsx";
import Keyboard from "./Keyboard.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";
import { FaSearch } from "react-icons/fa";

const Keyboards = () => {
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [keyboards, setKeyboards] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/keyboards/getAllKeyboards?page=${page}`);
        const data = await response.json();

        setLoading(false);
        setKeyboards(data.keyboards);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="pagination-filter">
        <button className="filter-btn">
          Filter
        </button>
        <div className="search-container">
          <div className="search-icon">
            <FaSearch color="white" size={"1.25rem"} />
          </div>
          <input placeholder="Search for products" />
        </div>
      </div>
      <div className="computer-wrapper">
        <div className="filter-container">
          <div className="header">
            <h2>Filter By</h2>
          </div>
          <div className="price">
            <h1>Price</h1>
            <Slider
              style={{ color: "#777" }}
              min={0}
              max={300}
              value={priceRange}
              valueLabelDisplay="auto"
              onChange={(e, newValue) => { setPriceRange(newValue) }}
            />
            <div className="price-inputs">
              <input className="min" value={priceRange[0] + "  DT"} onChange={() => { }} />
              <input className="max" value={priceRange[1] + "  DT"} onChange={() => { }} />
            </div>
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
              <CircularProgress style={{ margin: "3rem" }} />
            </div> : keyboards.map((keyboard, index) => {
              return (
                <Keyboard key={index}
                  id={keyboard._id}
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
          {
            !loading && <div className="pagination-filter" style={{ justifyContent: "flex-start", paddingTop: "1rem" }}>
              <Pagination
                page={page}
                setPage={setPage}
                numOfPages={numOfPages}
              />
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default Keyboards;