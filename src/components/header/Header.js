import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })
  return (
    <div className="header" style={ isTop ? {height: 100} : {height: 60} }>
      <div className="navbar">
        <div className="logo">
          <Link to="/#cover-page">Referidos.com</Link>
        </div>
        <div className="links">
          <Link to="/#cover-page">
            Home
          </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
