import React from "react";
import './Hero.css';

const Hero = ({ image, videoSrc, heading, showButton,posterImage}) => {
  return (
    <div className="hero">
      {videoSrc ? (
        <video className="hero-video" autoPlay loop muted playsInline preload="auto" poster={posterImage}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={image} alt="" className="hero-image" />
      )}
      {/* <div className="hero-overlay" /> */}
      <div className="hero-text">
        <h1>{heading}</h1>
        {showButton && (
          <button className="book-now">BOOK NOW</button>
        )}
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import './Hero.css';

// const Hero = ({ image, heading, showButton }) => {
//   return (
//     <div className="hero">
//       <img src={image} alt="" className="hero-image"/>
//       <div className="hero-text">
//         <h1>{heading}</h1>
//         {showButton && (
//           <button className="book-now">BOOK NOW</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;


