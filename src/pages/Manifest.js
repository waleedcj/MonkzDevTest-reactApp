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

  //This section uses the mouse scroll number and hooks to change the css classes
  // to animate this while scrolling when the scrolling number increases to a certian point
  // the animation changes and it only changes when this particular page is visited using useInView
  //this is the only thing i could think atm
  const [man1, setman1] = useState(false);
  const [man2, setman2] = useState(false);
  const [man3, setman3] = useState(false);
  const [man4, setman4] = useState(false);
  const [man5, setman5] = useState(false);
  const [man6, setman6] = useState(false);
  const [man7, setman7] = useState(false);
  const [man8, setman8] = useState(false);

  const changeClass = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 7000 && myElementIsVisible1) {
      setman1(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman1(false);
      // console.log(scrollValue, "not okay");
    }
  };

  const changeClass2 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 7500 && myElementIsVisible2) {
      setman2(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman2(false);
      // console.log(scrollValue, "not okay");
    }
  };

  const changeClass3 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 7850 && myElementIsVisible3) {
      setman3(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman3(false);
      // console.log(scrollValue, "not okay");
    }
  };

  const changeClass4 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 8150 && myElementIsVisible3) {
      setman4(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman4(false);
      // console.log(scrollValue, "not okay");
    }
  };

  const changeClass5 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 8550 && myElementIsVisible3) {
      setman5(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman5(false);
      // console.log(scrollValue, "not okay");
    }
  };

  const changeClass6 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 9000 && myElementIsVisible3) {
      setman6(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman6(false);
      //  console.log(scrollValue, "not okay");
    }
  };

  const changeClass7 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 9300 && myElementIsVisible3) {
      setman7(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman7(false);
      //console.log(scrollValue, "not okay");
    }
  };

  const changeClass8 = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 9500 && myElementIsVisible3) {
      setman8(true);
      // console.log("it reaches to the image");
      // console.log(scrollValue);
    } else {
      setman8(false);
      //console.log(scrollValue, "not okay");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeClass);
    return () => window.removeEventListener("scroll", changeClass);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass2);
    return () => window.removeEventListener("scroll", changeClass2);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass3);
    return () => window.removeEventListener("scroll", changeClass3);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass4);
    return () => window.removeEventListener("scroll", changeClass4);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass5);
    return () => window.removeEventListener("scroll", changeClass5);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass6);
    return () => window.removeEventListener("scroll", changeClass6);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass7);
    return () => window.removeEventListener("scroll", changeClass7);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeClass8);
    return () => window.removeEventListener("scroll", changeClass8);
  });

  const { ref: img1, inView: myElementIsVisible1 } = useInView({});
  const { ref: img2, inView: myElementIsVisible2 } = useInView({});
  const { ref: img3, inView: myElementIsVisible3 } = useInView({});
  const { ref: img4, inView: myElementIsVisible4 } = useInView({});
  const { ref: img5, inView: myElementIsVisible5 } = useInView({});
  const { ref: text, inView: myElementIsVisible6 } = useInView({});

  // console.log(myElementIsVisible1 + " this is 1");
  // console.log(myElementIsVisible2 + " this is 2");
  // console.log(myElementIsVisible3 + " this is 3");
  // console.log(myElementIsVisible4 + " this is 4");
  // console.log(myElementIsVisible5 + " this is 5");

  return (
    <div id="Manifesto">
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
                <p
                  data-text="1"
                  className={`${man1 && window.scrollY < 7500 ? "active" : ""}`}
                >
                  We are Crypto Monks. A new breed of investor. Wiser. Faster.
                  Stronger. And FREE… <br></br>
                  Crypto Monks care more about creating things that last, then
                  losing things that don’t.{" "}
                </p>
                <p
                  data-text="3"
                  className={`${
                    man3 && window.scrollY > 7850 && window.scrollY < 8150
                      ? "active"
                      : ""
                  }`}
                >
                  Crypto Monks wage war against the pump and dumpers - and win.{" "}
                  <br></br>
                  Crypto Monks are the diamond hands behind the projects you
                  love.
                </p>
                <p
                  data-text="5"
                  className={`${man5 && window.scrollY > 8550 ? "active" : ""}`}
                >
                  Crypto Monks believe crypto is the currency of the new
                  economy. Because we don’t just use crypto currency. <br></br>
                  We ARE crypto currency.
                </p>
              </div>
              <div className="image section" data-section="manifestoSection">
                <div
                  ref={img1}
                  className={`${man1 ? "step active" : "step"}`}
                  data-step="1"
                >
                  {` ${myElementIsVisible1}`}
                  <ManLogo />
                </div>

                <div
                  ref={img2}
                  className={`${man2 ? "step active" : "step"}`}
                  data-step="2"
                >
                  {` ${myElementIsVisible2} `}
                  <img src="img/main/manifesto/step2.png" alt="" />
                </div>
                <div
                  ref={img3}
                  className={`${man3 ? "step active" : "step"}`}
                  data-step="3"
                >
                  {` ${myElementIsVisible3} `}
                  <img src="img/main/manifesto/step3.png" alt="" />
                </div>
                <div
                  ref={img4}
                  className={`${man4 ? "step active" : "step"}`}
                  data-step="4"
                >
                  {` ${myElementIsVisible4} `}
                  <img src="img/main/manifesto/step4.png" alt="" />
                </div>
                <div
                  ref={img5}
                  className={`${man5 ? "step active" : "step"}`}
                  data-step="5"
                >
                  {` ${myElementIsVisible5} `}
                  <img src="img/main/manifesto/step5.png" alt="" />
                </div>
                <div className="image-lines">
                  <div
                    className={`${
                      man1 && window.scrollY < 7500 ? "active line" : "line"
                    }`}
                    data-line="1"
                  >
                    <img src="img/main/manifesto/lines1.png" alt="" />
                  </div>
                  <div
                    className={`${
                      man2 && window.scrollY > 7500 && window.scrollY < 7850
                        ? "active line"
                        : "line"
                    }`}
                  >
                    <img src="img/main/manifesto/lines2.png" alt="" />
                  </div>
                  <div
                    className={`${
                      man3 && window.scrollY > 7850 && window.scrollY < 8150
                        ? "active line"
                        : "line"
                    }`}
                    data-line="3"
                  >
                    <img src="img/main/manifesto/lines3.png" alt="" />
                  </div>
                  <div
                    className={`${
                      man4 && window.scrollY > 8150 && window.scrollY < 8550
                        ? "active line"
                        : "line"
                    }`}
                    data-line="4"
                  >
                    <img src="img/main/manifesto/lines4.png" alt="" />
                  </div>
                  <div
                    className={`${
                      man5 && window.scrollY > 8550 ? "active line" : "line"
                    }`}
                    data-line="5"
                  >
                    <img src="img/main/manifesto/lines5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="blocks-text blocks-text-right light">
                <p
                  data-text="2"
                  className={`${
                    man2 && window.scrollY > 7500 && window.scrollY < 7850
                      ? "active"
                      : ""
                  }`}
                >
                  Crypto Monks understand that behind each trade comes with a
                  risk and a reward & each of those matters. <br></br>
                  Crypto Monks see crypto projects as an art form & charts as
                  the canvas.{" "}
                </p>
                <p
                  data-text="4"
                  className={`${
                    man4 && window.scrollY > 8150 && window.scrollY < 8550
                      ? "active"
                      : ""
                  }`}
                >
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
              <p
                className={`${
                  man6 && window.scrollY > 9000
                    ? "main-texts__first active"
                    : "main-texts__first"
                }`}
              >
                ...I am a
              </p>
              <h2
                className={`${
                  man7 && window.scrollY > 9300
                    ? "main-texts__title active"
                    : "main-texts__title"
                }`}
              >
                <span>c</span>
                <span>r</span>
                <span>y</span>
                <span>p</span>
                <span>t</span>
                <span>o</span>
              </h2>
              <p
                className={`${
                  man8 && window.scrollY > 9500
                    ? "main-texts__last active"
                    : "main-texts__last"
                }`}
              >
                monk
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifest;
