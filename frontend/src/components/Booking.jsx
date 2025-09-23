import React from "react";
import "../css/Booking.css";

function Booking() {
  return (
    <div className="booking-container">
      {/* Search Component */}
      <div className="search-box">
        <input type="text" placeholder="Source" />
        <input type="text" placeholder="Destination" />
        <input type="date" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Booking;
