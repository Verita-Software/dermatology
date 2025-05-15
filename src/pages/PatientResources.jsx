import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import CareResourcesSection from "../components/CareResources/CareResourcesSection";

// Slug-to-label mapping
const tabSlugMap = {
  resources: "Resources",
  specials: "Specials",
  insurance: "Insurance",
  "pay-bill": "Pay Bill",
};

// Label-to-slug mapping (reverse)
const reverseTabSlugMap = Object.fromEntries(
  Object.entries(tabSlugMap).map(([slug, label]) => [label, slug])
);

const CareResources = () => {
  const { tabSlug } = useParams();
  const navigate = useNavigate();

  const defaultTab = "Resources";
  const tabFromSlug = tabSlugMap[tabSlug] || defaultTab;

  const [selectedTab, setSelectedTab] = useState(tabFromSlug);

  useEffect(() => {
    const slug = reverseTabSlugMap[selectedTab];
    if (slug && slug !== tabSlug) {
      navigate(`/care-resources/${slug}`, { replace: true });
    }
  }, [selectedTab]);

  const heroImages = {
    "Resources": ImageAssets.careResourceImage,
    "Specials": ImageAssets.careResourceImage,
    "Insurance": ImageAssets.careResourceImage,
    "Pay Bill": ImageAssets.careResourceImage,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab]}
        heading={
          <>
            <span>CARE</span>
            <br />
            <span>RESOURCES</span>
          </>
        }
        showButton={false}
      />
      <CareResourcesSection
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Footer />
    </>
  );
};

export default CareResources;



// import React, { useState } from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import ImageAssets from "../components/common/ImageAssets";
// import CareResourcesSection from "../components/CareResources/CareResourcesSection";

// const CareResources = () => {
//   const [selectedTab, setSelectedTab] = useState("Resources");

//   const heroImages = {
//     "Resources": ImageAssets.careResourceImage,
//     "Specials": ImageAssets.careResourceImage,
//     "Insurance": ImageAssets.careResourceImage,
//     "Pay Bill": ImageAssets.careResourceImage,
//   };

//   return (
//     <>
//       <Hero image={heroImages[selectedTab]} heading={<> <span>CARE</span><br /><span>RESOURCES</span> </>} showButton={false} />
//       <CareResourcesSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//       <Footer />
//     </>
//   );
// };

// export default CareResources;