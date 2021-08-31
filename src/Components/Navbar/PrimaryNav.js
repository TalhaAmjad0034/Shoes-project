import React, { useState } from "react";
import "./PrimaryNav.css";

import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.png";
import burgericon from "../../assets/burger-icon.png";

const PrimaryNav = () => {
  const [navopen, setNavOpen] = useState(false);

  const navHandler = () => {
    setNavOpen(!navopen);
  };

  return (
    <div className="primaryNav">
      <div className="adidas">
        <img
          onClick={navHandler}
          className="burger"
          src={burgericon}
          alt="Hamburger icon for opening navbar"
        />
        <div className="adidas-img">
          <img src={logo} alt="Adidas logo" />
        </div>

        <div className="adidas-buttons">
          <a className="btn" href="#">
            <span>membership</span>
          </a>
          <a className="btn" href="#">
            <span>Account</span>
          </a>
        </div>
      </div>

      <div className={`hider ${navopen ? "active" : ""}`}>
        <div className="links">
          <div className="actual-link">
            <a onClick={navHandler} className="link" href="#">
              <span>our tracks</span>
            </a>
            <a onClick={navHandler} className="link" href="#">
              <span>find events</span>
            </a>
            <a onClick={navHandler} className="link" href="#">
              <span>tack map</span>
            </a>
            <a onClick={navHandler} className="link" href="#">
              <span>shop</span>
            </a>
            <a onClick={navHandler} className="link" href="#">
              <span>about us</span>
            </a>
          </div>

          <div className="search">
            <input
              className="input-search"
              placeholder="SEARCH"
              type="search"
            />
            <span class="search-span">
              <img src={search} alt="search icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
