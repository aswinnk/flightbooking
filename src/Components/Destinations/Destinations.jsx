import React from "react";
import "./destination.css";

const Destinations = () => {
  return (
    <div className="row m-0 destination">
      <div className="col-md-4 p-0">
        <h1 className="heading-destination">Top Destinations</h1>
        <p className="desintation-description">
          Dui in in orci fermentum a. Maecenas nunc id ut auctor curabitur
          pellentesque id et tristique. Pellentesque et a nisl aliquam eget. Nam
          velit duis in mauris arcu vivamus amet turpis in. In bibendum placerat
          quam ullamcorper accumsan felis. Velit vitae pellentesque sagittis et
          consequat sit donec. Donec aenean vivamus ullamcorper urna aliquet
          faucibus lacus aliquet.
        </p>
        <button className="discover-more-button">Discover More</button>
      </div>
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/japan.png"
                className="destinationimage"
              />
              <div className="destination-content">
                <div className="destination-name">
                  Tokyo,<span className="country"> Japan</span>
                  <br />
                  Rs. 24,000 onwards.
                </div>
                <img
                  src="../assets/imgs/flight.png"
                  alt="flight"
                  className="flight"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/malaysia.png"
                className="destinationimage"
              />
              <div className="destination-content">
                <div className="destination-name">
                  Tokyo,<span className="country"> Malaysia</span>
                  <br />
                  Rs. 34,000 onwards.
                </div>
                <img
                  src="../assets/imgs/flight.png"
                  alt="flight"
                  className="flight"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/nepal.png"
                className="destinationimage"
              />
              <div className="destination-content">
                <div className="destination-name">
                  Tokyo,<span className="country"> Nepal</span>
                  <br />
                  Rs. 25,000 onwards.
                </div>
                <img
                  src="../assets/imgs/flight.png"
                  alt="flight"
                  className="flight"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/malaysia.png"
                className="destinationimage"
              />
              <div className="destination-content">
                <div className="destination-name">
                  Tokyo,<span className="country"> Malaysia</span>
                  <br />
                  Rs. 34,000 onwards.
                </div>
                <img
                  src="../assets/imgs/flight.png"
                  alt="flight"
                  className="flight"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/australia.png"
                className="destinationimage"
              />
              <div className="destination-content">
                <div className="destination-name">
                  Sydney,<span className="country"> Australia</span>
                  <br />
                  Rs.74,000 onwards.
                </div>
                <img
                  src="../assets/imgs/flight.png"
                  alt="flight"
                  className="flight"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="destination-image-container">
              <img
                src="../assets/imgs/japan.png"
                className="destinationimage"
              />
              <div className="">
                <div className="destination-content">
                  <div className="destination-name">
                    Tokyo,<span className="country"> Japan</span>
                    <br />
                    Rs. 24,000 onwards.
                  </div>
                  <img
                    src="../assets/imgs/flight.png"
                    alt="flight"
                    className="flight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
