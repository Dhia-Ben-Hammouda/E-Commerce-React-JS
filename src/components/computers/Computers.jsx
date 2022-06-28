import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import Pagination from "../Pagination.jsx";
import Filter from "./Filter.jsx";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CircularProgress } from "@mui/material";

const Computers = () => {
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [realPriceRange , setRealPriceRange ] = useState([]);
  const [filters , setFilters ] =useState({
    brand:[],
    memory:[],
    procesor:[],
    graphicsCard:[],
    drive:[],
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/computers/getAllComputers",{
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
        setComputers(data.computers);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page , filters , realPriceRange ]);

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
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setRealPriceRange={setRealPriceRange}
        />
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
              <CircularProgress style={{ margin: "3rem" }} />
            </div> : computers.map((computer, index) => {
              return (
                <Computer key={index}
                  id={computer._id}
                  picture={computer.picture}
                  description={computer.description}
                  brand={computer.brand}
                  price={computer.price}
                  name={computer.name}
                  memory={computer.memory}
                  procesor={computer.procesor}
                  drive={computer.drive}
                  graphicsCard={computer.graphicsCard}
                />
              );
            })
          }
          {
            !loading && <div className="pagination">
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

export default Computers;