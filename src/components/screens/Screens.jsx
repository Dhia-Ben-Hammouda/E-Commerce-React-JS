import React from "react";
import Navbar from "../Navbar.jsx";
import Screen from "./Screen.jsx";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useEffect , useState} from "react";
import Slider from "@mui/material/Slider";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";

const Screens = () => {
  const [ loading , setLoading  ] = useState(false);
  const [ screens , setScreens ] = useState([]);
  const [ priceRange , setPriceRange ] = useState([0 , 1500]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    async function fetchData() 
    {
      try{
        setLoading(true);
        const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/screens/getAllScreens?page=${page}`);
        const data = await response.json();

        setLoading(false);
        setScreens(data.screens);
        setNumOfPages(data.numberOfPages);
      }catch(err){
        console.error(err);
      }
    }
    fetchData();
  }, [page]);

  async function filterData()
  {
    // setLoading(true);
    // const filtredScreens = allScreens.filter((screen)=>{
    //   return parseInt(screen.price.slice(0 , screen.price.length-1)) >= priceRange[0] && parseInt(screen.price.slice(0 , screen.price.length -1)) <= priceRange[1];
    // })

    // setLoading(false);
    // setScreens(filtredScreens);
  }


  return (
    <>
      <Navbar />
      <div className="pagination-filter">
      <button className="filter-btn">
          Filter by
        </button>
        <Pagination 
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
      </div>
      <div className="computer-wrapper">
        <div className="filter-container">
          <div className="header">
            <h2>Filter By</h2>
          </div>
          <div className="price">
            <h1>Price</h1>
            <Slider
              style={{color:"#777"}} 
              min={0}
              max={1500}
              valueLabelDisplay="auto"
              value={priceRange}
              onChange={(e,newValue) => { setPriceRange(newValue) }}
              onChangeCommitted={filterData}
            />
            <div className="price-inputs">
              <input className="min" value={priceRange[0] + "  DT"} onChange={()=>{}} />
              <input className="max" value={priceRange[1] + "  DT"} onChange={()=>{}}/>
            </div>
          </div>
          <div className="brand">
            <h1>Brand</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="HP" />
              <FormControlLabel className="label" control={<Checkbox />} label="Redragon" />
              <FormControlLabel className="label" control={<Checkbox />} label="Dell" />
              <FormControlLabel className="label" control={<Checkbox />} label="Samsung" />
            </FormGroup>
          </div>
          <div className="size">
            <h1>Size</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="21'" />
              <FormControlLabel className="label" control={<Checkbox />} label="24'" />
              <FormControlLabel className="label" control={<Checkbox />} label="27'" />
              <FormControlLabel className="label" control={<Checkbox />} label="32'" />
            </FormGroup>
          </div>
          <div className="resolution">
            <h1>Resolution</h1>
            <FormGroup>
              <FormControlLabel className="label" control={<Checkbox />} label="HD" />
              <FormControlLabel className="label" control={<Checkbox />} label="Full HD" />
              <FormControlLabel className="label" control={<Checkbox />} label="QHD" />
              <FormControlLabel className="label" control={<Checkbox />} label="4K" />
            </FormGroup>
          </div>
        </div>
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
            <CircularProgress style={{margin:"3rem"}}/>
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
        </div>
      </div>
    </>
  );
}

export default Screens;