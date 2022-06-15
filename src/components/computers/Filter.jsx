import React from "react";
import Slider from "@mui/material/Slider";
import { Checkbox , FormGroup , FormControlLabel} from "@mui/material";

const Filter = ({loading,setLoading,setComputers,priceRange,setPriceRange,computers,setAllComputers,allComputers}) => {

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

  function brandCheckBoxHandler(e)
  {
    console.log(allComputers);
    console.log(e.target.checked);
    console.log(e.target.value);
    console.log("checkbox");
  }

  function procesorHandler(e)
  {
    
  }

  function memoryHandler(e)
  {
    
  }

  function driveHandler(e)
  {

  }

  function graphicsCardHandler()
  {

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
            style={{ color: "#777" }}
            min={0}
            max={4000}
            value={priceRange}
            valueLabelDisplay="auto"
            onChange={(e, newValue) => { setPriceRange(newValue) }}
            onChangeCommitted={filterData}
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
              control={<Checkbox value="HP" onChange={brandCheckBoxHandler} />} 
              label="HP" 
            />
            <FormControlLabel 
              control={<Checkbox value="Asus" onChange={brandCheckBoxHandler} />} 
              label="Asus" 
            />
            <FormControlLabel 
              control={<Checkbox value="Dell" onChange={brandCheckBoxHandler} />} 
              label="Dell" 
            />
          </FormGroup>
        </div>
        <div className="procesor">
          <h1>Procesor</h1>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox value="ryzen5" onChange={procesorHandler} />} 
              label="AMD Ryzen 5" 
            />
            <FormControlLabel 
              control={<Checkbox value="i5" onChange={procesorHandler} />} 
              label="Intel Core i5" 
            />
            <FormControlLabel 
              control={<Checkbox value="ryzen7" onChange={procesorHandler} />} 
              label="AMD Ryzen 7" 
            />
            <FormControlLabel 
              control={<Checkbox value="i7" onChange={procesorHandler} />} 
              label="Intel Core i7" 
            />
          </FormGroup>
        </div>
        <div className="memory">
          <h1>Memory</h1>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox value="8gb" onChange={memoryHandler}/>} 
              label="8 gb" 
            />
            <FormControlLabel 
              control={<Checkbox value="16gb" onChange={memoryHandler}/>} 
              label="16 gb" 
            />
            <FormControlLabel 
              control={<Checkbox value="32gb" onChange={memoryHandler}/>} 
              label="32 gb" 
            />
          </FormGroup>
        </div>
        <div className="drive">
          <h1>Drive</h1>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox value="1hdd+256ssd" onChange={driveHandler}/>} 
              label="1TB + 256GB SSD " 
            />
            <FormControlLabel 
              control={<Checkbox value="1ssd" onChange={driveHandler}/>} 
              label="1TB SSD" 
            />
            <FormControlLabel 
              control={<Checkbox value="512ssd" onChange={driveHandler}/>} 
              label="512GB SSD" 
            />
          </FormGroup>
        </div>
        <div className="graphicsCard">
          <h1>Graphics Card</h1>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox value="gtx1650" onChange={graphicsCardHandler}/>} 
              label="GTX 1650" 
            />
            <FormControlLabel 
              control={<Checkbox value="rtx3050" onChange={graphicsCardHandler}/>} 
              label="RTX 3050" 
            />
            <FormControlLabel 
              control={<Checkbox value="rtx3050ti" onChange={graphicsCardHandler}/>} 
              label="RTX 3050 ti" 
            />
          </FormGroup>
        </div>
      </div>
    </>
  )
}

export default Filter;