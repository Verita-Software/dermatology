import React, { useState, useEffect, useRef } from "react";
import "./ServicesSection.css";
import ImageAssets from "../common/ImageAssets";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  { src: ImageAssets.acneTreatment, label: "Acne Treatment" },
  { src: ImageAssets.cosmeticServices, label: "Cosmetic Services" },
  { src: ImageAssets.injectables, label: "Injectables" },
];

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const[fade,setFade]=useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const isInView =
      el &&
      el.getBoundingClientRect().top < window.innerHeight &&
      el.getBoundingClientRect().bottom > 0;
  
    if (isInView) {
      setAnimate(true);
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
  
    if (el) observer.observe(el);
  
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Auto-change every 5s
  
    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 100); // Slight delay before changing image
  };
  
  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
  },100);
  };


  return (
    <section
      ref={sectionRef}
      className={`services-section ${animate ? "animate" : ""}`}
    >
      <div className="services-header">
        <h2 className="section-title">OUR SERVICES</h2>
        </div>
        <div className="nav-buttons">
          <button onClick={prevSlide}> 
            <ArrowBackIosNewIcon/>
          </button>
          <button onClick={nextSlide}>
          <ArrowForwardIosIcon />
          </button>
        </div>
      
    
      <div className={`services-carousel ${fade ? "fade-in" : "fade-out"}`}>
 
  <div className="carousel-desktop">
    <div className="service-image left">
      <img
        src={images[(current - 1 + images.length) % images.length].src}
        alt=""
      />
    </div>
    <div className="service-image center">
      <img src={images[current].src} alt={images[current].label} />
      <p className="image-label">{images[current].label}</p>
    </div>
    <div className="service-image right">
      <img src={images[(current + 1) % images.length].src} alt="" />
    </div>
  </div>

 
  <div className="carousel-mobile">
    <div className="mobile-image-wrapper">
      <button className="mobile-nav-button left" onClick={prevSlide}>‹</button>
      <img
        src={images[current].src}
        alt={images[current].label}
        className="mobile-image"
      />
      <button className="mobile-nav-button right" onClick={nextSlide}>›</button>
    </div>
    <p className="image-label">{images[current].label}</p>
  </div>
</div>
    </section>
  );
};

export default ServicesSection;
















// import React, { useState, useEffect, useRef } from "react";
// import "./ServicesSection.css";
// import ImageAssets from "../common/ImageAssets";

// const images = [
//   { src: ImageAssets.acneTreatment, label: "Acne Treatment" },
//   { src: ImageAssets.cosmeticServices, label: "Cosmetic Services" },
//   { src: ImageAssets.injectables, label: "Injectables" },
// ];

// const ServicesSection = () => {
//   const [current, setCurrent] = useState(0);
//   const [animate, setAnimate] = useState(false);
//   const[fade,setFade]=useState(true);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     const isInView =
//       el &&
//       el.getBoundingClientRect().top < window.innerHeight &&
//       el.getBoundingClientRect().bottom > 0;
  
//     if (isInView) {
//       setAnimate(true);
//     }
  
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
  
//     if (el) observer.observe(el);
  
//     return () => observer.disconnect();
//   }, []);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000); // Auto-change every 5s
  
//     return () => clearInterval(interval);
//   }, []);


//   const nextSlide = () => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//       setFade(true);
//     }, 100); // Slight delay before changing image
//   };
  
//   const prevSlide = () => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrent((prev) => (prev - 1 + images.length) % images.length);
//       setFade(true);
//   },100);
//   };


//   return (
//     <section
//       ref={sectionRef}
//       className={`services-section ${animate ? "animate" : ""}`}
//     >
//       <div className="services-header">
//         <h2 className="section-title">OUR SERVICES</h2>
//         </div>
//         <div className="nav-buttons">
//           <button onClick={prevSlide}>‹</button>
//           <button onClick={nextSlide}>›</button>
//         </div>
      
    
//       <div className={`services-carousel ${fade ? "fade-in" : "fade-out"}`}>
 
//   <div className="carousel-desktop">
//     <div className="service-image left">
//       <img
//         src={images[(current - 1 + images.length) % images.length].src}
//         alt=""
//       />
//     </div>
//     <div className="service-image center">
//       <img src={images[current].src} alt={images[current].label} />
//       <p className="image-label">{images[current].label}</p>
//     </div>
//     <div className="service-image right">
//       <img src={images[(current + 1) % images.length].src} alt="" />
//     </div>
//   </div>

 
//   <div className="carousel-mobile">
//     <div className="mobile-image-wrapper">
//       <button className="mobile-nav-button left" onClick={prevSlide}>‹</button>
//       <img
//         src={images[current].src}
//         alt={images[current].label}
//         className="mobile-image"
//       />
//       <button className="mobile-nav-button right" onClick={nextSlide}>›</button>
//     </div>
//     <p className="image-label">{images[current].label}</p>
//   </div>
// </div>
//     </section>
//   );
// };

// export default ServicesSection;
