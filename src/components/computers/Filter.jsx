import React from "react";
import Slider from "@mui/material/Slider";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";

const Filter = ({ loading, setLoading, setComputers, priceRange, setPriceRange, computers}) => {
  
  const [filters , setFilters ] = useState({
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    brand:[],
    memory:[],
    drive:[],
    graphicsCard:[],
    procesor:[]
  });


  async function filterPrice(e , newValue)
  {
    console.log(newValue);
    setPriceRange(newValue);
    console.log(priceRange);
    setFilters({...filters , minPrice:newValue[0] , maxPrice : newValue[1]});
    console.log(filters);
  }

  async function filterData(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch(name)
    {
      case "brand":

        if(e.target.checked)
        {
          const arr = filters.brand;

          arr.push(value);

          setFilters({...filters , brand:arr});

          console.log(filters);
        }
        else
        {
          const arr = filters.brand;
        }

        break;
      case "procesor":
        if(e.target.checked)
        {

        }
        else
        {
          
        }

        break;
      case "drive":

        if(e.target.checked)
        {

        }
        else
        {
          
        }

        break;
      case "memory":

        if(e.target.checked)
        {

        }
        else
        {
          
        }


        break;
      case "graphicsCard":

        if(e.target.checked)
        {

        }
        else
        {
          
        }

        break;
    }
  }

  return (
    <>
      <div className="filter-container">
        <div className="header">
          <h2>Filter By</h2>
        </div>
        <div className="price">
          <h1>Price</h1>
          <Slider
            step={200}
            style={{ color: "#777" }}
            min={0}
            max={4000}
            value={priceRange}
            valueLabelDisplay="auto"
            onChange={(e, newValue) => { setPriceRange(newValue) }}
            onChangeCommitted={filterPrice}
          />
          <div className="price-inputs">
            <input
              className="min"
              value={priceRange[0] + "  DT"}
              onChange={() => { }}
            />
            <input
              className="max"
              value={priceRange[1] + "  DT"}
              onChange={() => { }} />
          </div>
        </div>
        <div className="brand">
          <h1>Brand</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="brand" value="HP" onChange={filterData} />}
              label="HP"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Asus" onChange={filterData} />}
              label="Asus"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Dell" onChange={filterData} />}
              label="Dell"
            />
          </FormGroup>
        </div>
        <div className="procesor">
          <h1>Procesor</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="procesor" value="ryzen5" onChange={filterData} />}
              label="AMD Ryzen 5"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="i5" onChange={filterData} />}
              label="Intel Core i5"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="ryzen7" onChange={filterData} />}
              label="AMD Ryzen 7"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="i7" onChange={filterData} />}
              label="Intel Core i7"
            />
          </FormGroup>
        </div>
        <div className="memory">
          <h1>Memory</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="memory" value="8gb" onChange={filterData} />}
              label="8 gb"
            />
            <FormControlLabel
              control={<Checkbox name="memory" value="16gb" onChange={filterData} />}
              label="16 gb"
            />
            <FormControlLabel
              control={<Checkbox name="memory" value="32gb" onChange={filterData} />}
              label="32 gb"
            />
          </FormGroup>
        </div>
        <div className="drive">
          <h1>Drive</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="drive" value="1hdd+256ssd" onChange={filterData} />}
              label="1TB + 256GB SSD "
            />
            <FormControlLabel
              control={<Checkbox name="drive" value="1ssd" onChange={filterData} />}
              label="1TB SSD"
            />
            <FormControlLabel
              control={<Checkbox name="drive" value="512ssd" onChange={filterData} />}
              label="512GB SSD"
            />
          </FormGroup>
        </div>
        <div className="graphicsCard">
          <h1>Graphics Card</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="gtx1650" onChange={filterData} />}
              label="GTX 1650"
            />
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="rtx3050" onChange={filterData} />}
              label="RTX 3050"
            />
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="rtx3050ti" onChange={filterData} />}
              label="RTX 3050 ti"
            />
          </FormGroup>
        </div>
      </div>
    </>
  )
}

export default Filter;