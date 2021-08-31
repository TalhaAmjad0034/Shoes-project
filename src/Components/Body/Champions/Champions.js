import React from "react";

import "./Champions.css";
import img from "../../../assets/post-img.png";

const Champions = () => {
  return (
    <div className="champions">
      <div className="cards">
        <img src={img} alt="card" />
        <div className="padder">
          <h2>2019 national champions crowned at reebok</h2>
          <p className="champs-p">
            Membership has its perks. Joining ADIDAS means that you can race at
            your local tracks
          </p>
        </div>
        <span className="button">read more</span>
      </div>
      <div className="cards center">
        <img src={img} alt="card" />
        <div className="padder">
          <h2>2019 national champions crowned at reebok</h2>
          <p className="champs-p">
            Membership has its perks. Joining ADIDAS means that you can race at
            your local tracks
          </p>
        </div>
        <span className="button">read more</span>
      </div>
      <div className="cards">
        <img src={img} alt="card" />
        <div className="padder">
          <h2>2019 national champions crowned at reebok</h2>
          <p className="champs-p">
            Membership has its perks. Joining ADIDAS means that you can race at
            your local tracks
          </p>
        </div>
        <span className="button">read more</span>
      </div>
    </div>
  );
};

export default Champions;
