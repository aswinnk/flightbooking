import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="col-md-6 ">
      <div className="row">
        <h1 style={{ color: "#fff" }}>Say Yes to The World</h1>
      </div>
      <div className="row">
        <p>
          Pulvinar rhoncus eget non vulputate varius ullamcorper enim arcu
          mauris. Pharetra augue amet sit cursus. Leo commodo neque neque
          praesent. Aliquet tincidunt maecenas elementum eu ipsum erat. Velit
          quisque morbi nisl accumsan auctor at at nec.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 p-0">
          <div className="input-box">
            <label htmlFor="">Departure Airport</label>
            <div className="input-field">
              <i class="fa fa-map-marker" />
              <input
                type="text"
                placeholder="Where are you now?"
                className="custom-input"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="input-box">
            <label htmlFor="">Arrival airport</label>
            <div className="input-field">
              <i class="fa fa-map-marker" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="custom-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 p-0">
          <div className="input-box">
            <label htmlFor="">Date</label>
            <input
              type="date"
              placeholder="When are you leaving?"
              className="custom-input"
            />
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="input-box">
            <label htmlFor="">Travellers</label>
            <div className="input-field">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Number of passengers"
                className="custom-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 alignend">
        <a className="nav-signupbutton">Search Your Flight</a>
      </div>
    </div>
  );
};

export default Search;
