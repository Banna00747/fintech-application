import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import profile from "../../assets/images/profile.png";
import { Avatar } from "@material-ui/core";
import Flag from "../../assets/images/Flag.png";

export default function Header() {
  const navlinkHandler = (e, item) => {
    let el;
    if (item === "wallet") {
      el = document.getElementById(item);
    } else {
      el = document.getElementById(item);
    }
    let navCollections = document.getElementsByClassName("navigation__link");
    for (let i = 0; i < navCollections.length; i++) {
      if (navCollections[i].className === el.className) {
        navCollections[i].className = "navigation__link inactive";
        el.className = "navigation__link active";
      } else {
        navCollections[i].className = "navigation__link inactive";
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="top-navbar">
          <input
            type="checkbox"
            class="navigation__checkbox"
            id="navi-toggle"
          />

          <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
          </label>

          <div class="navigation__background">&nbsp;</div>

          <div className="logo">
            <h2>Fintech App</h2>
          </div>
          <div className="navigation__nav">
            <NavLink
              onClick={(e) => navlinkHandler(e, "wallet")}
              id="wallet"
              to="/"
              className="navigation__link active"
            >
              Wallet
            </NavLink>
            <NavLink
              to="/history"
              id="history"
              onClick={(e) => navlinkHandler(e, "history")}
              className="navigation__link"
            >
              {" "}
              History
            </NavLink>
            <NavLink
              to="/recipients"
              id="recipients"
              className="navigation__link"
              onClick={(e) => navlinkHandler(e, "recipients")}
            >
              Recipients
            </NavLink>

            <NavLink
              to="/qrcodes"
              id="qrcodes"
              className="navigation__link"
              onClick={(e) => navlinkHandler(e, "qrcodes")}
            >
              QR Codes
            </NavLink>
          </div>
          <div className="profile-action">
            <NotificationsNoneOutlinedIcon />
            <img alt="flag" src={Flag} className="flag" />
            <Avatar alt="profile" src={profile} />
          </div>
        </div>
      </div>
    </>
  );
}
