import React from "react";
import "../styles/header.css";
import logo from "../assets/logo-dark.png";
const Header = () => {
  // const scrollBy = useScrollBy();
  return (
    <div className="header">
      <div className="header-text">
        <h2>Groovy Travels</h2>
        <p>enjoy a groovy holiday with us</p>
        <button>Give us feedBack</button>
      </div>
      <div className="header-img">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
