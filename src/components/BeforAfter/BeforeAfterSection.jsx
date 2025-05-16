
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./BeforeAfterSection.css";
import ImageAssets from "../common/ImageAssets";

// Data
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

// Custom Dropdown Indicator
const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown
        style={{
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          color: "#fff",
        }}
      />
    </components.DropdownIndicator>
  );
};

const BeforeAfterSection = ({ selectedSection, setSelectedSection }) => {
  const sections = Object.keys(sectionContent);
  const content = sectionContent[selectedSection] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
          <div className="care-dropdown-container">
            {/* <div className="sidebar-heading">Before & After</div> */}
            <Select
              isSearchable={false}
              className="care-dropdown"
              value={{ value: selectedSection, label: selectedSection }}
              onChange={(option) => setSelectedSection(option.value)}
              options={dropdownOptions}
              components={{ DropdownIndicator }}
              menuIsOpen={menuIsOpen}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
              styles={{
                control: (base, state) => ({
                  ...base,
                  fontSize: "20px",
                  backgroundColor: "#52606f",
                  // height:"60px",
                  borderColor: state.isFocused ? "#fff" : "#ccc",
                  aligItems:"center",
                  border:"none",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                  color: "#fff",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#626e7c" : "#fff",
                  color: state.isFocused ? "#fff" : "#000",
                  fontSize: "18px",
                  padding: "10px 15px",
                  fontFamily: "Poppins, sans-serif",
                  "&:active": {
                    backgroundColor: "#405468",
                  },
                  
                }),
              }}
            />
          </div>
        ) : (
          <>
            <h2 className="sidebar-heading-before-after">Before & After</h2>
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









// import React, { useEffect, useState } from "react";
// import Select from "react-select";
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
//   const content = sectionContent[selectedSection] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const dropdownOptions = sections.map((section) => ({
//     value: section,
//     label: section,
//   }));

//   return (
//     <div className="beforeafter-section">
//       <aside className="beforeafter-sidebar">
//         {isMobile ? (
//           <Select
//             value={{ value: selectedSection, label: selectedSection }}
//             onChange={(opt) => setSelectedSection(opt.value)}
//             options={dropdownOptions}
//             styles={{
//               control: (base) => ({
//                 ...base,
//                 backgroundColor: "#2d3e50",
//                 border: "none",
//                 color: "#fff",
//                 fontFamily: "Poppins, sans-serif",
//               }),
//               singleValue: (base) => ({ ...base, color: "#fff" }),
//               option: (base, state) => ({
//                 ...base,
//                 backgroundColor: state.isFocused ? "#405468" : "#fff",
//                 color: state.isFocused ? "#fff" : "#000",
//               }),
//             }}
//           />
//         ) : (
//           <>
//             <h2 className="sidebar-heading-before-after">Care Resources</h2>
//             <ul>
//               {sections.map((section) => (
//                 <li
//                   key={section}
//                   className={selectedSection === section ? "active" : ""}
//                   onClick={() => setSelectedSection(section)}
//                 >
//                   {section}
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}
//       </aside>

//       <section className="beforeafter-content">
//         <h1>{selectedSection}</h1>
//         <div className="beforeafter-images">
//           {content.images?.map((imgSrc, idx) => (
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