import React, { useRef, useState, useEffect } from "react";
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

const Factions = () => {
  const { ref: SectionRef, inView: myElementIsVisible } = useInView({});
  //console.log(SectionRef);
  console.log(myElementIsVisible);

  //Toggle buttons on and off onClick
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);

  const daiko = () => {
    setSelected(true);
    setSelected1(false);
    setSelected2(false);
    SwiperRef.current?.swiper.slideTo(0);
    console.log("it is clicking daiko");
  };

  const ShuHaRi = () => {
    setSelected1(true);
    setSelected2(false);
    setSelected(false);
    SwiperRef.current?.swiper.slideTo(2);
    console.log("it is clicking ShuHaRi");
  };

  const Sohei = () => {
    setSelected2(true);
    setSelected(false);
    setSelected1(false);
    SwiperRef.current?.swiper.slideTo(1);
    console.log("it is clicking Sohei");
  };

  //Swiper.mousewheel.enable();

  useEffect(() => {
    // SectionRef.current.style.height = "100px";
    console.log("it reaches here");
  }, [myElementIsVisible]);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  //const ShuHaRi = () => {
  // if (SectionRef.current) {
  //   console.log("it is clicking in fraction");
  //   console.log(SectionRef);

  //   //SectionRef.current?.swiper.slideTo(2, 0);
  //   SectionRef.current.style.height = "8000px";

  // };

  //const SectionRef = useRef(null); //at the begining ref is null
  const daikoRef = useRef(null); //at the begining ref is null
  const ShuHaRiRef = useRef(null); //at the begining ref is null
  const SwiperRef = useRef(null); //at the begining ref is null

  // useEffect(() => {
  //   if (SectionRef.current) {
  //     SectionRef.current.scrollIntoView({
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       speed: 1000,
  //       allowTouchMove: false,
  //     });
  //   }
  // }, []);

  return (
    <div>
      <section className="fractionsSection section">
        <section className="fractionsSection section">
          <div className="wrapper">
            <div ref={SectionRef} className="fractions">
              {` ${myElementIsVisible}`}
              <div className="fractions-el fractions-el1"></div>
              <div className="fractions-el fractions-el2"></div>
              <div className="fractions-el fractions-el3"></div>
              <h2
                className="title wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".3s"
              >
                Factions
              </h2>
              <div className="fractions-swiper">
                <div className="content">
                  <div className="fractions-top ">
                    <div className="fractions-line"></div>
                    <div
                      className="fractions-swiperTop wow fadeInRight"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      <div className="swiper fractionsSwiper">
                        <div className="swiper-wrapper">
                          <div
                            ref={daikoRef}
                            className={`swiper-slide ${
                              selected ? "swiper-slide-active" : "swiper-slide"
                            }`}
                          >
                            <a>
                              <h2 className="button" onClick={() => daiko()}>
                                daiko
                              </h2>
                            </a>
                          </div>
                          <div
                            ref={ShuHaRiRef}
                            className={`swiper-slide ${
                              selected1 ? "swiper-slide-active" : "swiper-slide"
                            }`}
                          >
                            <h2 className="button" onClick={() => ShuHaRi()}>
                              ShuHaRi
                            </h2>
                          </div>
                          <div
                            ref={daikoRef}
                            className={`swiper-slide swiper-slide-3 ${
                              selected2
                                ? "swiper-slide-active"
                                : "swiper-slide swiper-slide-3"
                            }`}
                          >
                            <a>
                              <h2 className="button" onClick={() => Sohei()}>
                                Sohei
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fractions-line"></div>
                  </div>
                  <div className="fractions-swiperBottom">
                    <div
                      thumbsslider=""
                      className="swiper fractionsSwiper2  wow fadeInDown"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      <Swiper
                        ref={SwiperRef}
                        spaceBetween={0}
                        slidesPerView={1}
                        mousewheel={true}
                        loop={true}
                        direction={"vertical"}
                        initialSlide={2}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      Daiko is short for Daikokuten; the
                                      Japanese deity of fortune and wealth, the
                                      legacy of Daiko is embraced by the members
                                      of the faction.
                                      <br></br>
                                      The Daiko are a spiritual class of
                                      warriors who are empowered by the belief
                                      that fortune favors the prepared and
                                      eludes the unprepared.
                                      <br></br>
                                      The Daiko warriors have learned to never
                                      embrace defeat and to find a way to bring
                                      the pleasures of the mind into existence.
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">
                                      Perception is 9/10th of everything. How
                                      you are perceived is how you are judged.
                                      Old keys won’t open new doors. Break free
                                      from the resistance and embrace the
                                      future.
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Branding, Marketing, Business, Sales,
                                      Vision, Sponsorships, Collaborations,
                                      Merchandising, Training, Motivation
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Branding, Merchants
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      The ShuHaRi are an excessively disciplined
                                      faction of warriors that are under a
                                      constant state of improvement.
                                      <br></br>
                                      The ShuHaRi believe in a cult-like mental
                                      state seeking mastery and absolute power.
                                      Little is known about the history of the
                                      ShuHaRi as they tend to operate in the
                                      shadows.
                                      <br></br>
                                      The ShuHari are a terrifying yet effective
                                      class of monks who have an idolization of
                                      survival through ruthless aggression.{" "}
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">We are ShuHaRi</p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Trade, Analytics, Engineering, Strategy,
                                      Minting, Banking, Hacking, Education
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Treasure, Factory
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      Warriors directly descended from a history
                                      of power and influence, the Sohei utilize
                                      political influence and immense spiritual
                                      authority to control the members of their
                                      faction.
                                      <br></br>
                                      The Shohei are an influential class of
                                      warriors who believe that power is forged
                                      in the masses.
                                      <br></br>
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">
                                      To connect web3 enthusiasts and help them
                                      be more profitable with NFTs and liquidity
                                      pools leveraging exclusive alpha and on
                                      chain data.
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Strategic Alliances, Community,
                                      Collaborations, Administration,
                                      Advertising
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Access, Marketing
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Factions;
