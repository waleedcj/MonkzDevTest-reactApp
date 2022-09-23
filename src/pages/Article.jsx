import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";

const Article = () => {
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
    <div class="main-wrapper articlePage">
      <section class="article">
        <div class="wrapper">
          <h1 class="title-other">BAYC NFT Prices Pump and Dump</h1>
          <div class="author">
            <div class="author-avatar">
              <img src="img/course/avatar.png" alt="" />
            </div>
            <div class="author-name">
              christopher tatum
              <span class="position">// Cryptomonkz editor</span>
            </div>
            <div class="author-date">February 28, 2022</div>
          </div>

          <div class="content">
            <div>
              <img class="image" src="img/course/img-1.png" alt="" />
              <p class="text">
                The Bored Ape Yacht Club (BAYC) non-fungible token (NFT)
                collection’s new utility and governance token ApeCoin (APE) was
                airdropped to holders of NFTs in the BAYC ecosystem on Thursday,
                soaring in price as major exchanges rushed to list it.
                <br></br>
                At 10:13 UTC on Friday, APE traded at USD 14.61, up 41% for its
                first day of trading.
                <br></br>
                On OKX, one of the first major exchanges to list the token, APE
                immediately shot up in price upon listing, which happened at
                noon UTC time on Thursday. The price later stabilized around USD
                8. Overnight, the price again started to increase, reaching a
                high of just over USD 18 in early trading in Europe.
              </p>
            </div>

            <div class="quote">
              <span class="quote-symbol">“</span>
              <div class="quote-info">
                <p>
                  At 10:13 UTC on Friday, APE traded at USD 14.61, up 41% for
                  its first day of trading.
                  <br></br>
                  On OKX, one of the first major exchanges to list the token,
                  APE immediately shot up in price upon listing, which happened
                  at noon UTC time on Thursday. The price later stabilized
                  around USD 8. Overnight, the price again started to increase,
                  reaching a high of just over USD 18 in early trading in
                  Europe.
                  <br></br>
                  According to the ApeCoin DAO, owners of any NFT in the BAYC
                  ecosystem can claim their token allocations, with the number
                  of tokens varying depending on the specific NFTs owned.
                  <br></br>
                  NFT owners have 90 days starting from Thursday to claim their
                  tokens, the DAO said.
                </p>
                <p class="quote-description">ApeCoin, Twitter</p>
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

            <p class="text">
              Following the release of the tokens, the floor prices of the three
              NFT collections in the BAYC ecosystem spiked, before falling back
              down again.
              <br></br>
              The three collections in the ecosystem include the main Bored Ape
              Yacht Club (BAYC), in addition to Mutant Ape Yacht Club (MAYC),
              and Bored Ape Kennel Club (BAKC).
              <br></br>
              Among these, the fall in the price was particularly heavy for BAKC
              as investors realized that NFTs from this collection had to be
              paired with one or more NFTs from BAYC or MAYC to be eligible for
              the token claim.
              <br></br>
              Meanwhile, BAYC was the most resilient of the collections, with
              prices bouncing back relatively strongly after the initial drop.
            </p>

            <div class="image">
              <img src="img/course/img-2.png" alt="" />
            </div>

            <div class="quote">
              <span class="quote-symbol">“</span>
              <div class="quote-info">
                <p>
                  At 10:13 UTC on Friday, APE traded at USD 14.61, up 41% for
                  its first day of trading.
                  <br></br>
                  On OKX, one of the first major exchanges to list the token,
                  APE immediately shot up in price upon listing, which happened
                  at noon UTC time on Thursday. The price later stabilized
                  around USD 8. Overnight, the price again started to increase,
                  reaching a high of just over USD 18 in early trading in
                  Europe.
                  <br></br>
                  According to the ApeCoin DAO, owners of any NFT in the BAYC
                  ecosystem can claim their token allocations, with the number
                  of tokens varying depending on the specific NFTs owned.
                  <br></br>
                  NFT owners have 90 days starting from Thursday to claim their
                  tokens, the DAO said.
                </p>
                <p class="quote-description">ApeCoin, Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Swiperslider />
    </div>
  );
};

export default Article;
