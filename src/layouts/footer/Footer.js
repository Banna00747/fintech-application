import React, { useState, useEffect } from "react";
import iStore from "../../assets/images/iStore.png";
import playstore from "../../assets/images/playstore.png";
import mobileScreen from "../../assets/images/mobile-screen.png";
import shapeDesign from "../../assets/images/shape-design.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footerCard cardone">
            <div className="footerLogo">
              <h3>Get Fintech app</h3>
              <p>Available on</p>
            </div>

            <div className="icons">
              <div className="box">
                <a href="#">
                  <img src={iStore} alt="iStore logo" />
                </a>
              </div>
              <div className="box">
                <a href="#">
                  <img src={playstore} alt="playstore logo" />
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="footerCard">
            <div className="mobile-screen">
              <img src={mobileScreen} alt="mobileScreen logo" />
            </div>
          </div>

          <div className="abstract-design">
            <img src={shapeDesign} alt="shape design" />
          </div>
        </div>

        <div className="copyright">
          <p>
            {" "}
            Copyright &copy; 2017 - 2020 Fintech Pte. Ltd. All rights reserved.
          </p>
          <p> Legal | Privacy</p>
        </div>
      </div>
    </>
  );
}
