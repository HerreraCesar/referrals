import React, { useState } from "react";

import About from "../about/About";
import Catalogue from "../catalogue/Catalogue";
import Contact from "../contact/Contact";
import CoverPage from "../cover-page/CoverPage";
import { FiArrowUpCircle } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import Top from "../top/Top";

const Home = () => {
  const [isBottom, setIsBottom] = useState(true);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 2336) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  })
  return (
    <div className="sections">
      <CoverPage/>
      <Link to="/#cover-page" className="top" style={ isBottom ? {color: 'black'} : {color: 'white'}}>
        <FiArrowUpCircle/>
      </Link>
      <About/>
      <Top/>
      <Catalogue/>
      <Contact/>
    </div>
  );
};

export default Home;
