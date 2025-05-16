// @ts-nocheck
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import "./AboutSection.css";
import ImageAssets from "../common/ImageAssets";
import { FaChevronDown } from "react-icons/fa";
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

const sectionContent = {
  "About Us": { paragraphs: [""] },
  "Our Office": {
    paragraphs: [
      "Meet Alicia! She is one of Middletown Medical’s Dermatologists specializing in Medical Dermatology and non-surgical aesthetic treatments. With her expertise and dedication to enhancing natural beauty, Alicia is committed to providing you with personalized care and achieving your skincare and aesthetic goals.",
    ],
    officeImages: [
      ImageAssets.officeImage1,
      ImageAssets.officeImage2,
      ImageAssets.officeImage3,
      ImageAssets.officeImage4,
    ],
  },
  "Dr. Alicia Natalizio": {
    paragraphs: [
      "At Dermatology, Dr. Alicia Natalizio has created a space that reflects her commitment to providing exceptional dermatology care in a modern, welcoming environment. Our office is thoughtfully designed to offer comfort and tranquility, ensuring each patient feels at ease during their visit. From the moment you step into our beautiful, state-of-the-art facility, you'll experience the highest level of care in a space that prioritizes your comfort and well-being.",
    ],
    feedback: [
      {
        text: "Very satisfied with my visit. Dr. Juliana was thorough, kind, and efficient. Highly recommend!",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Sarah M.",
      },
    ],
  },
  "Dr. Juliana Cotler": {
    paragraphs: [
      "Meet Juliana Cotler (FNP-BC), a Nurse Practitioner at Middletown Medical specializing in Medical and Cosmetic Dermatology! New to the field, she brings a fresh perspective and a passion for skincare. Welcome Juliana to our team, and stay tuned for the exciting treatments she'll be bringing!",
    ],
    heading: "Education",
    secondParagraph: `Mercy College Master of Science - MS, Family Nurse Practitioner · (August 2021 - December 2023)

Mercy College Bachelor of Science - BS, Registered Nursing/Registered Nurse · (2019 - 2020)

Stony Brook University Bachelor of Science - BS, Health Science · (2014 - 2018)`,
    feedback: [
      {
        text: "Very satisfied with my visit. Dr. Juliana was thorough, kind, and efficient. Highly recommend!",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Sarah M.",
      },
    ],
  },
  "Dr. Radha Mikkilinen": {
    paragraphs: [
      "Meet Dr. Radha Mikkilineni! She brings extensive knowledge and experience to Mikkilineni Medical. Whether you’re looking to rejuvenate your skin, enhance your features, or address dermatological concerns, she’s here to help. Experience the care of a board-certified specialist who prioritizes your beauty and well-being.",
    ],
    heading: "Education",
    secondParagraph: `Dr. Mikkilineni received her medical degree from Georgetown Medical School. She completed her internship at Yale-New Haven Hospital, her dermatology residency at Case Western Reserve - University Hospitals of Cleveland, and her dermatopathology fellowship at New York University - Tisch Hospital. 

She holds two master's degrees in Physiology and Biophysics (Georgetown) as well as in Biostatistics and Epidemiology (The London School of Hygiene & Tropical Medicine). 

She is Board Certified in Dermatology and Dermatopathology and is a Clinical Assistant Professor at Cornell Medical School.`,
    feedback: [
      {
        text: "Very satisfied with my visit. Dr. Juliana was thorough, kind, and efficient. Highly recommend!",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana made me feel comfortable from the start. The treatment was effective and well explained.",
        author: "Sarah M.",
      },
      {
        text: "Dr. Juliana was very professional and caring. They listened patiently and explained everything clearly. I felt comfortable and well taken care of.",
        author: "Sarah M.",
      },
    ],
  },

  Testimonials: {
    paragraphs: [
      "At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.",
    ],
    quotes: [
      {
        text: "This product exceeded my expectations! The quality is top-notch, and the results were noticeable within days. Highly recommend!",
        author: "Sarah M.",
      },
      {
        text: "The staff was incredibly professional, and the dermatologist took the time to explain everything. My skin has never looked better!",
        author: "James T.",
      },
      {
        text: "Exceptional service and amazing results! I feel more confident in my skin now than ever before.",
        author: "Linda P.",
      },
      {
        text: "Friendly staff, great atmosphere, and effective treatments. What more could you ask for?",
        author: "Michael B.",
      },
    ],
  },
};

