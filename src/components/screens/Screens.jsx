import React from "react";
import Navbar from "../Navbar.jsx";
import Screen from "./Screen.jsx";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";
import { FaSearch } from "react-icons/fa";
import Filter from "./Filter.jsx";

const Screens = () => {
  const [loading, setLoading] = useState(false);
  const [screens, setScreens] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [realPriceRange , setRealPriceRange ] = useState([]);
  const [filters , setFilters ] = useState({
    brand:[],
    size:[],
    resolution:[]
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/screens/getAllScreens",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            page,
            ...filters,
            priceRange
          })
        });
        const data = await response.json();

        await new Promise(r => setTimeout(r, 500));

        setLoading(false);
        setScreens(data.screens);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page , realPriceRange , filters]);

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
          setRealPriceRange={setRealPriceRange}
          priceRange={priceRange}
        />
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
              <CircularProgress style={{ margin: "3rem" }} />
            </div> : screens.map((screen, index) => {
              return (
                <Screen key={index}
                  id={screen._id}
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

export default Screens;