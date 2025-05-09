import React, { useState } from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import BeforeAfterSection from "../components/BeforAfter/BeforeAfterSection";
// import BeforeAfterSection from "../components/BeforAfter/BeforeAfterSection";

const BeforeAfter = () => {
  const [selectedSection, setSelectedSection] = useState("Skin Rejuvenation");

 
  return (
    <>
      <Hero
        image={ ImageAssets.beforeandafter}
        heading={<> <span>Before and</span><br /><span>after</span> </>}
        showButton={false}
      />
      <BeforeAfterSection
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Footer />
    </>
  );
};

export default BeforeAfter;