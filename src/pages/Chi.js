import React, { useEffect, useState } from "react";
import WOW from "wowjs";

const Chi = () => {
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
      <div class="main-wrapper chiPage">
        <section className="chi">
          <div className="wrapper">
            <h1
              className="title-other wow fadeInUp"
              data-wow-duration=".8s"
              data-wow-delay=".5s"
            >
              chi
            </h1>
            <div className="blocks">
              <div
                className="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <div className="block-left">
                  <div className="block-image">
                    <img src="img/chi/img1.png" alt="" />
                  </div>
                  <p className="block-name">
                    account name
                    <span className="orange">// 0001</span>
                  </p>
                </div>
                <div className="block-right">
                  <div className="block-num">2,948.60 USD</div>
                  <p className="block-description">Available balance</p>
                </div>
              </div>
              <div
                className="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <div className="block-left">
                  <div className="block-image">
                    <img src="img/chi/img2.png" alt="" />
                  </div>
                  <p className="block-name">
                    account name
                    <span className="orange">// 0002</span>
                  </p>
                </div>
                <div className="block-right">
                  <div className="block-num">2,948.60 USD</div>
                  <p className="block-description">Available balance</p>
                </div>
              </div>
              <div
                className="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <div className="block-left">
                  <div className="block-image">
                    <img src="img/chi/img3.png" alt="" />
                  </div>
                  <p className="block-name">
                    account name
                    <span className="orange">// 0003</span>
                  </p>
                </div>
                <div className="block-right">
                  <div className="block-num">2,948.60 USD</div>
                  <p className="block-description">Available balance</p>
                </div>
              </div>
              <div
                className="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
              >
                <div className="block-left">
                  <div className="block-image">
                    <img src="img/chi/img4.png" alt="" />
                  </div>
                  <p className="block-name">
                    account name
                    <span className="orange">// 0004</span>
                  </p>
                </div>
                <div className="block-right">
                  <div className="block-num">2,948.60 USD</div>
                  <p className="block-description">Available balance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chi;
