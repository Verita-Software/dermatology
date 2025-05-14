import React from "react";
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

  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  const content = sectionContent[selectedSection] || {};

  return (
    <div className="beforeafter-section">
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

      <section className="beforeafter-content">
        <h1>{selectedSection}</h1>
        <div className="beforeafter-images">
          {content.images && content.images.map((imgSrc, idx) => (
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