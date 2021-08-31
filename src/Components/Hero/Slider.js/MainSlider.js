import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./MainSlider.css";
import Rightarrow from "../../../assets/hero-slider-right-arrow.png";
import Leftarrow from "../../../assets/hero-slider-leftt-arrow.png";
import Popup from "../Popup/Popup";

const MainSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const [popup, setPopup] = useState(false);

  const closePopup = () => {
    setPopup(false);
  };
  const openPopup = () => {
    setPopup(true);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const zeroHandler = () => {
    setCurrent(0);
  };
  const oneHandler = () => {
    setCurrent(1);
  };
  const twoHandler = () => {
    setCurrent(2);
  };
  const threeHandler = () => {
    setCurrent(3);
  };
  // const popupCloser = () => {
  //   setPopup(false);
  // };
  return (
    <>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slider active" : "slider"}
            key={index}
          >
            {popup && <Popup close={closePopup} />}
            <img
              onClick={prevSlide}
              className="leftarrow"
              src={Leftarrow}
              alt="left Arrow Icon"
            />
            <img
              onClick={nextSlide}
              className="rightarrow"
              src={Rightarrow}
              alt="Right Arrow Icon"
            />
            <div className="spanbox">
              <span
                onClick={zeroHandler}
                className={`spans ${current === 0 ? "active" : ""}`}
              ></span>
              <span
                onClick={oneHandler}
                className={`spans ${current === 1 ? "active" : ""}`}
              ></span>
              <span
                onClick={twoHandler}
                className={`spans ${current === 2 ? "active" : ""}`}
              ></span>
              <span
                onClick={threeHandler}
                className={`spans ${current === 3 ? "active" : ""}`}
              ></span>
            </div>
            {index === current && (
              <img
                className="backgroundImage"
                src={slide.Image}
                alt={slide.alt}
              />
            )}
            {index === current && (
              <div className="hero_typo">
                <h1>{slide.heading}</h1>
                <p>{slide.para}</p>
              </div>
            )}
            {index === current && (
              <div className="hero_img">
                <div className="playicon" onClick={openPopup}>
                  <img src={slide.playicon} alt="Play icon" />
                </div>
                <img
                  className="shoespic"
                  src={slide.frontimg}
                  alt={slide.alt}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MainSlider;
