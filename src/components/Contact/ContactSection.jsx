import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="about-section">
        <aside className="contact-sidebar">
          <ul>
            <li className="active">Contact Us</li>
          </ul>
        </aside>

        <section className="contact-content">
          <p className="contact-content-heading">Contact Us</p>
          <div className="contact-boxes">
            <div className="contact-card">
              <p className="heading">ADDRESS</p>
              <p className="content">
                200 Ronald Reagan Blvd.
                <br />
                Warwick, NY 1099
              </p>
              {/* <Link href="#">Map and Direction</Link> */}
              <a
                href="https://maps.app.goo.gl/Vbx2FzQ5GD6u9EjS8"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Map and Direction
              </a>
            </div>
            <div className="contact-card">
              <p className="heading">SCHEDULE AN APPOINTMENT</p>
              <p className="content">
                Phone: (845) 988 – 7474
                <br />
                Mon - 00:00am–00:00pm
                <br />
                Fri - 00:00am–00:00pm
              </p>
            </div>
          </div>
          <div>
            <hr style={{ color: "#c3c3c3" }} />
          </div>
          <div className="appointment-heading">
            <p className="about-subheading">Book an appointment</p>
            <div className="auth-links">
              <Link
                to="#"
                onClick={() => {
                  setShowSignup(true);
                  setShowLogin(false);
                }}
              >
                Sign up
              </Link>
              <Link
                to="#"
                onClick={() => {
                  setShowLogin(true);
                  setShowSignup(false);
                }}
              >
                Login
              </Link>
            </div>
          </div>

          {/* SIGNUP MODAL */}
          {showSignup && (
            <div className="signup-modal-align">
              <div className="signup-modal">
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => setShowSignup(false)}
                  >
                    ×
                  </button>
                  <h4>SIGN UP FOR AN ACCOUNT</h4>
                  <p>
                    Sign up for a scheduling account to save your information
                    for faster booking
                  </p>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm Password" />
                  <label>
                    <input type="checkbox" />I AGREE TO THE
                    <Link to="#">TERMS OF SERVICE</Link> AND ACKNOWLEDGE THAT I
                    UNDERSTAND THE
                    <Link to="#">PRIVACY POLICY</Link>
                  </label>
                  <button className="signup-button">SIGN UP</button>
                </div>
              </div>
            </div>
          )}

          {/* LOGIN MODAL */}
          {showLogin && (
            <div className="signup-modal-align">
              <div className="signup-modal">
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => setShowLogin(false)}
                  >
                    ×
                  </button>
                  <h4>LOGIN TO YOUR ACCOUNT</h4>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="signup-button">LOGIN</button>
                </div>
              </div>
            </div>
          )}

          {/* Appointment Section */}
          {!showSignup && !showLogin && (
            <>
              <p className="subheading-paragraph">
                You will receive an appointment confirmation email from our
                scheduling system. Please add it to your safe sender list to
                prevent it from going to your spam or junk folder.
              </p>
              <p className="subheading-paragraph">
                Additionally, you will receive an email regarding your patient
                portal. This email will guide you through verifying your email
                address and setting up a username and password. If you'd like,
                you can log in and complete some of your new patient paperwork
                in advance to save time during your visit. If you have any
                questions, feel free to give us a call!
              </p>

              <div className="appointment-section">
                <h1 className="appointment-title">APPOINTMENT</h1>
                <div className="appointment-card">
                  <h1>Office Visit with Dr. Juliano</h1>
                  <p className="duration">15 minutes</p>
                  {expanded && (
                    <p className="description">
                      Medical Visits address concerns such as acne, skin cancer
                      screenings, rashes, concerning spots, warts, allergy
                      testing, hair loss etc. All patients are seen by board
                      certified dermatologist Dr Juliana. If you are unable to
                      get a preferred time, please call the office at
                      845-421-7040 to see if we can accommodate you. For
                      cosmetic consultation, please call the office to set up an
                      appointment. in this way Please note that we do not
                      participate in Medicaid plan
                    </p>
                  )}
                  <button className="toggle-btn" onClick={toggleDescription}>
                    {expanded ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.796445531032!2d-74.3661447846109!3d41.26140477927608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f89d3f8eaaab%3A0x7fbbf1e0ef3f7dbb!2s200%20Ronald%20Reagan%20Blvd%2C%20Warwick%2C%20NY%2010989!5e0!3m2!1sen!2sus!4v1682091820987!5m2!1sen!2sus"
          width="100%"
          height="587"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactSection;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./ContactSection.css";

// const ContactSection = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const toggleDescription = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="about-section">
//       <aside className="about-sidebar">
//         <ul>
//           <li className="active">Contact Us</li>
//         </ul>
//       </aside>

//       <section className="about-content">
//         {/* Always visible section */}
//         <h2>Contact Us</h2>
//         <div className="contact-boxes">
//           <div className="contact-card">
//             <h3>ADDRESS</h3>
//             <p>
//               200 Ronald Reagan Blvd.
//               <br />
//               Warwick, NY 1099
//             </p>
//             <a href="#">Map and Direction</a>
//           </div>
//           <div className="contact-card">
//             <h3>SCHEDULE AN APPOINTMENT</h3>
//             <p>
//               Phone: (845) 988 – 7474
//               <br />
//               Mon - 00:00am–00:00pm
//               <br />
//               Fri - 00:00am–00:00pm
//             </p>
//           </div>
//         </div>

//         <div className="appointment-heading">
//           <h3 className="about-subheading">Book an appointment</h3>
//           <div className="auth-links">
//             <Link to="#" onClick={() => setShowSignup(true)}>Sign up</Link>
//             <Link to="#" onClick={() => setShowSignup(true)}>Login</Link>
//           </div>
//         </div>

//         {showSignup ? (
//           <div className="signup-modal-align">
//             <div className="signup-modal">
//               <div className="modal-content">
//                 <button className="close-btn" onClick={() => setShowSignup(false)}>×</button>
//                 <h4>SIGN UP FOR AN ACCOUNT</h4>
//                 <p>Sign up for a scheduling account to save your information for faster booking</p>
//                 <input type="email" placeholder="Email" />
//                 <input type="password" placeholder="Password" />
//                 <input type="password" placeholder="Confirm Password" />
//                 <label>
//                   <input type="checkbox" />
//                   I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
//                 </label>
//                 <button className="signup-button">SIGN UP</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <>
//             <p className="subheading-paragraph">
//               You will receive an appointment confirmation email from our scheduling system...
//             </p>
//             <p>
//               Additionally, you will receive an email regarding your patient portal...
//             </p>

//             <div className="appointment-section">
//               <h3 className="appointment-title">APPOINTMENT</h3>
//               <div className="appointment-card">
//                 <h4>Office Visit with Dr. Juliano</h4>
//                 <p className="duration">15 minutes</p>
//                 {expanded && (
//                   <p className="description">Medical Visits address concerns such as...</p>
//                 )}
//                 <button className="toggle-btn" onClick={toggleDescription}>
//                   {expanded ? "Show less" : "Show more"}
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ContactSection;
