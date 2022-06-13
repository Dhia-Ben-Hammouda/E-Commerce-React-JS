import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import { Checkbox , FormGroup , FormControlLabel} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { getAllComputers } from "../../redux/actions/productActions.js";

const Computers = ()=>{
  const dispatch = useDispatch();  
  
  useEffect(()=>{
    dispatch(getAllComputers());
  } , [dispatch]);

  const computers = useSelector((state)=>state.computerReducer.computers);
  const loading = useSelector((state)=>state.computerReducer.loading);

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