const AboutSection = ({ selectedSection, setSelectedSection }) => {
  const sections = Object.keys(sectionContent);
  const content = sectionContent[selectedSection] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectOptions = sections.slice(1).map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="about-section">
      <aside className="about-sidebar">
        {isMobile ? (
          <div className="about-dropdown-container">
            <div className="about-sidebar-heading">About</div>
            <Select
              isSearchable={false}
              className="about-react-select"
              value={{ value: selectedSection, label: selectedSection }}
              onChange={(option) => setSelectedSection(option.value)}
              options={selectOptions}
              menuIsOpen={menuIsOpen}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
              components={{ DropdownIndicator }}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#52606f",
                  border: "none",
                  color: "#fff",
                  padding: "2px 5px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
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
                  backgroundColor: state.isFocused
                    ? "#626e7c"
                    : state.isSelected
                    ? "#505e6d"
                    : "#fff",
                  color: state.isFocused || state.isSelected ? "#fff" : "#000",
                  fontSize: "18px",
                  fontFamily: "Poppins, sans-serif",
                  padding: "10px 15px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  "&:active": {
                    backgroundColor: "#405468",
                  },
                }),
              }}
            />
          </div>
        ) : (
          <ul>
            {sections.map((section, index) =>
              index === 0 ? (
                <h3 key={section} className="about-sidebar-heading">
                  {section}
                </h3>
              ) : (
                <li
                  key={section}
                  className={selectedSection === section ? "active" : ""}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </li>
              )
            )}
          </ul>
        )}
      </aside>

      <section className="about-content">
        <h2 className="heading">{selectedSection}</h2>

        {content.paragraphs?.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        {selectedSection === "Testimonials" && content.quotes && (
          <div className="testimonial-quotes">
            {content.quotes.map((quote, idx) => (
              <div className="quote-box" key={idx}>
                <p className="quote-text">“{quote.text}”</p>
                <p className="quote-author">— {quote.author}</p>
              </div>
            ))}
          </div>
        )}

        {content.heading && (
          <h3 className="about-subheading">{content.heading}</h3>
        )}

        {content.secondParagraph &&
          content.secondParagraph
            .split("\n\n")
            .map((part, idx) => <p key={idx}>{part.trim()}</p>)}

        {content.feedback && (
          <>
            <h3 className="about-subheading">Patient Feedback</h3>
            <div className="testimonial-quotes">
              {content.feedback.map((quote, idx) => (
                <div className="quote-box" key={idx}>
                  <p className="quote-text">“{quote.text}”</p>
                  <p className="quote-author">— {quote.author}</p>
                  <div className="star-rating">★★★★★</div>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedSection === "Our Office" && content.officeImages && (
          <div className="office-images">
            {content.officeImages.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Office view ${idx + 1}`}
                className="office-image"
              />
            ))}
          </div>
        )}

        <div className="about-buttons">
  <a href="tel:8454217040" className="call-button-about">
    CALL 845-421-7040
  </a>
  <Link to="/contact" className="appointment-button-about">
    REQUEST AN APPOINTMENT
  </Link>
</div>

      </section>
    </div>
  );
};

export default AboutSection;

// // @ts-nocheck
// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import "./AboutSection.css";
// import ImageAssets from "../common/ImageAssets";

// const sectionContent = {
//   "About ": { paragraphs: [""] },
//   "Our Office": {
//     paragraphs: [
//       "Meet Alicia! She is one of Middletown Medical’s Dermatologists specializing in Medical Dermatology and non-surgical aesthetic treatments. With her expertise and dedication to enhancing natural beauty, Alicia is committed to providing you with personalized care and achieving your skincare and aesthetic goals.",
//     ],
//     officeImages: [
//       ImageAssets.officeImage1,
//       ImageAssets.officeImage2,
//       ImageAssets.officeImage3,
//       ImageAssets.officeImage4,
//     ],
//   },
//   "Dr. Alicia Natalizio": {
//     paragraphs: [
//       "At Dermatology, Dr. Alicia Natalizio has created a space that reflects her commitment to providing exceptional dermatology care in a modern, welcoming environment. Our office is thoughtfully designed to offer comfort and tranquility, ensuring each patient feels at ease during their visit. From the moment you step into our beautiful, state-of-the-art facility, you'll experience the highest level of care in a space that prioritizes your comfort and well-being.",
//     ],
//   },
//   "Dr. Juliana Cotler": {
//     paragraphs: [
//       "Meet Juliana Cotler (FNP-BC), a Nurse Practitioner at Middletown Medical specializing in Medical and Cosmetic Dermatology! New to the field, she brings a fresh perspective and a passion for skincare. Welcome Juliana to our team, and stay tuned for the exciting treatments she'll be bringing!",
//     ],
//     heading: "Education",
//     secondParagraph: `Mercy College Master of Science - MS, Family Nurse Practitioner · (August 2021 - December 2023)

// Mercy College Bachelor of Science - BS, Registered Nursing/Registered Nurse · (2019 - 2020)

// Stony Brook University Bachelor of Science - BS, Health Science · (2014 - 2018)`,
//   },
//   "Dr. Radha Mikkilinen": {
//     paragraphs: [
//       "Meet Dr. Radha Mikkilineni! She brings extensive knowledge and experience to Mikkilineni Medical. Whether you’re looking to rejuvenate your skin, enhance your features, or address dermatological concerns, she’s here to help. Experience the care of a board-certified specialist who prioritizes your beauty and well-being.",
//     ],
//     heading: "Education",
//     secondParagraph: `Dr. Mikkilineni received her medical degree from Georgetown Medical School. She completed her internship at Yale-New Haven Hospital, her dermatology residency at Case Western Reserve - University Hospitals of Cleveland, and her dermatopathology fellowship at New York University - Tisch Hospital.

// She holds two master's degrees in Physiology and Biophysics (Georgetown) as well as in Biostatistics and Epidemiology (The London School of Hygiene & Tropical Medicine).

// She is Board Certified in Dermatology and Dermatopathology and is a Clinical Assistant Professor at Cornell Medical School.`,
//   },

//   Testimonials: {
//     paragraphs: [
//       "At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.",
//     ],
//     quotes: [
//       {
//         text: "This product exceeded my expectations! The quality is top-notch, and the results were noticeable within days. Highly recommend!",
//         author: "Sarah M.",
//       },
//       {
//         text: "The staff was incredibly professional, and the dermatologist took the time to explain everything. My skin has never looked better!",
//         author: "James T.",
//       },
//       {
//         text: "Exceptional service and amazing results! I feel more confident in my skin now than ever before.",
//         author: "Linda P.",
//       },
//       {
//         text: "Friendly staff, great atmosphere, and effective treatments. What more could you ask for?",
//         author: "Michael B.",
//       },
//     ],
//   },
// };

// const AboutSection = ({ selectedSection, setSelectedSection }) => {
//   const sections = Object.keys(sectionContent);
//   const content = sectionContent[selectedSection] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectOptions = sections.slice(1).map((section) => ({
//     value: section,
//     label: section,
//   }));

//   return (
//     <div className="about-section">
//       <aside className="about-sidebar">
//         {isMobile ? (
//           <div className="about-dropdown">
//             <Select
//               className="about-react-select"
//               value={{ value: selectedSection, label: selectedSection }}
//               onChange={(option) => setSelectedSection(option.value)}
//               options={selectOptions}
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   backgroundColor: "#52606f",
//                   border: "none",
//                   color: "#fff",
//                   padding: "2px 5px",
//                   fontFamily: "Poppins, sans-serif",
//                   fontSize:"20px"
//                 }),
//                 singleValue: (base) => ({
//                   ...base,
//                   color: "#fff",
//                 }),
//                 option: (base, state) => ({
//                   ...base,
//                   backgroundColor: state.isFocused
//                     ? "#626e7c"
//                     : state.isSelected
//                     ? "#505e6d"
//                     : "#fff",
//                   color: state.isFocused || state.isSelected ? "#fff" : "#000",
//                   fontSize: "18px",
//                   fontFamily: "Poppins, sans-serif",
//                   padding: "10px 15px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }),
//               }}
//             />
//           </div>
//         ) : (
//           <ul>
//             {sections.map((section, index) =>
//               index === 0 ? (
//                 <h3 key={section} className="about-sidebar-heading">
//                   {section}
//                 </h3>
//               ) : (
//                 <li
//                   key={section}
//                   className={selectedSection === section ? "active" : ""}
//                   onClick={() => setSelectedSection(section)}
//                 >
//                   {section}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </aside>

//       <section className="about-content">
//         <h2 className="heading">{selectedSection}</h2>

//         {content.paragraphs?.map((para, idx) => (
//           <p key={idx}>{para}</p>
//         ))}

//         {selectedSection === "Testimonials" && content.quotes && (
//           <div className="testimonial-quotes">
//             {content.quotes.map((quote, idx) => (
//               <div className="quote-box" key={idx}>
//                 <p className="quote-text">“{quote.text}”</p>
//                 <p className="quote-author">— {quote.author}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {content.heading && (
//           <h3 className="about-subheading">{content.heading}</h3>
//         )}

//         {content.secondParagraph &&
//           content.secondParagraph
//             .split("\n\n")
//             .map((part, idx) => <p key={idx}>{part.trim()}</p>)}

//         {selectedSection === "Our Office" && content.officeImages && (
//           <div className="office-images">
//             {content.officeImages.map((imgSrc, idx) => (
//               <img
//                 key={idx}
//                 src={imgSrc}
//                 alt={`Office view ${idx + 1}`}
//                 className="office-image"
//               />
//             ))}
//           </div>
//         )}

//         <div className="about-buttons">
//           <button className="call-button-about">CALL 845-421-7040</button>
//           <button className="appointment-button-about">
//             REQUEST AN APPOINTMENT
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;

// const AboutSection = ({ selectedSection, setSelectedSection }) => {
//   const sections = Object.keys(sectionContent);
//   const content = sectionContent[selectedSection] || {};
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectOptions = sections.slice(1).map((section) => ({
//     value: section,
//     label: section,
//   }));

//   return (
//     <div className="about-section">
//       <aside className="about-sidebar">
//         {isMobile ? (
//           <div className="about-dropdown">
//             <Select
//               className="about-react-select"
//               value={{ value: selectedSection, label: selectedSection }}
//               onChange={(option) => setSelectedSection(option.value)}
//               options={selectOptions}
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   backgroundColor: "#52606f",
//                   border: "none",
//                   color: "#fff",
//                   padding: "2px 5px",
//                   fontFamily: "Poppins, sans-serif",
//                 }),
//                 singleValue: (base) => ({
//                   ...base,
//                   color: "#fff",
//                 }),
//                 option: (base, state) => ({
//                   ...base,
//                   backgroundColor: state.isFocused ? "#626e7c" : "#fff",
//                   color: state.isFocused ? "#fff" : "#000",
//                   fontSize: "18px",
//                   fontFamily: "Poppins, sans-serif",
//                   padding: "10px 15px",
//                 }),
//               }}
//             />
//           </div>
//         ) : (
//           <ul>
//             {sections.map((section, index) =>
//               index === 0 ? (
//                 <h3 key={section} className="about-sidebar-heading">
//                   {section}
//                 </h3>
//               ) : (
//                 <li
//                   key={section}
//                   className={selectedSection === section ? "active" : ""}
//                   onClick={() => setSelectedSection(section)}
//                 >
//                   {section}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </aside>

//       <section className="about-content">
//         <h2 className='heading'>{selectedSection}</h2>

//         {content.paragraphs?.map((para, idx) => (
//           <p key={idx}>{para}</p>
//         ))}

//         {selectedSection === "Testimonials" && content.quotes && (
//           <div className="testimonial-quotes">
//             {content.quotes.map((quote, idx) => (
//               <div className="quote-box" key={idx}>
//                 <p className="quote-text">“{quote.text}”</p>
//                 <p className="quote-author">— {quote.author}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {content.heading && (
//           <h3 className="about-subheading">{content.heading}</h3>
//         )}

//         {content.secondParagraph &&
//           content.secondParagraph
//             .split("\n\n")
//             .map((part, idx) => <p key={idx}>{part.trim()}</p>)}

//         {selectedSection === "Our Office" && content.officeImages && (
//           <div className="office-images">
//             {content.officeImages.map((imgSrc, idx) => (
//               <img
//                 key={idx}
//                 src={imgSrc}
//                 alt={`Office view ${idx + 1}`}
//                 className="office-image"
//               />
//             ))}
//           </div>
//         )}

//         <div className="about-buttons">
//           <button className="call-button-about">CALL 845-421-7040</button>
//           <button className="appointment-button-about">
//             REQUEST AN APPOINTMENT
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;

// //@ts-nocheck

// import React from "react";
// import "./AboutSection.css";
// import ImageAssets from "../common/ImageAssets";

// const sectionContent = {
//   "About ": {
//     paragraphs: [""],
//   },
//   "Dr. Alicia Natalizio": {
//     paragraphs: [
//       "At Dermatology, Dr. Alicia Natalizio has created a space that reflects her commitment to providing exceptional dermatology care in a modern, welcoming environment. Our office is thoughtfully designed to offer comfort and tranquility, ensuring each patient feels at ease during their visit. From the moment you step into our beautiful, state-of-the-art facility, you'll experience the highest level of care in a space that prioritizes your comfort and well-being.",
//     ],
//   },
//   "Dr. Juliana Cotler": {
//     paragraphs: [
//       "Meet Juliana Cotler (FNP-BC), a Nurse Practitioner at Middletown Medical specializing in Medical and Cosmetic Dermatology! New to the field, she brings a fresh perspective and a passion for skincare. Welcome Juliana to our team, and stay tuned for the exciting treatments she'll be bringing!",
//     ],
//     heading: "Education",
//     secondParagraph: `Mercy College Master of Science - MS, Family Nurse Practitioner · (August 2021 - December 2023)

// Mercy College Bachelor of Science - BS, Registered Nursing/Registered Nurse · (2019 - 2020)

// Stony Brook University Bachelor of Science - BS, Health Science · (2014 - 2018)`,
//   },
//   "Dr. Radha Mikkilinen": {
//     paragraphs: [
//       "Meet Dr. Radha Mikkilineni! She brings extensive knowledge and experience to Mikkilineni Medical. Whether you’re looking to rejuvenate your skin, enhance your features, or address dermatological concerns, she’s here to help. Experience the care of a board-certified specialist who prioritizes your beauty and well-being.",
//     ],
//     heading: "Education",
//     secondParagraph: `Dr. Mikkilineni received her medical degree from Georgetown Medical School. She completed her internship at Yale-New Haven Hospital, her dermatology residency at Case Western Reserve - University Hospitals of Cleveland, and her dermatopathology fellowship at New York University - Tisch Hospital.

// She holds two master's degrees in Physiology and Biophysics (Georgetown) as well as in Biostatistics and Epidemiology (The London School of Hygiene & Tropical Medicine).

// She is Board Certified in Dermatology and Dermatopathology and is a Clinical Assistant Professor at Cornell Medical School.`,
//   },
//   "Our Office": {
//     paragraphs: [
//       "Meet Alicia! She is one of Middletown Medical’s Dermatologists specializing in Medical Dermatology and non-surgical aesthetic treatments. With her expertise and dedication to enhancing natural beauty, Alicia is committed to providing you with personalized care and achieving your skincare and aesthetic goals.",
//     ],
//     officeImages: [
//       ImageAssets.officeImage1,
//       ImageAssets.officeImage2,
//       ImageAssets.officeImage3,
//       ImageAssets.officeImage4,
//     ],
//   },
//   Testimonials: {
//     paragraphs: [
//       "At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.",
//     ],
//     quotes: [
//       {
//         text: "This product exceeded my expectations! The quality is top-notch, and the results were noticeable within days. Highly recommend!",
//         author: "Sarah M.",
//       },
//       {
//         text: "The staff was incredibly professional, and the dermatologist took the time to explain everything. My skin has never looked better!",
//         author: "James T.",
//       },
//       {
//         text: "Exceptional service and amazing results! I feel more confident in my skin now than ever before.",
//         author: "Linda P.",
//       },
//       {
//         text: "Friendly staff, great atmosphere, and effective treatments. What more could you ask for?",
//         author: "Michael B.",
//       },
//     ],
//   },
// };

// const AboutSection = ({ selectedSection, setSelectedSection }) => {
//   const sections = Object.keys(sectionContent);

//   const handleSelect = (section) => {
//     setSelectedSection(section);
//   };

//   const content = sectionContent[selectedSection] || {};

//   return (
//     <div className="about-section">

//       <aside className="about-sidebar">
//   {window.innerWidth >= 1024 ? (
//     <ul>
//       {sections.map((section, index) => {
//         if (index === 0) {
//           return (
//             <h3 key={section} className="about-sidebar-heading">
//               {section}
//             </h3>
//           );
//         }
//         return (
//           <li
//             key={section}
//             className={selectedSection === section ? "active" : ""}
//             onClick={() => handleSelect(section)}
//           >
//             {section}
//           </li>
//         );
//       })}
//     </ul>
//   ) : (
//     <div className="about-dropdown">
//       <select
//         value={selectedSection}
//         onChange={(e) => handleSelect(e.target.value)}
//         className="about-select"
//       >
//         {sections.slice(1).map((section) => (
//           <option key={section} value={section}>
//             {section}
//           </option>
//         ))}
//       </select>
//     </div>
//   )}
// </aside>

//       <section className="about-content">
//         {/* <h2 >{selectedSection}</h2> */}

//         {content.paragraphs?.map((para, idx) => (
//           <p key={idx}>{para}</p>
//         ))}
//         {selectedSection === "Testimonials" && content.quotes && (
//           <div className="testimonial-quotes">
//             {content.quotes.map((quote, idx) => (
//               <div className="quote-box" key={idx}>
//                 <p className="quote-text">“{quote.text}”</p>
//                 <p className="quote-author">— {quote.author}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {content.heading && (
//           <h3 className="about-subheading">{content.heading}</h3>
//         )}

//         {content.secondParagraph &&
//           content.secondParagraph
//             .split("\n\n")
//             .map((part, idx) => <p key={idx}>{part.trim()}</p>)}

//         {selectedSection === "Our Office" && content.officeImages && (
//           <div className="office-images">
//             {content.officeImages.map((imgSrc, idx) => (
//               <img
//                 key={idx}
//                 src={imgSrc}
//                 alt={`Office view ${idx + 1}`}
//                 className="office-image"
//               />
//             ))}
//           </div>
//         )}

//         <div className="about-buttons">
//           <button className="call-button-about">CALL 845-421-7040</button>
//           <button className="appointment-button-about">
//             REQUEST AN APPOINTMENT
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;
