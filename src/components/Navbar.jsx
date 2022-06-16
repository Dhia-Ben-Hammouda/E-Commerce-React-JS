import React from "react";
import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState , useEffect } from "react";

const Navbar = () => {
  const [user , setUser] = useState(null);

  useEffect(()=>{
    
    const profile = sessionStorage.getItem("profile");

    if(profile)
    {
      setUser(JSON.parse(profile));
    }

  } , []);

  return (
    <>
      <nav>
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
                user ? <img style={{width:"2.25rem" , height:"2.25rem" , borderRadius:"50%"}} src={user.picture} alt="profilePicture" /> : <a href="/signin">
                <FaUserAlt />
              </a>
              }
              <div className="cart" style={{ marginLeft: "1rem" }}>
                <a href="/cart">
                  <FaShoppingCart />
                </a>
                <div className="cart-num">
                  0
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </nav>
      <ul className="mobile-list">
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