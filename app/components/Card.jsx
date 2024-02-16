import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="f-row">
          <div className="cnt">
            <div>
              <i className="bx bx-map"></i>
              <h6>NEW YORK (JFK)</h6>
            </div>
            <div>
              <i className="bx bx-sync cb"></i>
            </div>
            <div>
              <i className="bx bx-map"></i>
              <h6>MUMBAI (MOB)</h6>
            </div>
          </div>
          <div className="cnt">
            <div>
              <i className="bx bxs-timer"></i> <h6>29 july 2019</h6>
            </div>
          </div>
          <div className="cnt">
            <div>
              <i className="bx bxs-user"></i> <h6>2 Travelers</h6>
            </div>
          </div>
        </div>
        <div className="f-row mt-3">
          <div className="cnt">
            <span className="cbg">
              <h6>One Way</h6>
            </span>
            <h6>Round Trip</h6>
            <h6>Multi City</h6>
          </div>
          <div className="cnt">
            <div>
              <i className="bx bx-chair"></i> <h6>First class</h6>
            </div>
          </div>
          <div className="cnt cnt-g">
            <div>
              <h6>Search</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
