
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material';

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="contact-number">845-421-7040</span>
          <IconButton  style={{marginTop:'-15px'}} className="close-btn" onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" end onClick={toggleMenu}>HOME</NavLink></li>
            <li><NavLink to="/about-us" onClick={toggleMenu}>ABOUT US</NavLink></li>
            <li><NavLink to="/services" onClick={toggleMenu}>SERVICES</NavLink></li>
            <li><NavLink to="/patient-resources" onClick={toggleMenu}>PATIENT RESOURCES</NavLink></li>
            <li><NavLink to="/pay-bill" onClick={toggleMenu}>PAY BILL</NavLink></li>
            <li><NavLink to="/before-after" onClick={toggleMenu}>BEFORE & AFTER</NavLink></li>
            <li><NavLink to="/blog" onClick={toggleMenu}>BLOG</NavLink></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/contact" onClick={toggleMenu}>
            <button className="sidebar-contact-btn">CONTACT US</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';
// import ImageAssets from '../ImageAssets';

// const Sidebar = ({ isMenuOpen, toggleMenu }) => {
//   return (
//     <>
//       {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
//       <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <span className="contact-number">845-421-7040</span>
//           <button className="close-btn" onClick={toggleMenu}>
//             <img src={ImageAssets.crossIconSidebar} alt="cross-icon" />
//           </button>
//         </div>
//         <nav>
//           <ul>
//             <li><NavLink to="/" end onClick={toggleMenu}>HOME</NavLink></li>
//             <li><NavLink to="/about" onClick={toggleMenu}>ABOUT</NavLink></li>
//             <li><NavLink to="/patient-resources" onClick={toggleMenu}>PATIENT RESOURCES</NavLink></li>
//             <li><NavLink to="/pay-bill" onClick={toggleMenu}>Pay Bill</NavLink></li>
//             <li><NavLink to="/before-after" onClick={toggleMenu}>BEFORE & AFTER</NavLink></li>
//             <li><NavLink to="/blog" onClick={toggleMenu}>BLOG</NavLink></li>
//             <li><NavLink to="/contact" onClick={toggleMenu}>CONTACT US</NavLink></li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';
// import ImageAssets from '../ImageAssets';

// const Sidebar = ({ isMenuOpen, toggleMenu }) => {
//   return (
//     <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
//       <div className="sidebar-header">
//         <span className="contact-number">845-421-7040</span>
//         <button className="close-btn" onClick={toggleMenu}>
//             <img src={ImageAssets.crossIconSidebar} alt='cross-icon' />
//         </button>
//       </div>
//       <nav>
//         <ul>
//           <li><NavLink to="/" end onClick={toggleMenu}>HOME</NavLink></li>
//           <li><NavLink to="/about" onClick={toggleMenu}>ABOUT</NavLink></li>
//           <li><NavLink to="/patient-resources" onClick={toggleMenu}>PATIENT RESOURCES</NavLink></li>
//           <li><NavLink to="/pay-bill" onClick={toggleMenu}>Pay Bill</NavLink></li>
//           <li><NavLink to="/before-after" onClick={toggleMenu}>BEFORE & AFTER</NavLink></li>
//           <li><NavLink to="/blog" onClick={toggleMenu}>BLOG</NavLink></li>
//           <li><NavLink to="/contact " onClick={toggleMenu}>CONTACT US</NavLink></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
