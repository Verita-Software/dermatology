// @ts-nocheck

// import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./Services.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const serviceData = {
  Services: {
    main: "We provide a range of medical and cosmetic dermatology services.",
    bullets: [],
  },
  "Cosmetic Services": {
    main: "Non-surgical treatments designed to refresh, enhance, and rejuvenate—personalized to highlight your natural beauty.",
    sections: [
      {
        heading: "Our Approach to Cosmetic Services",
        content: "",
        items: [
          {
            title: "Personalized Plans –",
            content:
              "Every treatment is tailored to your unique features and goals.",
            hasBullet: true,
          },
          {
            title: "Natural-Looking Results –",
            content: "We focus on subtle enhancements, not drastic changes.",
          },
          {
            title: "Expert Care –",
            content:
              "All services are performed by skilled, medically trained professionals.",
          },
        ],
      },
      {
        heading: "Cosmetic Services Treatments",
        content: "",
        items: [
          {
            title: "Anti-Wrinkle Injections –",
            content: "Smooth fine lines and soften expression lines.",
            hasBullet: true,
          },
          {
            title: "Dermal Fillers –",
            content: "Restore volume and enhance facial contours.",
            hasBullet: true,
          },
          {
            title: "Skin Boosters –",
            content: " Deep hydration for improved skin texture and glow",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "Before & After Results",
        content:
          "See natural, subtle improvements in skin, contours, and overall radiance. Real results, personalized for you.",
      },
      {
        heading: "Why Choose Us for Skin Cosmetic Services?",
        content:
          "Choosing the right skin clinic makes all the difference in your acne journey. Here’s why patients trust us:",
        items: [
          {
            title: "Experienced, Medically Trained Professionals –",
            content:
              " Our team has the expertise and knowledge to deliver safe, effective treatments with precision.",
            hasBullet: true,
          },
          {
            title: "Personalized Treatment Plans –",
            content:
              "We customize every plan to suit your unique features and aesthetic goals.",
            hasBullet: true,
          },
          {
            title: "Natural Balanced Results –",
            content:
              "Enhancements that refresh your look without appearing overdone or artificial.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "FAQ's",
        faqs: ["", "", ""],
      },
    ],
  },
  "Skin Rejuvenation": {
    main: "Skin rejuvenation targets signs of aging and damage to improve skin tone, texture, and appearance. If your skin feels dull, tired, or uneven, our expert treatments can safely restore its natural glow.",
    sections: [
      {
        heading: "Our Approach to Skin Rejuvenation",
        content: "",
        items: [
          {
            title: "Skin Assessment & Goal Discussion: ",
            content:
              "A thorough skin analysis and discussion with an expert dermatologist to understand your acne type, triggers, and skin goals.",
          },
          {
            title: "Customized Treatment Plan ",
            content:
              "Based on your needs, we create a personalized plan using the most suitable techniques.",
          },
          {
            title: "Multi-Session Approach :",
            content:
              "For optimal results, some treatments may be spaced over multiple sessions.",
          },
        ],
      },
      {
        heading: "Skin Rejuvenation Treatments",
        content: "",
        items: [
          {
            title: "Laser Rejuvenation –",
            content:
              "Reduces fine lines, pigmentation, and enhances skin texture.",
            hasBullet: true,
          },
          {
            title: "Microneedling – ",
            content: "Stimulates collagen and smooths out acne scars.",
            hasBullet: true,
          },
          {
            title: "HydraFacial –",
            content:
              "Deeply hydrates and detoxifies, leaving your skin instantly radiant.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "Before & After Results",
        content:
          "Non-invasive treatments that refresh skin, boost collagen, and improve tone, texture, and radiance.",
      },
      {
        heading: "Why Choose Us for Skin Rejuvenation?",
        content: "",
        items: [
          {
            title: "Certified Experts –",
            content: "Experienced dermatologists ensure safe, expert care.",
            hasBullet: true,
          },
          {
            title: " Cutting-Edge Technology –",
            content: "Non-invasive, effective, and up-to-date treatments.",
            hasBullet: true,
          },
          {
            title: "Clear Pricing –",
            content: "Honest packages with no surprises.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "FAQ's",
        faqs: [
          "How Long does it takes to see the results?",
          "Are the treatments painful?",
          "Will acne comeback after the treatment?",
        ],
      },
    ],
  },
  Injectables: {
    main: "Say goodbye to breakouts with our personalized acne solutions. From blackheads and pimples to stubborn acne scars, our expert dermatologists provide effective, skin-type-specific treatments that heal, restore, and reveal clear, healthy skin.",
    sections: [
      {
        heading: "Our Dermatologists",
        content:
          "We believe in treating acne from the inside out with a personalized, results-driven approach. Here's what you can expect when you begin your journey with us:",
        items: [
          {
            title: "One-on-One Consultation",
            content:
              "A thorough skin analysis and discussion with an expert dermatologist to understand your acne type, triggers, and skin goals.",
          },
          {
            title: "Customized Treatment Plans",
            content:
              "Tailored solutions designed specifically for your skin type and acne severity—no one-size-fits-all approach.",
          },
          {
            title: " Medical-Grade Skincare Routines",
            content:
              "Safe, dermatologist-recommended products to support and maintain treatment results at home.",
          },
        ],
      },
      {
        heading: "Types of Acne Treatments We Offer",
        content:
          "We provide a comprehensive range of evidence-based treatments tailored to different acne types and skin conditions:",
        items: [
          {
            title: "Chemical Peels",
            content:
              "Gently exfoliate dead skin cells, unclog pores, and reduce inflammation to improve overall skin texture.",
            hasBullet: true,
          },
          {
            title: "Laser and Light Therapy",
            content:
              "Target and destroy acne-causing bacteria while promoting faster healing and reducing redness.",
            hasBullet: true,
          },
          {
            title: "Scar Treatments",
            content:
              "Microneedling, laser resurfacing, and other advanced techniques to fade post-acne marks and improve skin smoothness.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "Before & After Results",
        content:
          "Our patients see visible improvements in acne, skin texture, and clarity within weeks. Consistent treatment leads to long-lasting, transformative results—restoring confidence along with clear skin",
      },
      {
        heading: "Why Choose Us for Acne Treatment?",
        content:
          "Choosing the right skin clinic makes all the difference in your acne journey. Here’s why patients trust us:",
        items: [
          {
            title: "Certified Dermatologists",
            content:
              "Our team includes board-certified skin specialists with extensive experience in diagnosing and treating all types of acne.",
            hasBullet: true,
          },
          {
            title: "Advanced Technology & FDA-Approved Equipment",
            content:
              "We use the latest, clinically proven tools and techniques for safe, effective, and faster results.",
            hasBullet: true,
          },
          {
            title: "Transparent Pricing & Honest Guidance",
            content:
              "No hidden costs, no pushy sales—just clear communication and expert advice every step of the way.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "FAQ's",
        faqs: [
          "How Long does it takes to see the results?",
          "Are the treatments painful?",
          "Will acne comeback after the treatment?",
        ],
      },
    ],
  },
  "Acne Treatment": {
    main: "Say goodbye to breakouts with our personalized acne solutions. From blackheads and pimples to stubborn acne scars, our expert dermatologists provide effective, skin-type-specific treatments that heal, restore, and reveal clear, healthy skin.",
    sections: [
      {
        heading: "Our Dermatologists",
        content:
          "We believe in treating acne from the inside out with a personalized, results-driven approach. Here's what you can expect when you begin your journey with us:",
        items: [
          {
            title: "One-on-One Consultation",
            content:
              "A thorough skin analysis and discussion with an expert dermatologist to understand your acne type, triggers, and skin goals.",
          },
          {
            title: "Customized Treatment Plans",
            content:
              "Tailored solutions designed specifically for your skin type and acne severity—no one-size-fits-all approach.",
          },
          {
            title: " Medical-Grade Skincare Routines",
            content:
              "Safe, dermatologist-recommended products to support and maintain treatment results at home.",
          },
        ],
      },
      {
        heading: "Types of Acne Treatments We Offer",
        content:
          "We provide a comprehensive range of evidence-based treatments tailored to different acne types and skin conditions:",
        items: [
          {
            title: "Chemical Peels",
            content:
              "Gently exfoliate dead skin cells, unclog pores, and reduce inflammation to improve overall skin texture.",
            hasBullet: true,
          },
          {
            title: "Laser and Light Therapy",
            content:
              "Target and destroy acne-causing bacteria while promoting faster healing and reducing redness.",
            hasBullet: true,
          },
          {
            title: "Scar Treatments",
            content:
              "Microneedling, laser resurfacing, and other advanced techniques to fade post-acne marks and improve skin smoothness.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "Before & After Results",
        content:
          "Our patients see visible improvements in acne, skin texture, and clarity within weeks. Consistent treatment leads to long-lasting, transformative results—restoring confidence along with clear skin",
      },
      {
        heading: "Why Choose Us for Acne Treatment?",
        content:
          "Choosing the right skin clinic makes all the difference in your acne journey. Here’s why patients trust us:",
        items: [
          {
            title: "Certified Dermatologists",
            content:
              "Our team includes board-certified skin specialists with extensive experience in diagnosing and treating all types of acne.",
            hasBullet: true,
          },
          {
            title: "Advanced Technology & FDA-Approved Equipment",
            content:
              "We use the latest, clinically proven tools and techniques for safe, effective, and faster results.",
            hasBullet: true,
          },
          {
            title: "Transparent Pricing & Honest Guidance",
            content:
              "No hidden costs, no pushy sales—just clear communication and expert advice every step of the way.",
            hasBullet: true,
          },
        ],
      },
      {
        heading: "FAQ's",
        faqs: [
          "How Long does it takes to see the results?",
          "Are the treatments painful?",
          "Will acne comeback after the treatment?",
        ],
      },
    ],
  },
};

const ServiceSection = ({ selectedTab, setSelectedTab }) => {
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
                    backgroundColor: "#2d3e50",
                    borderColor: state.isFocused ? "#fff" : "#ccc",
                    boxShadow: "none",
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
          <h2>{selectedTab}</h2>
          {content.main && <p>{content.main}</p>}
          {content.sections?.map((section, index) => (
            <div key={index} className="service-section">
              <h3 className="heading-h3">{section.heading}</h3>
              {section.content && <p>{section.content}</p>}
              {section.items?.map((item, idx) => (
                <div key={idx}>
                  <h4
                    className={item.hasBullet ? "bullet-heading" : "heading-h4"}
                  >
                    {item.title}
                  </h4>
                  <p>{item.content}</p>
                </div>
              ))}
              {section.faqs && (
                <div className="faq-block">
                  {section.faqs.map((question, qIdx) => (
                    <div key={qIdx}>
                      <div className="faq-question">
                        <div className="faq-icon">+</div>
                        <p>{question}</p>
                      </div>
                      {qIdx < section.faqs.length - 1 && <hr />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          ;
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

export default ServiceSection;

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
