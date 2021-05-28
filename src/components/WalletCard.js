import React from "react";
import qr from "../assets/images/qr.png";
import { Button } from "@material-ui/core";
export default function WalletCard(props) {
  return (
    <>
      <div className="walletCard">
        <div className="cardBg">
            {props.viewCardInfo == true ? 
            <>
          <div className="info">
            <h3>{props.cardName}</h3>
            {props.showCardType == true ? (
              <Button className="btn btn-hollow">{props.cardType}</Button>
            ) : (
              ""
            )}
            <p>Available balance</p>
            <h4>$ {props.amount}</h4>
          </div>
          <img src={qr} alt="qr code" className="cardImg" />
          </>
          : 
          <p className='add'>Add Balance</p>}
        </div>
      </div>
    </>
  );
}
