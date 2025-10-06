import React, { useState } from "react";
import axios from "axios";
import "../css/SearchBox.css";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = async () => {
    try {
      // Call your Java backend API
      const response = await axios.get("http://localhost:8080/api/buses/search", {
        params: {
          source,
          destination,
          date,
        },
      });

      // Navigate to BusList and pass results
      navigate("/bus-list", { state: { buses: response.data } });
    } catch (error) {
      console.error("Error fetching buses:", error);
      navigate("/bus-list", { state: { buses: [] } }); // send empty if error
    }
  };

  return (
    <div className="booking-container">
      <div className="search-box">
        <div className="input-group">
          <label htmlFor="source">Source</label>
          <input
            id="source"
            type="text"
            placeholder="Enter source city"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            placeholder="Enter destination city"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
