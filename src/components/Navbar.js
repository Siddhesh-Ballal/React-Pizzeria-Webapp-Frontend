import React, { useState } from "react";
import Logo from "../assets/PizzeriaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Pizzeria Logo" />
        <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={() => {
            setOpenLinks(!openLinks);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
