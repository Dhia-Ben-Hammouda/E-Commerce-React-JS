import React from "react";
import Navbar from "../Navbar.jsx";
import Mouse from "./Mouse.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";

const Mouses = () => {
  const [loading, setLoading] = useState(false);
  const [paginationLoading, setPaginationLoading] = useState(true);
  const [mouses, setMouses] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/mouses/getAllMouses?page=${page}`);
        const data = await response.json();

        setLoading(false);
        setPaginationLoading(false);
        setMouses(data.mouses);
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
              valueLabelDisplay="auto"
              value={priceRange}
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
            </div> : mouses.map((mouse, index) => {
              return (
                <Mouse key={index}
                  id={mouse._id}
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
          {
            !loading && <div className="pagination-filter" style={{justifyContent:"flex-start" , paddingTop:"1rem"}}>
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

export default Mouses;