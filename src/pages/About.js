import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "../css/animate.css";
import Typewriter from "typewriter-effect";
import { Parallax, Background } from "react-parallax";

const About = () => {
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
      <section className="aboutSection section" data-section="aboutSection">
        <div className="wrapper">
          <h4
            className="subtitle wow fadeIn"
            data-wow-duration=".7s"
            data-wow-delay=".3s"
          >
            About
          </h4>
          <h2 className="title">
            <span
              className="wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              Crypto
            </span>{" "}
            <br />
            <span
              className="wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".7s"
            >
              monkz
            </span>{" "}
            <br />
            <span
              className="wow fadeIn"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              collection
            </span>
          </h2>
          <div className="content">
            <div className="block-infos">
              <div className="block-info">
                <h3
                  className="block-title wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".3s"
                >
                  0.08
                </h3>
                <p
                  className="block-subtitle wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  ETH
                </p>
              </div>
              <div className="block-info">
                <h3
                  className="block-title wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".3s"
                >
                  150
                </h3>
                <p
                  className="block-subtitle wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  traits
                </p>
              </div>
            </div>
            <div className="block-texts ">
              <p className="block-text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    strings: [
                      "Crypto Monkz is a collection of 3,333 metaverse warriors.  on the Ethereum blockchain and battle for control.",
                    ],
                  }}
                />
                <br />
                <br />

                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 10,
                    strings: [
                      "Your Crypto Monkz grants you access to members-only benefits,the first of which is access to our Alpha Discord composed of  some of the smartest minds in the space and a combined total of some of the smartest minds in the space and a combined total of" +
                        "over $30mm in NFT Sales.",
                    ],
                  }}
                />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="number num">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["3,333"],
              }}
            />
          </div>
          <div className="bottom">
            <p
              className="wow fadeInLeft "
              data-wow-duration=".7s"
              data-wow-delay=".3s"
            >
              total supply of unique monkz
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div
              className="avatars wow flip"
              data-wow-duration="1.4s"
              data-wow-delay=".6s"
            >
              <div
                className=" avatar-1  "
                data-wow-duration="s"
                data-wow-delay=".6s"
              >
                <img src={"img/main/about/avatar1.png"} alt="" />
              </div>
              <div className=" avatar-2">
                <img src={"img/main/about/avatar2.png"} alt="" />
              </div>
              <div className=" avatar-3">
                <img src={"img/main/about/avatar3.png"} alt="" />
              </div>
              <div className="avatar-4">
                <img src={"img/main/about/avatar4.png"} alt="" />
              </div>
              <div className=" avatar-5">
                <img src={"img/main/about/avatar5.png"} alt="" />
              </div>
              <div className=" avatar-6">
                <img src={"img/main/about/avatar6.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section utilitySection">
        <div className="wrapper">
          <h2
            className="title wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".3s"
          >
            Utility
          </h2>
          <p
            className="text wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".3s"
          >
            Being Enlightened, a powerful new state of mind is unlocked to all
            Monkz, which will grant Monkz:
          </p>
          <p
            className="text wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".5s"
          >
            The Knowledge of the Enlightened: Alpha incomparable to any other,
            with on and off chain data analytics dissecting the alpha
            information each Monk would need to become a blockchain warrior with
            fierce and intellectual selection of investments of NFTs, cryptos,
            and liquidity pools
          </p>
          <p
            className="text wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            The Tools of the Enlightened: Alpha tools, created and utilized by
            those who have become Crypto Monkz. These tools will leverage on
            chain data to create stronger, faster, and more accurate investment
            decisions.{" "}
          </p>
          <p
            className="text wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".9s"
          >
            Access to Ascension: The Ascension DAO format will be unlike any
            other. With the idea in mind of disrupting the issue all DAOs have,
            the tragedy of the commons and anti-commons, the feudalistic DAO
            format will encourage a unique investment and participation method
            to ensure the success of those involved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
