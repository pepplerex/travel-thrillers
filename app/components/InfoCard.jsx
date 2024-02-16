import React from "react";

const InfoCard = () => {
  return (
    <>
      <div className="info-container">
        <div className="img-container">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="text-container">
          <h5>Rex Pepple</h5>
          <p>pepplerex01@gmail.com</p>
        </div>
      </div>
      <div className="list-items">
        <ul>
          <li>
            <i className="bx bx-home"></i>
            Dashboard
          </li>
          <li className="active">
            <i className="bx bxs-plane-alt"></i> Flights
          </li>
          <li>
            <i className="bx bx-wallet"></i>
            Wallet
          </li>
          <li>
            <i className="bx bxs-report"></i> Reports
          </li>
          <li>
            <i className="bx bx-pie-chart"></i> Statistics
          </li>
          <li>
            <i className="bx bx-cog"></i> Settings
          </li>
        </ul>
      </div>

      <div className="active-users">
        <h6>Active users</h6>
        <img src="/img/p.png" alt="" />
        <img src="/img/t3.png" alt="" />
      </div>
    </>
  );
};

export default InfoCard;
