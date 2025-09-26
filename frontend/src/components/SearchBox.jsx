import React from "react";
import "../css/SearchBox.css";

function SearchBox() {
  return (
    <div className="booking-container">
      <div className="search-box">
        <div className="input-group">
          <label htmlFor="source">Source</label>
          <input id="source" type="text" placeholder="Enter source city" />
        </div>

        <div className="input-group">
          <label htmlFor="destination">Destination</label>
          <input id="destination" type="text" placeholder="Enter destination city" />
        </div>

        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" />
        </div>

        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
