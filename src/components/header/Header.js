import { FiSearch } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/#cover-page">Referidos.com</Link>
        </div>
        <div className="links">
          <Link to="/#about">
            About
          </Link>
          <Link to="/#top">
            Top
          </Link>
          <Link to="/#catalogue">
            Catalogue
          </Link>
          <Link to="/#contact">
            Contact
          </Link>
          <Link to="/search">
            <FiSearch/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
