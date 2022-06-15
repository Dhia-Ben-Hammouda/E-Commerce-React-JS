import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";

const SignIn = ()=>{
  return(
    <>
      <div className="sign-in-container">
        <form className="sign-in-form">
          <IconContext.Provider value={{color:"#777" , size:"1.25rem"}}>
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
          <div className="forgot" style={{margin:".5rem 0" ,width:"85%" ,display:"flex" , justifyContent:"flex-end" , color:"#777"}}>
            <p style={{fontSize:"12px"}}>Forgot password ?</p>
          </div>
          <button type="submit">
            Sign in
          </button>
          <div>
            <p className="dont"> don't have an account ? <a href="/signup" className="link">Sign up</a> </p>
          </div>
          <div>
            <p className="sign-in-with">or sign in with</p>
          </div>
          <div style={{display:"flex"}}>
            <IconContext.Provider value={{size:"1.5rem" , color:"white"}}>
              <div className="circle" style={{background:"#405498"}}>
                <FaFacebookF/>
              </div>
              <div className="circle" style={{background:"#359BF1"}}>
                <FaTwitter/>
              </div>
              <div className="circle" style={{background:"#E74639"}}>
                <FaGoogle/>
              </div>
            </IconContext.Provider>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;