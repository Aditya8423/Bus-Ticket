import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/UserDetails.css";

const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get busData passed from BusList
  const busData = location.state?.busData;

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass both userData and busData to BookingSummary
    navigate("/booking-summary", { state: { userData: formData, busData } });
  };

  return (
    <div className="user-details-page">
      <div className="user-details-container">
        <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>

        <form onSubmit={handleSubmit} className="user-details-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10-digit number"
          />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            max="120"
          />

          <button type="submit" className="book-btn">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
