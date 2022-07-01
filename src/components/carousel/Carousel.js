import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

const Carousel = () => {
  return (
    <div id='carousel'>
        <ResponsiveCarousel 
            autoPlay
            infiniteLoop
            interval={2000}
            centerMode
            centerSlidePercentage={30}
            emulateTouch
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img alt="" src="./assets/btc.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="./assets/btc.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="./assets/btc.png" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="./assets/btc.png" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img alt="" src="./assets/btc.png" />
                <p className="legend">Legend 5</p>
            </div>
        </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
