import React from "react";
import { ImCross } from "react-icons/im";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import { clickHandler } from "./Computers.jsx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileFilter = ({ filters, setFilters, priceRange, setPriceRange, setRealPriceRange }) => {

  function handleFilters(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "brand":
        if (e.target.checked) {
          const arr = filters.brand;
          arr.push(value);
          setFilters({ ...filters, brand: arr })
          console.log(filters);
        }
        else {
          let arr = filters.brand;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, brand: arr })
          console.log(filters);
        }
        break;
      case "procesor":
        if (e.target.checked) {
          const arr = filters.procesor;
          arr.push(value);
          setFilters({ ...filters, procesor: arr })
          console.log(filters);
        }
        else {
          let arr = filters.procesor;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, procesor: arr })
          console.log(filters);
        }
        break;
      case "memory":
        if (e.target.checked) {
          const arr = filters.memory;
          arr.push(value);
          setFilters({ ...filters, memory: arr })
          console.log(filters);
        }
        else {
          let arr = filters.memory;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, memory: arr })
          console.log(filters);
        }
        break;
      case "drive":
        if (e.target.checked) {
          const arr = filters.drive;
          arr.push(value);
          setFilters({ ...filters, drive: arr })
          console.log(filters);
        }
        else {
          let arr = filters.drive;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, drive: arr })
          console.log(filters);
        }
        break;
      case "graphicsCard":
        if (e.target.checked) {
          const arr = filters.graphicsCard;
          arr.push(value);
          setFilters({ ...filters, graphicsCard: arr })
          console.log(filters);
        }
        else {
          let arr = filters.graphicsCard;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, graphicsCard: arr })
          console.log(filters);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="mobile-filter">
      <div style={{ background: "#FCC312", alignSelf: "stretch", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: ".5rem 1rem" }} onClick={clickHandler}>
        <ImCross color="#fff" />
      </div>
      <div className="filter-container">
        <div className="filter">
          <div className="header">
            <h2>Brand</h2>
            <IoIosArrowDown color="#777" />
          </div>
          <div className="content">
            <label><input name="brand" value="HP" type="checkbox" />HP</label>
            <label><input name="brand" value="Asus" type="checkbox" />Asus</label>
            <label><input name="brand" value="Dell" type="checkbox" />Dell</label>
          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Procesor</h2>
            <IoIosArrowDown color="#777" />
          </div>
          <div className="content">
            <label><input name="procesor" value="ryzen5" type="checkbox" />AMD Ryzen 5</label>
            <label><input name="procesor" value="i5" type="checkbox" />Intel Core i5</label>
            <label><input name="procesor" value="ryzen7" type="checkbox" />AMD Ryzen 7</label>
            <label><input name="procesor" value="i7" type="checkbox" />Intel Core i7</label>
          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Memory</h2>
            <IoIosArrowDown color="#777" />
          </div>
          <div className="content">
            <label><input name="memory" value="8gb" type="checkbox" />8 gb</label>
            <label><input name="memory" value="16gb" type="checkbox" />16 gb</label>
            <label><input name="memory" value="32gb" type="checkbox" />32 gb</label>
          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Drive</h2>
            <IoIosArrowDown color="#777" />
          </div>
          <div className="content">
            <label><input name="drive" value="" type="checkbox" />8 gb</label>
            <label><input name="drive" value="" type="checkbox" />16 gb</label>
            <label><input name="drive" value="" type="checkbox" />32 gb</label>
          </div>
        </div>
        <div className="filter">
          <div className="header">
            <h2>Graphics Card</h2>
            <IoIosArrowDown color="#777" />
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;