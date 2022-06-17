import React from "react";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

const Pagination = ({ page, setPage, numOfPages }) => {
  return (
    <>
      <div className="pages">
        {
          page !== 1 ? <button onClick={()=>{setPage(page-1)}} className="page">{<IoIosArrowBack/>}</button> : null
        }
        {
          [...Array(numOfPages)].map((element, index) => {
            return (
              <button className={ page === index+1 ? "page active" : "page" }
                key={index}
                onClick={()=>{setPage(index+1)}}
              >
                {
                  index + 1
                }
              </button>
            )
          })
        }
        {
          page !== numOfPages ? <button onClick={()=>{setPage(page+1)}} className="page">{<IoIosArrowForward/>}</button> : null
        }
      </div>
    </>
  );
}

export default Pagination;