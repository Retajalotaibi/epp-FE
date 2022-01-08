import React from "react";
import "../styles/navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarG">
      <a className="navbar-brand" style={{ padding: "4px" }}>
        Groovy travels
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active">FeedBack</a>
          <a className="nav-item nav-link">Places</a>
          <a className="nav-item nav-link">Customers</a>
          <a className="nav-item nav-link disabled">About us</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
