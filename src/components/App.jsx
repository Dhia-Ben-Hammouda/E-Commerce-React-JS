import React from "react";
import Home from "./Home.jsx";
import Computers from "./Computers.jsx";
import Keyboards from "./Keyboards.jsx";
import Mouses from "./Mouses.jsx";
import Screens from "./Screens.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Cart from "./Cart.jsx";
import InsertComputer from "../api/InsertComputer.jsx";
import InsertKeyboard from "../api/InsertKeyboard.jsx";
import InsertMouse from "../api/InsertMouse.jsx";
import InsertScreen from "../api/InsertScreen.jsx";
import { Route, Routes } from "react-router-dom";
import "../styles/styles.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/computers" element={ <Computers/>} />
        <Route path="/keyboards" element={ <Keyboards/> } />
        <Route path="/mouses" element={ <Mouses/> } />
        <Route path="/screens" element={ <Screens/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/InsertComputer" element={ <InsertComputer/> } />
        <Route path="/InsertScreen" element={ <InsertScreen/> } />
        <Route path="/InsertMouse" element={ <InsertMouse/> } />
        <Route path="/InsertKeyboard" element={ <InsertKeyboard/> } />
      </Routes>
    </>
  );
}

export default App;