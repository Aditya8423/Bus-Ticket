import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/BookingSummary.css";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = location.state?.userData;
  const busData = location.state?.busData;

  const [status, setStatus] = useState(null); // null | "success" | "failed"

  if (!userData || !busData) {
    return (
      <div className="booking-summary-page">
        <div className="summary-container">
          <h2 style={{ textAlign: "center" }}>No booking details found</h2>
          <button
            onClick={() => navigate("/user-details")}
            className="back-btn"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handlePayment = () => {
    const result = Math.random() < 0.5 ? 0 : 1; // 0 or 1 randomly

    if (result === 0) {
      setStatus("failed");
      setTimeout(() => {
        setStatus(null); // reset to show booking summary again
      }, 2000);
    } else {
      setStatus("success");
      setTimeout(() => {
        navigate("/"); // go home after 2 sec
      }, 2000);
    }
  };

  // Payment failed/success messages
  if (status === "failed") {
    return (
      <div className="booking-summary-page">
        <div className="summary-container">
          <h2 style={{ textAlign: "center", color: "red" }}>
            ❌ Payment Failed
          </h2>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="booking-summary-page">
        <div className="summary-container">
          <h2 style={{ textAlign: "center", color: "green" }}>
            ✅ Payment Successful
          </h2>
        </div>
      </div>
    );
  }

  // Normal booking summary
  return (
    <div className="booking-summary-page">
      <div className="summary-container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Booking Summary
        </h2>

        <div className="summary-boxes">
          {/* Bus Details */}
          <div className="summary-box">
            <h3>Bus Details</h3>
            <div className="summary-row">
              <span>Vendor:</span>
              <span>{busData.vendor}</span>
            </div>
            <div className="summary-row">
              <span>Bus No:</span>
              <span>{busData.busNumber}</span>
            </div>
            <div className="summary-row">
              <span>Departure:</span>
              <span>{busData.departure}</span>
            </div>
            <div className="summary-row">
              <span>Arrival:</span>
              <span>{busData.arrival}</span>
            </div>
            <div className="summary-row">
              <span>Price:</span>
              <span>₹{busData.price}</span>
            </div>
          </div>

          {/* User Details */}
          <div className="summary-box">
            <h3>User Details</h3>
            <div className="summary-row">
              <span>Name:</span>
              <span>{userData.name}</span>
            </div>
            <div className="summary-row">
              <span>Gender:</span>
              <span>{userData.gender}</span>
            </div>
            <div className="summary-row">
              <span>Email:</span>
              <span>{userData.email}</span>
            </div>
            <div className="summary-row">
              <span>Phone:</span>
              <span>{userData.phone}</span>
            </div>
            <div className="summary-row">
              <span>Age:</span>
              <span>{userData.age}</span>
            </div>
          </div>
        </div>

        <button onClick={handlePayment} className="back-btn">
          Pay
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
