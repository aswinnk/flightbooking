import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropMenuItem, setDropMenuItem] = useState("NRs");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="col-md-6 d-flex" style={{ gap: "2rem" }}>
        <div>+977 9878787845</div>
        <div>let’sbookit@gmail.com</div>
      </div>
      <div className="col-md-6 nav-second-item-collection" >
        <div className="border-right-1px pr-3">
          <i className="fab fa-facebook m-1 pointer" />
          <i className="fab fa-linkedin m-1 pointer" />
          <i className="fab fa-twitter m-1 pointer" />
        </div>
        <div className="border-right-1px pr-3">
          <a className="nav-loginbutton mr-1">Log In</a>
          <a className="nav-signupbutton ml-1">Sign Up</a>
        </div>
        <div className="dropdown-nav">
          <a onClick={toggleDropdown}>
            {dropMenuItem}
            <i className="fas fa-angle-down ml-1" />
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => setDropMenuItem("NRs")}>NRs</a>
              </li>
              <li>
                <a onClick={() => setDropMenuItem("Business")}>Business</a>
              </li>
              <li>
                <a onClick={() => setDropMenuItem("General")}>General</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
