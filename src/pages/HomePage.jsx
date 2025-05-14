import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1 className="page-header">Welcome to Pro Tree Services</h1>
      <div className="content-section">
        <h2>Your Trusted Partner for All Tree Care Needs</h2>
        <p>
          At Pro Tree Services, we offer comprehensive tree care solutions for residential and commercial properties. 
          Our team of certified arborists and experienced professionals is dedicated to providing safe, efficient, 
          and high-quality services.
        </p>
        <p>
          Whether you need tree removal, pruning, stump grinding, or emergency tree services, we have the expertise 
          and equipment to get the job done right.
        </p>
      </div>
      <div className="content-section">
        <h2>Our Core Services</h2>
        <ul>
          <li>Tree Removal</li>
          <li>Tree Pruning & Trimming</li>
          <li>Stump Grinding</li>
          <li>Emergency Tree Services</li>
          <li>Lot Clearing</li>
        </ul>
        <p>
          Learn more about what we offer on our <Link to="/services">Services Page</Link>.
        </p>
      </div>
      <div className="content-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Contact us today for a free estimate or to schedule an appointment.
        </p>
        <Link to="/contact" className="form-button" style={{marginRight: '10px', textDecoration: 'none'}}>Contact Us</Link>
        <Link to="/book-appointment" className="form-button" style={{textDecoration: 'none'}}>Book Appointment</Link>
      </div>
    </div>
  );
}

export default HomePage;
