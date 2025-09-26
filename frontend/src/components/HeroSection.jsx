import React from "react";
import backgroundImage from "../assets/busbackground.jpg";
import busImage from "../assets/bus.png";
import SearchBox from "./SearchBox";
import "../css/HeroSection.css";

// Import travel images
import bangalore from "../assets/destinations/bangalore.jpg";
import delhi from "../assets/destinations/delhi.jpg";
import mumbai from "../assets/destinations/mumbai.jpg";
import goa from "../assets/destinations/goa.jpg";
import manali from "../assets/destinations/manali.jpg";
import lucknow from "../assets/destinations/lucknow.jpg";
import agra from "../assets/destinations/agra.jpg";
import ladakh from "../assets/destinations/ladakh.jpg";
import chennai from "../assets/destinations/chennai.jpg";
import hydrabad from "../assets/destinations/hydrabad.jpg";

const HeroSection = () => {
  const firstRow = [bangalore, delhi, mumbai, goa, manali];
  const secondRow = [lucknow, agra, ladakh, chennai, hydrabad];
  const loopRow = (row) => [...row, ...row];

  return (
    <>
    <div className="heroContainer">
      <div className="heroWrapper">
        <div className="heroBox">
          <img src={backgroundImage} alt="Hero" className="heroImage" />
          <img src={busImage} alt="Bus" className="busImage bus1" />
          <img src={busImage} alt="Bus" className="busImage bus2" />
        </div>

        <div className="searchWrapper">
          <SearchBox />
        </div>
      </div>
    </div>
    {/* Travel Images */}
    <div className="travelRows">
      <h1 style={{ textAlign: "center" }}>Choose Your Destination</h1>
      <div className="travelRow row1">
        {loopRow(firstRow).map((img, index) => (
          <img key={index} src={img} alt="" className="travelImg" />
        ))}
      </div>

      <div className="travelRow row2">
        {loopRow(secondRow).map((img, index) => (
          <img key={index} src={img} alt="" className="travelImg" />
        ))}
      </div>
    </div>
    </>
  );
};

export default HeroSection;
