import React from "react";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GoogleLogin } from "react-google-login";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

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

    console.log(data);

    switch (data.msg) {
      case "user with the given email doesn't exist":
        setError1(true);
        break;
      case "wrong password":
        setError2(true);
        break;
      case "ok":
        sessionStorage.setItem("profile", JSON.stringify(data));
        window.location.href = "/";
        break;
      default:
        break;
    }

  }

  async function googleSuccess(res) {
    console.log(res);
  }

  function googleFailure(err) {
    console.error(err);
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
          <div className="forgot" style={{ color: "#777" }}>
            <label><input type="checkbox" /> Remember Me </label>
            <p>Forgot password ?</p>
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
              <button className="circle" style={{ background: "#405498" }}>
                <FaFacebookF />
              </button>
              <button className="circle" style={{ background: "#359BF1" }}>
                <FaTwitter />
              </button>
              <GoogleLogin
                clientId="465138218686-g25mmikjc55jkjogth4q10in41v4q9tt.apps.googleusercontent.com"
                render={(renderProps) => (<button onClick={renderProps.onClick} className="circle" style={{ background: "#E74639" }}>
                  <FaGoogle />
                </button>)}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </IconContext.Provider>
          </div>
        </form>
        {
          error1 && <Alert className="alert" style={{ position: "relative", top: "20px" }} variant="filled" color="error">
            user with the given email doesn't exist
          </Alert>
        }
        {
          error2 && <Alert className="alert" style={{ position: "relative", top: "20px" }} variant="filled" color="error">
            wrong password
          </Alert>
        }
      </div>
    </>
  );
}

export default SignIn;