import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Swiperslider from "../components/Swiperslider";

const Characters = () => {
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
  const [cloth, setCloth] = useState();
  const [hair, setHair] = useState();
  const [pic, setPic] = useState();

  return (
    <div className="main-wrapper charactersPage">
      <section className="characters">
        <div className="wrapper">
          <div className="top">
            <h1 className="title-other">monks</h1>
            <div className="top-buttons">
              <a href="#" className="top-button button">
                <span className="icon">
                  <img src="img/characters/mymonks.svg" alt="" />
                </span>
                <p>my monks</p>
              </a>
              <a href="#" className="top-button button">
                <span className="icon">
                  <img src="img/characters/shuffle.svg" alt="" />
                </span>
                <p>shuffle</p>
              </a>
              <div className="filter-btn button">
                <span className="icon">
                  <img src="img/characters/filter.svg" alt="" />
                </span>
                <p>Filter</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="leftMenu">
              <div className="leftMenu-block">
                <div className="leftMenu-top">
                  <h4 className="leftMenu-top__subtitle">Filters</h4>
                  <div className="leftMenu-close">
                    <img src="img/icons/close.svg" alt="" />
                  </div>
                </div>
                <div className="search">
                  <input type="text" placeholder="sort by serial.." />
                  <div className="search-icon">
                    <img src="img/characters/search.svg" alt="" />
                  </div>
                </div>
                <div className={`items ${type ? "items active" : "items"}`}>
                  <div
                    className="items-top button"
                    onClick={() => setType((type) => !type)}
                  >
                    <p className="items-title">type</p>
                    <div className="items-button">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="items-bottom">
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-1-1"
                      />
                      <label className="item-label" for="check-1-1">
                        <div className="item-block"></div>
                        <p className="item-title">Human</p>
                        <p className="item-description">(345)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-1-2"
                      />
                      <label className="item-label" for="check-1-2">
                        <div className="item-block"></div>
                        <p className="item-title">Animal</p>
                        <p className="item-description">(135)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-1-3"
                      />
                      <label className="item-label" for="check-1-3">
                        <div className="item-block"></div>
                        <p className="item-title">Alien</p>
                        <p className="item-description">(65)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-1-4"
                      />
                      <label className="item-label" for="check-1-4">
                        <div className="item-block"></div>
                        <p className="item-title">Cyborg</p>
                        <p className="item-description">(12)</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`items ${cloth ? "items active" : "items"}`}>
                  <div
                    className="items-top button"
                    onClick={() => setCloth((cloth) => !cloth)}
                  >
                    <p className="items-title">clothing</p>
                    <div className="items-button">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="items-bottom">
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-1"
                      />
                      <label className="item-label" for="check-2-1">
                        <div className="item-block"></div>
                        <p className="item-title">Human</p>
                        <p className="item-description">(345)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-2"
                      />
                      <label className="item-label" for="check-2-2">
                        <div className="item-block"></div>
                        <p className="item-title">Animal</p>
                        <p className="item-description">(135)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-3"
                      />
                      <label className="item-label" for="check-2-3">
                        <div className="item-block"></div>
                        <p className="item-title">Alien</p>
                        <p className="item-description">(65)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-4"
                      />
                      <label className="item-label" for="check-2-4">
                        <div className="item-block"></div>
                        <p className="item-title">Cyborg</p>
                        <p className="item-description">(12)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-1"
                      />
                      <label className="item-label" for="check-2-1">
                        <div className="item-block"></div>
                        <p className="item-title">Human</p>
                        <p className="item-description">(345)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-2"
                      />
                      <label className="item-label" for="check-2-2">
                        <div className="item-block"></div>
                        <p className="item-title">Animal</p>
                        <p className="item-description">(135)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-3"
                      />
                      <label className="item-label" for="check-2-3">
                        <div className="item-block"></div>
                        <p className="item-title">Alien</p>
                        <p className="item-description">(65)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-4"
                      />
                      <label className="item-label" for="check-2-4">
                        <div className="item-block"></div>
                        <p className="item-title">Cyborg</p>
                        <p className="item-description">(12)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-1"
                      />
                      <label className="item-label" for="check-2-1">
                        <div className="item-block"></div>
                        <p className="item-title">Human</p>
                        <p className="item-description">(345)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-2"
                      />
                      <label className="item-label" for="check-2-2">
                        <div className="item-block"></div>
                        <p className="item-title">Animal</p>
                        <p className="item-description">(135)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-3"
                      />
                      <label className="item-label" for="check-2-3">
                        <div className="item-block"></div>
                        <p className="item-title">Alien</p>
                        <p className="item-description">(65)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-2-4"
                      />
                      <label className="item-label" for="check-2-4">
                        <div className="item-block"></div>
                        <p className="item-title">Cyborg</p>
                        <p className="item-description">(12)</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`items ${hair ? "items active" : "items"}`}>
                  <div
                    className="items-top button"
                    onClick={() => setHair((hair) => !hair)}
                  >
                    <p className="items-title">hair</p>
                    <div className="items-button">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="items-bottom">
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-3-1"
                      />
                      <label className="item-label" for="check-3-1">
                        <div className="item-block"></div>
                        <p className="item-title">Human</p>
                        <p className="item-description">(345)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-3-2"
                      />
                      <label className="item-label" for="check-3-2">
                        <div className="item-block"></div>
                        <p className="item-title">Animal</p>
                        <p className="item-description">(135)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-3-3"
                      />
                      <label className="item-label" for="check-3-3">
                        <div className="item-block"></div>
                        <p className="item-title">Alien</p>
                        <p className="item-description">(65)</p>
                      </label>
                    </div>
                    <div className="item button">
                      <input
                        className="item-check"
                        type="checkbox"
                        id="check-3-4"
                      />
                      <label className="item-label" for="check-3-4">
                        <div className="item-block"></div>
                        <p className="item-title">Cyborg</p>
                        <p className="item-description">(12)</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="main-sort">
                <p className="main-description">Total amount of monks 1345</p>
              </div>
              <div className="main-sort">
                <div className="main-sort__items">
                  <div className="main-sort__items-wrap">
                    <div className="main-sort__item">
                      <p>Clothing:Naked</p>
                      <span className="close button">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7188 3.28125L3.28125 11.7188"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7188 11.7188L3.28125 3.28125"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="main-sort__item">
                      <p>Clothing:Naked</p>
                      <span className="close button">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7188 3.28125L3.28125 11.7188"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7188 11.7188L3.28125 3.28125"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="main-sort__item">
                      <p>Clothing:Human</p>
                      <span className="close button">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7188 3.28125L3.28125 11.7188"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7188 11.7188L3.28125 3.28125"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="main-sort__item">
                      <p>Clothing:Human</p>
                      <span className="close button">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7188 3.28125L3.28125 11.7188"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.7188 11.7188L3.28125 3.28125"
                            stroke="#DD4040"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <a href="#" className="main-sort__clear button">
                  Clear all filters
                </a>
              </div>
              <div className="blocks-wrapper">
                <div className="blocks">
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-1.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-2.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-3.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-4.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-1.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-2.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-3.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-4.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-1.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-2.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-3.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                  <div
                    className="block button"
                    onClick={() => setPic((pic) => !pic)}
                  >
                    <div className="block-img">
                      <img src="img/characters/img-4.png" alt="" />
                    </div>
                    <p className="block-title">monk</p>
                    <p className="block-number">// 4534</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`characters-modal modal ${
          pic ? "characters-modal modal active" : "characters-modal modal"
        }`}
      >
        <div className="modal-block">
          <div
            className="modal-close button"
            onClick={() => setPic((pic) => !pic)}
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
          <div className="modal-content">
            <div className="modal-image">
              <img
                className="image"
                src="img/characters/modal-img.png"
                alt=""
              />
              <span className="plus button modal-image__button">
                <img src="img/characters/plus.svg" alt="" />
              </span>
            </div>
            <div className="modal-image__big">
              <div className="modal-image__big-block">
                <div className="image-block">
                  <img
                    className="image"
                    src="img/characters/modal-img.png"
                    alt=""
                  />
                  <span className="minus button modal-image__button">
                    <img src="img/characters/minus.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-main">
              <div className="modal-wrapper">
                <h2 className="modal-title">
                  monk
                  <span className="white">// 6787</span>
                </h2>
                <div className="modal-items">
                  <div className="modal-item">
                    <p className="modal-item__title">type</p>
                    <p className="modal-item__text">Human</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">NECk</p>
                    <p className="modal-item__text">None</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">clothing</p>
                    <p className="modal-item__text">Naked</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">Eyes</p>
                    <p className="modal-item__text">Brown</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">hair</p>
                    <p className="modal-item__text">Fade</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">weapon</p>
                    <p className="modal-item__text">Bludgeon</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">headgear</p>
                    <p className="modal-item__text">None</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">Background</p>
                    <p className="modal-item__text">Forrest</p>
                  </div>
                  <div className="modal-item">
                    <p className="modal-item__title">face</p>
                    <p className="modal-item__text">None</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
