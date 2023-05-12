import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpg";
const Slider = () => {
    return (
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={1000}
        >
          <div>
            <img src={img1} alt="Item1" width="500" height="600" />
            <p className="legend">image Slider</p>
          </div>
          <div>
            <img src={img2} alt="Item3"width="500" height="600" />
            <p className="legend">assignment no.4</p>
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default Slider;
  