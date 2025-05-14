import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

function AppointmentPage() {
  return (
    <div>
      <h1 className="page-header">Book an Appointment</h1>
      <div className="content-section">
        <p>Please fill out the form below to request an appointment. We will review your request and contact you to confirm the date and time.</p>
        <p>Note: This is a request, not a confirmation. Availability may vary.</p>
      </div>
      <AppointmentForm />
    </div>
  );
}

export default AppointmentPage;
