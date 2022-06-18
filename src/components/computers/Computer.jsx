import React from "react";

const Computer = ({ id, picture, description, brand, price, procesor, memory, graphicsCard, name, drive }) => {
  
  return (
    <>
      <div className="computer">
        <div className="computer-left">
          <a href={`/product/${id}`}>
            <img alt="" style={{ width: "80%" }} src={picture} />
          </a>
          <h2>
            {price}
          </h2>
          <button>
            Add to Cart
          </button>
        </div>
        <div className="computer-right">
          <h3>
            <a href={`/product/${id}`}>
              {
                name
              }
            </a>
          </h3>
          <h4>
            {
              description
            }
          </h4>
          <div className="right-btn">
            <h2>
              {price}
            </h2>
            <button>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Computer;