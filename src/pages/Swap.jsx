import React, { useEffect, useState, useRef } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";

const Swap = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  const settingRef = useRef();
  const tokenRef = useRef();

  const [settings, setSettings] = useState(false);
  const [token, setToken] = useState(false);
  const [manageToken, setManageToken] = useState(false);
  const [connect, setConnect] = useState(false);
  const [choose, setChoose] = useState(false);

  return (
    <div className="main-wrapper">
      <section className="modalSection ">
        <div className="choose">
          <div className="wrapper">
            <div className="choose-block">
              <div className="choose-top">
                <h4 className="choose-title">// swap</h4>
                <div
                  ref={settingRef}
                  className={`choose-setting ${
                    settings ? "choose-setting active" : "choose-setting"
                  }`}
                  onClick={() => setSettings((settings) => !settings)}
                >
                  <div className="choose-setting__button button">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 17.1875C15.0888 17.1875 17.1875 15.0888 17.1875 12.5C17.1875 9.91117 15.0888 7.8125 12.5 7.8125C9.91117 7.8125 7.8125 9.91117 7.8125 12.5C7.8125 15.0888 9.91117 17.1875 12.5 17.1875Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2774 7.88086C19.5125 8.21745 19.7184 8.57357 19.8927 8.94531L22.422 10.3516C22.7378 11.7661 22.7411 13.2325 22.4317 14.6484L19.8927 16.0547C19.7184 16.4264 19.5125 16.7825 19.2774 17.1191L19.3263 20.0195C18.2543 20.9963 16.9857 21.7322 15.6056 22.1777L13.1153 20.6836C12.7057 20.7129 12.2945 20.7129 11.8849 20.6836L9.4044 22.168C8.01993 21.7306 6.74707 20.9975 5.67393 20.0195L5.72276 17.1289C5.48963 16.7876 5.2839 16.4284 5.10753 16.0547L2.57823 14.6484C2.26241 13.2339 2.25908 11.7675 2.56846 10.3516L5.10753 8.94531C5.28182 8.57357 5.48766 8.21745 5.72276 7.88086L5.67393 4.98047C6.74586 4.00368 8.01454 3.26777 9.39463 2.82227L11.8849 4.31641C12.2945 4.28711 12.7057 4.28711 13.1153 4.31641L15.5958 2.83203C16.9803 3.26943 18.2531 4.00249 19.3263 4.98047L19.2774 7.88086Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="setting">
                    <h4 className="setting-title">Transaction Settings</h4>

                    <div className="setting-item">
                      <div className="setting-item__top">
                        <div className="setting-item__title">
                          Slippage tolerance
                        </div>
                        <div className="setting-item__tool">
                          <div className="tool">
                            <div className="tool-btn button">?</div>
                            <div className="tool-block">
                              <p>
                                Your transaction will revert if the price
                                changes unfavorably by more than this
                                percentage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item__main tolerance">
                        <div className="setting-item__radio">
                          <div className="default-radio">
                            <input type="radio" id="r-1" name="g-1" />
                            <label for="r-1" className="default-radio__content">
                              <div className="default-radio__block button">
                                auto
                              </div>
                            </label>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="setting-item__input default-input"
                          placeholder="0.6 %"
                        />
                      </div>
                    </div>

                    <div className="setting-item">
                      <div className="setting-item__top">
                        <div className="setting-item__title">
                          Transaction deadline (min)
                        </div>
                        <div className="setting-item__tool">
                          <div className="tool">
                            <div className="tool-btn button">?</div>
                            <div className="tool-block">
                              <p>
                                Your transaction will revert if the price
                                changes unfavorably by more than this
                                percentage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item__main transaction">
                        <div className="setting-item__radio">
                          <div className="default-radio">
                            <input type="radio" id="r-2" name="g-2" />
                            <label for="r-2" className="default-radio__content">
                              <div className="default-radio__block button">
                                10
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="setting-item__radio">
                          <div className="default-radio">
                            <input type="radio" id="r-3" name="g-2" />
                            <label for="r-3" className="default-radio__content">
                              <div className="default-radio__block button">
                                20
                              </div>
                            </label>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="setting-item__input  default-input"
                          placeholder="30"
                        />
                      </div>
                    </div>

                    <h4 className="setting-title">Interface Settings</h4>

                    <div className="setting-item setting-item__row">
                      <div className="setting-item__top">
                        <div className="setting-item__title">
                          Auto Router API
                        </div>
                        <div className="setting-item__tool">
                          <div className="tool">
                            <div className="tool-btn button">?</div>
                            <div className="tool-block">
                              <p>
                                Your transaction will revert if the price
                                changes unfavorably by more than this
                                percentage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="v-1" />
                          <label
                            for="v-1"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="setting-item setting-item__row">
                      <div className="setting-item__top">
                        <div className="setting-item__title">Expert Mode</div>
                        <div className="setting-item__tool">
                          <div className="tool">
                            <div className="tool-btn button">?</div>
                            <div className="tool-block">
                              <p>
                                Your transaction will revert if the price
                                changes unfavorably by more than this
                                percentage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="v-2" />
                          <label
                            for="v-2"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-item__info">
                  <input
                    type="text"
                    className="choose-item__val"
                    placeholder="enter amout here"
                  />
                  <div className="choose-item__money">$6,461.63</div>
                </div>
                <div
                  ref={tokenRef}
                  className="choose-item__select button"
                  onClick={() => setToken((token) => !token)}
                >
                  <div className="crypto-item__value">
                    <div className="crypto-item__info">
                      <span className="crypto-item__name">Select a token</span>
                    </div>
                  </div>
                  <div className="crypto-item__arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 7.5L10 13.75L3.75 7.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="choose-item__exchange">
                <img src="img/modal/arrow.svg" alt="" />
              </div>
              <div className="choose-item">
                <div className="choose-item__info">
                  <input
                    type="text"
                    className="choose-item__val"
                    placeholder="enter amount here"
                  />
                  <div className="choose-item__money">$6,461.63</div>
                </div>
                <div
                  ref={tokenRef}
                  className="choose-item__select button"
                  onClick={() => setToken((token) => !token)}
                >
                  <div className="crypto-item__value">
                    <span className="crypto-item__icon">
                      <img src="img/crypto/1INCH.png" alt="" />
                    </span>
                    <div className="crypto-item__info">
                      <span className="crypto-item__name">1INCH</span>
                    </div>
                  </div>
                  <div className="crypto-item__arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 7.5L10 13.75L3.75 7.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`choose-bottom ${
                  choose ? "choose-bottom active" : "choose-bottom"
                }`}
              >
                <div className="choose-bottom__info">
                  <div className="choose-bottom__description">
                    1 ETH = 2815 USDT <span className="grey">($2,809.71)</span>
                  </div>
                  <div
                    className="choose-bottom__select button"
                    onClick={() => setChoose((choose) => !choose)}
                  >
                    <span className="price">$17.32</span>
                    <span className="arrow">
                      <img src="img/icons/arrow-grey.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="choose-bottom__main">
                  <div className="choose-bottom__items">
                    <div className="choose-bottom__item">
                      <p>Expected Output</p>
                      <p>6473.29 USDT</p>
                    </div>
                    <div className="choose-bottom__item">
                      <p>Price Impact</p>
                      <p className="grey">0.00%</p>
                    </div>
                  </div>
                  <div className="choose-bottom__items">
                    <div className="choose-bottom__item">
                      <p className="grey bold">
                        Minimum received after slippage (0.50%)
                      </p>
                      <p className="grey">6441.08 USDT</p>
                    </div>
                    <div className="choose-bottom__item">
                      <p className="grey bold">Price Impact</p>
                      <p className="grey">≈$18.09</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-button">
                <h1
                  href="#"
                  className="default-button button connectWalletButton"
                  onClick={() => setConnect((Connect) => !connect)}
                >
                  connect wallet
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal modalSelectToken ${
            token ? " modalSelectToken active" : "modal modalSelectToken"
          }`}
        >
          <div className=" choose-block">
            <div className="selectTocken active">
              <div className="modal-top">
                <h4 className="selectTocken-title">// select a token</h4>
                <div
                  className="selectTocken-close modal-close button"
                  onClick={() => setToken((token) => !token)}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5312 5.46875L5.46875 19.5312"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5312 19.5312L5.46875 5.46875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="selectTocken-main">
                <div className="selectTocken-search">
                  <input
                    type="text"
                    className="default-input"
                    placeholder="Search name or paste address"
                  />
                </div>

                <div className="selectTocken-radios">
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-1" name="g-3" />
                    <label for="cr-1" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-2" name="g-3" />
                    <label for="cr-2" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-3" name="g-3" />
                    <label for="cr-3" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-4" name="g-3" />
                    <label for="cr-4" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-5" name="g-3" />
                    <label for="cr-5" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                  <div className="selectTocken-radio default-radio">
                    <input type="radio" id="cr-6" name="g-3" />
                    <label for="cr-6" className="default-radio__content">
                      <div className="default-radio__block button">
                        <div className="icon">
                          <img src="img/crypto/etheriumeth.png" alt="" />
                        </div>
                        ETH
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="selectTocken-cryptos">
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/etheriumeth.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">ETH</span>
                    <span className="crypto-item__description">Ether</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/1INCH.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">1INCH</span>
                    <span className="crypto-item__description">1INCH</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/AAVE.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">AAVE</span>
                    <span className="crypto-item__description">Aave</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/AMP.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">AMP</span>
                    <span className="crypto-item__description">Amp</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/ANT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">ANT</span>
                    <span className="crypto-item__description">
                      Aragon Network Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/BAL.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">BAL</span>
                    <span className="crypto-item__description">Balancer</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/BAND.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">BAND</span>
                    <span className="crypto-item__description">
                      Band Protocol
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/BAT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">BAT</span>
                    <span className="crypto-item__description">
                      BasicAttentionToken
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/BNT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">BNT</span>
                    <span className="crypto-item__description">
                      Bancor Network Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/COMP.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">COMP</span>
                    <span className="crypto-item__description">Compound</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/CRV.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">CRV</span>
                    <span className="crypto-item__description">Civic</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/DAI.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">DAI</span>
                    <span className="crypto-item__description">
                      Dai Stablecoin
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/DNT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">DNT</span>
                    <span className="crypto-item__description">District0x</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/ENJ.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">ENJ</span>
                    <span className="crypto-item__description">Enjin</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/ENS.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">ENS</span>
                    <span className="crypto-item__description">
                      Ethereum Name Service
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/GNO.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">GNO</span>
                    <span className="crypto-item__description">
                      Gnosis Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/GRT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">GRT</span>
                    <span className="crypto-item__description">The Graph</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/GUSD.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">GUSD</span>
                    <span className="crypto-item__description">
                      GeminiDollar
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/KEEP.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">KEEP</span>
                    <span className="crypto-item__description">
                      Keep Network
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/KNC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">KNC</span>
                    <span className="crypto-item__description">
                      Kyber Network Crystal
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/LINK.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">LINK</span>
                    <span className="crypto-item__description">
                      ChainLink Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/LOOM.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">LOOM</span>
                    <span className="crypto-item__description">
                      Loom Network
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/LRC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">LRC</span>
                    <span className="crypto-item__description">
                      LoopringCoin V2
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/MANA.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">MANA</span>
                    <span className="crypto-item__description">
                      Decentraland
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/MATIC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">MATIC</span>
                    <span className="crypto-item__description">Polygon</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/MKR.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">MKR</span>
                    <span className="crypto-item__description">Maker</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/MLN.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">MLN</span>
                    <span className="crypto-item__description">Melon</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/NMR.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">NMR</span>
                    <span className="crypto-item__description">Numeraire</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/NU.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">NU</span>
                    <span className="crypto-item__description">NuCypher</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/OXT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">OXT</span>
                    <span className="crypto-item__description">Orchid</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/PAXG.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">PAXG</span>
                    <span className="crypto-item__description">PaxosGold</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/REN.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">REN</span>
                    <span className="crypto-item__description">
                      Republic Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/REP.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">REP</span>
                    <span className="crypto-item__description">
                      Reputation Augur v1
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/REPv2.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">REPv2</span>
                    <span className="crypto-item__description">
                      Reputation Augur v2
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/SAND.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">SAND</span>
                    <span className="crypto-item__description">Sandbox</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/SKL.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">SKL</span>
                    <span className="crypto-item__description">Skale</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/SNX.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">SNX</span>
                    <span className="crypto-item__description">
                      Synthetix Network Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/STORJ.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">STORJ</span>
                    <span className="crypto-item__description">
                      Stori Token
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/sUSD.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">sUSD</span>
                    <span className="crypto-item__description">Synth sUSD</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/TBTC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">TBTC</span>
                    <span className="crypto-item__description">tBTC</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/UMA.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">UMA</span>
                    <span className="crypto-item__description">
                      UMA Voting Token v1
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/UNI.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">UNI</span>
                    <span className="crypto-item__description">Uniswap</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/USDC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">USDC</span>
                    <span className="crypto-item__description">USDCoin</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/USDT.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">USDT</span>
                    <span className="crypto-item__description">Tether USD</span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/WBTC.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">WBTC</span>
                    <span className="crypto-item__description">
                      Wrapped BTC
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/WETH.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">WETH</span>
                    <span className="crypto-item__description">
                      Wrapped Ether
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/YFI.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">YFI</span>
                    <span className="crypto-item__description">
                      Yearn finance
                    </span>
                  </div>
                </div>
                <div className="crypto-item button">
                  <span className="crypto-item__icon">
                    <img src="img/crypto/ZRX.png" alt="" />
                  </span>
                  <div className="crypto-item__info">
                    <span className="crypto-item__name">ZRX</span>
                    <span className="crypto-item__description">
                      0x Protocol Token
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="selectTocken-manage button "
                onClick={() => setManageToken((manageToken) => !manageToken)}
              >
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.37501 21.0938H4.68751C4.4803 21.0938 4.28159 21.0115 4.13508 20.865C3.98856 20.7185 3.90625 20.5197 3.90625 20.3125V15.9473C3.9059 15.8459 3.92555 15.7453 3.9641 15.6515C4.00264 15.5577 4.05931 15.4723 4.13086 15.4004L15.8496 3.68168C15.9223 3.60786 16.009 3.54924 16.1045 3.50923C16.2001 3.46921 16.3027 3.44861 16.4063 3.44861C16.5099 3.44861 16.6124 3.46921 16.708 3.50923C16.8036 3.54924 16.8902 3.60786 16.9629 3.68168L21.3184 8.03715C21.3922 8.10984 21.4508 8.19649 21.4908 8.29205C21.5308 8.38762 21.5514 8.49018 21.5514 8.59379C21.5514 8.69739 21.5308 8.79996 21.4908 8.89552C21.4508 8.99108 21.3922 9.07773 21.3184 9.15043L9.37501 21.0938Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.0938 21.0938H9.375"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.2812 6.25L18.75 11.7188"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                manage token lists
              </div>
            </div>
            <div
              className={`manage ${manageToken ? "manage active " : "manage"}`}
            >
              <div className="modal-top manage-top">
                <div className="manage-back button">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.625 20.3125L7.8125 12.5L15.625 4.6875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="manage-title">// MANAGE</h4>
                <div
                  className="modal-close button "
                  onClick={() => setManageToken((manageToken) => !manageToken)}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5312 5.46875L5.46875 19.5312"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5312 19.5312L5.46875 5.46875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="manage-tabs">
                <div className="manage-tab active button">Lists</div>
                <div className="manage-tab button">Token</div>
              </div>
              <div className="manage-content active">
                <div className="manage-search">
                  <input
                    type="text"
                    className="default-input"
                    placeholder="https:// or ipfs:// or ENS name"
                  />
                </div>
                <div className="manage-main manage-cryptos">
                  <div className="manage-crypto">
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/UNI.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Uniswap Labs List
                          </div>
                          <div className="crypto-item__description">
                            41 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-1" />
                          <label
                            for="ex-1"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/GUSD.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Gemini Token List
                          </div>
                          <div className="crypto-item__description">
                            28 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-2" />
                          <label
                            for="ex-2"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/Coinmarketcap.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">Coinmarketcap</div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-3" />
                          <label
                            for="ex-3"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/KlerosTokens.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">Kleros Tokens</div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-4" />
                          <label
                            for="ex-4"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/ArbWhitelistEra.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Arb Whitelist Era
                          </div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-5" />
                          <label
                            for="ex-5"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/AAVE.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Aave Token List
                          </div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-6" />
                          <label
                            for="ex-6"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/RollSocialMoney.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Roll Social Money
                          </div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-7" />
                          <label
                            for="ex-7"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/Optimism.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">
                            Wrapped Tokens
                          </div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-8" />
                          <label
                            for="ex-8"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/Optimism.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">Optimism</div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-8" />
                          <label
                            for="ex-8"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-item__left">
                        <span className="crypto-item__icon">
                          <img src="img/crypto/Compund.png" alt="" />
                        </span>
                        <div className="crypto-item__info">
                          <div className="crypto-item__name">Compund</div>
                          <div className="crypto-item__description">
                            6416 tokens
                            <div className="crypto-setting">
                              <div className="crypto-setting__button button">
                                <img src="img/icons/setting.svg" alt="" />
                              </div>
                              <div className="crypto-setting__block">
                                <p>v153.1.0</p>
                                <div className="crypto-setting__list">
                                  <div className="crypto-setting__item button">
                                    View list
                                  </div>
                                  <div className="crypto-setting__item button">
                                    Remove list
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-item__checkbox">
                        <div className="default-checkbox">
                          <input type="checkbox" id="ex-8" />
                          <label
                            for="ex-8"
                            className="default-checkbox__content"
                          >
                            <div className="default-checkbox__block button">
                              on
                            </div>
                            <div className="default-checkbox__block button">
                              off
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="manage-content ">
                <div className="manage-input">
                  <input
                    type="text"
                    className="default-input"
                    placeholder="0x000"
                  />
                </div>
                <div className="manage-main token">
                  <p>0 Custom Tokens</p>
                </div>
                <div className="manage-bottom">
                  <p className="manage-bottom__description">
                    Tip: Custom tokens are stored locally in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal connectWallet ${
            connect ? "modal connectWallet active" : "modal connectWallet"
          }`}
        >
          <div className="modal-block">
            <div className="modal-top">
              <h4 className="connectWallet-title">// Connect a wallet</h4>
              <div
                className="modal-close button"
                onClick={() => setConnect((Connect) => !connect)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5312 5.46875L5.46875 19.5312"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5312 19.5312L5.46875 5.46875"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p className="connectWallet-description">
              By connecting a wallet, you agree to Uniswap Labs’{" "}
              <span className="bold">Terms of Service</span> and acknowledge
              that you have read and understand the Uniswap{" "}
              <span className="bold">Protocol Disclaimer.</span>
            </p>

            <div className="connectWallet-items">
              <div href="#" className="connectWallet-item button white">
                <p>Install Metamask</p>
                <span className="icon">
                  <img src="img/modal/mask.png" alt="" />
                </span>
              </div>
              <div href="#" className="connectWallet-item button white">
                <p>WalletConnect</p>
                <span className="icon">
                  <img src="img/modal/WalletConnect.png" alt="" />
                </span>
              </div>
              <div href="#" className="connectWallet-item button white">
                <p>Coinbase Wallet</p>
                <span className="icon">
                  <img src="img/modal/CoinbaseWallet.png" alt="" />
                </span>
              </div>
              <div href="#" className="connectWallet-item button white">
                <p>Formatic</p>
                <span className="icon">
                  <img src="img/modal/Formatic.png" alt="" />
                </span>
              </div>
              <div href="#" className="connectWallet-item button white">
                <p>Portis</p>
                <span className="icon">
                  <img src="img/modal/Portis.png" alt="" />
                </span>
              </div>
            </div>

            <div href="#" className="connectWallet-how button">
              <p>How this app uses APIs</p>
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 7.5L10 13.75L3.75 7.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="modal legal">
          <div className="modal-block">
            <div className="modal-top">
              <div className="modal-back button">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 20.3125L7.8125 12.5L15.625 4.6875"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h4 className="legal-title">/// Legal&Privacy</h4>
              <div className="modal-close legal-close button">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5312 5.46875L5.46875 19.5312"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5312 19.5312L5.46875 5.46875"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="legal-blocks">
              <a href="#" className="legal-block button">
                <p>Cryptomonkz’s Terms of Services</p>
              </a>
              <a href="#" className="legal-block button">
                <p>Protocol Disclaimer</p>
              </a>
            </div>

            <p className="legal-subtitle">
              This app uses following third-party APIs:
            </p>

            <div className="legal-items">
              <div className="legal-item">
                <h4 className="legal-item__title">Auto Router</h4>
                <p className="legal-item__text">
                  The app ftches the optimal trade route from a CryptoMonkz
                  server.
                </p>
              </div>
              <div className="legal-item">
                <h4 className="legal-item__title">Infura</h4>
                <p className="legal-item__text">
                  The app fetches om-chain data and constructs contract calls
                  with an Infura API.
                </p>
              </div>
              <div className="legal-item">
                <h4 className="legal-item__title">TRM Labs</h4>
                <p className="legal-item__text">
                  The app securely collects your wallet address and shares it
                  which TRM Labs Inc. for risk and compliance reasons.{" "}
                  <a href="#" className="learnmore button">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="legal-item">
                <h4 className="legal-item__title">the graph</h4>
                <p className="legal-item__text">
                  The app fetches blockchain data from The Graph’s hosted
                  service.
                </p>
              </div>
              <a href="#" className="legal-items__more button">
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swap;
