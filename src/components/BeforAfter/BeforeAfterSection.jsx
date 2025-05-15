import React, { useEffect, useState } from "react";
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
  const content = sectionContent[selectedSection] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdownOptions = sections.map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="beforeafter-section">
      <aside className="beforeafter-sidebar">
        {isMobile ? (
          <Select
            value={{ value: selectedSection, label: selectedSection }}
            onChange={(opt) => setSelectedSection(opt.value)}
            options={dropdownOptions}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#2d3e50",
                border: "none",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
              }),
              singleValue: (base) => ({ ...base, color: "#fff" }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#405468" : "#fff",
                color: state.isFocused ? "#fff" : "#000",
              }),
            }}
          />
        ) : (
          <>
            <h2 className="sidebar-heading-before-after">Care Resources</h2>
            <ul>
              {sections.map((section) => (
                <li
                  key={section}
                  className={selectedSection === section ? "active" : ""}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      <section className="beforeafter-content">
        <h1>{selectedSection}</h1>
        <div className="beforeafter-images">
          {content.images?.map((imgSrc, idx) => (
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