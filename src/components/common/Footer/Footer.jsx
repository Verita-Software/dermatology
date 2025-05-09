
  import React from "react";
  import "./Footer.css";
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-column">
          <h4>ABOUT</h4>
          <p>Dr. Alicia Natalizio</p>
          <p>Dr. Radha Mikkilineni</p>
          <p>Dr. Juliana Cotter</p>
        </div>
        <div className="footer-column">
          <h4>SERVICES</h4>
          <p>Skin Rejuvenation</p>
          <p>Injectables</p>
          <p>Cosmetic Services</p>
          <p>Acne Treatment</p>
        </div>
        <div className="footer-column">
          <h4>PATIENTS</h4>
          <p>Special</p>
          <p>Insurance</p>
          <p>Patient Portal</p>
          <p>Pay Bill</p>
        </div>
        <div className="footer-column">
          <h4>CONTACT</h4>
          <p><strong>Phone:</strong> (845) 986 – 7474</p>
          <p><strong>Address:</strong></p>
          <p>200 Ronald Reagan Blvd.</p>
          <p>Warwick, NY 1099</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;