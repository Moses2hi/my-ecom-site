import React, { useState } from 'react';

const serviceOptions = [
  "Tree Removal",
  "Tree Pruning & Trimming",
  "Stump Grinding",
  "Emergency Tree Service",
  "Lot Clearing",
  "Consultation/Assessment",
  "Other"
];

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: serviceOptions[0],
    preferredDate: '',
    preferredTime: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. In a real app, this would go to a server/database.
    console.log('Appointment Request Data:', formData);
    alert('Thank you for your appointment request! We will contact you shortly to confirm.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: serviceOptions[0],
      preferredDate: '',
      preferredTime: '',
      details: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Service Address</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="serviceType">Service Type</label>
        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required>
          {serviceOptions.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="preferredDate">Preferred Date</label>
        <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="preferredTime">Preferred Time</label>
        <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="details">Additional Details (Optional)</label>
        <textarea id="details" name="details" value={formData.details} onChange={handleChange} />
      </div>
      <button type="submit" className="form-button">Request Appointment</button>
    </form>
  );
}

export default AppointmentForm;
