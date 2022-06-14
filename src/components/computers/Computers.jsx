import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Slider from "@mui/material/Slider";
import { Checkbox , FormGroup , FormControlLabel} from "@mui/material";
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

  async function filterData()
  {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    const filtredComputers = allComputers.filter((computer)=>{
      return (parseInt(computer.price.slice(0 , computer.price.length-1) )  >= priceRange[0] && parseInt(computer.price.slice(0 , computer.price.length-1 ) )<= priceRange[1] )
    })
    setLoading(false);
    setComputers(filtredComputers);
  }

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
        <div className="filter-container">
          <div className="header">
            <h2>Filter By</h2>
          </div>
          <div className="price">
            <h1>Price</h1>
            <Slider
              min={0}
              max={4000}
              value={priceRange}
              valueLabelDisplay="auto"
              onChange={(e,newValue) => {setPriceRange(newValue)}}
              onChangeCommitted={(e,newValue)=>{ filterData() }}
            />
            <div className="price-inputs">
              <input className="min" value={priceRange[0] + "  DT"} onChange={()=>{}}/>
              <input className="max" value={priceRange[1] + "  DT"} onChange={()=>{}}/>
            </div>
          </div>
          <div className="brand">
            <h1>Brand</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="HP"/>
              <FormControlLabel className="label" control={<Checkbox />} label="Asus"/>
              <FormControlLabel className="label" control={<Checkbox />} label="Dell"/>
            </FormGroup>
          </div>
          <div className="procesor">
            <h1>Procesor</h1>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="AMD Ryzen 5"/>
              <FormControlLabel control={<Checkbox />} label="Intel Core i5"/>
              <FormControlLabel control={<Checkbox />} label="AMD Ryzen 7"/>
              <FormControlLabel control={<Checkbox />} label="Intel Core i7"/>
            </FormGroup>
          </div>
          <div className="memory">
            <h1>Memory</h1>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="8 gb"/>
              <FormControlLabel control={<Checkbox />} label="16 gb"/>
              <FormControlLabel control={<Checkbox />} label="32 gb"/>
            </FormGroup>
          </div>
          <div className="drive">
            <h1>Drive</h1>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="1TB + 256GB SSD "/>
              <FormControlLabel control={<Checkbox />} label="1TB SSD"/>
              <FormControlLabel control={<Checkbox />} label="512GB SSD"/>
            </FormGroup>
          </div>
          <div className="graphicsCard">
            <h1>Graphics Card</h1>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="GTX 1650"/>
              <FormControlLabel control={<Checkbox />} label="RTX 3050"/>
              <FormControlLabel control={<Checkbox />} label="RTX 3050 ti"/>
            </FormGroup>
          </div>
        </div>
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