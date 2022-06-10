import React from "react";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";

const SignUp = ()=>{
  return(
    <>
      <div className="sign-up-container">
        <form className="sign-up-form">
          <IconContext.Provider value={{color:"#777" , size:"1.25rem"}}>
            <div className="input">
              <FaSignature />
              <input 
                type="text"
                placeholder="Enter name..."
              />
            </div>
            <div className="input">
              <FaPhoneAlt />
              <input 
                type="text"
                placeholder="Enter phone..."
              />
            </div>
            <div className="input">
              <FaUser />
              <input 
                type="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="input">
              <FaLock />
              <input 
                type="password"
                placeholder="Enter password..."
              />
            </div>
          </IconContext.Provider>
          <button type="submit">Sign up</button>
          <div>
            <p className="already" style={{margin:".8rem 0" , color:"#777"}}> already have an account ? <a href="/signin" className="link">Sign in</a> </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;