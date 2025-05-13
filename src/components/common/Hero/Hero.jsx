import React, { useEffect, useState } from "react";
import './Hero.css';

const Hero = ({ image, videoSrc, heading, showButton, posterImage }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const handleZoom = () => {
      const zoom = Math.round(window.devicePixelRatio * 100);
      setZoomLevel(zoom);
    };

    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  // Calculate dynamic style
  let heroStyle = {};
  if (zoomLevel <= 80) {
    heroStyle = { top: '50%', left: '250px', transform: 'translateY(-50%)' };
  } else if (zoomLevel <= 90) {
    heroStyle = { top: '50%', left: '170px', transform: 'translateY(-50%)' };
  }else if (zoomLevel <= 100) {
    heroStyle = { top: '50%', left: '120px', transform: 'translateY(-50%)' };
  } else if (zoomLevel <= 110) {
    heroStyle = { top: '50%', left: '55px', transform: 'translateY(-50%)' };
  } else {
    heroStyle = { top: '50%', left: '80px', transform: 'translateY(-50%)' };
  }

  return (
    <div className="hero">
      {videoSrc ? (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={image} alt="" className="hero-image" />
      )}
      <div className="hero-text" style={heroStyle}>
        <h1>{heading}</h1>
        {showButton && <button className="book-now">BOOK NOW</button>}
      </div>
    </div>
  );
};

export default Hero;








// import React, { useEffect, useState } from "react";
// import "./Hero.css";

// const Hero = ({ image, videoSrc, heading, showButton, posterImage }) => {
//   const [zoomFactor, setZoomFactor] = useState(1);

//   useEffect(() => {
//     const handleResize = () => {
//       // Assuming 1920px is 100% zoom
//       const factor = window.innerWidth / 1920;
//       setZoomFactor(factor);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // initial call

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Dynamic style based on zoom
//   const heroTextStyle = {
//     top: `${50 * zoomFactor}%`,
//     left: `${80 * zoomFactor}px`,
//     transform: `translateY(-50%)`,
//   };

//   return (
//     <div className="hero">
//       {videoSrc ? (
//         <video
//           className="hero-video"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           poster={posterImage}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <img src={image} alt="" className="hero-image" />
//       )}
//       <div className="hero-text" style={heroTextStyle}>
//         <h1>{heading}</h1>
//         {showButton && <button className="book-now">BOOK NOW</button>}
//       </div>
//     </div>
//   );
// };

// export default Hero;


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


