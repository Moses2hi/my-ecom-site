import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <div>
      <h1 className="page-header">Contact Us</h1>
      <div className="content-section">
        <p>Have questions or need a quote? Fill out the form below, and we'll get back to you as soon as possible.</p>
        <p>You can also reach us at: <br/>
           Phone: (123) 456-7890 <br/>
           Email: info@protreeservices.example.com
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
