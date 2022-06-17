import React from "react";

const Pagination = ({ page, setPage, numOfPages }) => {
  return (
    <>
      <div className="pages">
        {
          [...Array(numOfPages)].map((element, index) => {
            return (
              <button className="page"
              
              >
                {
                  index + 1
                }
              </button>
            )
          })
        }
      </div>
    </>
  );
}

export default Pagination;