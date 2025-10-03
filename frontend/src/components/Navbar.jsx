import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>DesiBus</h2>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/vendor-login">Login as Vendor</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
