import React, { useEffect, useState } from "react";
import WOW from "wowjs";

const Shuhari = () => {
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
      <div class="main-wrapper shuhariPage">
        <section class="shuhari">
          <div class="wrapper">
            <h4
              class="subtitle wow fadeInUp"
              data-wow-duration=".8s"
              data-wow-delay=".3s"
            >
              faction
            </h4>
            <h1
              class="title-other wow fadeInUp"
              data-wow-duration=".8s"
              data-wow-delay=".5s"
            >
              ShuHaRi
            </h1>
            <div
              class="image-block wow fadeInUp"
              data-wow-duration=".8s"
              data-wow-delay=".3s"
            >
              <div class="image ">
                <img src="img/shuhari/shuhari-img.png" alt="" />
              </div>
              <div class="image-subtitle">
                <h4>// leader </h4>
              </div>
            </div>
            <div class="content">
              <div
                class="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".3s"
              >
                <h5 class="block-title">// Descriptor</h5>
                <div class="block-content">
                  <p>
                    The ShuHaRi are an excessively disciplined faction of
                    warriors that are under a constant state of improvement.
                    <br></br>
                    The ShuHaRi believe in a cult-like mental state seeking
                    mastery and absolute power.
                    <br></br>
                    Little is known about the history of the ShuHaRi as they
                    tend to operate in the shadows.
                    <br></br>
                    The ShuHari are a terrifying yet effective class of monks
                    who have an idolization of survival through ruthless
                    aggression.
                  </p>
                </div>
              </div>
              <div
                class="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".3s"
              >
                <h5 class="block-title">// original story</h5>
                <div class="block-content">
                  <p>
                    Acting as a temporary board of directors known as Chamber
                    Members, individuals are elected to positions that govern
                    the operation of the treasury for a predetermined length of
                    time giving them executive control over governance.
                    <br></br>
                    The process of feudalistic gamified on-chain combat style
                    election is known as Ascension.
                    <br />
                    Acting as a temporary board of directors known as Chamber
                    Members, individuals are elected to positions that govern
                    the operation of the treasury for a predetermined length of
                    time giving them executive control over governance.
                    <br></br>
                    The process of feudalistic gamified on-chain combat style
                    election is known as Ascension.
                  </p>
                </div>
              </div>
              <div
                class="block wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".3s"
              >
                <h4 class="block-title"></h4>
                <div class="blocks-imgs">
                  <div class="blocks-img">
                    <img src="img/shuhari/img-1.png" alt="" />
                  </div>
                  <div class="blocks-img">
                    <img src="img/shuhari/img-2.png" alt="" />
                  </div>
                  <div class="blocks-img">
                    <img src="img/shuhari/img-3.png" alt="" />
                  </div>
                  <div class="blocks-img">
                    <img src="img/shuhari/img-4.png" alt="" />
                  </div>
                  <div class="blocks-img">
                    <img src="img/shuhari/img-5.png" alt="" />
                  </div>
                  <div class="blocks-img">
                    <img src="img/shuhari/img-6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shuhari;
