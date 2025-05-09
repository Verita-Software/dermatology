import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ImageAssets from "../ImageAssets";
import "./Header.css";

const Header = ({ toggleMenu, isMenuOpen, variant }) => {
  const navigate=useNavigate();
  const isWhite = variant === "white";

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={ImageAssets.logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-right">
          <div onClick={()=>navigate("/contact")} className={`contact ${isWhite ? "white" : ""}`}>845-421-7040</div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon
                style={{ color: isWhite ? "white" : "black", fontSize: 40 }}
              />
            ) : (
              <MenuIcon className="hamburger-icon"
                style={{ color: isWhite ? "white" : "black", fontSize: 40 }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


// import React from "react";
// import { Link } from "react-router-dom";
// import ImageAssets from "./ImageAssets";
// import "./Header.css";

// const Header = ({ toggleMenu, isMenuOpen,variant}) => {
//   const isWhite =variant==="white";
//   return (
//     <header className="header">
//       <div className="header-content">
//       <div className="logo">
//         <Link to="/">
//           <img src={ImageAssets.logo} alt="Logo" />
//         </Link>
//       </div>
//       <div className="header-right">
//         <div className={`contact ${isWhite ?'white':""} `}>845-421-7040</div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           {isMenuOpen ? (
//             <span className="close-icon"></span>
//           ) : (
//             <span className={`hamburger ${variant==="white"?"white-icon":''}` }>
//               <button style={{background:"none",border:"none"}} >
//                 <img src={ImageAssets.hamburgerIcon} alt="menu" fill="none" width={28} height={28} />
//               </button>
//             </span>
//           )}
//         </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
