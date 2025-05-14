import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pro Tree Services. All rights reserved.</p>
      <p>Contact us: (123) 456-7890 | info@protreeservices.example.com</p>
    </footer>
  );
}

export default Footer;
