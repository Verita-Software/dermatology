import React, { useState } from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import AboutSection from "../components/About/AboutSection";

const About = () => {
  const [selectedSection, setSelectedSection] = useState("Dr. Alicia Natalizio");

  const heroImages = {
    About: ImageAssets.aboutImage1,
    "Dr. Alicia Natalizio": ImageAssets.aboutImage1,
    "Dr. Juliana Cotler": ImageAssets.aboutJulianaCotler,
    "Dr. Radha Mikkilinen": ImageAssets.aboutRadhaMikkilinen,
    "Our Office": ImageAssets.aboutImage5,
    Testimonials: ImageAssets.aboutImage6,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedSection] || ImageAssets.aboutImage1}
        heading="ABOUT"
        showButton={false}
      />
      <AboutSection
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Footer />
    </>
  );
};

export default About;