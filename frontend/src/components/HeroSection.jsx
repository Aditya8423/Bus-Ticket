import React from "react";
import "../css/HeroSection.css";
import busBackground from "./bus-background.jpg"; // Replace with your bus image
import agra from "./images/agra.jpg";
import delhi from "./images/delhi.jpg";
import bangalore from "./images/bangalore.jpg";
import hubli from "./images/hubli.jpg";
import dharwad from "./images/dharwad.jpg";
import kolkata from "./images/kolkata.jpg";

const destinations = [agra, delhi, bangalore, hubli, dharwad, kolkata];

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="bus-background"></div>
      <div className="search-box">
        <input type="text" placeholder="Source" />
        <input type="text" placeholder="Destination" />
        <input type="date" />
        <button>Search</button>
      </div>
      <div className="destination-slider">
        <div className="slider-track">
          {destinations.map((dest, index) => (
            <img src={dest} alt={`Destination ${index}`} key={index} />
          ))}
          {/* Repeat to create looping effect */}
          {destinations.map((dest, index) => (
            <img src={dest} alt={`Destination duplicate ${index}`} key={index + destinations.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
