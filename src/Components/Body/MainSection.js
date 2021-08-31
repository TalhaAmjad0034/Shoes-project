import React from "react";
import Champions from "./Champions/Champions";
import Imgslider from "./Imgslider";

import "./MainSection.css";
import Twocards from "./Twocards.js/Twocards";

const MainSection = () => {
  return (
    <div className="section">
      <div className="section_content">
        <div className="section_content-imgs">
          <Imgslider />
          <Champions />
          <Twocards />
        </div>
      </div>
      <div className="section_events">
        <span className="button">events</span>
        <div className="padder">
          <div className="after-btn">
            <div className="num">1</div>
            <div className="txt">
              <h2>Show in USA</h2>
              <p className="champs-p">USA</p>
            </div>
          </div>
          <div className="after-btn">
            <div className="num">2</div>
            <div className="txt">
              <h2>Adidas show in usa</h2>
              <p className="champs-p">USA</p>
            </div>
          </div>
          <div className="after-btn">
            <div className="num">3</div>
            <div className="txt">
              <h2>adidas show</h2>
              <p className="champs-p">USA</p>
            </div>
          </div>
          <div className="after-btn">
            <div className="num">4</div>
            <div className="txt">
              <h2>adidas in usa</h2>
              <p className="champs-p">USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
