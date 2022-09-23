import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

const Header = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  const [header, setHeader] = useState(false);

  const changeClass = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 150) {
      setHeader(true);
      // console.log("it reaches href the image");
      // console.log(scrollValue);
    } else if (scrollValue < 100) {
      setHeader(false);
      //console.log(scrollValue, "not okay");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeClass);
    return () => window.removeEventListener("scroll", changeClass);
  });
  return (
    <header className={`${header ? "headerFixed header" : "header"}`}>
      <Helmet>
        <style>
          {
            "body { background-color: #1e0000; } zIndex: -1" /* changed the color of the background */
          }
        </style>
      </Helmet>
      <div className="wrapper">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="img/main/logo.png" alt="" />
          </Link>
          <ul className="header-list">
            <li
              className="header-list__item button"
              data-section="aboutSection"
            >
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#About">
                About
              </a>
            </li>
            <li
              className="header-list__item button"
              data-section="specsSection"
            >
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#Specs">
                Specs
              </a>
            </li>
            <li
              className="header-list__item button manifestoItemMenu"
              data-section="manifestoSection"
            >
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#Manifesto">
                Manifesto
              </a>
            </li>
            <li className="header-list__item button" data-section="ascension">
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#Ascension">
                Ascension
              </a>
            </li>

            <li className="header-list__item button" data-section="team">
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#Team">
                Team
              </a>
            </li>
            <li className="header-list__item button" data-section="roadmap">
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <a className="ga" href="#Roadmap">
                Roadmap
              </a>
            </li>
            <li
              className="header-list__item button"
              data-section="aboutSection"
            >
              <span className="square square-1-1"></span>
              <span className="square square-1-2"></span>
              <span className="square square-1-3"></span>
              <span className="square square-2-1"></span>
              <span className="square square-2-2"></span>
              <span className="square square-2-3"></span>
              <span className="square square-3-1"></span>
              <span className="square square-3-2"></span>
              <span className="square square-3-3"></span>
              <span className="square square-4-1"></span>
              <span className="square square-4-2"></span>
              <span className="square square-4-3"></span>
              <Link className="ga" to="/Pages">
                add-Pages
              </Link>
            </li>
          </ul>
          <div className="header-button__menu">
            <div className="header-line header-line1"></div>
            <div className="header-line header-line2"></div>
            <div className="header-line header-line3"></div>
          </div>
          <div className="header-mobile__menu">
            <div className="header-mobile__block">
              <ul className="header-list">
                <li
                  className="header-list__item button closeMenu"
                  data-section="aboutSection"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#About">
                    About
                  </a>
                </li>
                <li
                  className="header-list__item button closeMenu"
                  data-section="specsSection"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#Specs">
                    Specs
                  </a>
                </li>
                <li
                  className="header-list__item button closeMenu"
                  data-section="manifestoSection"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#Manifesto">
                    Manifesto
                  </a>
                </li>
                <li
                  className="header-list__item button closeMenu"
                  data-section="ascension"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#Ascension">
                    Ascension
                  </a>
                </li>
                <li
                  className="header-list__item button closeMenu"
                  data-section="team"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#Team">
                    Team
                  </a>
                </li>
                <li
                  className="header-list__item button closeMenu"
                  data-section="roadmap"
                >
                  <span className="square square-1-1"></span>
                  <span className="square square-1-2"></span>
                  <span className="square square-1-3"></span>
                  <span className="square square-2-1"></span>
                  <span className="square square-2-2"></span>
                  <span className="square square-2-3"></span>
                  <span className="square square-3-1"></span>
                  <span className="square square-3-2"></span>
                  <span className="square square-3-3"></span>
                  <span className="square square-4-1"></span>
                  <span className="square square-4-2"></span>
                  <span className="square square-4-3"></span>
                  <a className="ga" href="#Roadmap">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
