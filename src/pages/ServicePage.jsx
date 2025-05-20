import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import Services from "../components/ServicePage/Services";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

const serviceSlugMap = {
  "cosmetic-services": "Cosmetic Services",
  "skin-rejuvenation": "Skin Rejuvenation",
  injectables: "Injectables",
  "acne-treatment": "Acne Treatment",
};

const reverseServiceSlugMap = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([slug, label]) => [label, slug])
);

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const defaultTab = "Cosmetic Services";
  const tabFromSlug = serviceSlugMap[serviceSlug] || defaultTab;

  const [selectedTab, setSelectedTab] = useState(tabFromSlug);

  useEffect(() => {
    if (selectedTab) {
      const slug = reverseServiceSlugMap[selectedTab];
      if (slug && slug !== serviceSlug) {
        navigate(`/services/${slug}`, { replace: true });
      }
    }
  }, [selectedTab]);

  const heroImages = {
    "Cosmetic Services": ImageAssets.service5,
    "Skin Rejuvenation": ImageAssets.service2,
    "Injectables": ImageAssets.service3,
    "Acne Treatment": ImageAssets.service4,
  };

  return (
    <>
      <Hero
        image={heroImages[selectedTab] || ImageAssets.heroSkinCare}
        // heading={selectedTab}
        showButton={false}
      />
      <Breadcrumbs />
      <Services selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Footer />
    </>
  );
};

export default ServicePage;







// import React, { useState } from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import ImageAssets from "../components/common/ImageAssets";
// import ServiceSection from "../components/ServicePage/Services";

// const ServicePage = () => {
//   const [selectedTab, setSelectedTab] = useState("Cosmetic Services");

//   const heroImages = {
//     "Cosmetic Services": ImageAssets.service1,
//     "Skin Rejuvenation": ImageAssets.service2,
//     "Injectables": ImageAssets.service3,
//     "Acne Treatment": ImageAssets.service4,
//   };

//   return (
//     <>
//       <Hero
//         image={heroImages[selectedTab] || ImageAssets.heroSkinCare}
//         heading={selectedTab} // Dynamically set heading to selected tab
//         showButton={false}
//       />
//       <ServiceSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//       <Footer />
//     </>
//   );
// };

// export default ServicePage;





// import React, { useState } from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import ImageAssets from "../components/common/ImageAssets";
// import ServiceSection from "../components/ServicePage/Services";

// const ServicePage = () => {
//   const [selectedTab, setSelectedTab] = useState("Cosmetic Services");

//   const heroImages = {
//     "Cosmetic Services": ImageAssets.service1,
//     "Skin Rejuvenation": ImageAssets.service2,
//     "Injectables": ImageAssets.service3,
//     "Acne Treatment": ImageAssets.service4,
//   };

//   return (
//     <>
//       <Hero
//         image={heroImages[selectedTab] || ImageAssets.heroSkinCare}
//         heading="SERVICES"
//         showButton={false}
//       />
//       <ServiceSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//       <Footer />
//     </>
//   );
// };

// export default ServicePage;