import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Pro Tree Services</Link>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
        <li><NavLink to="/book-appointment" className={({ isActive }) => isActive ? "active" : ""}>Book Appointment</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
