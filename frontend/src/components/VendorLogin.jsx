import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // ✅ use axios instance
import "../css/VendorLogin.css";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/vendors/login", { email, password });

      if (response.data.success) {
        localStorage.setItem("vendorLoggedIn", "true");
        navigate("/vendor-dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again.");
    }
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/vendors/signup", {
        vendorName,
        phone,
        email,
        password,
      });

      if (response.status === 201) {
        setShowSuccessScreen(true);

        // Reset form
        setVendorName("");
        setPhone("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          setShowSuccessScreen(false);
          setIsSignup(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Failed to register vendor. Please try again.");
    }
  };

  if (showSuccessScreen) {
    return (
      <div className="success-screen">
        <h1>Vendor Successfully Registered!!!</h1>
      </div>
    );
  }

  return (
    <div className="vendor-login-page">
      <div className="vendor-login-container">
        <h2>{isSignup ? "Vendor Registration" : "Vendor Login"}</h2>

        {!isSignup ? (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn">Login</button>
            <p className="toggle-text">
              Don't have an account?{" "}
              <span className="toggle-link" onClick={() => setIsSignup(true)}>
                Sign up
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Vendor Name:</label>
              <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                required
                placeholder="Enter vendor name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn">Register</button>
            <p className="toggle-text">
              Already have an account?{" "}
              <span className="toggle-link" onClick={() => setIsSignup(false)}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default VendorLogin;
