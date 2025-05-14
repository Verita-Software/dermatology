

import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./BeforeAfterSection.css";
import ImageAssets from "../common/ImageAssets";

const sectionContent = {
  "Skin Rejuvenation": {
    images: [
      ImageAssets.beforeAfter1,
      ImageAssets.beforeAfter2,
      ImageAssets.beforAfter4
    ],
  },
  Injectables: {
    images: [
      ImageAssets.beforeAfter3,
      ImageAssets.beforeAfter1,
    ],
  },
  "Cosmetic Services": {
    images: [
      ImageAssets.beforeCosmetic,
      ImageAssets.afterCosmetic,
    ],
  },
  "Acne Treatment": {
    images: [
      ImageAssets.beforeAcne,
      ImageAssets.afterAcne,
    ],
  },
};

const BeforeAfterSection = ({ selectedSection, setSelectedSection }) => {
  const sections = Object.keys(sectionContent);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (value) => {
    setSelectedSection(value);
  };

  const content = sectionContent[selectedSection] || {};
  const options = sections.map((section) => ({
    label: section,
    value: section,
  }));

  return (
    <div className="beforeafter-section">
      {isMobile ? (
        <div className="dropdown-container">
          <h2 className="sidebar-heading-before-after">Care Resources</h2>
          <Select
            className="beforeafter-dropdown"
            options={options}
            value={{ label: selectedSection, value: selectedSection }}
            onChange={(selected) => handleSelect(selected.value)}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#52606f",
                color: "#fff",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#fff",
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 1000,
              }),
            }}
          />
        </div>
      ) : (
        <aside className="beforeafter-sidebar">
          <h2 className="sidebar-heading-before-after">Care Resources</h2>
          <ul>
            {sections.map((section) => (
              <li
                key={section}
                className={selectedSection === section ? "active" : ""}
                onClick={() => handleSelect(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <section className="beforeafter-content">
        <h1>{selectedSection}</h1>
        <div className="beforeafter-images">
          {content.images &&
            content.images.map((imgSrc, idx) => (
              <div className="beforeafter-image" key={idx}>
                <img src={imgSrc} alt={`Before After ${idx + 1}`} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterSection;











// import React from "react";
// import "./BeforeAfterSection.css";
// import ImageAssets from "../common/ImageAssets";

// const sectionContent = {
//   "Skin Rejuvenation": {
//     images: [
//       ImageAssets.beforeAfter1,
//       ImageAssets.beforeAfter2,
//       ImageAssets.beforAfter4
//     ],
//   },
//   Injectables: {
//     images: [
//       ImageAssets.beforeAfter3,
//       ImageAssets.beforeAfter1,
//     ],
//   },
//   "Cosmetic Services": {
//     images: [
//       ImageAssets.beforeCosmetic,
//       ImageAssets.afterCosmetic,
//     ],
//   },
//   "Acne Treatment": {
//     images: [
//       ImageAssets.beforeAcne,
//       ImageAssets.afterAcne,
//     ],
//   },
// };

// const BeforeAfterSection = ({ selectedSection, setSelectedSection }) => {
//   const sections = Object.keys(sectionContent);

//   const handleSelect = (section) => {
//     setSelectedSection(section);
//   };

//   const content = sectionContent[selectedSection] || {};

//   return (
//     <div className="beforeafter-section">
//       <aside className="beforeafter-sidebar">
//   <h2 className="sidebar-heading-before-after">Care Resources</h2>
//   <ul>
//     {sections.map((section) => (
//       <li
//         key={section}
//         className={selectedSection === section ? "active" : ""}
//         onClick={() => handleSelect(section)}
//       >
//         {section}
//       </li>
//     ))}
//   </ul>
// </aside>

//       <section className="beforeafter-content">
//         <h1>{selectedSection}</h1>
//         <div className="beforeafter-images">
//           {content.images && content.images.map((imgSrc, idx) => (
//             <div className="beforeafter-image" key={idx}>
//               <img src={imgSrc} alt={`Before After ${idx + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BeforeAfterSection;