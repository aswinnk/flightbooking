import React from "react";
import "./service.css";
const Services = () => {
  return (
    <div className="row m-0 services">
      <div className="col-md-5">
        <div className="row">
          <div className="col-md-2">
            <h4>01</h4>
          </div>
          <div className="col-md-10 service-content">
            <h4>Instant Ticket</h4>
            <p className="service-description">
              Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
              mauris hac nisi habitasse donec. Vitae integer massa in blandit.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h4>02</h4>
          </div>
          <div className="col-md-10 service-content">
            <h4>Worldwide Flight</h4>
            <p className="service-description">
              Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
              mauris hac nisi habitasse donec. Vitae integer massa in blandit.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h4>03</h4>
          </div>
          <div className="col-md-10 service-content">
            <h4>Trusted Booking</h4>
            <p className="service-description">
              Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
              mauris hac nisi habitasse donec. Vitae integer massa in blandit.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <h3 className="offer-heading">We Offer Best Services</h3>
        <div className=" offer-heading">
          <button className="discover-more-button">Learn More</button>
        </div>
        <div className="row">
          <img src="../assets/imgs/luggage.png" alt="luggage" />
        </div>
      </div>
    </div>
  );
};

export default Services;
