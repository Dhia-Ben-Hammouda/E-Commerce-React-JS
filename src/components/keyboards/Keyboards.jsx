import React from "react";
import Navbar from "../Navbar.jsx";
import Keyboard from "./Keyboard.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";

const Keyboards = () => {
  const [loading, setLoading] = useState(false);
  const [paginationLoading, setPaginationLoading] = useState(true);
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
        setPaginationLoading(false);
        setKeyboards(data.keyboards);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page]);

  async function filterData() {
    // setLoading(true);

    // const filtredKeyboards = allKeyboards.filter((keyboard)=>{
    //   return parseInt(keyboard.price.slice(0 , keyboard.price.length-1)) >= priceRange[0] && parseInt(keyboard.price.slice(0 , keyboard.price.length -1)) <= priceRange[1];
    // })

    // setLoading(false);
    // setKeyboards(filtredKeyboards);
  }

  return (
    <>
      <Navbar />
      <div className="pagination-filter">
        {
          !paginationLoading && <>
            <button className="filter-btn">
              Filter by
            </button>
            <Pagination
              page={page}
              setPage={setPage}
              numOfPages={numOfPages}
            />
          </>
        }
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
              onChangeCommitted={(e, newValue) => { filterData() }}
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
        </div>
      </div>
    </>
  );
}

export default Keyboards;