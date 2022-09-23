import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";

const Coursedetails = () => {
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
    <div class="main-wrapper coursePage">
      <section class="course">
        <div class="wrapper">
          <h1 class="title-other">
            NFT Crypto Master Class: Buy, Sell and Create NFTs
          </h1>
          <div class="info-blocks">
            <div class="info-block">
              <div class="info-block__icon">
                <img src="img/course/icon-1.svg" alt="" />
              </div>
              <p class="info-block__text">
                6 hours <br />
                on-demand video
              </p>
            </div>
            <div class="info-block">
              <div class="info-block__icon">
                <img src="img/course/icon-2.svg" alt="" />
              </div>
              <p class="info-block__text">
                3 downloadable <br /> resources
              </p>
            </div>
            <div class="info-block">
              <div class="info-block__icon">
                <img src="img/course/icon-3.svg" alt="" />
              </div>
              <p class="info-block__text">1 article</p>
            </div>
          </div>

          <div class="video">
            <iframe
              class="video-block"
              src="https://www.youtube.com/embed/3jT_q7dt-cM"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div class="content">
            <h4>// Description</h4>

            <p>
              Do you want to make money out of the NFT Crypto market? This is
              the right Non-Fungible Tokens course for you! Welcome to the
              Complete NFT Crypto course! The only course you need to learn how
              to Create NFT, Buy NFT, and Sell NFTs.
              <br></br>
              Even if you have zero experience with the Crypto NFT market, this
              NFT course will take you from beginner to mastery. Here's why:
            </p>
            <ul>
              <li>
                the course is taught by the lead instructor from Trading
                Academy, who has over 10 years of experience in the Crypto
                market
              </li>
              <li>
                you will learn how to get started from scratch on the NFT market
                up until you upload your first 10000 NFT collection
              </li>
              <li>
                yes, you will see how to design, create and upload 10000 NFTs on
                Opensea (digital NFT art)
              </li>
              <li>
                actual examples of using a wallet, transferring crypto, creating
                NFT, and purchasing NFTs (Non-Fungible Tokens)
              </li>
              <li>
                the curriculum follows a logical sequence, so it will be easy
                for you to follow along with the whole NFT crypto course
              </li>
              <li>
                you will save tons of time searching the internet for the best
                practices of how to participate in the NFT market
              </li>
              <li>
                you will save tons of time searching the internet for the best
                practices of how to participate in the NFT market
              </li>
              <li>
                more will get familiar with the platforms Cryptokitties,
                Decentraland, Rarible, F1 Delta Time, Solana.
              </li>
              <li>
                This NFT Course will give you a clear understanding of this
                phenomenal new niche!
              </li>
            </ul>

            <h4>// Who this course is for:</h4>

            <ul>
              <li>Everyone who wants to learn more about NFTs</li>
              <li>Investors who have hard times choosing the right NFT art</li>
              <li>
                Crypto Traders who want to profit from NFTs (flipping NFTs)
              </li>
              <li>
                NFT Artists who want to market their pieces of digital art
              </li>
            </ul>

            <h1 href="#" class="default-button button">
              join to this course
            </h1>

            <h1 href="#" class="default-button button disabled">
              join to this course
            </h1>

            <p class="button-description">
              only for <span class="orange">token holders</span>
            </p>
          </div>
        </div>
      </section>
      <Swiperslider />
    </div>
  );
};

export default Coursedetails;
