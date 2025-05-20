import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import BeforeAfterSection from "../components/BeforAfter/BeforeAfterSection";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

// Map slug to display label
const sectionSlugMap = {
  "skin-rejuvenation": "Skin Rejuvenation",
  "injectables": "Injectables",
  "acne-treatment": "Acne Treatment",
  "cosmetic-services": "Cosmetic Services",
};

// Reverse map label to slug
const reverseSectionSlugMap = Object.fromEntries(
  Object.entries(sectionSlugMap).map(([slug, label]) => [label, slug])
);

const BeforeAfter = () => {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const defaultSection = "Skin Rejuvenation";
  const sectionFromSlug = sectionSlugMap[sectionSlug] || defaultSection;

  const [selectedSection, setSelectedSection] = useState(sectionFromSlug);

  useEffect(() => {
    const newSlug = reverseSectionSlugMap[selectedSection];
    if (newSlug && newSlug !== sectionSlug) {
      navigate(`/before-after/${newSlug}`, { replace: true });
    }
  }, [selectedSection]);

  return (
    <>
      <Hero
        image={ImageAssets.beforeandafter}
        // heading={
        //   <>
        //     <span>Before and</span>
        //     <br />
        //     <span>after</span>
        //   </>
        // }
        showButton={false}
      />
      <Breadcrumbs />
      <BeforeAfterSection
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Footer />
    </>
  );
};

export default BeforeAfter;





// import React, { useState } from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import ImageAssets from "../components/common/ImageAssets";
// import BeforeAfterSection from "../components/BeforAfter/BeforeAfterSection";


// const BeforeAfter = () => {
//   const [selectedSection, setSelectedSection] = useState("Skin Rejuvenation");

 
//   return (
//     <>
//       <Hero
//         image={ ImageAssets.beforeandafter}
//         heading={<> <span>Before and</span><br /><span>after</span> </>}
//         showButton={false}
//       />
//       <BeforeAfterSection
//         selectedSection={selectedSection}
//         setSelectedSection={setSelectedSection}
//       />
//       <Footer />
//     </>
//   );
// };

// export default BeforeAfter;