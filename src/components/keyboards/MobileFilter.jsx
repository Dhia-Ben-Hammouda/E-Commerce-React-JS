import React from "react";

const MobileFilter = ({filters , setFilters , priceRange , setPriceRange , setRealPriceRange})=>{

  function handleFilters(e)
  {
    const name = e.target.name;
    const value = e.target.value;

    switch(name)
    {
      case "brand":
        if(e.target.checked)
        {
          const arr = filters.brand;
          arr.push(value);
          setFilters({...filters , brand:arr})
          console.log(filters);
        }
        else
        {
          let arr = filters.brand;
          arr = arr.filter((item) => item !== value);
          setFilters({...filters , brand:arr})
          console.log(filters);
        }
        break;
      case "wireless":
        if(e.target.checked)
        {
          const arr = filters.wireless;
          arr.push(value);
          setFilters({...filters , wireless:arr})
          console.log(filters);
        }
        else
        {
          let arr = filters.wireless;
          arr = arr.filter((item) => item !== value);
          setFilters({...filters , wireless:arr})
          console.log(filters);
        }
        break;
      case "mechanical":
        if(e.target.checked)
        {
          const arr = filters.mechanical;
          arr.push(value);
          setFilters({...filters , mechanical:arr})
          console.log(filters);
        }
        else
        {
          let arr = filters.mechanical;
          arr = arr.filter((item) => item !== value);
          setFilters({...filters , mechanical:arr})
          console.log(filters);
        }
        break;
      default:
        break;
    }
  }

  return(
    <>
    
    </>
  );
}

export default MobileFilter;