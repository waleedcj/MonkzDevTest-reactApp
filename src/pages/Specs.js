import React, { useState, useEffect } from "react";
import WOW from "wowjs";
import "../css/animate.css";
import "../css/specs.css";
import Typewriter from "typewriter-effect";
import { Parallax, Background } from "react-parallax";
import Marquee from "react-fast-marquee";
import { data } from "jquery";

const advantages = [
  {
    question: "Enlightened Alpha",
    answer:
      "High level alpha group with some of the biggest market movers" +
      "and influencers in the space.",
    pic: "img/main/specs/advantages/icon1.png",
  },
  {
    question: "Feudalistic DAO",
    answer:
      "First-ever Feudalistic Dao where we battle for control. The" +
      "process of feudalistic gamified on-chain combat style election" +
      "is known as Ascension.",
    pic: "img/main/specs/advantages/icon2.png",
  },
  {
    question: "INCLUDED CONTRACT",
    answer: "Extensible contracts that include other NFT projects",
    pic: "img/main/specs/advantages/icon3.png",
  },
  {
    question: "Exclusive community",
    answer:
      " Exclusive community events games and experiences in the metaverse" +
      " (later V2s will release as playable characters in the" +
      " Metaverse and influencers in the space.",
    pic: "img/main/specs/advantages/icon4.png",
  },
  {
    question: "White list",
    answer:
      "High level alpha group with some of the biggest market movers" +
      "and influencers in the space.",
    pic: "img/main/specs/advantages/icon5.png",
  },
  {
    question: "Free mints",
    answer:
      "Will have some free mints for holders that come together with" +
      "your monk to increase utility and unlock our governance/utility" +
      "token $CHI and influencers in the space.",
    pic: "img/main/specs/advantages/icon6.png",
  },
];

const Specs = () => {
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

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
    //return i;
  };

  return (
    <div id="Specs">
      <section className="specsSection section" data-section="specsSection">
        <div className="wrapper">
          <h2
            className="title wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".5s"
          >
            Monkz Specs
          </h2>

          <h4
            className="block-subtitle wow fadeIn"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            // Unique NFT Monkz
          </h4>
          <p
            className="text specs-text wow fadeInUp"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            Each Crypto Monkz is a distinctive and programmatically generated
            NFT with over 150 current traits including weapons, expressions,
            clothing and more. All monks possess incredible features but some
            are rarer than others.
            <br></br>
            Monks are stored as ERC-1155 tokens on the Ethereum blockchain and
            hosted on 100% onchain.
          </p>
        </div>
        <div className="photosBlock">
          <Marquee
            pauseOnClick
            direction="left"
            speed={100}
            gradientColor={[30, 0, 0]}
          >
            <div className="photo">
              <img src="img/main/specs/img1.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img3.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img4.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img5.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img25.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img6.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img7.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img8.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img9.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img10.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img23.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img11.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img12.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img13.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img14.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img15.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img16.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img17.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img22.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img18.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img19.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img20.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img21.png" alt="" />
            </div>
          </Marquee>
          <Marquee
            pauseOnClick
            direction="right"
            speed={100}
            gradientColor={[30, 0, 0]}
          >
            <div className="photo">
              <img src="img/main/specs/img10.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img14.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img15.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img9.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img16.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img20.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img12.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img17.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img4.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img21.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img22.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img7.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img23.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img1.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img3.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img24.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img5.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img6.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img11.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img18.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img13.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img17.png" alt="" />
            </div>
            <div className="photo">
              <img src="img/main/specs/img8.png" alt="" />
            </div>
          </Marquee>
        </div>

        <></>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="wrapper">
          <div className="accordion"></div>
          {advantages.map((items, i) => (
            <div className="itemspec">
              <div className="advantages-icon">
                <a>
                  <img src={items.pic} onClick={() => toggle(i)} />
                </a>
              </div>
              <div className="titleSpec" onClick={() => toggle(i)}>
                <a>{items.question}</a>
              </div>

              <p
                className={
                  selected === i ? "contentSpec show " : " contentSpec"
                }
              >
                {items.answer}
              </p>
              <div className="advantages-line"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specs;
