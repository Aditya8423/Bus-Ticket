import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../components/SearchBox";
import "../css/BusList.css";
import Navbar from "../components/Navbar";

export default function BusList() {
  const navigate = useNavigate();

  // Example bus data
  const buses = [
    {
      vendor: "GreenLine Travels",
      busNumber: "GL-1234",
      departure: "08:00 AM",
      arrival: "12:30 PM",
      seats: 12,
      price: 550,
    },
    {
      vendor: "BlueSky Bus",
      busNumber: "BS-5678",
      departure: "09:30 AM",
      arrival: "02:15 PM",
      seats: 5,
      price: 720,
    },
    {
      vendor: "Red Express",
      busNumber: "RE-9012",
      departure: "11:00 AM",
      arrival: "04:00 PM",
      seats: 20,
      price: 650,
    },
  ];

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
          {buses.map((bus, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
