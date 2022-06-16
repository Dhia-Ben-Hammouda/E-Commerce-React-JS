import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import Alert from "@mui/material/Alert";

const SignUp = ()=>{
  const [name , setName] = useState("");
  const [phone , setPhone] = useState("");
  const [email , setEmail ] = useState("");
  const [password , setPassword] = useState("");
  const [success , setSuccess] = useState(false);
  const [failure , setFailure] = useState(false);

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/auth/signUp",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password
      })
    })

    const data = await response.json();

    if(data.msg === "user created succesfully")
    {
      setSuccess(true);
    }
    else if(data.msg === "User with the same email already exists")
    {
      setFailure(true);
    }
  }

  return(
    <>
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={submitHandler}>
          <IconContext.Provider value={{color:"#777" , size:"1.25rem"}}>
            <div className="input">
              <FaSignature />
              <input 
                type="text"
                placeholder="Enter name..."
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="input">
              <FaPhoneAlt />
              <input 
                type="text"
                placeholder="Enter phone..."
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
              />
            </div>
            <div className="input">
              <FaUser />
              <input 
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="input">
              <FaLock />
              <input 
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </IconContext.Provider>
          <button type="submit">Sign up</button>
          <div>
            <p className="already" style={{margin:".8rem 0" , color:"#777"}}> already have an account ? <a href="/signin" className="link">Sign in</a> </p>
          </div>
        </form>
        {
          success && <Alert className="alert" style={{position:"relative",top:"20px"}} variant="filled" color="success">
          User created succesfully !
        </Alert>
        }
        {
          failure && <Alert className="alert" style={{position:"relative",top:"20px"}} variant="filled" color="error">
          User with the same email already exists .
        </Alert>
        }
      </div>
    </>
  );
}

export default SignUp;