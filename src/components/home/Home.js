import About from "../about/About";
import Catalogue from "../catalogue/Catalogue";
import Contact from "../contact/Contact";
import CoverPage from "../cover-page/CoverPage";
import { FiArrowUpCircle } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";
import Top from "../top/Top";

const Home = () => {
  let progress = 0
  window.addEventListener("wheel", (e) => { 
    progress += e.deltaY;
    let background = document.querySelector(".sections");
    //background.style.background = `linear-gradient(to left, #4A00E0 ${progress/5}%, #8E2DE2 100%)`;
  })
  return (
    <div className="sections">
      <CoverPage/>
      <About/>
      <Top/>
      <Catalogue/>
      <Contact/>
      <Link to="/#cover-page" className="top">
        <FiArrowUpCircle/>
      </Link>
    </div>
  );
};

export default Home;
