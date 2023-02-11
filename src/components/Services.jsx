import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="carousel">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src="/img1.jpg" alt="slide1" />
          <p className="legend">Cyber Security</p>
        </div>

        <div>
          <img src="/img2.jpg" alt="slide2" />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img src="/img3.jpg" alt="slide3" />
          <p className="legend">Artificial Intelligence</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
