import React, { useRef, useState, useEffect } from "react";
import WOW from "wowjs";

const Roadmap = () => {
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
    <div id="Roadmap">
      <section className="roadmapSection section" data-section="roadmap">
        <div className="wrapper">
          <h4
            className="subtitle wow fadeInDown"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            roadmap
          </h4>
          <h2
            className="title wow fadeInDown"
            data-wow-duration=".7s"
            data-wow-delay=".5s"
          >
            how to start collecting
          </h2>
          <div className="blocks">
            <div className="block red">
              <div className="block-info">
                <h4 className="block-subtitle">v1.0.0@alpha</h4>
                <h4 className="block-title">Community Development</h4>
              </div>
              <div className="block-items">
                <div className="block-item">
                  <div
                    className="block-item__num  wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>1.1</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Mint <span className="orange">3,333</span> Crypto Monkz as
                    the initial <span className="orange">Ascension</span>{" "}
                    participants and begin the development of the community.
                  </p>
                </div>
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>1.2</h1>
                    <br></br>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch Alpha Group on Discord for exclusive access.
                  </p>
                </div>
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    {" "}
                    <h1>1.3</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Free mints for holders that come together with your monk to
                    increase utility.
                  </p>
                </div>
              </div>
            </div>
            <div className="block green">
              <div className="block-info">
                <h4 className="block-subtitle">v2.0.0@beta </h4>
                <h4 className="block-title">
                  Ascension Growth & Decentralization
                </h4>
              </div>
              <div className="block-items">
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>2.1</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch the <span className="orange">Ascension</span> for
                    managing the directives of the community and the board of
                    directors.
                  </p>
                </div>
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1> 2.2</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch the <span className="orange">Ascension Vault</span>{" "}
                    for non Crypto Monkz NFT Projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="block purple">
              <div className="block-info">
                <h4 className="block-subtitle">v3.0.0@beta</h4>
                <h4 className="block-title">Economies of Scale</h4>
              </div>
              <div className="block-items">
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>3.1</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch the Ascension Corporations.
                  </p>
                </div>
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>3.2</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch Product / Marketplace.
                  </p>
                </div>
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1>3.3</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch The Tools of the Enlightened
                  </p>
                </div>
              </div>
            </div>
            <div className="block orange">
              <div className="block-info">
                <h4 className="block-subtitle">v4.0.0@beta</h4>
                <h4 className="block-title">Metaverse</h4>
              </div>
              <div className="block-items">
                <div className="block-item">
                  <div
                    className="block-item__num wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <h1> 4.1</h1>
                  </div>
                  <p
                    className="block-item__text wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Launch the V2 MetaVerse CryptoMonkz with voting and access
                    to accessories; V2’s will only be mintable by V1 CryptoMonkz
                    holders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
