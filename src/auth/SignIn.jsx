import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();
    
    switch(data.msg)
    {
      
    }

  }

  return (
    <>
      <div className="sign-in-container" onSubmit={submitHandler}>
        <form className="sign-in-form">
          <IconContext.Provider value={{ color: "#777", size: "1.25rem" }}>
            <div className="input">
              <FaUser />
              <input
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="input">
              <FaLock />
              <input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
          </IconContext.Provider>
          <div className="forgot" style={{ margin: ".5rem 0", width: "85%", display: "flex", justifyContent: "flex-end", color: "#777" }}>
            <p style={{ fontSize: "12px" }}>Forgot password ?</p>
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
          <div style={{ display: "flex" }}>
            <IconContext.Provider value={{ size: "1.5rem", color: "white" }}>
              <div className="circle" style={{ background: "#405498" }}>
                <FaFacebookF />
              </div>
              <div className="circle" style={{ background: "#359BF1" }}>
                <FaTwitter />
              </div>
              <div className="circle" style={{ background: "#E74639" }}>
                <FaGoogle />
              </div>
            </IconContext.Provider>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;