import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";

const Lecture1 = () => {
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
    <div class="main-wrapper courseLecturePage">
      <section class="lecture">
        <div class="wrapper">
          <h1 class="title-other">lecture 1</h1>

          <div class="content">
            <h4>// NFT Crypto Master Class: Buy, Sell and Create NFTs</h4>
            <p>
              In fist lesson I won't tell you that you have to buy NFTs and join
              immediately, and I promise you that you can make quick profits.
              <br></br>
              This is an educational course that aims to teach you all the
              aspects of NFTs.
              <br></br>I will share all of my experience on how to look for
              valuable NFTs. I will give you tips on how to choose the artist if
              you want to buy NFTs, and what you need to keep in mind if you
              want to sell NFTs on your own or if you want to become an NFT
              artist.
              <br></br>I will take you step-by-step through engaging videos, and
              you will see the beauty of the NFT digital art.
              <br></br>
              <br></br>
              By the end of this lesson, you will feel comfortable in the NFT
              field, and you will be working on the platforms with ease.
              <br></br>I am confident that you will like the NFT course and
              offer a 30-day Money Back Guarantee. So if you decide that it was
              not the right one for you, you can always take advantage of that
              option.
            </p>

            <a href="#" download="" class="download-button button">
              <span class="icon">
                <img src="img/icons/pdf.svg" alt="" />
              </span>{" "}
              Lesson 1. Material of course
            </a>

            <div class="video">
              <iframe
                class="video-block"
                src="https://www.youtube.com/embed/3jT_q7dt-cM"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lecture1;
