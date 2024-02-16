import React from "react";
import InfoCard from "./components/InfoCard";
import Card from "./components/Card";
import RowCard from "./components/RowCard";

const page = () => {
  return (
    <div className="container app">
      <div className="ui-container">
        <div className="row">
          <div className="col-md-3">
            <InfoCard />
          </div>
          <div className="col-md-8 container-fluid d-container">
            <Card />
            <div className="mt-3 r-sec">
              <h3>Result (25)</h3>
              <div className="r-text">
                <div className="r-cnt">Filter</div>
                <div className="r-cnt">Ticket of class</div>
              </div>
            </div>
            <RowCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
