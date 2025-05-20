import React, { useState } from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import ContactSection from "../components/Contact/ContactSection";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

const Contact = () => {
  const [selectedTab, setSelectedTab] = useState("Contact Us");

  const heroImages = {
    "Contact Us": ImageAssets.contactImage,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab] || ImageAssets.contactImage}
        // heading="Contact Us"
        showButton={false}
      />
        <Breadcrumbs />
      <ContactSection
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Footer />
    </>
  );
};

export default Contact;