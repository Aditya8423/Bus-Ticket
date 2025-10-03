import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusList from "./pages/BusList";
import UserDetails from "./pages/UserDetails";
import BookingSummary from "./components/BookingSummary";
import VendorLogin from "./components/VendorLogin"; 
import VendorDashboard from "./pages/VendorDashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-list" element={<BusList />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      </Routes>
    </Router>
  );
}
