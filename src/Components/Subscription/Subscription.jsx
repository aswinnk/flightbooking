import React from "react";
import "./subscription.css";

const Subscription = () => {
  return (
    <div className="row m-0 subscription">
      <div className="col-md-12 subscription-container">
        <h3 className="pt-5">Subscribe</h3>
        <h3 className="">to Get Notified About Latest Deals & Offers</h3>
        <p className="subscription-description">
          Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
          mauris hac nisi habitasse donec. Vitae integer massa in blandit.
        </p>
        <div className="mail-enter-container">
          <div className="mail-input-box">
            <div className="mail-input-field">
              <i class="fa fa-envelope" style={{color:'#000'}} aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Email Address"
                className="mail-input"
              />
            </div>
          </div>
          <button className="discover-more-button">Learn More</button>
        </div>
        <img src="../assets/imgs/mail.png" alt="mail" className="sub-mail-img"/>
      </div>
    </div>
  );
};

export default Subscription;
