import React from "react";

import "./Twocards.css";
import img from "../../../assets/zig-zag-img-1.png";
import img2 from "../../../assets/zig-zag-img-2.png";

const Twocards = () => {
  return (
    <div className="twocards">
      <div className="twocards-1">
        <div className="img-1">
          <img src={img} alt="div" />
        </div>
        <div className="content-1 ">
          <div className="unskew">
            <h2>2019 national Champions crownded at reebok</h2>
            <p className="champs-p ">
              Membership has its perks. Joining ADIDAS means you can ract at
              your local tracks
            </p>
          </div>
        </div>
      </div>

      {/* ////////////////// */}

      <div className="twocards-1 order">
        <div className="img-1 order">
          <img src={img2} alt="div" />
        </div>
        <div className="content-1 order">
          <div className="unskew order">
            <h2>2019 national Champions crownded at reebok</h2>
            <p className="champs-p ">
              Membership has its perks. Joining ADIDAS means you can ract at
              your local tracks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twocards;
