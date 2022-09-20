import React, { useRef, useState, useEffect } from "react";
import ManLogo from "../components/ManLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WOW from "wowjs";
import "../css/animate.css";
import { useInView } from "react-intersection-observer";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Mousewheel, Pagination]);

const Manifest = () => {
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
      <section className="manifestoSection">
        <div className="wrapper">
          <h4
            className="subtitle wow fadeInDown"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            Manifesto
          </h4>
          <h2
            className="title wow fadeInDown"
            data-wow-duration=".7s"
            data-wow-delay=".5s"
          >
            CRYPTO MONK <br />
            MANIFESTO
          </h2>
          <div className="content">
            <div className="blocks">
              <div className="blocks-text blocks-text-left">
                <p data-text="1">
                  We are Crypto Monks. A new breed of investor. Wiser. Faster.
                  Stronger. And FREE… <br></br>
                  Crypto Monks care more about creating things that last, then
                  losing things that don’t.{" "}
                </p>
                <p data-text="3">
                  Crypto Monks wage war against the pump and dumpers - and win.{" "}
                  <br></br>
                  Crypto Monks are the diamond hands behind the projects you
                  love.
                </p>
                <p data-text="5">
                  Crypto Monks believe crypto is the currency of the new
                  economy. Because we don’t just use crypto currency. <br></br>
                  We ARE crypto currency.
                </p>
              </div>
              <div className="image section" data-section="manifestoSection">
                <ManLogo />

                <div className="step" data-step="2">
                  <img src="img/main/manifesto/step2.png" alt="" />
                </div>
                <div className="step" data-step="3">
                  <img src="img/main/manifesto/step3.png" alt="" />
                </div>
                <div className="step" data-step="4">
                  <img src="img/main/manifesto/step4.png" alt="" />
                </div>
                <div className="step" data-step="5">
                  <img src="img/main/manifesto/step5.png" alt="" />
                </div>
                <div className="image-lines">
                  <div className="line" data-line="1">
                    <img src="img/main/manifesto/lines1.png" alt="" />
                  </div>
                  <div className="line" data-line="2">
                    <img src="img/main/manifesto/lines2.png" alt="" />
                  </div>
                  <div className="line" data-line="3">
                    <img src="img/main/manifesto/lines3.png" alt="" />
                  </div>
                  <div className="line" data-line="4">
                    <img src="img/main/manifesto/lines4.png" alt="" />
                  </div>
                  <div className="line" data-line="5">
                    <img src="img/main/manifesto/lines5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="blocks-text blocks-text-right light">
                <p data-text="2">
                  Crypto Monks understand that behind each trade comes with a
                  risk and a reward & each of those matters. <br></br>
                  Crypto Monks see crypto projects as an art form & charts as
                  the canvas.{" "}
                </p>
                <p data-text="4">
                  Crypto Monks combine the digital world of NFT’s with the real
                  world of physical assets and community. <br></br>
                  Crypto Monks define their own destiny, create their own luck,
                  and build their own empires. If you ask the MBA’s or look at
                  finance textbooks, they’ll tell you what Crypto Monks are
                  doing is impossible; Yet it’s happening every day.{" "}
                </p>
              </div>
            </div>
            <div className="main-texts">
              <p className="main-texts__first">...I am a</p>
              <h2 className="main-texts__title">
                <span>c</span>
                <span>r</span>
                <span>y</span>
                <span>p</span>
                <span>t</span>
                <span>o</span>
              </h2>
              <p className="main-texts__last">monk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifest;
