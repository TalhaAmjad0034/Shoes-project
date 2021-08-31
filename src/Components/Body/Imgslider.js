import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../../assets/thubnail-slider-img.png";
import "./Imgslider.css";

const Imgslider = () => {
  return (
    <OwlCarousel
      className="Imgslider"
      loop
      margin={30}
      items={4}
      autoplay
      autoplayTimeout={2000}
      autoplayHoverPause
      nav
      dots
      responsive={{
        0: {
          items: 1,
          nav: false,
        },
        400: {
          items: 2,
          nav: false,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 4,
        },
      }}
    >
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
      <div className="item">
        <img src={img} alt="Thumbnail" />
      </div>
    </OwlCarousel>
  );
};

export default Imgslider;
