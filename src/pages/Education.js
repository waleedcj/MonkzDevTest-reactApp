import React, { useRef, useState, useEffect } from "react";
import ManLogo from "../components/ManLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WOW from "wowjs";
import { useInView } from "react-intersection-observer";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Mousewheel, Pagination]);

const Education = () => {
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
      <div className="main-wrapper educationPage ">
        <section className="education">
          <div className="wrapper">
            <div className="top">
              <h1 className="title-other">education</h1>
              <div className="filters">
                <h1 className="filter active button">all</h1>
                <h1 className="filter button">free</h1>
                <h1 className="filter button">for token holders</h1>
              </div>
            </div>
            <div className="content">
              <div className="blocks courses-blocks">
                <div className="blocks-column">
                  <div href="#" className="block   ga1">
                    <div className="block-img">
                      <img src="img/education/img1.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Fundamentals (Buy, Create and Sell NFTs)
                    </h3>
                    <p className="block-text">
                      Learn the key elements of Non-Fungible Tokens including
                      how to buy, "mint" and sell NFTs for business, fun and
                      profit!
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#metaverse</div>
                      <div className="block-tag">#ethereum</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img4.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Artist Masterclass: Join The New World Of Digital
                      Art!{" "}
                    </h3>
                    <p className="block-text">
                      Join The Non-Fungible Token Revolution That Is Finally
                      Giving The Power Back To The Artists, and Creators.
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#ethereum</div>
                    </div>
                  </div>
                </div>

                <div className="blocks-column">
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img2.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // The Complete NFT Course - Learn Everything About NFTs
                    </h3>
                    <p className="block-text">
                      Learn about NFT use cases, NFT Smart Contracts, NFT
                      Minting, IPFS storage, Investing, Selling NFTs and NFT
                      Security
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img5.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Crypto Master Class: Buy, Sell and Create NFTs
                    </h3>
                    <p className="block-text">
                      Create NFT Collection of 10000 NFTs - Crypto NFT -
                      Non-Fungible Tokens - Opensea - MetaVerse - NFT Token -
                      Flipping NFTs
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                    </div>
                  </div>
                </div>

                <div className="blocks-column">
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img3.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT – NFTs Essentials Training Course 2022
                    </h3>
                    <p className="block-text">
                      The NFT Essentials course 2022 will teach beginners how to
                      create, buy, and sell NFTs
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>

                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img6.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // Creating Digital Art & Minting NFTs For Beginners
                    </h3>
                    <p className="block-text">
                      Get Started Creating Digital Art with Procreate & Minting
                      Non Fungible Tokens on OpenSea
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile">
                <div className="blocks courses-blocks">
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img1.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Fundamentals (Buy, Create and Sell NFTs)
                    </h3>
                    <p className="block-text">
                      Learn the key elements of Non-Fungible Tokens including
                      how to buy, "mint" and sell NFTs for business, fun and
                      profit!
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#metaverse</div>
                      <div className="block-tag">#ethereum</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img2.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // The Complete NFT Course - Learn Everything About NFTs
                    </h3>
                    <p className="block-text">
                      Learn about NFT use cases, NFT Smart Contracts, NFT
                      Minting, IPFS storage, Investing, Selling NFTs and NFT
                      Security
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img3.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT – NFTs Essentials Training Course 2022
                    </h3>
                    <p className="block-text">
                      The NFT Essentials course 2022 will teach beginners how to
                      create, buy, and sell NFTs
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img4.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Artist Masterclass: Join The New World Of Digital
                      Art!{" "}
                    </h3>
                    <p className="block-text">
                      Join The Non-Fungible Token Revolution That Is Finally
                      Giving The Power Back To The Artists, and Creators.
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#ethereum</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img5.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // NFT Crypto Master Class: Buy, Sell and Create NFTs
                    </h3>
                    <p className="block-text">
                      Create NFT Collection of 10000 NFTs - Crypto NFT -
                      Non-Fungible Tokens - Opensea - MetaVerse - NFT Token -
                      Flipping NFTs
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                    </div>
                  </div>
                  <div href="#" className="block button">
                    <div className="block-img">
                      <img src="img/education/img6.png" alt="" />
                    </div>
                    <h3 className="block-title">
                      // Creating Digital Art & Minting NFTs For Beginners
                    </h3>
                    <p className="block-text">
                      Get Started Creating Digital Art with Procreate & Minting
                      Non Fungible Tokens on OpenSea
                    </p>
                    <div className="block-tags">
                      <div className="block-tag">#dapp</div>
                      <div className="block-tag">#cryptocurrency</div>
                      <div className="block-tag">#blockchain</div>
                      <div className="block-tag">#ethereum</div>
                      <div className="block-tag">#bitcoin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
