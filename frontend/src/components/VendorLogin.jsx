import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/VendorLogin.css";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Signup states
  const [vendorName, setVendorName] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false); // full screen success

  // Hardcoded vendor for demo
  const validVendor = {
    email: "vendor@example.com",
    password: "vendor123",
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === validVendor.email && password === validVendor.password) {
      localStorage.setItem("vendorLoggedIn", "true");
      navigate("/vendor-dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    const newVendor = { vendorName, phone, email, password };
    localStorage.setItem("registeredVendor", JSON.stringify(newVendor));

    // Show full-screen success
    setShowSuccessScreen(true);

    // Reset form
    setVendorName("");
    setPhone("");
    setEmail("");
    setPassword("");

    // After 2 seconds → switch back to login
    setTimeout(() => {
      setShowSuccessScreen(false);
      setIsSignup(false);
    }, 2000);
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
