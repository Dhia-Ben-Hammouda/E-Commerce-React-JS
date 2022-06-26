import React from "react";
import Navbar from "../Navbar.jsx";
import Computer from "./Computer.jsx";
import Pagination from "../Pagination.jsx";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { Slider , CircularProgress } from "@mui/material";

const Computers = () => {
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [brand , setBrand ] = useState([]);
  const [memory , setMemory ] = useState([]);
  const [procesor , setProcesor ] = useState([]);
  const [graphicsCard , setGraphicsCard ] = useState([]);
  const [drive , setDrive ] = useState([]);
  const [realPriceRange , setRealPriceRange ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/computers/getAllComputers`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            page,
            brand,
            memory,
            procesor,
            graphicsCard,
            drive,
            priceRange
          })
        });
        const data = await response.json();

        setLoading(false);
        setComputers(data.computers);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page , brand , memory, procesor , graphicsCard , drive , realPriceRange]);

  function handleFilters(e)
  {
    const name = e.target.name;
    const value = e.target.value;

    switch(name)
    {
      case "brand":
        if(e.target.checked)
        {
          setBrand([...brand , value]);

          console.log(brand);
        }
        else
        {
          let arr = brand;

          arr = arr.filter((item) => item !== value);

          setBrand(arr);

          console.log(brand);
        }
        break;
      case "procesor":
        if(e.target.checked)
        {
          setProcesor([...procesor , value]);

          console.log(procesor);
        }
        else
        {
          let arr = procesor;

          arr = arr.filter((item) => item !== value);

          setProcesor(arr);

          console.log(procesor);
        }
        break;
      case "memory":
        if(e.target.checked)
        {
          setMemory([...memory , value]);

          console.log(memory);
        }
        else
        {
          let arr = memory;

          arr = arr.filter((item) => item !== value);

          setMemory(arr);

          console.log(memory);
        }
        break;
      case "drive":
        if(e.target.checked)
        {
          setDrive([...drive , value]);

          console.log(drive);
        }
        else
        {
          let arr = drive;

          arr = arr.filter((item) => item !== value);

          setDrive(arr);

          console.log(brand);
        }
        break;
      case "graphicsCard":
        if(e.target.checked)
        {
          setGraphicsCard([...graphicsCard , value]);

          console.log(graphicsCard);
        }
        else
        {
          let arr = graphicsCard;

          arr = arr.filter((item) => item !== value);

          setGraphicsCard(arr);

          console.log(graphicsCard);
        }
        break;
      default:
        break;
    }

  }

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
            onChange={(e, newValue) => { setPriceRange(newValue)  }}
            onChangeCommitted={ (e,newValue) => {setRealPriceRange(priceRange) } }
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
              control={<Checkbox name="brand" value="HP" onChange={handleFilters} />}
              label="HP"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Asus" onChange={handleFilters} />}
              label="Asus"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
              label="Dell"
            />
          </FormGroup>
        </div>
        <div className="procesor">
          <h1>Procesor</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="procesor" value="ryzen5" onChange={handleFilters} />}
              label="AMD Ryzen 5"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="i5" onChange={handleFilters} />}
              label="Intel Core i5"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="ryzen7" onChange={handleFilters} />}
              label="AMD Ryzen 7"
            />
            <FormControlLabel
              control={<Checkbox name="procesor" value="i7" onChange={handleFilters} />}
              label="Intel Core i7"
            />
          </FormGroup>
        </div>
        <div className="memory">
          <h1>Memory</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="memory" value="8gb" onChange={handleFilters} />}
              label="8 gb"
            />
            <FormControlLabel
              control={<Checkbox name="memory" value="16gb" onChange={handleFilters} />}
              label="16 gb"
            />
            <FormControlLabel
              control={<Checkbox name="memory" value="32gb" onChange={handleFilters} />}
              label="32 gb"
            />
          </FormGroup>
        </div>
        <div className="drive">
          <h1>Drive</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="drive" value="1hdd+256ssd" onChange={handleFilters} />}
              label="1TB + 256GB SSD "
            />
            <FormControlLabel
              control={<Checkbox name="drive" value="1ssd" onChange={handleFilters} />}
              label="1TB SSD"
            />
            <FormControlLabel
              control={<Checkbox name="drive" value="512ssd" onChange={handleFilters} />}
              label="512GB SSD"
            />
          </FormGroup>
        </div>
        <div className="graphicsCard">
          <h1>Graphics Card</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="gtx1650" onChange={handleFilters} />}
              label="GTX 1650"
            />
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="rtx3050" onChange={handleFilters} />}
              label="RTX 3050"
            />
            <FormControlLabel
              control={<Checkbox name="graphicsCard" value="rtx3050ti" onChange={handleFilters} />}
              label="RTX 3050 ti"
            />
          </FormGroup>
        </div>
      </div>
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