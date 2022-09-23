import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "../css/animate.css";
import Typewriter from "typewriter-effect";
import { Parallax, Background } from "react-parallax";

const Header2 = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);
  return (
    <div>
      <header className="header nofixed">
        <div className="wrapper">
          <div
            className="header-content wow fadeIn"
            data-wow-duration=".7s"
            data-wow-delay=".3s"
          >
            <a href="#" className="logo">
              <img src="img/main/logo.png" alt="" />
            </a>
            <ul className="header-list">
              <a href="#" className="header-list__item button">
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
                gallery
              </a>
              <a
                href="education.html"
                className="header-list__item button active"
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
                education
              </a>
              <a
                href="blog.html"
                className="header-list__item button manifestoItemMenu"
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
                blog
              </a>
              <a href="#" className="header-list__item button">
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
                calendar
              </a>
              <a href="roadmap.html" className="header-list__item button">
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
                roadmap
              </a>
              <div className="header-dropdown button">
                <div className="header-dropdown__button">
                  <p>factions</p>
                  <div className="header-dropdown__arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 7.5L10 13.75L3.75 7.5"
                        stroke="#DD4040"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="header-dropdown__menu">
                  <a href="#" className="header-list__item button">
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    factions
                  </a>
                  <a href="#" className="header-list__item button">
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
                    factions2
                  </a>
                </div>
              </div>

              <a href="modalChoose.html" className="header-list__item button">
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
                swap
              </a>
            </ul>
            <div className="header-button__menu">
              <div className="header-line header-line1"></div>
              <div className="header-line header-line2"></div>
              <div className="header-line header-line3"></div>
            </div>
            <div className="header-mobile__menu">
              <div className="header-mobile__block">
                <ul className="header-list">
                  <a href="#" className="header-list__item button closeMenu">
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
                    gallery
                  </a>
                  <a
                    href="education.html"
                    className="header-list__item button closeMenu active"
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
                    education
                  </a>
                  <a
                    href="blog.html"
                    className="header-list__item button closeMenu"
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
                    blog
                  </a>
                  <a href="#" className="header-list__item button closeMenu">
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
                    calendar
                  </a>
                  <a
                    href="roadmap.html"
                    className="header-list__item button closeMenu"
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
                    roadmap
                  </a>
                  <div className="header-dropdown button">
                    <div className="header-dropdown__button">
                      <p>factions</p>
                      <div className="header-dropdown__arrow">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.25 7.5L10 13.75L3.75 7.5"
                            stroke="#DD4040"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="header-dropdown__menu">
                      <a
                        href="#"
                        className="header-list__item button closeMenu"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        factions
                      </a>
                      <a
                        href="#"
                        className="header-list__item button closeMenu"
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
                        factions2
                      </a>
                    </div>
                  </div>
                  <a
                    href="modalChoose.html"
                    className="header-list__item button closeMenu"
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
                    swap
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
