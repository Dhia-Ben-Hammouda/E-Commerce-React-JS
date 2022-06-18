import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import Filter from "./Filter.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "../Pagination.jsx";
import { useEffect, useState } from "react";

const Computers = () => {
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationLoading, setPaginationLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/computers/getAllComputers?page=${page}`);
        const data = await response.json();

        setLoading(false);
        setPaginationLoading(false);
        setComputers(data.computers);
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
        <Filter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          computers={computers}
          setComputers={setComputers}
          loading={loading}
          setLoading={setLoading}
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
        </div>
      </div>
    </>
  );
}

export default Computers;