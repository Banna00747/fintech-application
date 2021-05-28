import React, { useState, useEffect } from "react";

export default function ActionCard(props) {
  return (
    <>
      <div className="action-card">
        <div className={props.withdrawCard == false ? 'action-card-wrapper' : 'action-card-wrapper withdraw-bg'}>
          <img src={props.src} alt="mobileWallet" className="card-bg" />
          <h3>{props.title}</h3>
        </div>
      </div>
    </>
  );
}
