import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import Filter from "./Filter.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect , useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Computers = ()=>{
  const [priceRange , setPriceRange] = useState([0 , 4000]);
  const [computers , setComputers ] = useState([]);
  const [loading , setLoading ] = useState(true);
  const [allComputers , setAllComputers] = useState([]);
  
  useEffect(()=>{
    async function fetchData()
    {
      const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/computers/getAllComputers");
      const data = await response.json();

      setLoading(false);
      setComputers([...data]);
      setAllComputers([...data]);
    }
    fetchData();
  } , []);

  return(
    <>
      <Navbar/>
      <div className="pagination-filter">
        <button>
          Filter by
        </button>
        <div className="pages">
          <div className="page">1</div>
          <div className="page">2</div>
          <div className="page">3</div>
          <div className="page">
            <MdArrowForwardIos/>
          </div>
        </div>
      </div>
      <div className="computer-wrapper">
        <Filter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          computers={computers}
          setComputers={setComputers}
          allComputers={allComputers}
          setAllComputers={setAllComputers}
          loading={loading}
          setLoading={setLoading}
        />
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
              <CircularProgress style={{margin:"3rem"}}/>
            </div>:computers.map((computer,index)=>{
              return(
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