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
import ReactPlayer from "react-player";
import Nextbtn from "../components/Nextbtn";
import Prevbtn from "../components/Prevbtn";
SwiperCore.use([Mousewheel, Pagination]);

const Team = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const Joshua = () => {
    setSelected(true);
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    SwiperRef.current?.swiper.slideTo(1);
    console.log("it is clicking joshua");
  };

  const pj = () => {
    setSelected1(true);
    setSelected2(false);
    setSelected(false);
    setSelected3(false);
    SwiperRef.current?.swiper.slideTo(2);
    console.log("it is clicking pj");
  };

  const jang = () => {
    setSelected2(true);
    setSelected(false);
    setSelected1(false);
    setSelected3(false);
    SwiperRef.current?.swiper.slideTo(3);
    console.log("it is clicking jang");
  };

  const Malachi = () => {
    setSelected3(true);
    setSelected2(false);
    setSelected(false);
    setSelected1(false);
    SwiperRef.current?.swiper.slideTo(0);
    console.log("it is clicking malachi");
  };

  const SwiperRef = useRef(null);

  const next = () => {
    SwiperRef.current?.swiper.slideNext();
  };

  const prev = () => {
    SwiperRef.current?.swiper.slidePrev();
  };

  return (
    <div id="Team">
      <section className="teamSection section" data-section="team">
        <div className="wrapper">
          <div className="top">
            <h4
              className="subtitle wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              team
            </h4>
            <h2
              className="title wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".7s"
            >
              MONKz <br />
              creators
            </h2>
            <div
              className="teamSwiper-navigation wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="teamSwiper-button-prev teamSwiper-button button">
                <a onClick={() => prev()}>
                  <Prevbtn />
                </a>
              </div>
              <div className="teamSwiper-button-next teamSwiper-button button">
                <a onClick={() => next()}>
                  <Nextbtn />
                </a>
              </div>
            </div>
          </div>

          <Swiper
            ref={SwiperRef}
            spaceBetween={0}
            slidesPerView={1}
            //mousewheel={true}
            loop={true}
            //direction={"vertical"}
            initialSlide={0}
          >
            <div
              className="teamSwiper wow fadeInLeft"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team-slide">
                        <div className="team-left">
                          <p className="team-text">
                            Joshua specializes in building online brands.
                            <br></br>
                            He’s the founder of Canvas Cultures, a print on
                            demand company for artists that has sold over $35
                            million in delivered art the last four years.
                          </p>
                          <h4 className="team-info">
                            <span>Joshua Tatum </span>
                            <span className="orange">// Co-Founder</span>
                          </h4>
                        </div>
                        <div className="team-img">
                          <img src="img/main/teamSection/img1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team-slide">
                        <div className="team-left">
                          <p className="team-text">
                            Patrick is a leading high frequency fund & on chain
                            strategist who’s data science work has been featured
                            at the World Economic Forum in Davos. <br></br>{" "}
                            Previously, Patrick built the world's largest social
                            analytics platform and is currently VP of a company
                            with over $4.5B in revenue
                          </p>
                          <h4 className="team-info">
                            <span>Patrick Gorrell</span>{" "}
                            <span className="orange">// Co-Founder</span>
                          </h4>
                        </div>
                        <div className="team-img">
                          <img src="img/main/teamSection/img4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team-slide">
                        <div className="team-left">
                          <p className="team-text">
                            Jang specializes in Affiliate Marketing. <br></br>{" "}
                            His last company he built out the front end
                            marketing system for an affiliate offer that was
                            responsible for over $100MM in Sales.
                          </p>
                          <h4 className="team-info">
                            <span>Mathieu Jang</span>{" "}
                            <span className="orange">// Co-Founder</span>
                          </h4>
                        </div>
                        <div className="team-img">
                          <img src="img/main/teamSection/img2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team-slide">
                        <div className="team-left">
                          <p className="team-text">
                            Malachi also known as is a 19 year old visual artist
                            known for his unique and creative take on pop
                            culture. <br></br> His works have been featured on
                            ESPN and Complex Magazine and can be found in the
                            homes of many celebrities.
                          </p>
                          <h4 className="team-info">
                            <span>Malachi Wright</span>{" "}
                            <span className="orange">// Partnered Artist </span>
                          </h4>
                        </div>
                        <div className="team-img">
                          <img src="img/main/teamSection/img3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </div>
          </Swiper>
          <div
            className="teamPreviewSlider wow fadeInLeft"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            <div thumbsSlider="" className="swiper ">
              <div
                className={`swiper-slide ${
                  selected
                    ? "swiper-slide  swiper-slide-thumb-active"
                    : "swiper-slide"
                }`}
              >
                <img
                  src="img/main/teamSection/img1.png"
                  alt=""
                  onClick={() => Joshua()}
                />
              </div>
              <div
                className={`swiper-slide ${
                  selected1
                    ? "swiper-slide  swiper-slide-thumb-active"
                    : "swiper-slide"
                }`}
              >
                <img
                  src="img/main/teamSection/img4.png"
                  alt=""
                  onClick={() => pj()}
                />
              </div>
              <div
                className={`swiper-slide ${
                  selected2
                    ? "swiper-slide  swiper-slide-thumb-active"
                    : "swiper-slide"
                }`}
              >
                <img
                  src="img/main/teamSection/img2.png"
                  alt=""
                  onClick={() => jang()}
                />
              </div>
              <div
                className={`swiper-slide ${
                  selected3
                    ? "swiper-slide  swiper-slide-thumb-active"
                    : "swiper-slide"
                }`}
              >
                <img
                  src="img/main/teamSection/img3.png"
                  alt=""
                  onClick={() => Malachi()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
