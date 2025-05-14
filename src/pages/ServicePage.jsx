import React, { useState } from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import ServiceSection from "../components/ServicePage/Services";

const ServicePage = () => {
  const [selectedTab, setSelectedTab] = useState("Cosmetic Services");

  const heroImages = {
    "Cosmetic Services": ImageAssets.service1,
    "Skin Rejuvenation": ImageAssets.service2,
    "Injectables": ImageAssets.service3,
    "Acne Treatment": ImageAssets.service4,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab] || ImageAssets.heroSkinCare}
        heading="SERVICES"
        showButton={false}
      />
      <ServiceSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Footer />
    </>
  );
};

export default ServicePage;