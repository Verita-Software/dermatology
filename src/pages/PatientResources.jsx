
import React, { useState } from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import CareResourcesSection from "../components/CareResources/CareResourcesSection";

const CareResources = () => {
  const [selectedTab, setSelectedTab] = useState("Resources");

  const heroImages = {
    "Resources": ImageAssets.careResourceImage,
    "Specials": ImageAssets.careResourceImage,
    "Insurance": ImageAssets.careResourceImage,
    "Pay Bill": ImageAssets.careResourceImage,
  };

  return (
    <>
      <Hero image={heroImages[selectedTab]} heading={<> <span>CARE</span><br /><span>RESOURCES</span> </>} showButton={false} />
      <CareResourcesSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Footer />
    </>
  );
};

export default CareResources;