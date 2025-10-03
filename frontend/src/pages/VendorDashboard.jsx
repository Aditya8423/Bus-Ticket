import React, { useState } from "react";
import "../css/VendorDashboard.css";

const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState("buses");

  // States for forms
  const [busNumber, setBusNumber] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const [driverName, setDriverName] = useState("");
  const [driverPhone, setDriverPhone] = useState("");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");

  const [selectedBus, setSelectedBus] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [price, setPrice] = useState("");

  const [buses, setBuses] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [routes, setRoutes] = useState([]);

  // Handlers
  const handleAddBus = (e) => {
    e.preventDefault();
    setBuses([...buses, { busNumber, totalSeats }]);
    setBusNumber("");
    setTotalSeats("");
  };

  const handleAddDriver = (e) => {
    e.preventDefault();
    setDrivers([...drivers, { driverName, driverPhone }]);
    setDriverName("");
    setDriverPhone("");
  };

  const handleAddRoute = (e) => {
    e.preventDefault();
    setRoutes([...routes, { source, destination, distance }]);
    setSource("");
    setDestination("");
    setDistance("");
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const schedule = {
      bus: selectedBus,
      driver: selectedDriver,
      route: selectedRoute,
      arrival,
      departure,
      price,
    };
    console.log("Schedule Added:", schedule);
    setSelectedBus("");
    setSelectedDriver("");
    setSelectedRoute("");
    setArrival("");
    setDeparture("");
    setPrice("");
    alert("Schedule Added! (check console)");
  };

  return (
    <div className="vendor-dashboard-page">
      <div className="dashboard-tabs">
        <button
          className={activeSection === "buses" ? "active" : ""}
          onClick={() => setActiveSection("buses")}
        >
          Add Bus
        </button>
        <button
          className={activeSection === "drivers" ? "active" : ""}
          onClick={() => setActiveSection("drivers")}
        >
          Add Driver
        </button>
        <button
          className={activeSection === "routes" ? "active" : ""}
          onClick={() => setActiveSection("routes")}
        >
          Add Route
        </button>
        <button
          className={activeSection === "schedule" ? "active" : ""}
          onClick={() => setActiveSection("schedule")}
        >
          Add Schedule
        </button>
      </div>

      <div className="dashboard-section">
        {activeSection === "buses" && (
          <form className="dashboard-form" onSubmit={handleAddBus}>
            <label>Bus Number:</label>
            <input
              type="text"
              placeholder="Enter Bus Number"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              required
            />

            <label>Total Seats:</label>
            <input
              type="number"
              placeholder="Enter Total Seats"
              value={totalSeats}
              onChange={(e) => setTotalSeats(e.target.value)}
              required
            />

            <button type="submit">Add Bus</button>

            {buses.length > 0 && (
              <ul className="list">
                {buses.map((bus, idx) => (
                  <li key={idx}>
                    {bus.busNumber} - {bus.totalSeats} Seats
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {activeSection === "drivers" && (
          <form className="dashboard-form" onSubmit={handleAddDriver}>
            <label>Driver Name:</label>
            <input
              type="text"
              placeholder="Enter Driver Name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              required
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={driverPhone}
              onChange={(e) => setDriverPhone(e.target.value)}
              required
            />

            <button type="submit">Add Driver</button>

            {drivers.length > 0 && (
              <ul className="list">
                {drivers.map((driver, idx) => (
                  <li key={idx}>
                    {driver.driverName} - {driver.driverPhone}
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {activeSection === "routes" && (
          <form className="dashboard-form" onSubmit={handleAddRoute}>
            <label>Source:</label>
            <input
              type="text"
              placeholder="Enter Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />

            <label>Destination:</label>
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />

            <label>Distance (km):</label>
            <input
              type="number"
              placeholder="Enter Distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
            />

            <button type="submit">Add Route</button>

            {routes.length > 0 && (
              <ul className="list">
                {routes.map((route, idx) => (
                  <li key={idx}>
                    {route.source} → {route.destination} ({route.distance} km)
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {activeSection === "schedule" && (
          <form className="dashboard-form" onSubmit={handleAddSchedule}>
            <label>Select Bus:</label>
            <select
              value={selectedBus}
              onChange={(e) => setSelectedBus(e.target.value)}
              required
            >
              <option value="">Select Bus</option>
              {buses.map((bus, idx) => (
                <option key={idx} value={bus.busNumber}>
                  {bus.busNumber}
                </option>
              ))}
            </select>

            <label>Select Driver:</label>
            <select
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
              required
            >
              <option value="">Select Driver</option>
              {drivers.map((driver, idx) => (
                <option key={idx} value={driver.driverName}>
                  {driver.driverName}
                </option>
              ))}
            </select>

            <label>Select Route:</label>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              required
            >
              <option value="">Select Route</option>
              {routes.map((route, idx) => (
                <option
                  key={idx}
                  value={`${route.source} → ${route.destination}`}
                >
                  {route.source} → {route.destination}
                </option>
              ))}
            </select>

            <label>Departure Date & Time:</label>
            <input
              type="datetime-local"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />

            <label>Arrival Date & Time:</label>
            <input
              type="datetime-local"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
            />

            <label>Price:</label>
            <input
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <button type="submit">Add Schedule</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;
