import React, { useState } from "react";

import partnership from "../../assets/reebok-logo.png";
import "./Hero.css";
import MainSlider from "./Slider.js/MainSlider";
import { SliderData } from "./Slider.js/SliderData";

const Hero = () => {
  return (
    <>
      {/* /////////////////////Our pre-hero section */}
      <div className="preHeader">
        <div className="homepage">
          <h1>Home Page</h1>
        </div>

        <div className="partner">
          <div className="position">
            <div>
              <p>Partnership by</p>
            </div>
            <div className="imgcontainer">
              <img src={partnership} alt="Our partner's brand logo" />
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////Main hero section */}
      <div className="hero">
        <MainSlider slides={SliderData} />
      </div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Jqf9haCd6mM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> */}
    </>
  );
};

export default Hero;
