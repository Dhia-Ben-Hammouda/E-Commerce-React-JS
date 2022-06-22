import React from "react";
import { FaShoppingCart, FaUserAlt, FaSearch, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const profile = sessionStorage.getItem("profile");

    if (profile) {
      setUser(JSON.parse(profile));
    }

  }, []);

  function clickHandler(e) {
    if (document.querySelector(".option-list").style.display === "none")
      document.querySelector(".option-list").style.display = "flex";
    else
      document.querySelector(".option-list").style.display = "none";
  }

  function signOutHandler() {
    sessionStorage.clear();
    window.location.href = "/"
  }

  function imgHandler() {
    window.location.href = "/";
  }

  return (
    <>
      <nav>
        <div className="logo-wrapper">
          <img onClick={imgHandler} alt="" src={logo} />
        </div>
        <ul className="desktop-list">
          <li>
            <a href="/computers">Computers</a>
          </li>
          <li>
            <a href="/keyboards">Keyboards</a>
          </li>
          <li>
            <a href="/mouses">Mouses</a>
          </li>
          <li>
            <a href="/screens">Screens</a>
          </li>
        </ul>
        <div className="action-container">
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <div className="search-container">
              <div className="search-icon">
                <FaSearch size={"1.25rem"} />
              </div>
              <input placeholder="Search for products" />
            </div>
            <div className="wrapper">
              {
                user ? <div onClick={clickHandler} className="wrap" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}>
                  <img style={{ cursor: "pointer", width: "100%", height: "95%", borderRadius: "50%" }} src={user.picture} alt="profilePicture" />

                  <IconContext.Provider value={{ size: "1rem" }}>
                    <ul className="option-list">
                      <li>
                        <FaCog />
                        <a href="/settings">Settings</a>
                      </li>
                      <li onClick={signOutHandler}>
                        <FaSignOutAlt />
                        <h3>Sign Out</h3>
                      </li>
                    </ul>
                  </IconContext.Provider>
                </div> : <a href="/signin">
                  <FaUserAlt />
                </a>
              }
              <div className="cart" style={{ marginLeft: ".75rem" }}>
                <a href="/cart">
                  <FaShoppingCart />
                  <div className="num" style={{ color: "white" }}>
                    {
                      0
                    }
                  </div>
                </a>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </nav>
      <ul className="mobile-list" style={{background:"white"}}>
        <li>
          <a href="/computers">Computers</a>
        </li>
        <li>
          <a href="/keyboards">Keyboards</a>
        </li>
        <li>
          <a href="/mouses">Mouses</a>
        </li>
        <li>
          <a href="/screens">Screens</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;