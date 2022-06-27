import React from "react";
import Navbar from "../Navbar.jsx";
import Mouse from "./Mouse.jsx";
import Filter from "./Filter.jsx";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";
import { FaSearch } from "react-icons/fa";

const Mouses = () => {
  const [loading, setLoading] = useState(false);
  const [mouses, setMouses] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [realPriceRange , setRealPriceRange ] = useState([]);
  const [filters ,setFilters ] = useState({
    brand:[],
    wireless:[],
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/mouses/getAllMouses");
        const data = await response.json();

        setLoading(false);
        setMouses(data.mouses);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page , filters , realPriceRange]);

  return (
    <>
      <Navbar />
      <div className="pagination-filter">
        <div className="wrapper">
          <button>Filter By</button>
          <div className="search">
            <div className="search-icon">
              <FaSearch color="white" size={"1.25rem"} />
            </div>
            <input placeholder="Search for products" />
          </div>
        </div>
      </div>
      <div className="computer-wrapper">
        <Filter
          filters={filters}
          setFilters={setFilters}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          setRealPriceRange={setRealPriceRange}
        />
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
          <div className="pagination">
            <Pagination
              page={page}
              setPage={setPage}
              numOfPages={numOfPages}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mouses;