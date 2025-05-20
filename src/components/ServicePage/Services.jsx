// @ts-nocheck

import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./Services.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceData from "../../data/serviceData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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

const Services = ({ selectedTab, setSelectedTab }) => {
  const tabs = Object.keys(serviceData);
  const content = serviceData[selectedTab] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectOptions = tabs.slice(1).map((tab) => ({
    value: tab,
    label: tab,
  }));

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="service-page-wrapper">
      <aside className="service-page-sidebar">
        {isMobile ? (
          <div className="service-dropdown-container">
            <Select
              isSearchable={false}
              value={{ value: selectedTab, label: selectedTab }}
              onChange={(opt) => setSelectedTab(opt.value)}
              options={selectOptions}
              components={{ DropdownIndicator }}
              menuIsOpen={menuIsOpen}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
              styles={{
                control: (base, state) => ({
                  ...base,
                  fontSize: "20px",
                  backgroundColor: "#52606F",
                  borderColor: state.isFocused ? "#fff" : "#ccc",
                  boxShadow: "none",
                  borderRadius: "4px",
                  borderStyle: "none",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                  },
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
                  backgroundColor: state.isFocused ? "#405468" : "#fff",
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
          <ul>
            {tabs.map((tab, index) =>
              index === 0 ? (
                <h3 key={tab} className="service-page-title">
                  {tab}
                </h3>
              ) : (
                <li
                  key={tab}
                  className={selectedTab === tab ? "active" : ""}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </li>
              )
            )}
          </ul>
        )}
      </aside>

      <section className="service-page-content">
        <h1 className="heading-main">{selectedTab}</h1>
        {content.main && <p>{content.main}</p>}
        {content.sections?.map((section, index) => (
          <div key={index} className="service-section">
            <h2 className="heading-h2">{section.heading}</h2>
            {section.content && (
              <div>
                <p>
                  {section.content}</p>
                  {section.checkNowLink && (
                    <Link to={section.checkNowLink} className="check-now-link">
                      CHECK NOW
                    </Link>
                  )}
                
              </div>
            )}

            {section.items?.map((item, idx) => (
              <div key={idx}>
                <h3
                  className={item.hasBullet ? "bullet-heading" : "heading-h3"}
                >
                  {item.title}
                </h3>
                <p>{item.content} </p>
              </div>
            ))}
            {Array.isArray(section.faqs) &&
              section.faqs.length > 0 &&
              section.faqs.map((faq, qIdx) => (
                <div key={qIdx} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpenFaqIndex((prev) =>
                        prev === `${index}-${qIdx}` ? null : `${index}-${qIdx}`
                      )
                    }
                  >
                    <div>
                      {openFaqIndex === `${index}-${qIdx}` ? (
                        <RemoveCircleOutlineIcon sx={{ color: "#7A7979" }} />
                      ) : (
                        <AddCircleOutlineIcon sx={{ color: "#7A7979" }} />
                      )}
                    </div>

                    <p>{faq.question}</p>
                  </div>
                  {openFaqIndex === `${index}-${qIdx}` && (
                    <div>
                      <p style={{ color: "#373636", marginBottom: "20px" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                  {qIdx < section.faqs.length - 1 && <hr />}
                </div>
              ))}
          </div>
        ))}

        <div className="service-buttons">
          <a href="tel:8454217040" className="call-btn-service">
            CALL 845-421-7040
          </a>
          <Link to="/contact" className="appt-btn-service">
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

// import React, { useEffect, useState } from "react";
// import Select, { components } from "react-select";
// import { FaChevronDown } from "react-icons/fa";
// import "./Services.css";

// const serviceData = {
//   Services: {
//     main: "We provide a range of medical and cosmetic dermatology services.",
//     bullets: [],
//   },
//   "Cosmetic Services": {
//     main: "Cosmetic services are treatments that enhance appearance and improve skin health. They include:",
//     bullets: [
//       "Non-surgical options like Botox, fillers, chemical peels, PRP, and microdermabrasion for smoother, younger-looking skin.",
//       "Surgical procedures such as rhinoplasty, facelifts, liposuction, and tummy tucks for more permanent changes.",
//     ],
//   },
//   "Skin Rejuvenation": {
//     main: "Skin Rejuvenation refers to treatments that restore a youthful, healthy glow to your skin by reducing signs of aging, sun damage, and uneven texture. Common skin rejuvenation services include:",
//     bullets: [
//       "Chemical Peels – Remove dead skin and promote new cell growth",
//       "Laser Therapy – Targets pigmentation, fine lines, and scarring",
//       "Microneedling – Stimulates collagen for smoother, firmer skin",
//       "PRP (Vampire Facial) – Uses your own blood to boost healing and glow",
//       "Hydrafacial – Deep cleansing and hydration for instantly radiant skin",
//     ],
//   },
//   Injectables: {
//     main: "Injectables are non-surgical cosmetic treatments used to enhance facial features, reduce wrinkles, and restore lost volume with minimal downtime. Popular injectable treatments include:",
//     bullets: [
//       "Botox – Smooths fine lines and wrinkles by relaxing facial muscles (commonly used on the forehead, crow’s feet, and frown lines).",
//       "Dermal Fillers – Add volume to areas like lips, cheeks, and under-eyes, and smooth out deep lines (e.g., nasolabial folds)",
//       "Chin/Jawline Fillers – Enhance facial contour and definition.",
//       "Lip Fillers – Specifically used to plump and shape the lips for a fuller appearance.",
//       "Skin Boosters – Hydrating injectables that improve skin texture and elasticity.",
//     ],
//   },
//   "Acne Treatment": {
//     main: "Acne Treatment focuses on reducing breakouts, preventing future pimples, and improving skin texture and tone. Common acne treatments include:",
//     bullets: [
//       "Topical Medications – Creams or gels with ingredients like benzoyl peroxide, salicylic acid, or retinoids.",
//       "Oral Medications – Antibiotics or hormonal treatments (e.g., for adult women) to control deeper or persistent acne.",
//       "Chemical Peels – Help unclog pores, reduce oil, and fade acne scars.",
//       "Laser Therapy – Targets acne-causing bacteria and reduces inflammation.",
//       "Microneedling / PRP – Improves acne scars by boosting collagen production.",
//       "Facials & Extractions – Professional cleaning to remove blackheads and whiteheads.",
//     ],
//   },
// };

// const DropdownIndicator = (props) => {
//   const { menuIsOpen } = props.selectProps;
//   return (
//     <components.DropdownIndicator {...props}>
//       <FaChevronDown
//         style={{
//           transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
//           transition: "transform 0.3s ease",
//           color: "#fff",
//         }}
//       />
//     </components.DropdownIndicator>
//   );
// };

// const ServiceSection = ({ selectedTab, setSelectedTab }) => {
//   const tabs = Object.keys(serviceData);
//   const content = serviceData[selectedTab] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [menuIsOpen, setMenuIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectOptions = tabs.slice(1).map((tab) => ({
//     value: tab,
//     label: tab,
//   }));

//   return (
//     <div className="service-page-wrapper">
//       <aside className="service-page-sidebar">
//         {isMobile ? (
//           <div className="service-dropdown-container">
//             <Select
//               isSearchable={false}
//               value={{ value: selectedTab, label: selectedTab }}
//               onChange={(opt) => setSelectedTab(opt.value)}
//               options={selectOptions}
//               components={{ DropdownIndicator }}
//               menuIsOpen={menuIsOpen}
//               onMenuOpen={() => setMenuIsOpen(true)}
//               onMenuClose={() => setMenuIsOpen(false)}
//               styles={{
//                 control: (base, state) => ({
//                   ...base,
//                   fontSize: "20px",
//                   backgroundColor: "#2d3e50",
//                   borderColor: state.isFocused ? "#fff" : "#ccc",
//                   boxShadow: "none",
//                   color: "#fff",
//                   "&:hover": {
//                     borderColor: "#fff",
//                   },
//                 }),
//                 singleValue: (base) => ({
//                   ...base,
//                   color: "#fff",
//                 }),
//                 menu: (base) => ({
//                   ...base,
//                   backgroundColor: "#fff",
//                 }),
//                 option: (base, state) => ({
//                   ...base,
//                   backgroundColor: state.isFocused ? "#405468" : "#fff",
//                   color: state.isFocused ? "#fff" : "#000",
//                   fontSize: "18px",
//                   padding: "10px 15px",
//                   fontFamily: "Poppins, sans-serif",
//                   "&:active": {
//                     backgroundColor: "#405468",
//                   },
//                 }),
//               }}
//             />
//           </div>
//         ) : (
//           <ul>
//             {tabs.map((tab, index) =>
//               index === 0 ? (
//                 <h3 key={tab} className="service-page-title">
//                   {tab}
//                 </h3>
//               ) : (
//                 <li
//                   key={tab}
//                   className={selectedTab === tab ? "active" : ""}
//                   onClick={() => setSelectedTab(tab)}
//                 >
//                   {tab}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </aside>

//       <section className="service-page-content">
//         <h2>{selectedTab}</h2>
//         {content.main && <p>{content.main}</p>}
//         {content.bullets?.map((text, i) => (
//           <p key={i} className="bullet-paragraph">
//             {text}
//           </p>
//         ))}
//         <div className="service-buttons">
//           <button className="call-btn-service">CALL 845-421-7040</button>
//           <button className="appt-btn-service">REQUEST AN APPOINTMENT</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceSection;

// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import "./Services.css";

// const serviceData = {
//   Services: {
//     main: "We provide a range of medical and cosmetic dermatology services.",
//     bullets: [],
//   },
//   "Cosmetic Services": {
//     main: "Cosmetic services are treatments that enhance appearance and improve skin health. They include:",
//     bullets: [
//       "Non-surgical options like Botox, fillers, chemical peels, PRP, and microdermabrasion for smoother, younger-looking skin.",
//       "Surgical procedures such as rhinoplasty, facelifts, liposuction, and tummy tucks for more permanent changes.",
//     ],
//   },
//   "Skin Rejuvenation": {
//     main: "Skin Rejuvenation refers to treatments that restore a youthful, healthy glow to your skin by reducing signs of aging, sun damage, and uneven texture. Common skin rejuvenation services include:",
//     bullets: [
//       "Chemical Peels – Remove dead skin and promote new cell growth",
//       "Laser Therapy – Targets pigmentation, fine lines, and scarring",
//       "Microneedling – Stimulates collagen for smoother, firmer skin",
//       "PRP (Vampire Facial) – Uses your own blood to boost healing and glow",
//       "Hydrafacial – Deep cleansing and hydration for instantly radiant skin",
//     ],
//   },
//   "Injectables": {
//     main: "Injectables are non-surgical cosmetic treatments used to enhance facial features, reduce wrinkles, and restore lost volume with minimal downtime. Popular injectable treatments include:",
//     bullets: [
//       "Botox – Smooths fine lines and wrinkles by relaxing facial muscles (commonly used on the forehead, crow’s feet, and frown lines).",
//       "Dermal Fillers – Add volume to areas like lips, cheeks, and under-eyes, and smooth out deep lines (e.g., nasolabial folds)",
//       "Chin/Jawline Fillers – Enhance facial contour and definition.",
//       "Lip Fillers – Specifically used to plump and shape the lips for a fuller appearance.",
//       "Skin Boosters – Hydrating injectables that improve skin texture and elasticity.",

//     ],
//   },
//   "Acne Treatment": {
//     main: "Acne Treatment focuses on reducing breakouts, preventing future pimples, and improving skin texture and tone. Common acne treatments include:",
//     bullets: [
//       "Topical Medications – Creams or gels with ingredients like benzoyl peroxide, salicylic acid, or retinoids.",
//       "Oral Medications – Antibiotics or hormonal treatments (e.g., for adult women) to control deeper or persistent acne.",
//       "Chemical Peels – Help unclog pores, reduce oil, and fade acne scars.",
//       "Laser Therapy – Targets acne-causing bacteria and reduces inflammation.",
//       "Microneedling / PRP – Improves acne scars by boosting collagen production.",
//       "Facials & Extractions – Professional cleaning to remove blackheads and whiteheads.",
//     ],
//   },
// };

// const ServiceSection = ({ selectedTab, setSelectedTab }) => {
//   const tabs = Object.keys(serviceData);
//   const content = serviceData[selectedTab] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectOptions = tabs.slice(1).map((tab) => ({
//     value: tab,
//     label: tab,
//   }));

//   return (
//     <div className="service-page-wrapper">
//       <aside className="service-page-sidebar">
//         {isMobile ? (
//           <Select
//             value={{ value: selectedTab, label: selectedTab }}
//             onChange={(opt) => setSelectedTab(opt.value)}
//             options={selectOptions}
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
//           <ul>
//             {tabs.map((tab, index) =>
//               index === 0 ? (
//                 <h3 key={tab} className="service-page-title">
//                   {tab}
//                 </h3>
//               ) : (
//                 <li
//                   key={tab}
//                   className={selectedTab === tab ? "active" : ""}
//                   onClick={() => setSelectedTab(tab)}
//                 >
//                   {tab}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </aside>

//       <section className="service-page-content">
//         <h2>{selectedTab}</h2>

//         {/* Main Paragraph */}
//         {content.main && <p>{content.main}</p>}

//         {/* Bullet Paragraphs */}
//         {content.bullets?.map((text, i) => (
//           <p key={i} className="bullet-paragraph">
//             {text}
//           </p>
//         ))}

//         <div className="service-buttons">
//           <button className="call-btn-service">CALL 845-421-7040</button>
//           <button className="appt-btn-service">REQUEST AN APPOINTMENT</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceSection;

// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import "./Services.css";

// const serviceData = {
//   Services: {
//     paragraphs: ["We provide a range of medical and cosmetic dermatology services."],
//   },
//   "Cosmetic Services": {
//     paragraphs: [
//       "Our skin care services include custom facials, skin rejuvenation, and more tailored to your needs."
//     ],
//   },
//   "Skin Rejuvenation": {
//     paragraphs: [
//       "We offer advanced laser treatments for hair removal, pigmentation, and skin resurfacing."
//     ],
//   },
//   "Injectables": {
//     paragraphs: [
//       "Diagnosis and treatment of skin conditions like acne, eczema, psoriasis, and more."
//     ],
//   },
//   "Acne Treatment": {
//     paragraphs: [
//       "Diagnosis and treatment of skin conditions like acne, eczema, psoriasis, and more."
//     ],
//   },
// };

// const ServiceSection = ({ selectedTab, setSelectedTab }) => {
//   const tabs = Object.keys(serviceData);
//   const content = serviceData[selectedTab] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectOptions = tabs.slice(1).map((tab) => ({
//     value: tab,
//     label: tab,
//   }));

//   return (
//     <div className="service-page-wrapper">
//       <aside className="service-page-sidebar">
//         {isMobile ? (
//           <Select
//             value={{ value: selectedTab, label: selectedTab }}
//             onChange={(opt) => setSelectedTab(opt.value)}
//             options={selectOptions}
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
//           <ul>
//             {tabs.map((tab, index) =>
//               index === 0 ? (
//                 <h3 key={tab} className="service-page-title">
//                   {tab}
//                 </h3>
//               ) : (
//                 <li
//                   key={tab}
//                   className={selectedTab === tab ? "active" : ""}
//                   onClick={() => setSelectedTab(tab)}
//                 >
//                   {tab}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </aside>

//       <section className="service-page-content">
//         <h2>{selectedTab}</h2>
//         {content.paragraphs?.map((text, i) => (
//           <p key={i}>{text}</p>
//         ))}

//         <div className="service-buttons">
//           <button className="call-btn-service">CALL 845-421-7040</button>
//           <button className="appt-btn-service">REQUEST AN APPOINTMENT</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServiceSection;
