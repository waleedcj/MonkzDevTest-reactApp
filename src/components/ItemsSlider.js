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
import Nextbtn from "./Nextbtn";
import Prevbtn from "./Prevbtn";
SwiperCore.use([Mousewheel, Pagination]);

const ItemsSlider = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  const SwiperRef = useRef(null);

  const next = () => {
    SwiperRef.current?.swiper.slideNext();
  };

  const prev = () => {
    SwiperRef.current?.swiper.slidePrev();
  };

  return (
    <div>
      <div className="monks-swiper swiper">
        <div
          className="monks-swiper__navigation wow fadeIn"
          data-wow-duration=".7s"
          data-wow-delay=".5s"
        >
          <div className="monks-swiper__button-prev monks-swiper__button button white">
            <a onClick={() => prev()}>
              <Prevbtn />
            </a>
          </div>
          <div className="monks-swiper__button-next monks-swiper__button button white">
            <a onClick={() => next()}>
              <Nextbtn />
            </a>
          </div>
        </div>

        <div className="swiper-wrapper">
          <Swiper
            ref={SwiperRef}
            spaceBetween={0}
            slidesPerView={1}
            //mousewheel={true}
            loop={true}
            //direction={"vertical"}
            initialSlide={0}
          >
            <SwiperSlide>
              <div className="swiper-slide monks-slide">
                <div className="monks-slide__top">
                  <p className="monks-slide__title">PFP Monks</p>
                </div>
                <div className="monks-slide__img">
                  <img src="img/items/img.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide monks-slide">
                <div className="monks-slide__top">
                  <p className="monks-slide__title">ancient monk</p>
                </div>
                <div className="monks-slide__img">
                  <img src="img/items/img.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide monks-slide">
                <div className="monks-slide__top">
                  <p className="monks-slide__title">modern monk</p>
                </div>
                <div className="monks-slide__img">
                  <img src="img/items/img.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide monks-slide">
                <div className="monks-slide__top">
                  <p className="monks-slide__title">future monk</p>
                </div>
                <div className="monks-slide__img">
                  <img src="img/items/img.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ItemsSlider;
