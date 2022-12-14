//front page of monks will go here
import React, { useEffect, useState, useRef } from "react";
import WOW from "wowjs";
import "../css/animate.css";
import { Parallax, Background } from "react-parallax";

//import "../js/common";
//import "animate.css";
//import "animate.css";

const Cover = () => {
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
      <section className="mainSection section" data-section="mainSection">
        <Parallax
          bgImage={"img/main/mainSection/build.png"}
          bgImageSize={50}
          strength={500}
        >
          <div className="wrapper">
            <h1 className="title">
              <span className=" title title-top ">
                <span
                  className="left wow fadeInLeft "
                  data-wow-duration=".8s"
                  data-wow-delay=".5s"
                >
                  Cry
                </span>
                <span
                  className="rigth wow fadeInRight"
                  data-wow-duration=".8s"
                  data-wow-delay=".5s"
                >
                  pto
                </span>
              </span>

              <span className="title-bottom">
                <span
                  className="left wow fadeInLeft"
                  data-wow-duration=".8s"
                  data-wow-delay=".7s"
                >
                  <img
                    src={"img/main/mainSection/title-img-part1.svg"}
                    alt=""
                  />
                </span>
                <span
                  className="rigth wow fadeInRight"
                  data-wow-duration=".8s"
                  data-wow-delay=".7s"
                >
                  <img
                    src={"img/main/mainSection/title-img-part2.svg"}
                    alt=""
                  />
                </span>
              </span>
            </h1>

            <div className="men">
              <div
                className="man man-1 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <img src={"img/main/mainSection/man1.png"} alt="" />
              </div>
              <div
                className="man man-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <img src={"img/main/mainSection/man2.png"} alt="" />
              </div>
              <div
                className="man man-3 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <img src={"img/main/mainSection/man3.png"} alt="" />
              </div>
              <div
                className="man man-4 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <img src={"img/main/mainSection/man4.png"} alt="" />
              </div>
              <div
                className="man man-5 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <img src={"img/main/mainSection/man5.png"} alt="" />
              </div>
              <div
                className="man man-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <img src={"img/main/mainSection/man6.png"} alt="" />
              </div>
            </div>
            <div className="bottom">
              <div
                className="block-timer wow fadeIn"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <h4 className="block-timer__title">Days till mint</h4>
                <div className="timer" data-time="feb 5 2022 16:24:00">
                  <span id="hours"></span>:<span id="minutes"></span>:
                  <span id="seconds"></span>
                </div>
              </div>
              <div
                className="lines wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <img src={"img/main/mainSection/lines.png"} alt="" />
              </div>
              <div className="socials">
                <a
                  href="https://discord.gg/cryptomonkz"
                  target="_blank"
                  className="social wow fadeInLeft button"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <img src={"img/main/socials/discord.svg"} alt="" />
                </a>
                <a
                  href="https://twitter.com/CryptoMonkzNFT"
                  target="_blank"
                  className="social wow fadeInLeft button"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <img src={"img/main/socials/twitter.svg"} alt="" />
                </a>
                <a
                  href="https://discord.gg/cryptomonkz"
                  target="_blank"
                  className="social wow fadeInRight button"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <img src="img/main/socials/instagram.svg" alt="" />
                </a>
                <a
                  href="https://www.tiktok.com/@cryptomonkznft"
                  target="_blank"
                  className="social wow fadeInRight button"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <img src={"img/main/socials/tiktok.svg"} alt="" />
                </a>
              </div>
            </div>
            <div
              className="wow fadeInUp build"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            ></div>
          </div>
        </Parallax>
      </section>
    </div>
  );
};

export default Cover;
