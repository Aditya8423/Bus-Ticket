import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../components/SearchBox";
import "../css/BusList.css";

export default function BusList() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get buses from state passed via navigate()
  const buses = location.state?.buses || [];

  const handleBookClick = (bus) => {
    // Navigate to UserDetails and pass selected bus info
    navigate("/user-details", { state: { busData: bus } });
  };

  return (
    <>
      <div className="bus-list-page">

        {/* Search bar */}
        <div className="searchbox">
          <Search />
        </div>

        {/* Bus list */}
        <div className="bus-list">
          {buses.length > 0 ? (
            buses.map((bus, index) => (
              <div key={index} className="bus-card">
                <div className="bus-info">
                  <h3>{bus.vendor}</h3>
                  <p><strong>Bus No:</strong> {bus.busNumber}</p>
                  <p><strong>Departure:</strong> {bus.departure}</p>
                  <p><strong>Arrival:</strong> {bus.arrival}</p>
                  <p><strong>Seats:</strong> {bus.seats} available</p>
                </div>
                <div className="bus-action">
                  <h2>₹{bus.price}</h2>
                  <button onClick={() => handleBookClick(bus)}>Book</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-buses">No Bus Available for this route</p>
          )}
        </div>
      </div>
    </>
  );
}
