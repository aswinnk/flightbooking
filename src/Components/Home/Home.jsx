import React from "react";
import "./home.css";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="vh100">
      <img
        src="../assets/imgs/HeroImage.png"
        alt="homeimage"
        className="homeimage"
      />
      <div className="col-md-12 content">
        <div className="logo">
          <img
            src="../assets/imgs/Logo.png"
            alt="Logo"
            className="companylogo"
          />
        </div>
        <div className="menu">
          <a href="#">About</a>
          <a href="#">Explore</a>
          <a href="#">Bookings</a>
          <a href="#">Find Ticket</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="col-md-12 search-content" style={{paddingTop:'4rem'}}>
        <div className="row">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
