import React from "react";

const Home = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>Main page</title>
        <meta name="description" content="Site slogan" />
        <meta name="keywords" content="Site keys" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-navbutton-color" content="#fff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content="Site keys" />
        <meta property="og:description" content="Site slogan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="***permalink***" />
        <meta property="og:image" content="***img***" />
        <meta property="og:image:type" content="image/jpeg" />

        <link
          rel="manifest"
          href="manifest.json"
          crossOrigin="use-credentials"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="img/favicon/favicon-96x96.png"
        />

        <meta name="msapplication-config" content="browserconfig.xml" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="img/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="img/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="img/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="img/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/favicon/apple-icon-180x180.png"
        />

        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="date=no" />

        <link rel="stylesheet" href="libs/wow/animate.css" />
        <link rel="stylesheet" href="libs/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body className="body">
        <div className="cursor-wrapper"></div>

        <div>
          <header>
            <div className="wrapper">
              <div
                className="header-content wow fadeIn"
                data-wow-duration=".7s"
                data-wow-delay=".3s"
              >
                <a href="#" className="logo">
                  <img src="img/main/logo.png" alt="" />
                </a>
                <ul className="header-list">
                  <li
                    className="header-list__item button"
                    data-section="aboutSection"
                  >
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    About
                  </li>
                  <li
                    className="header-list__item button"
                    data-section="specsSection"
                  >
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    Specs
                  </li>
                  <li
                    className="header-list__item button manifestoItemMenu"
                    data-section="manifestoSection"
                  >
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    Manifesto
                  </li>
                  <li
                    className="header-list__item button"
                    data-section="ascension"
                  >
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    Ascension
                  </li>

                  <li className="header-list__item button" data-section="team">
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    Team
                  </li>
                  <li
                    className="header-list__item button"
                    data-section="roadmap"
                  >
                    <span className="square square-1-1"></span>
                    <span className="square square-1-2"></span>
                    <span className="square square-1-3"></span>
                    <span className="square square-2-1"></span>
                    <span className="square square-2-2"></span>
                    <span className="square square-2-3"></span>
                    <span className="square square-3-1"></span>
                    <span className="square square-3-2"></span>
                    <span className="square square-3-3"></span>
                    <span className="square square-4-1"></span>
                    <span className="square square-4-2"></span>
                    <span className="square square-4-3"></span>
                    Roadmap
                  </li>
                </ul>
                <div className="header-button__menu">
                  <div className="header-line header-line1"></div>
                  <div className="header-line header-line2"></div>
                  <div className="header-line header-line3"></div>
                </div>
                <div className="header-mobile__menu">
                  <div className="header-mobile__block">
                    <ul className="header-list">
                      <li
                        className="header-list__item button closeMenu"
                        data-section="aboutSection"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        About
                      </li>
                      <li
                        className="header-list__item button closeMenu"
                        data-section="specsSection"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Specs
                      </li>
                      <li
                        className="header-list__item button closeMenu"
                        data-section="manifestoSection"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Manifesto
                      </li>
                      <li
                        className="header-list__item button closeMenu"
                        data-section="ascension"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Ascension
                      </li>
                      <li
                        className="header-list__item button closeMenu"
                        data-section="team"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Team
                      </li>
                      <li
                        className="header-list__item button closeMenu"
                        data-section="roadmap"
                      >
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Roadmap
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            <section className="mainSection section" data-section="mainSection">
              <div className="wrapper">
                <h1 className="title">
                  <span className="title-top">
                    <span
                      className="left wow fadeInLeft"
                      data-wow-duration=".8s"
                      data-wow-delay=".5s"
                    >
                      Cry
                    </span>
                    <span
                      className="rigth wow fadeInRight"
                      data-wow-duration=".8s"
                      data-wow-delay=".5s"
                    >
                      pto
                    </span>
                  </span>
                  <span className="title-bottom">
                    <span
                      className="left wow fadeInLeft"
                      data-wow-duration=".8s"
                      data-wow-delay=".7s"
                    >
                      <img
                        src="img/main/mainSection/title-img-part1.svg"
                        alt=""
                      />
                    </span>
                    <span
                      className="rigth wow fadeInRight"
                      data-wow-duration=".8s"
                      data-wow-delay=".7s"
                    >
                      <img
                        src="img/main/mainSection/title-img-part2.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </h1>
                <div className="men">
                  <div
                    className="man man-1 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".9s"
                  >
                    <img src="img/main/mainSection/man1.png" alt="" />
                  </div>
                  <div
                    className="man man-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".7s"
                  >
                    <img src="img/main/mainSection/man2.png" alt="" />
                  </div>
                  <div
                    className="man man-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <img src="img/main/mainSection/man3.png" alt="" />
                  </div>
                  <div
                    className="man man-4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <img src="img/main/mainSection/man4.png" alt="" />
                  </div>
                  <div
                    className="man man-5 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".7s"
                  >
                    <img src="img/main/mainSection/man5.png" alt="" />
                  </div>
                  <div
                    className="man man-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".9s"
                  >
                    <img src="img/main/mainSection/man6.png" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div
                    className="block-timer wow fadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay=".9s"
                  >
                    <h4 className="block-timer__title">Days till mint</h4>
                    <div className="timer" data-time="feb 5 2022 16:24:00">
                      <span id="hours"></span>:<span id="minutes"></span>:
                      <span id="seconds"></span>
                    </div>
                  </div>
                  <div
                    className="lines wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s"
                  >
                    <img src="img/main/mainSection/lines.png" alt="" />
                  </div>
                  <div className="socials">
                    <a
                      href="https://discord.gg/cryptomonkz"
                      target="_blank"
                      className="social wow fadeInLeft button"
                      data-wow-duration=".7s"
                      data-wow-delay=".9s"
                    >
                      <img src="img/main/socials/discord.svg" alt="" />
                    </a>
                    <a
                      href="https://twitter.com/CryptoMonkzNFT"
                      target="_blank"
                      className="social wow fadeInLeft button"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      <img src="img/main/socials/twitter.svg" alt="" />
                    </a>
                    <a
                      href="https://discord.gg/cryptomonkz"
                      target="_blank"
                      className="social wow fadeInRight button"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      <img src="img/main/socials/instagram.svg" alt="" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@cryptomonkznft"
                      target="_blank"
                      className="social wow fadeInRight button"
                      data-wow-duration=".7s"
                      data-wow-delay=".9s"
                    >
                      <img src="img/main/socials/tiktok.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="build wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <img src="img/main/mainSection/build.png" alt="" />
              </div>
            </section>
            <section
              className="aboutSection section"
              data-section="aboutSection"
            >
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
                  <div className="block-texts">
                    <p className="block-text"></p>
                  </div>
                </div>
                <div className="number">
                  <span className="num">0</span>
                  <span className="num noNum"></span>
                  <span className="num"></span>
                  <span className="num"></span>
                </div>
                <div className="bottom">
                  <p
                    className="wow fadeInLeft"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    total supply of unique monkz
                  </p>
                  <div
                    className="avatars wow fadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <div className="avatar avatar-1">
                      <img src="img/main/about/avatar1.png" alt="" />
                    </div>
                    <div className="avatar avatar-2">
                      <img src="img/main/about/avatar2.png" alt="" />
                    </div>
                    <div className="avatar avatar-3">
                      <img src="img/main/about/avatar3.png" alt="" />
                    </div>
                    <div className="avatar avatar-4">
                      <img src="img/main/about/avatar4.png" alt="" />
                    </div>
                    <div className="avatar avatar-5">
                      <img src="img/main/about/avatar5.png" alt="" />
                    </div>
                    <div className="avatar avatar-6">
                      <img src="img/main/about/avatar6.png" alt="" />
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
                  Being Enlightened, a powerful new state of mind is unlocked to
                  all Monkz, which will grant Monkz:
                </p>
                <p
                  className="text wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  The Knowledge of the Enlightened: Alpha incomparable to any
                  other, with on and off chain data analytics dissecting the
                  alpha information each Monk would need to become a blockchain
                  warrior with fierce and intellectual selection of investments
                  of NFTs, cryptos, and liquidity pools
                </p>
                <p
                  className="text wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  The Tools of the Enlightened: Alpha tools, created and
                  utilized by those who have become Crypto Monkz. These tools
                  will leverage on chain data to create stronger, faster, and
                  more accurate investment decisions.{" "}
                </p>
                <p
                  className="text wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  Access to Ascension: The Ascension DAO format will be unlike
                  any other. With the idea in mind of disrupting the issue all
                  DAOs have, the tragedy of the commons and anti-commons, the
                  feudalistic DAO format will encourage a unique investment and
                  participation method to ensure the success of those involved.
                </p>
              </div>
            </section>
            <section
              className="specsSection section"
              data-section="specsSection"
            >
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
                  Each Crypto Monkz is a distinctive and programmatically
                  generated NFT with over 150 current traits including weapons,
                  expressions, clothing and more. All monks possess incredible
                  features but some are rarer than others.
                  <br></br>
                  Monks are stored as ERC-1155 tokens on the Ethereum blockchain
                  and hosted on 100% onchain.
                </p>
              </div>
              <div className="photosBlock">
                <div className="str-1 str_wrap">
                  &nbsp;
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
                </div>
                <div className="str-2 str_wrap">
                  &nbsp;
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
                </div>
              </div>
              <div className="wrapper">
                <div className="advantages">
                  <div className="advantages-block active button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon1.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>Enlightened Alpha</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      High level alpha group with some of the biggest market
                      movers and influencers in the space.{" "}
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                  <div className="advantages-block button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon2.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>Feudalistic DAO</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      First-ever Feudalistic Dao where we battle for control.
                      The process of feudalistic gamified on-chain combat style
                      election is known as Ascension.
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                  <div className="advantages-block button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon3.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>iNCLUDED CONTRACTS</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      Extensible contracts that include other NFT projects
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                  <div className="advantages-block button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon4.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>Exclusive community</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      Exclusive community events games and experiences in the
                      metaverse (later V2s will release as playable characters
                      in the Metaverse){" "}
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                  <div className="advantages-block button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon5.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>White list</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      Gamified white list, you have to earn your access "the
                      hottest NFT project you can't just buy"{" "}
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                  <div className="advantages-block button">
                    <div className="advantages-top">
                      <div className="advantages-icon">
                        <img src="img/main/specs/advantages/icon6.png" alt="" />
                      </div>
                      <div className="advantages-title">
                        // <span>Free mints</span>
                      </div>
                    </div>
                    <p className="advantages-text">
                      Will have some free mints for holders that come together
                      with your monk to increase utility and unlock our
                      governance/utility token $CHI{" "}
                    </p>
                    <div className="advantages-line"></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="fractionsSection section">
              <div className="wrapper">
                <div className="fractions">
                  <div className="fractions-el fractions-el1"></div>
                  <div className="fractions-el fractions-el2"></div>
                  <div className="fractions-el fractions-el3"></div>
                  <h2
                    className="title wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Factions
                  </h2>
                  <div className="fractions-swiper">
                    <div className="content">
                      <div className="fractions-top ">
                        <div className="fractions-line"></div>
                        <div
                          className="fractions-swiperTop wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".5s"
                        >
                          <div className="swiper fractionsSwiper">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <h2 className="button">daiko</h2>
                              </div>
                              <div className="swiper-slide">
                                <h2 className="button">ShuHaRi</h2>
                              </div>
                              <div className="swiper-slide swiper-slide-3">
                                <h2 className="button">Sohei</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fractions-line"></div>
                      </div>
                      <div className="fractions-swiperBottom">
                        <div
                          thumbsSlider=""
                          className="swiper fractionsSwiper2  wow fadeInDown"
                          data-wow-duration=".7s"
                          data-wow-delay=".5s"
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide" data-slide="0">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      Daiko is short for Daikokuten; the
                                      Japanese deity of fortune and wealth, the
                                      legacy of Daiko is embraced by the members
                                      of the faction.
                                      <br></br>
                                      The Daiko are a spiritual className of
                                      warriors who are empowered by the belief
                                      that fortune favors the prepared and
                                      eludes the unprepared.
                                      <br></br>
                                      The Daiko warriors have learned to never
                                      embrace defeat and to find a way to bring
                                      the pleasures of the mind into existence.
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">
                                      Perception is 9/10th of everything. How
                                      you are perceived is how you are judged.
                                      Old keys won’t open new doors. Break free
                                      from the resistance and embrace the
                                      future.
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Branding, Marketing, Business, Sales,
                                      Vision, Sponsorships, Collaborations,
                                      Merchandising, Training, Motivation
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Branding, Merchants
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-slide="1">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      The ShuHaRi are an excessively disciplined
                                      faction of warriors that are under a
                                      constant state of improvement.
                                      <br></br>
                                      The ShuHaRi believe in a cult-like mental
                                      state seeking mastery and absolute power.
                                      Little is known about the history of the
                                      ShuHaRi as they tend to operate in the
                                      shadows.
                                      <br></br>
                                      The ShuHari are a terrifying yet effective
                                      className of monks who have an idolization
                                      of survival through ruthless aggression.{" "}
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">We are ShuHaRi</p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Trade, Analytics, Engineering, Strategy,
                                      Minting, Banking, Hacking, Education
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Treasure, Factory
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-slide="2">
                              <div className="slide-content">
                                <div className="slide-img">
                                  <img
                                    src="img/main/fractions/img3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="slide-blocks">
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Description
                                    </h4>
                                    <p className="slide-text">
                                      Warriors directly descended from a history
                                      of power and influence, the Sohei utilize
                                      political influence and immense spiritual
                                      authority to control the members of their
                                      faction.
                                      <br></br>
                                      The Shohei are an influential className of
                                      warriors who believe that power is forged
                                      in the masses.
                                    </p>
                                  </div>
                                  <div className="slide-block">
                                    <h4 className="slide-subtitle">
                                      // Mission Statement
                                    </h4>
                                    <p className="slide-text">
                                      To connect web3 enthusiasts and help them
                                      be more profitable with NFTs and liquidity
                                      pools leveraging exclusive alpha and on
                                      chain data.
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Skills
                                    </h4>
                                    <p className="slide-text">
                                      Strategic Alliances, Community,
                                      Collaborations, Administration,
                                      Advertising
                                    </p>
                                    <h4 className="slide-subtitle">
                                      // Corporations
                                    </h4>
                                    <p className="slide-text">
                                      Access, Marketing
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="manifestoSection">
              <div className="wrapper">
                <h4
                  className="subtitle wow fadeInDown"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  Manifesto
                </h4>
                <h2
                  className="title wow fadeInDown"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  CRYPTO MONK <br />
                  MANIFESTO
                </h2>
                <div className="content">
                  <div className="blocks">
                    <div className="blocks-text blocks-text-left">
                      <p data-text="1">
                        We are Crypto Monks. A new breed of investor. Wiser.
                        Faster. Stronger. And FREE… <br></br>
                        Crypto Monks care more about creating things that last,
                        then losing things that don’t.{" "}
                      </p>
                      <p data-text="3">
                        Crypto Monks wage war against the pump and dumpers - and
                        win. <br></br>
                        Crypto Monks are the diamond hands behind the projects
                        you love.
                      </p>
                      <p data-text="5">
                        Crypto Monks believe crypto is the currency of the new
                        economy. Because we don’t just use crypto currency.{" "}
                        <br></br>
                        We ARE crypto currency.
                      </p>
                    </div>
                    <div
                      className="image section"
                      data-section="manifestoSection"
                    >
                      <div className="step" data-step="1">
                        <svg
                          viewBox="0 0 440 410"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-path="1"
                            d="M23.5781 342.54L22.8623 342.316L22.8558 342.337L22.8505 342.358L23.5781 342.54ZM26.0781 334.54L25.4701 334.101L25.3987 334.2L25.3623 334.316L26.0781 334.54ZM42.0781 313.54L42.6085 314.07H42.6085L42.0781 313.54ZM88.5781 284.04L88.929 284.703L88.5781 284.04ZM102.078 272.04L101.498 271.565L101.474 271.593L101.454 271.624L102.078 272.04ZM123.578 250.54L123.976 251.176L123.578 250.54ZM143.578 238.04L143.976 238.676L143.985 238.67L143.994 238.664L143.578 238.04ZM166.078 223.04L165.743 222.369L165.701 222.39L165.662 222.416L166.078 223.04ZM178.578 191.54L177.829 191.582L177.83 191.586L178.578 191.54ZM176.578 167.54L177.318 167.417L177.299 167.305L177.249 167.205L176.578 167.54ZM165.078 161.54L164.424 161.908L164.444 161.943L164.468 161.976L165.078 161.54ZM160.078 152.04L160.79 151.803L160.752 151.69L160.682 151.595L160.078 152.04ZM151.578 137.04L152.302 136.843L151.578 137.04ZM150.078 123.54L149.341 123.678L150.078 123.54ZM153.078 110.04L153.659 110.515L153.664 110.508L153.67 110.5L153.078 110.04ZM164.078 106.54L163.407 106.875L164.799 106.334L164.078 106.54ZM162.078 78.54L162.821 78.6461L162.078 78.54ZM166.078 58.04L165.394 57.7322L165.375 57.7748L165.361 57.8195L166.078 58.04ZM196.078 27.04L195.709 26.3871L195.697 26.394L195.685 26.4013L196.078 27.04ZM243.078 15.04L243.042 15.7892L243.043 15.7892L243.078 15.04ZM279.578 25.04L279.964 24.3969L279.578 25.04ZM301.078 46.54L300.413 46.8861L300.431 46.9222L300.454 46.9561L301.078 46.54ZM309.078 70.54L308.357 70.7461L308.364 70.7715L308.373 70.7963L309.078 70.54ZM313.078 81.54L312.373 81.7963L312.377 81.8075L312.382 81.8186L313.078 81.54ZM319.078 96.54L319.815 96.4018L319.802 96.3297L319.774 96.2615L319.078 96.54ZM315.078 133.54L315.826 133.598L315.829 133.554L315.828 133.511L315.078 133.54ZM316.078 145.04H316.828V144.93L316.797 144.825L316.078 145.04ZM312.578 166.54L311.844 166.389L311.841 166.401L311.839 166.414L312.578 166.54ZM308.578 190.04L309.316 190.174L309.318 190.166L308.578 190.04ZM307.578 195.54L308.274 195.819L308.303 195.748L308.316 195.674L307.578 195.54ZM306.578 198.04L307.196 198.465L307.243 198.396L307.274 198.319L306.578 198.04ZM301.078 206.04L300.46 205.615L300.454 205.624L301.078 206.04ZM295.078 215.04L294.454 214.624L294.406 214.696L294.376 214.777L295.078 215.04ZM289.078 230.04L288.338 229.917L288.298 230.157L288.407 230.375L289.078 230.04ZM290.078 232.04L289.407 232.375L289.475 232.511L289.59 232.609L290.078 232.04ZM300.578 241.04L300.09 241.609L300.146 241.658L300.211 241.694L300.578 241.04ZM321.078 252.54L320.711 253.194L320.719 253.198L321.078 252.54ZM343.078 264.54L343.442 263.884L343.437 263.882L343.078 264.54ZM363.078 278.04L362.427 278.412L362.464 278.477L362.514 278.534L363.078 278.04ZM369.578 285.04L370.261 284.73L370.205 284.606L370.108 284.51L369.578 285.04ZM383.578 301.04L384.108 300.51L384.034 300.435L383.942 300.384L383.578 301.04ZM389.078 304.54L389.494 303.916L389.455 303.89L389.414 303.869L389.078 304.54ZM390.578 305.54L390.162 306.164L390.241 306.217L390.33 306.248L390.578 305.54ZM400.578 309.04L401.108 308.51L400.987 308.389L400.826 308.332L400.578 309.04ZM403.078 311.54L403.645 311.049L403.627 311.029L403.608 311.01L403.078 311.54ZM415.078 332.54L415.815 332.398L415.798 332.311L415.761 332.23L415.078 332.54ZM417.578 359.54L418.324 359.621L418.328 359.581V359.54H417.578ZM415.078 382.54L415.801 382.741L415.817 382.682L415.824 382.621L415.078 382.54ZM410.078 400.54L410.734 400.904L410.777 400.827L410.801 400.741L410.078 400.54ZM407.578 405.04L408.178 405.49L408.209 405.449L408.234 405.404L407.578 405.04ZM181.828 160.04C181.828 159.626 181.492 159.29 181.078 159.29C180.664 159.29 180.328 159.626 180.328 160.04H181.828ZM27.8001 409.337C26.3159 404.06 23.2263 389.155 22.8279 372.023L21.3283 372.057C21.7299 389.325 24.8404 404.354 26.3561 409.743L27.8001 409.337ZM22.8279 372.023C22.4284 354.842 23.6639 345.289 24.3057 342.722L22.8505 342.358C22.159 345.124 20.9279 354.838 21.3283 372.057L22.8279 372.023ZM24.294 342.764L26.794 334.764L25.3623 334.316L22.8623 342.316L24.294 342.764ZM26.6861 334.979C28.8509 331.982 32.2479 327.336 35.4026 323.141C38.5769 318.919 41.4554 315.223 42.6085 314.07L41.5478 313.01C40.3009 314.257 37.346 318.061 34.2037 322.239C31.0417 326.444 27.6387 331.098 25.4701 334.101L26.6861 334.979ZM42.6085 314.07C45.6883 310.99 52.5568 301.639 65.4135 295.211L64.7427 293.869C51.5994 300.441 44.4679 310.09 41.5478 313.01L42.6085 314.07ZM65.4135 295.211C71.8875 291.974 75.6156 290.483 78.7894 289.238C81.9797 287.987 84.6387 286.974 88.929 284.703L88.2272 283.377C84.0175 285.606 81.4265 286.593 78.2418 287.842C75.0407 289.097 71.2688 290.606 64.7427 293.869L65.4135 295.211ZM88.929 284.703C95.8674 281.03 100.987 275.029 102.702 272.456L101.454 271.624C99.8363 274.051 94.8888 279.85 88.2272 283.377L88.929 284.703ZM102.659 272.515C104.898 269.778 108.66 265.418 112.657 261.246C116.67 257.058 120.863 253.121 123.976 251.176L123.181 249.904C119.893 251.959 115.586 256.022 111.574 260.209C107.546 264.412 103.758 268.802 101.498 271.565L102.659 272.515ZM123.976 251.176L143.976 238.676L143.181 237.404L123.181 249.904L123.976 251.176ZM143.994 238.664L166.494 223.664L165.662 222.416L143.162 237.416L143.994 238.664ZM166.414 223.711C171.391 221.222 180.542 211.345 179.327 191.494L177.83 191.586C179.014 210.935 170.099 220.191 165.743 222.369L166.414 223.711ZM179.327 191.498C178.527 177.094 177.658 169.46 177.318 167.417L175.838 167.663C176.164 169.62 177.029 177.186 177.829 191.582L179.327 191.498ZM177.249 167.205L176.749 166.205L175.407 166.875L175.907 167.875L177.249 167.205ZM175.841 165.828C174.144 166.394 169.492 166.428 165.688 161.104L164.468 161.976C168.665 167.852 174.012 168.019 176.315 167.252L175.841 165.828ZM165.732 161.172C163.935 157.978 162.731 155.736 161.957 154.234C161.171 152.708 160.851 151.987 160.79 151.803L159.367 152.277C159.472 152.593 159.852 153.422 160.624 154.921C161.408 156.444 162.621 158.702 164.424 161.908L165.732 161.172ZM160.682 151.595C159.527 150.028 157.716 147.398 156.046 144.617C154.365 141.816 152.872 138.935 152.302 136.843L150.855 137.237C151.484 139.546 153.074 142.58 154.76 145.389C156.457 148.216 158.296 150.885 159.474 152.485L160.682 151.595ZM152.302 136.843C151.576 134.182 151.578 132.881 151.578 131.228C151.578 129.51 151.576 127.461 150.815 123.402L149.341 123.678C150.08 127.619 150.078 129.57 150.078 131.228C150.078 132.949 150.08 134.398 150.855 137.237L152.302 136.843ZM150.815 123.402C149.665 117.265 152.266 112.217 153.659 110.515L152.498 109.565C150.89 111.53 148.092 117.015 149.341 123.678L150.815 123.402ZM153.67 110.5C154.218 109.796 155.222 108.72 156.415 107.828C157.627 106.922 158.923 106.29 160.078 106.29V104.79C158.433 104.79 156.813 105.658 155.517 106.627C154.201 107.61 153.104 108.785 152.486 109.58L153.67 110.5ZM160.078 106.29C161.424 106.29 162.298 106.451 162.83 106.627C163.096 106.715 163.264 106.803 163.361 106.867C163.471 106.941 163.448 106.956 163.407 106.875L164.749 106.205C164.625 105.957 164.41 105.764 164.193 105.619C163.961 105.465 163.665 105.323 163.301 105.203C162.575 104.963 161.533 104.79 160.078 104.79V106.29ZM164.799 106.334C163.483 101.728 161.24 89.7069 162.821 78.6461L161.336 78.4339C159.716 89.7731 162.006 102.018 163.357 106.746L164.799 106.334ZM162.821 78.6461C164.417 67.4678 166.144 60.3763 166.795 58.2606L165.361 57.8195C164.679 60.037 162.939 67.2122 161.336 78.4339L162.821 78.6461ZM166.762 58.3478C168.227 55.0918 173.07 46.8167 180.578 40.0989L179.578 38.9811C171.886 45.8633 166.929 54.3216 165.394 57.7322L166.762 58.3478ZM180.578 40.0989C188.151 33.3229 194.349 28.9846 196.471 27.6788L195.685 26.4013C193.474 27.7621 187.205 32.1571 179.578 38.9811L180.578 40.0989ZM196.447 27.6929C200.243 25.5473 210.343 20.6477 220.253 18.2693L219.903 16.8107C209.813 19.2323 199.58 24.1994 195.709 26.3871L196.447 27.6929ZM220.253 18.2693C230.176 15.8879 239.604 15.6254 243.042 15.7892L243.114 14.2909C239.552 14.1213 229.981 14.3921 219.903 16.8107L220.253 18.2693ZM243.043 15.7892C250.163 16.1203 267.349 18.5774 279.192 25.6832L279.964 24.3969C267.807 17.1027 250.327 14.6264 243.113 14.2908L243.043 15.7892ZM279.192 25.6832C291.06 32.8036 298.302 42.8274 300.413 46.8861L301.744 46.194C299.521 41.9194 292.097 31.6764 279.964 24.3969L279.192 25.6832ZM300.454 46.9561C301.769 48.9277 304.568 53.9255 305.34 58.1742L306.816 57.9059C305.989 53.3546 303.054 48.1524 301.702 46.124L300.454 46.9561ZM305.34 58.1742C306.147 62.6104 307.688 68.4047 308.357 70.7461L309.799 70.334C309.135 68.0087 307.609 62.2697 306.816 57.9059L305.34 58.1742ZM308.373 70.7963L312.373 81.7963L313.783 81.2837L309.783 70.2837L308.373 70.7963ZM312.382 81.8186L318.382 96.8186L319.774 96.2615L313.774 81.2615L312.382 81.8186ZM318.341 96.6783C318.824 99.2527 319.215 106.04 316.876 112.277L318.28 112.803C320.742 106.24 320.333 99.1607 319.815 96.4018L318.341 96.6783ZM316.876 112.277C315.64 115.572 314.966 119.818 314.619 123.749C314.27 127.69 314.244 131.372 314.329 133.569L315.828 133.511C315.745 131.375 315.77 127.756 316.113 123.881C316.457 119.995 317.116 115.908 318.28 112.803L316.876 112.277ZM314.33 133.483C314.161 135.684 314.121 141.125 315.36 145.256L316.797 144.825C315.636 140.955 315.662 135.73 315.826 133.598L314.33 133.483ZM315.328 145.04C315.328 146.762 314.759 150.65 314.027 154.887C313.299 159.094 312.426 163.561 311.844 166.389L313.313 166.691C313.897 163.852 314.774 159.369 315.505 155.143C316.23 150.947 316.828 146.918 316.828 145.04H315.328ZM311.839 166.414L307.839 189.914L309.318 190.166L313.318 166.666L311.839 166.414ZM307.84 189.906L306.84 195.406L308.316 195.674L309.316 190.174L307.84 189.906ZM306.882 195.261L305.882 197.761L307.274 198.319L308.274 195.819L306.882 195.261ZM305.96 197.615L300.46 205.615L301.696 206.465L307.196 198.465L305.96 197.615ZM300.454 205.624L294.454 214.624L295.702 215.456L301.702 206.456L300.454 205.624ZM294.376 214.777C293.882 216.093 292.493 219.534 290.907 222.705L292.249 223.375C293.864 220.146 295.274 216.654 295.78 215.303L294.376 214.777ZM290.907 222.705C289.276 225.968 288.518 228.839 288.338 229.917L289.818 230.163C289.972 229.241 290.68 226.513 292.249 223.375L290.907 222.705ZM288.407 230.375L289.407 232.375L290.749 231.705L289.749 229.705L288.407 230.375ZM289.59 232.609L300.09 241.609L301.066 240.471L290.566 231.471L289.59 232.609ZM300.211 241.694L320.711 253.194L321.445 251.886L300.945 240.386L300.211 241.694ZM320.719 253.198L342.719 265.198L343.437 263.882L321.437 251.882L320.719 253.198ZM342.714 265.196C345.704 266.857 350.29 269.524 354.322 272.121C356.339 273.42 358.207 274.695 359.665 275.813C360.395 276.373 361.012 276.886 361.491 277.338C361.98 277.8 362.283 278.16 362.427 278.412L363.729 277.668C363.473 277.22 363.039 276.737 362.52 276.248C361.991 275.748 361.33 275.2 360.578 274.623C359.074 273.469 357.167 272.169 355.134 270.859C351.067 268.24 346.452 265.556 343.442 263.884L342.714 265.196ZM362.514 278.534C365.326 281.748 368.037 284.56 369.048 285.57L370.108 284.51C369.119 283.52 366.43 280.732 363.643 277.546L362.514 278.534ZM368.895 285.35C369.754 287.239 371.485 290.29 373.914 293.379C376.34 296.464 379.495 299.63 383.214 301.696L383.942 300.384C380.461 298.45 377.45 295.449 375.093 292.451C372.738 289.456 371.069 286.508 370.261 284.73L368.895 285.35ZM383.048 301.57C383.717 302.24 384.828 302.988 385.889 303.631C386.967 304.285 388.06 304.87 388.743 305.211L389.414 303.869C388.763 303.544 387.706 302.978 386.667 302.349C385.611 301.709 384.639 301.04 384.108 300.51L383.048 301.57ZM388.662 305.164L390.162 306.164L390.994 304.916L389.494 303.916L388.662 305.164ZM390.33 306.248L400.33 309.748L400.826 308.332L390.826 304.832L390.33 306.248ZM400.048 309.57L402.548 312.07L403.608 311.01L401.108 308.51L400.048 309.57ZM402.511 312.031C403.583 313.268 405.27 315.327 406.835 317.47C408.416 319.634 409.816 321.81 410.376 323.303L411.78 322.777C411.14 321.07 409.624 318.746 408.046 316.585C406.453 314.403 404.74 312.312 403.645 311.049L402.511 312.031ZM410.376 323.303C411.585 326.528 413.56 331.013 414.395 332.85L415.761 332.23C414.929 330.4 412.971 325.952 411.78 322.777L410.376 323.303ZM414.342 332.682C414.757 334.843 415.381 338.26 415.9 341.484C416.424 344.737 416.828 347.713 416.828 349.04H418.328C418.328 347.567 417.899 344.46 417.381 341.246C416.859 338.003 416.232 334.571 415.815 332.398L414.342 332.682ZM416.828 349.04V359.54H418.328V349.04H416.828ZM416.833 359.459L414.333 382.459L415.824 382.621L418.324 359.621L416.833 359.459ZM414.355 382.339L409.355 400.339L410.801 400.741L415.801 382.741L414.355 382.339ZM409.423 400.176L406.923 404.676L408.234 405.404L410.734 400.904L409.423 400.176ZM406.978 404.59L403.978 408.59L405.178 409.49L408.178 405.49L406.978 404.59ZM176.633 167.045C177.473 166.121 178.734 164.684 179.788 163.372C180.314 162.718 180.798 162.083 181.154 161.554C181.331 161.29 181.486 161.038 181.6 160.813C181.696 160.625 181.828 160.336 181.828 160.04H180.328C180.328 159.944 180.356 159.951 180.263 160.134C180.188 160.282 180.07 160.477 179.909 160.717C179.588 161.195 179.134 161.791 178.619 162.433C177.589 163.713 176.35 165.126 175.523 166.036L176.633 167.045Z"
                            fill="#6A1A1A"
                          />
                          <path
                            data-path="2"
                            d="M355.578 358.04C357.411 364.707 360.378 384.14 357.578 408.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="2"
                            d="M364.078 362.54L358.578 375.04"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="2"
                            d="M129.578 361.04L128.578 368.04L118.078 409.04"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="2"
                            d="M144.078 302.04C150.411 301.04 166.778 299.14 181.578 299.54C196.378 299.94 212.078 301.373 218.078 302.04"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="2"
                            d="M261.578 304.04C267.911 303.04 272.278 300.64 287.078 301.04C301.878 301.44 328.078 309.04 331.578 311.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="2"
                            d="M249.578 334.54C253.411 346.707 260.278 378.54 257.078 408.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="3"
                            d="M287.078 136.54C287.745 143.04 289.378 156.14 290.578 156.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="3"
                            d="M263.078 161.04C261.578 164.04 259.478 170.44 263.078 172.04C266.678 173.64 269.578 174.707 270.578 175.04"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="3"
                            d="M294.078 163.04V169.04L292.578 172.04L291.078 173.04H287.578"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="4"
                            d="M174.578 154.04C175.245 152.207 176.278 147.74 175.078 144.54C173.578 140.54 168.578 143.54 170.578 137.04C171.078 135.04 171.578 134.04 170.578 132.04C169.778 130.44 168.911 128.373 168.578 127.54C167.411 125.373 165.178 119.74 165.578 114.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="4"
                            d="M162.578 115.04C161.411 115.873 158.778 118.54 157.578 122.54C156.078 127.54 154.578 124.54 155.078 131.54C155.478 137.14 156.245 139.54 156.578 140.04L159.078 143.04L165.578 147.54L167.578 149.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            data-path="5"
                            d="M182.078 157.04L183.078 179.54L187.578 188.54L196.078 197.54C199.578 200.707 207.278 207.74 210.078 210.54C212.878 213.34 216.911 216.373 218.578 217.54L232.078 225.54L247.578 236.04C248.745 237.373 252.378 240.04 257.578 240.04C262.778 240.04 270.078 240.707 273.078 241.04C276.078 241.207 282.678 240.44 285.078 236.04C287.478 231.64 288.745 229.873 289.078 229.54"
                            stroke="#6A1A1A"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                      <div className="step" data-step="2">
                        <img src="img/main/manifesto/step2.png" alt="" />
                      </div>
                      <div className="step" data-step="3">
                        <img src="img/main/manifesto/step3.png" alt="" />
                      </div>
                      <div className="step" data-step="4">
                        <img src="img/main/manifesto/step4.png" alt="" />
                      </div>
                      <div className="step" data-step="5">
                        <img src="img/main/manifesto/step5.png" alt="" />
                      </div>
                      <div className="image-lines">
                        <div className="line" data-line="1">
                          <img src="img/main/manifesto/lines1.png" alt="" />
                        </div>
                        <div className="line" data-line="2">
                          <img src="img/main/manifesto/lines2.png" alt="" />
                        </div>
                        <div className="line" data-line="3">
                          <img src="img/main/manifesto/lines3.png" alt="" />
                        </div>
                        <div className="line" data-line="4">
                          <img src="img/main/manifesto/lines4.png" alt="" />
                        </div>
                        <div className="line" data-line="5">
                          <img src="img/main/manifesto/lines5.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="blocks-text blocks-text-right light">
                      <p data-text="2">
                        Crypto Monks understand that behind each trade comes
                        with a risk and a reward & each of those matters.{" "}
                        <br></br>
                        Crypto Monks see crypto projects as an art form & charts
                        as the canvas.{" "}
                      </p>
                      <p data-text="4">
                        Crypto Monks combine the digital world of NFT’s with the
                        real world of physical assets and community. <br></br>
                        Crypto Monks define their own destiny, create their own
                        luck, and build their own empires. If you ask the MBA’s
                        or look at finance textbooks, they’ll tell you what
                        Crypto Monks are doing is impossible; Yet it’s happening
                        every day.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="main-texts">
                    <p className="main-texts__first">...I am a</p>
                    <h2 className="main-texts__title">
                      <span>c</span>
                      <span>r</span>
                      <span>y</span>
                      <span>p</span>
                      <span>t</span>
                      <span>o</span>
                    </h2>
                    <p className="main-texts__last">monk</p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="ascensionSection section"
              data-section="ascension"
            >
              <div className="wrapper">
                <h4
                  className="subtitle wow fadeInDown"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  ascension
                </h4>
                <h2
                  className="title wow fadeInDown"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  gamified combat style election
                </h2>
                <h4
                  className="block-subtitle wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  // goal of ascencion
                </h4>
                <p
                  className="text wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  The goal of Ascension is to Disrupt the narrative of the
                  Tragedy of the Commons and the Anti-commons through gamified
                  self-preservation. A feudalistic process driven by the ability
                  to attack each other and remove your opponent's ability to
                  vote and receive rewards. Members of Ascension are competing
                  for the right to manage and govern over the community.{" "}
                </p>
                <h4
                  className="block-subtitle wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay="1.4s"
                >
                  /// executive control over governance
                </h4>
                <p
                  className="text wow fadeIn"
                  data-wow-duration=".7s"
                  data-wow-delay="1.4s"
                >
                  Acting as a temporary board of directors known as Chamber
                  Members, individuals are elected to positions that govern the
                  operation of the treasury for a predetermined length of time
                  giving them executive control over governance.
                  <br></br>
                  The process of feudalistic gamified on-chain combat style
                  election is known as Ascension.
                </p>

                <div className="blocks">
                  <div className="block">
                    <video no-controls autoplay loop playsinline muted>
                      <source src="img/video/animateVIdeo.mp4" />
                    </video>
                  </div>
                  <div className="block">
                    <video no-controls autoplay loop playsinline muted>
                      <source src="img/video/animateVIdeo-2.mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </section>
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
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          className="square-1 square"
                          width="12"
                          height="12"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 24 43.4264)"
                          fill="#DD4040"
                        />
                        <rect
                          className="square-2 square"
                          width="12"
                          height="12"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.2721 30.6985)"
                          fill="#DD4040"
                        />
                        <rect
                          className="square-3 square"
                          width="12"
                          height="12"
                          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 24 17.9706)"
                          fill="#DD4040"
                        />
                      </svg>
                    </div>
                    <div className="teamSwiper-button-next teamSwiper-button button">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          className="square-1 square"
                          t
                          x="21"
                          y="43.4264"
                          width="12"
                          height="12"
                          transform="rotate(-135 21 43.4264)"
                          fill="#DD4040"
                        />
                        <rect
                          className="square-2 square"
                          x="33.7279"
                          y="30.6985"
                          width="12"
                          height="12"
                          transform="rotate(-135 33.7279 30.6985)"
                          fill="#DD4040"
                        />
                        <rect
                          className="square-3 square"
                          x="21"
                          y="17.9706"
                          width="12"
                          height="12"
                          transform="rotate(-135 21 17.9706)"
                          fill="#DD4040"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className="teamSwiper wow fadeInLeft"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
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

                      <div className="swiper-slide">
                        <div className="team-slide">
                          <div className="team-left">
                            <p className="team-text">
                              Patrick is a leading high frequency fund & on
                              chain strategist who’s data science work has been
                              featured at the World Economic Forum in Davos.{" "}
                              <br></br> Previously, Patrick built the world's
                              largest social analytics platform and is currently
                              VP of a company with over $4.5B in revenue
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

                      <div className="swiper-slide">
                        <div className="team-slide">
                          <div className="team-left">
                            <p className="team-text">
                              Malachi also known as is a 19 year old visual
                              artist known for his unique and creative take on
                              pop culture. <br></br> His works have been
                              featured on ESPN and Complex Magazine and can be
                              found in the homes of many celebrities.
                            </p>
                            <h4 className="team-info">
                              <span>Malachi Wright</span>{" "}
                              <span className="orange">
                                // Partnered Artist{" "}
                              </span>
                            </h4>
                          </div>
                          <div className="team-img">
                            <img src="img/main/teamSection/img3.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="teamPreviewSlider wow fadeInLeft"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  <div thumbsSlider="" className="swiper ">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="img/main/teamSection/img1.png" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/main/teamSection/img4.png" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/main/teamSection/img2.png" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/main/teamSection/img3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="advisorySection section">
              <div className="wrapper">
                <div
                  className="build wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".5s"
                >
                  <img src="img/main/advisory/build.png" alt="" />
                </div>
                <div className="top">
                  <h4
                    className="subtitle wow fadeInDown"
                    data-wow-duration=".7s"
                    data-wow-delay=".7s"
                  >
                    consultants
                  </h4>
                  <h2
                    className="title wow fadeInDown"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s"
                  >
                    Advisory <br /> board
                  </h2>
                </div>
                <div className="content">
                  <div
                    className="content-item right wow fadeInRight"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                  >
                    <h4 className="content-item__title">
                      <span className="white">FrankyNines </span>
                      <span className="orange">// Founder, SupDucks</span>
                    </h4>
                    <div className="content-item__img">
                      <img src="img/main/advisory/img-1.png" alt="" />
                    </div>
                  </div>
                  <div className="content-item__line"></div>
                  <div
                    className="content-item left wow fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                  >
                    <div className="content-item__img">
                      <img src="img/main/advisory/img-2.png" alt="" />
                    </div>
                    <h4 className="content-item__title">
                      <span className="white">Frank Wilder </span>
                      <span className="orange">// Founder, WilderWorld</span>
                    </h4>
                  </div>
                </div>
              </div>
            </section>
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
                          1.1
                        </div>
                        <p
                          className="block-item__text wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          Mint <span className="orange">3,333</span> Crypto
                          Monkz as the initial{" "}
                          <span className="orange">Ascension</span> participants
                          and begin the development of the community.
                        </p>
                      </div>
                      <div className="block-item">
                        <div
                          className="block-item__num wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          1.2
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
                          1.3
                        </div>
                        <p
                          className="block-item__text wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          Free mints for holders that come together with your
                          monk to increase utility.
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
                          2.1
                        </div>
                        <p
                          className="block-item__text wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          Launch the <span className="orange">Ascension</span>{" "}
                          for managing the directives of the community and the
                          board of directors.
                        </p>
                      </div>
                      <div className="block-item">
                        <div
                          className="block-item__num wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          2.2
                        </div>
                        <p
                          className="block-item__text wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          Launch the{" "}
                          <span className="orange">Ascension Vault</span> for
                          non Crypto Monkz NFT Projects.
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
                          3.1
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
                          3.2
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
                          3.3
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
                          4.1
                        </div>
                        <p
                          className="block-item__text wow fadeInRight"
                          data-wow-duration=".7s"
                          data-wow-delay=".3s"
                        >
                          Launch the V2 MetaVerse CryptoMonkz with voting and
                          access to accessories; V2’s will only be mintable by
                          V1 CryptoMonkz holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="socialsSection section">
              <div className="wrapper">
                <h4
                  className="subtitle wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".3s"
                >
                  socials
                </h4>
                <h2
                  className="title wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  follow <br /> crypto monkz
                </h2>
                <div className="socials">
                  <a
                    href="https://discord.gg/cryptomonkz"
                    target="_tablet"
                    className="social button wow fadeInLeft"
                    data-wow-duration=".7s"
                    data-wow-delay=".7s"
                  >
                    <img src="img/main/socials/discord.svg" alt="" />
                  </a>
                  <a
                    href="https://twitter.com/CryptoMonkzNFT"
                    target="_tablet"
                    className="social button wow fadeInLeft"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s"
                  >
                    <img src="img/main/socials/twitter.svg" alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/cryptomonkznft/"
                    target="_tablet"
                    className="social button wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <img src="img/main/socials/instagram.svg" alt="" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@cryptomonkznft"
                    target="_tablet"
                    className="social button wow fadeInRight"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s"
                  >
                    <img src="img/main/socials/tiktok.svg" alt="" />
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
        <script src="libs/jquery/jquery-3.4.1.min.js"></script>
        <script src="libs/wow/wow.min.js"></script>
        <script src="libs/swiper/swiper-bundle.min.js"></script>
        <script src="libs/liMarquee/jquery.liMarquee.js"></script>
        <script src="js/common.js"></script>
      </body>
    </div>
  );
};

export default Home;
