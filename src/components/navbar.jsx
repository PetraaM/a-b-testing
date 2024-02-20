import React, { useState } from "react";
import Logo from "../logo.svg";
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <a href="/">Learn React</a>
          <a href="/ourMenu">Documentation</a>
          <a href="/about">Blog</a>
          <a href="/contact">Community</a>
        </div>
      </div>
      <div className="rightSide">
        <a href="/">Learn React</a>
        <a href="/ourMenu">Documentation</a>
        <a href="/about">Blog</a>
        <a href="/contact">Community</a>
        <button onClick={toggleNavbar}>Toggle Navbar</button>
      </div>
    </div>
  );
}

export default Navbar;
