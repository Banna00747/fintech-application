import React from "react";

import payIcon from "../../assets/images/pay-icon.png";
import ActionCard from "../../components/ActionCard";
import RecentActivity from "../../components/RecentActivity";
import Footer from "../../layouts/footer/Footer";
import WalletCard from "../../components/WalletCard";
import Header from "../../layouts/header/Header";
import requestIcon from "../../assets/images/request.png";
import topup from "../../assets/images/topup.png";
import withdraw from "../../assets/images/withdraw.png";

export default function Home() {
  return (
    <>
      <div className="container">
      <Header />
        <div className="main">
          <div className="container">
            <div className="mainInfo">
              <h3>Wallet</h3>
              <p>Dashboard</p>
            </div>
            <div className="wallet">
              <div className="container">
              <WalletCard viewCardInfo={true} cardName='Dollar Balance' showCardType={true} cardType='Primary' amount='2780,00'/>
              <WalletCard viewCardInfo={true} cardName='My Dollar' showCardType={false} cardType='Primary' amount='2780,00'/>
              <WalletCard viewCardInfo={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="action-activity-container">
          <div className="wrapper">
            <div className="action">
              <h2>Action</h2>
              <div className="action-card-container">
                <ActionCard  withdrawCard={false} src={payIcon} title={'Pay'}/>
                <ActionCard  withdrawCard={false} src={requestIcon} title={'Request'}/>
                <ActionCard  withdrawCard={false} src={topup} title={'TopUp'}/>
                <ActionCard  withdrawCard={true} src={withdraw} title={'Withdraw'}/>

              </div>
            </div>
            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <div className="recent-activity-container">
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}
