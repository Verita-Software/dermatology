import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ABOUT */}
      <div className="footer-column">
        <h4>ABOUT US</h4>
        <Link to="/about-us/our-office">
          <p>Our Office</p>
        </Link>
        <Link to="/about-us/dr-alicia-natalizio">
          <p>Dr. Alicia Natalizio</p>
        </Link>
        <Link to="/about-us/dr-radha-mikkilinen">
          <p>Dr. Radha Mikkilineni</p>
        </Link>
        <Link to="/about-us/dr-juliana-cotler">
          <p>Dr. Juliana Cotter</p>
        </Link>
      </div>

      {/* SERVICES */}
      <div className="footer-column">
        <h4>SERVICES</h4>
        <Link to="/services/skin-rejuvenation">
          <p>Skin Rejuvenation</p>
        </Link>
        <Link to="/services/injectables">
          <p>Injectables</p>
        </Link>
        <Link to="/services/cosmetic-services">
          <p>Cosmetic Services</p>
        </Link>
        <Link to="/services/acne-treatment">
          <p>Acne Treatment</p>
        </Link>
      </div>

      {/* PATIENTS */}
      <div className="footer-column">
        <h4>PATIENTS RESOURCES</h4>
        <Link to="/patient-resources/specials">
          <p>Special</p>
        </Link>
        <Link to="/patient-resources/insurance">
          <p>Insurance</p>
        </Link>
        <Link to="/patient-resources/resources">
          <p>Patient Portal</p>
        </Link>
        <Link to="/patient-resources/pay-bill">
          <p>Pay Bill</p>
        </Link>
      </div>

      {/* CONTACT */}
      <div className="footer-column">
        <h4>CONTACT</h4>
        <a href="tel:8454217040">
          <p>
            <strong>Phone:</strong> (845) 986 – 7474
          </p>
        </a>

        <a
          href="https://maps.app.goo.gl/Vbx2FzQ5GD6u9EjS8"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Map and Direction
        </a>

        <p>
          <strong>Address:</strong>
        </p>
        <p>
          <a
            href="https://maps.app.goo.gl/Vbx2FzQ5GD6u9EjS8"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <LocationOnIcon style={{ color: "blue", marginRight: 8,marginTop:"5px" }} />
          </a>
          200 Ronald Reagan Blvd.
        </p>
        <p>Warwick, NY 1099</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-column">
//         <h4>ABOUT</h4>
//         <p>Our Office</p>
//         <p>Dr. Alicia Natalizio</p>
//         <p>Dr. Radha Mikkilineni</p>
//         <p>Dr. Juliana Cotter</p>
//       </div>
//       <div className="footer-column">
//         <h4>SERVICES</h4>
//         <p>Skin Rejuvenation</p>
//         <p>Injectables</p>
//         <p>Cosmetic Services</p>
//         <p>Acne Treatment</p>
//       </div>
//       <div className="footer-column">
//         <h4>PATIENTS</h4>
//         <p>Special</p>
//         <p>Insurance</p>
//         <p>Patient Portal</p>
//         <p>Pay Bill</p>
//       </div>
//       <div className="footer-column">
//         <h4>CONTACT</h4>
//         <p><strong>Phone:</strong> (845) 986 – 7474</p>
//         <p><strong>Address:</strong></p>
//         <p>200 Ronald Reagan Blvd.</p>
//         <p>Warwick, NY 1099</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
