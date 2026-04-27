import React from "react";
import { Link } from "react-router-dom";

const Navbars = function () {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-content">
          <div>
            <a href="https://www.qcc.cuny.edu/" target="_blank" rel="noreferrer">
              QCC
            </a>
          </div>

          <div className="btngroup">
            <Link to="/" className="btn">Home</Link>
            <Link to="/about" className="btn">About</Link>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbars;