import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";
import ItemsSlider from "../components/ItemsSlider";

const Items = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ]);

  const [type, setType] = useState();
  const [weapon, setWeapon] = useState();
  const [Skin, setSkin] = useState();
  const [slot1, setSlot1] = useState();
  const [slot2, setSlot2] = useState();

  return (
    <div className="main-wrapper monksPage">
      <section className="monks">
        <div className="wrapper">
          <div className="content">
            <div className="main">
              <h1 className="title-other">// 2299</h1>
              <div className="main-content">
                <div className="leftMenu">
                  <div className="items">
                    <div className="item">
                      <p className="item-title">genome</p>
                      <p className="item-number">// Enlighted</p>
                    </div>
                    <div className="item">
                      <p className="item-title">faction</p>
                      <p className="item-number">// shuhari</p>
                    </div>
                  </div>
                  <div className="options">
                    <div className="option">
                      <div className="option-result"></div>
                      <div className="option-title">Attack</div>
                      <div className="option-num">
                        <span className="now">21</span>
                        <span className="all">55</span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-result"></div>
                      <div className="option-title">Defend</div>
                      <div className="option-num">
                        <span className="now">13</span>
                        <span className="all">55</span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-result"></div>
                      <div className="option-title">Chi</div>
                      <div className="option-num">
                        <span className="now">8</span>
                        <span className="all">55</span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-result"></div>
                      <div className="option-title">health</div>
                      <div className="option-num">
                        <span className="now">34</span>
                        <span className="all">55</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ItemsSlider />
              </div>
            </div>
            <div className="rightMenu">
              <div className="search">
                <input type="text" placeholder="sort by serial.." />
                <div className="search-icon">
                  <img src="img/characters/search.svg" alt="" />
                </div>
              </div>
              <div className="items-checkbox">
                <div className="item button">
                  <input
                    className="item-check"
                    type="radio"
                    name="options1"
                    id="check-1-1"
                  />
                  <label className="item-label" for="check-1-1">
                    <div className="item-block"></div>
                    <p className="item-title">Items</p>
                  </label>
                </div>
                <div className="item button">
                  <input
                    className="item-check"
                    type="radio"
                    name="options1"
                    id="check-1-2"
                  />
                  <label className="item-label" for="check-1-2">
                    <div className="item-block"></div>
                    <p className="item-title">Weapons</p>
                  </label>
                </div>
                <div className="item button">
                  <input
                    className="item-check"
                    type="radio"
                    name="options1"
                    id="check-1-3"
                  />
                  <label className="item-label" for="check-1-3">
                    <div className="item-block"></div>
                    <p className="item-title">Armor</p>
                  </label>
                </div>
                <div className="item button">
                  <input
                    className="item-check"
                    type="radio"
                    name="options1"
                    id="check-1-4"
                  />
                  <label className="item-label" for="check-1-4">
                    <div className="item-block"></div>
                    <p className="item-title">Potions</p>
                  </label>
                </div>
              </div>
              <div
                className={`items-options ${
                  type ? "items-options active" : "items-options"
                }`}
              >
                <div
                  className="items-options-top button"
                  onClick={() => setType((type) => !type)}
                >
                  <p className="items-options-title">Background</p>
                  <div className="items-options-button">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="items-options-bottom">
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-1"
                    />
                    <label className="item-label" for="check-2-1">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-2"
                    />
                    <label className="item-label" for="check-2-2">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-3"
                    />
                    <label className="item-label" for="check-2-3">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-4"
                    />
                    <label className="item-label" for="check-2-4">
                      <div className="item-block">
                        <img src="img/items/color-4.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-5"
                    />
                    <label className="item-label" for="check-2-5">
                      <div className="item-block">
                        <img src="img/items/color-5.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-6"
                    />
                    <label className="item-label" for="check-2-6">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-7"
                    />
                    <label className="item-label" for="check-2-7">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options2"
                      id="check-2-8"
                    />
                    <label className="item-label" for="check-2-8">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`items-options ${
                  weapon ? "items-options active" : "items-options"
                }`}
              >
                <div
                  className="items-options-top button"
                  onClick={() => setWeapon((weapon) => !weapon)}
                >
                  <p className="items-options-title">Weapons / Back</p>
                  <div className="items-options-button">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="items-options-bottom">
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-1"
                    />
                    <label className="item-label" for="check-3-1">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-2"
                    />
                    <label className="item-label" for="check-3-2">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-3"
                    />
                    <label className="item-label" for="check-3-3">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-4"
                    />
                    <label className="item-label" for="check-3-4">
                      <div className="item-block">
                        <img src="img/items/color-4.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-5"
                    />
                    <label className="item-label" for="check-3-1">
                      <div className="item-block">
                        <img src="img/items/color-5.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-6"
                    />
                    <label className="item-label" for="check-3-2">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-7"
                    />
                    <label className="item-label" for="check-3-3">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options3"
                      id="check-3-4"
                    />
                    <label className="item-label" for="check-2-4">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`items-options ${
                  Skin ? "items-options active" : "items-options"
                }`}
              >
                <div
                  className="items-options-top button"
                  onClick={() => setSkin((Skin) => !Skin)}
                >
                  <p className="items-options-title">Skin / Character</p>
                  <div className="items-options-button">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="items-options-bottom">
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-1"
                    />
                    <label className="item-label" for="check-4-1">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-2"
                    />
                    <label className="item-label" for="check-4-2">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-3"
                    />
                    <label className="item-label" for="check-4-3">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-4"
                    />
                    <label className="item-label" for="check-4-4">
                      <div className="item-block">
                        <img src="img/items/color-4.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-5"
                    />
                    <label className="item-label" for="check-4-5">
                      <div className="item-block">
                        <img src="img/items/color-5.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-6"
                    />
                    <label className="item-label" for="check-4-6">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-7"
                    />
                    <label className="item-label" for="check-4-7">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options4"
                      id="check-4-8"
                    />
                    <label className="item-label" for="check-4-8">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`items-options ${
                  slot1 ? "items-options active" : "items-options"
                }`}
              >
                <div
                  className="items-options-top button"
                  onClick={() => setSlot1((slot1) => !slot1)}
                >
                  <p className="items-options-title">Slot 1</p>
                  <div className="items-options-button">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="items-options-bottom">
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-1"
                    />
                    <label className="item-label" for="check-5-1">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-2"
                    />
                    <label className="item-label" for="check-5-2">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-3"
                    />
                    <label className="item-label" for="check-5-3">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-4"
                    />
                    <label className="item-label" for="check-5-4">
                      <div className="item-block">
                        <img src="img/items/color-4.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-5"
                    />
                    <label className="item-label" for="check-5-5">
                      <div className="item-block">
                        <img src="img/items/color-5.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-6"
                    />
                    <label className="item-label" for="check-5-6">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-7"
                    />
                    <label className="item-label" for="check-5-7">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options5"
                      id="check-5-8"
                    />
                    <label className="item-label" for="check-5-8">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`items-options ${
                  slot2 ? "items-options active" : "items-options"
                }`}
              >
                <div
                  className="items-options-top button"
                  onClick={() => setSlot2((slot2) => !slot2)}
                >
                  <p className="items-options-title">Slot 2</p>
                  <div className="items-options-button">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="items-options-bottom">
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-1"
                    />
                    <label className="item-label" for="check-6-1">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-2"
                    />
                    <label className="item-label" for="check-6-2">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-3"
                    />
                    <label className="item-label" for="check-6-3">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-4"
                    />
                    <label className="item-label" for="check-6-4">
                      <div className="item-block">
                        <img src="img/items/color-4.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-5"
                    />
                    <label className="item-label" for="check-6-5">
                      <div className="item-block">
                        <img src="img/items/color-5.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-6"
                    />
                    <label className="item-label" for="check-6-6">
                      <div className="item-block">
                        <img src="img/items/color-1.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-7"
                    />
                    <label className="item-label" for="check-6-7">
                      <div className="item-block">
                        <img src="img/items/color-2.png" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="item button">
                    <input
                      className="item-check"
                      type="radio"
                      name="options6"
                      id="check-6-8"
                    />
                    <label className="item-label" for="check-6-8">
                      <div className="item-block">
                        <img src="img/items/color-3.png" alt="" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div className="bottom-content">
              <h5 className="bottom-title">// Items Inventory</h5>
              <div className="bottom-blocks">
                <div className="bottom-block active">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block active">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
                <div className="bottom-block">
                  <img
                    src="img/items/inventory/img-1.png"
                    alt=""
                    className="activeImg"
                  />
                  <img
                    src="img/items/inventory/img-1_opacity.png"
                    alt=""
                    className="noactiveImg"
                  />
                </div>
              </div>
              <div className="bottom-button">
                <h1 href="#" className="default-button button">
                  Save Load out
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Items;
