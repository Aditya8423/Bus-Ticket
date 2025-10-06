import React, { useState, useEffect } from "react";
import axios from "axios";
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

  // ✅ Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [busRes, driverRes, routeRes] = await Promise.all([
        axios.get("http://localhost:8080/api/buses"),
        axios.get("http://localhost:8080/api/drivers"),
        axios.get("http://localhost:8080/api/routes"),
      ]);
      setBuses(busRes.data);
      setDrivers(driverRes.data);
      setRoutes(routeRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Handlers
  const handleAddBus = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/buses", {
        busNumber,
        totalSeats,
      });
      setBuses([...buses, response.data]);
      setBusNumber("");
      setTotalSeats("");
    } catch (err) {
      console.error("Error adding bus:", err);
    }
  };

  const handleAddDriver = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/drivers", {
        driverName,
        driverPhone,
      });
      setDrivers([...drivers, response.data]);
      setDriverName("");
      setDriverPhone("");
    } catch (err) {
      console.error("Error adding driver:", err);
    }
  };

  const handleAddRoute = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/routes", {
        source,
        destination,
        distance,
      });
      setRoutes([...routes, response.data]);
      setSource("");
      setDestination("");
      setDistance("");
    } catch (err) {
      console.error("Error adding route:", err);
    }
  };

  const handleAddSchedule = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/schedules", {
        busId: selectedBus,
        driverId: selectedDriver,
        routeId: selectedRoute,
        arrival,
        departure,
        price,
      });
      alert("✅ Schedule Added Successfully!");
      console.log(response.data);

      // Reset form
      setSelectedBus("");
      setSelectedDriver("");
      setSelectedRoute("");
      setArrival("");
      setDeparture("");
      setPrice("");
    } catch (err) {
      console.error("Error adding schedule:", err);
    }
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
        {/* Add Bus */}
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
                {buses.map((bus) => (
                  <li key={bus.id}>
                    {bus.busNumber} - {bus.totalSeats} Seats
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {/* Add Driver */}
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
                {drivers.map((driver) => (
                  <li key={driver.id}>
                    {driver.driverName} - {driver.driverPhone}
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {/* Add Route */}
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
                {routes.map((route) => (
                  <li key={route.id}>
                    {route.source} → {route.destination} ({route.distance} km)
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        {/* Add Schedule */}
        {activeSection === "schedule" && (
          <form className="dashboard-form" onSubmit={handleAddSchedule}>
            <label>Select Bus:</label>
            <select
              value={selectedBus}
              onChange={(e) => setSelectedBus(e.target.value)}
              required
            >
              <option value="">Select Bus</option>
              {buses.map((bus) => (
                <option key={bus.id} value={bus.id}>
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
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
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
              {routes.map((route) => (
                <option key={route.id} value={route.id}>
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
