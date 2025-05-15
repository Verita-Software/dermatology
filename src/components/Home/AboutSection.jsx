import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './AboutSection.css'
import ImageAssets from "../common/ImageAssets";

const contentData=[
  {
    text:"Meet Alicia! She is one of Middletown Medicals Dermatologist Specializing in Medical Dermatology and non-surgical aesthetic treatments. With her expertise and dedication to enhancing natural beauty, Alicia is board-certified and committed to providing personalized care and  skincare and aesthetic ",
    button:"MEET DR. ALICIA",
    image:ImageAssets.drAlicaImage
  },
  {
    text:"Meet Juliana Cotler (FNP-BC), a Nurse Practitioner at Middletown Medical specializing in Medical and Cosmetic Dermatology! New to the field, she enhance your features and brings a fresh perspective and a passion for skincare. Welcome Juliana to our team, and stay tuned for the exciting treatments she'll be bringing!",
    button:"MEET DR. JULIANA",
    image:ImageAssets.drJulianaImage
  },
  {
    text:"Meet Dr. Radha Mikkilineni! She brings extensive knowledge and experience to Mikkilineni Medical. Whether you’re looking to rejuvenate your skin, enhance your features, or address dermatological concerns, she’s here to help. Experience the care of a board-certified specialist who prioritizes your beauty and well-being",
    button:"MEET DR. RADHA",
    image:ImageAssets.drMikkilineni
  },
]

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 4000);
    const slideTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setFade(true);
    }, 4800);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(slideTimeout);
    };
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className={`about-section-home ${animate ? "animate-slide-up" : ""}`}
    >
      <div className="about-content-home">
        <div className="about-desktop">
  <div className="about-flex">
    <div className="about-text">
      <div className="about-heading-wrapper">
        <h3 className="about-heading">About Us</h3>
        <h1 className="about-title">
          <span>BOARD</span><br/>
          <span>CERTIFIED</span><br/>
          <span>EXPERTISE</span><br/>
        </h1>
      </div>
      <div className="about-bottom">
        <p >
          {contentData[index].text}
        </p>
        <Link to="/about-us">
          <button className={`meet-doctor `}>
            {contentData[index].button}
          </button>
        </Link>
      </div>
    </div>
    <div className={`about-image fade ${fade ? "fade-in" : "fade-out"}`}>
      <img src={contentData[index].image} alt="Doctor" />
    </div>
  </div>
</div>

{/* Mobile layout (visible only on small screens) */}
<div className="about-mobile">
  <h3 className="about-heading">About Us</h3>
  <h1 className="about-title">BOARD <br /> CERTIFIED <br /> EXPERTISE</h1>
  <div className={`about-image fade ${fade ? "fade-in" : "fade-out"}`}>
    <img src={contentData[index].image} alt="Doctor" />
  </div>
  <p className={`fade ${fade ? "fade-in" : "fade-out"}`}>
    {contentData[index].text}
  </p>
  <Link to="">
    <button className={`meet-doctor fade ${fade ? "fade-in" : "fade-out"}`}>
      {contentData[index].button}
    </button>
</Link>
</div>
      </div>
    </section>
  );
};

export default AboutSection;




