import React from "react";
import "./Topbar.css";

import cross from "../../assets/x-mark.png";

const Topbar = (props) => {
  return (
    <div className="topbar">
      live race stream from gator nationals in sarasota, fl /{" "}
      <span>watch now</span>
      <div onClick={props.OnClick} className="cross-container">
        <img src={cross} alt="button to hide notification" />
      </div>
    </div>
  );
};

export default Topbar;
