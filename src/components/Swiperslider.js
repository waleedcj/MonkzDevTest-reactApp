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
import Nextbtn from "../components/Nextbtn";
import Prevbtn from "../components/Prevbtn";
SwiperCore.use([Mousewheel, Pagination]);

const Swiperslider = () => {
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
      <div class="main-wrapper coursePage">
        <section class="coursesSection ">
          <div class="wrapper">
            <div class="">
              <div class="courses-swiper__info">
                <h2 class="courses-swiper__title">
                  other <br /> courses
                </h2>
                <div
                  class="courses-swiper__navigation wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <div class="courses-swiper__button-prev courses-swiper__button button">
                    <a onClick={() => prev()}>
                      <Prevbtn />
                    </a>
                  </div>
                  <div class="courses-swiper__button-next courses-swiper__button button">
                    <a onClick={() => next()}>
                      <Nextbtn />
                    </a>
                  </div>
                </div>
              </div>
              <br></br>

              <div class="swiper courses-blocks">
                <div class="swiper-wrapper">
                  <Swiper
                    ref={SwiperRef}
                    spaceBetween={25}
                    slidesPerView={4}
                    //mousewheel={true}
                    loop={true}
                    //direction={"vertical"}
                    initialSlide={0}
                  >
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img1.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // NFT Fundamentals (Buy, Create and Sell NFTs)
                          </h3>
                          <p class="block-text">
                            Learn the key elements of Non-Fungible Tokens
                            including how to buy, "mint" and sell NFTs for
                            business, fun and profit!
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#metaverse</div>
                            <div class="block-tag">#ethereum</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img2.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // The Complete NFT Course - Learn Everything About
                            NFTs
                          </h3>
                          <p class="block-text">
                            Learn about NFT use cases, NFT Smart Contracts, NFT
                            Minting, IPFS storage, Investing, Selling NFTs and
                            NFT Security
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#dapp</div>
                            <div class="block-tag">#cryptocurrency</div>
                            <div class="block-tag">#blockchain</div>
                            <div class="block-tag">#ethereum</div>
                            <div class="block-tag">#bitcoin</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img3.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // NFT – NFTs Essentials Training Course 2022
                          </h3>
                          <p class="block-text">
                            The NFT Essentials course 2022 will teach beginners
                            how to create, buy, and sell NFTs
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#dapp</div>
                            <div class="block-tag">#cryptocurrency</div>
                            <div class="block-tag">#blockchain</div>
                            <div class="block-tag">#ethereum</div>
                            <div class="block-tag">#bitcoin</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img4.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // NFT Artist Masterclass: Join The New World Of
                            Digital Art!{" "}
                          </h3>
                          <p class="block-text">
                            Join The Non-Fungible Token Revolution That Is
                            Finally Giving The Power Back To The Artists, and
                            Creators.
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#cryptocurrency</div>
                            <div class="block-tag">#ethereum</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img5.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // NFT Crypto Master Class: Buy, Sell and Create
                            NFTs
                          </h3>
                          <p class="block-text">
                            Create NFT Collection of 10000 NFTs - Crypto NFT -
                            Non-Fungible Tokens - Opensea - MetaVerse - NFT
                            Token - Flipping NFTs
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#dapp</div>
                            <div class="block-tag">#cryptocurrency</div>
                            <div class="block-tag">#blockchain</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div href="#" class="block button">
                          <div class="block-img">
                            <img src="img/education/img6.png" alt="" />
                          </div>
                          <h3 class="block-title">
                            // Creating Digital Art & Minting NFTs For Beginners
                          </h3>
                          <p class="block-text">
                            Get Started Creating Digital Art with Procreate &
                            Minting Non Fungible Tokens on OpenSea
                          </p>
                          <div class="block-tags">
                            <div class="block-tag">#dapp</div>
                            <div class="block-tag">#cryptocurrency</div>
                            <div class="block-tag">#blockchain</div>
                            <div class="block-tag">#ethereum</div>
                            <div class="block-tag">#bitcoin</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Swiperslider;
