import React from "react";

const Computer = ({ picture, description, brand, price, procesor, memory, graphicsCard, name, drive }) => {
  return (
    <>
      <div className="computer">
        <div className="computer-left">
          <img alt="" style={{ width: "80%" }} src={picture} />
          <h2>
            {price}
          </h2>
          <button>
            Add to Cart
          </button>
        </div>
        <div className="computer-right">
          <h3>
            {
              name
            }
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