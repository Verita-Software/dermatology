import React, { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import "./CareResourcesSection.css";
import PayBillForm from "./PayBillForm";

const careResourcesData = {
  Resources: {
    title: "RESOURCES",
    paragraphs: [
      `At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
    ],
    officeHours: [
      "Monday – 8:30am – 6pm",
      "Tuesday – 8:30am – 4:30pm",
      "Wednesday – 8:30am – 4:30pm",
      "Thursday – 8:30am – 6pm",
      "Friday – 8:30am – 3:30pm",
      "Saturday and Sunday – Closed",
    ],
  },
  Specials: {
    title: "Specials",
    paragraphs: [
      "We truly appreciate our patients and the friends of our practice—that’s why we offer exclusive specials just for you!",
      "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
    ],
  },
  Insurance: {
    title: "Insurance",
    paragraphs: [
      "We accept most insurance plans. Please contact our office for more details.",
    ],
  },
  "Pay Bill": {
    title: "Pay Bill",
  },
};

// Custom dropdown indicator with arrow
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

const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
  const sections = Object.keys(careResourcesData);
  const content = careResourcesData[selectedTab] || {};

  const sidebarRef = useRef(null);
  const footerRef = useRef(null);
  const [isFooterVisible, setFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { root: null, threshold: 0 }
    );

    const footerEl = document.querySelector("footer");
    if (footerEl) {
      footerRef.current = footerEl;
      observer.observe(footerEl);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const options = sections.map((section) => ({
    value: section,
    label: section,
  }));

  return (
    <div className="care-section">
      {isMobile ? (
        <div className="care-dropdown-container">
          <div className="sidebar-heading">Care Resources</div>
          <Select
            isSearchable={false}
            className="care-dropdown"
            value={{ value: selectedTab, label: selectedTab }}
            onChange={(option) => setSelectedTab(option.value)}
            options={options}
            components={{ DropdownIndicator }}
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            styles={{
              control: (base, state) => ({
                ...base,
                fontSize:"25px",
                backgroundColor: "#52606f",
                borderColor: state.isFocused ? "#fff" : "#ccc",
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
              }),
            }}
          />
        </div>
      ) : (
        <aside
          ref={sidebarRef}
          className={`care-sidebar ${
            selectedTab === "Pay Bill" ? "" : "sticky-sidebar"
          } ${isFooterVisible ? "stop-sticky" : ""}`}
        >
          <div className="sidebar-heading">Care Resources</div>
          <ul>
            {sections.map((section) => (
              <li
                key={section}
                className={selectedTab === section ? "active" : ""}
                onClick={() => setSelectedTab(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <section className="care-content">
        <h1 className="care-heading">{content.title}</h1>

        {selectedTab === "Specials" ? (
          <>
            <p className="special para-1">{content.paragraphs[0]}</p>
            <hr className="specials-divider" />
            <p className="special-para-2">{content.paragraphs[1]}</p>
          </>
        ) : (
          content.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
        )}

        {selectedTab === "Resources" && (
          <>
            <h3 className="office-title">Office Hours:</h3>
            <ul className="office-hours">
              {content.officeHours.map((hour, idx) => (
                <li key={idx}>{hour}</li>
              ))}
            </ul>
          </>
        )}

        {selectedTab !== "Pay Bill" && (
          <div className="care-buttons">
            <button className="call-button-care">CALL: 845-421-7040</button>
            <button className="appointment-button-care">
              REQUEST AN APPOINTMENT
            </button>
          </div>
        )}

        {selectedTab === "Pay Bill" && <PayBillForm />}
      </section>
    </div>
  );
};

export default CareResourcesSection;








// import React, { useEffect, useRef, useState } from "react";
// import Select from "react-select";
// import "./CareResourcesSection.css";
// import PayBillForm from "./PayBillForm";

// const careResourcesData = {
//   Resources: {
//     title: "RESOURCES",
//     paragraphs: [
//       `At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
// Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
//     ],
//     officeHours: [
//       "Monday – 8:30am – 6pm",
//       "Tuesday – 8:30am – 4:30pm",
//       "Wednesday – 8:30am – 4:30pm",
//       "Thursday – 8:30am – 6pm",
//       "Friday – 8:30am – 3:30pm",
//       "Saturday and Sunday – Closed",
//     ],
//   },
//   Specials: {
//     title: "Specials",
//     paragraphs: [
//       "We truly appreciate our patients and the friends of our practice—that’s why we offer exclusive specials just for you!",
//       "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
//     ],
//   },
//   Insurance: {
//     title: "Insurance",
//     paragraphs: [
//       "We accept most insurance plans. Please contact our office for more details.",
//     ],
//   },
//   "Pay Bill": {
//     title: "Pay Bill"
//   },
// };

// const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
//   const sections = Object.keys(careResourcesData);
//   const content = careResourcesData[selectedTab] || {};

//   const sidebarRef = useRef(null);
//   const footerRef = useRef(null);
//   const [isFooterVisible, setFooterVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setFooterVisible(entry.isIntersecting),
//       {
//         root: null,
//         threshold: 0,
//       }
//     );

//     const footerEl = document.querySelector("footer");
//     if (footerEl) {
//       footerRef.current = footerEl;
//       observer.observe(footerEl);
//     }

//     return () => {
//       if (footerRef.current) {
//         observer.unobserve(footerRef.current);
//       }
//     };
//   }, []);

//   const options = sections.map((section) => ({
//     value: section,
//     label: section,
//   }));

//   return (
//     <div className="care-section">
//       {isMobile ? (
//         <div className="care-dropdown-container">
//           <div className="sidebar-heading">Care Resources</div>
//           <Select
//             className="care-dropdown"
//             value={{ value: selectedTab, label: selectedTab }}
//             onChange={(option) => setSelectedTab(option.value)}
//             options={options}
//             styles={{
//               control: (base, state) => ({
//                 ...base,
//                 backgroundColor: "#52606f",
//                 borderColor: state.isFocused ? "#fff" : "#ccc",
//                 boxShadow: "none",
//                 "&:hover": {
//                   borderColor: "#fff",
//                 },
//                 color: "#fff",
//               }),
//               singleValue: (base) => ({
//                 ...base,
//                 color: "#fff",
//               }),
//               menu: (base) => ({
//                 ...base,
//                 backgroundColor: "#fff",
//               }),
//               option: (base, state) => ({
//                 ...base,
//                 backgroundColor: state.isFocused ? "#626e7c" : "#fff",
//                 color: state.isFocused ? "#fff" : "#000",
//                 fontSize: "18px",
//                 padding: "10px 15px",
//                 fontFamily: "Poppins, sans-serif",
//               }),
//             }}
//           />
//         </div>
//       ) : (
//         <aside
//           ref={sidebarRef}
//           className={`care-sidebar ${
//             selectedTab === "Pay Bill" ? "" : "sticky-sidebar"
//           } ${isFooterVisible ? "stop-sticky" : ""}`}
//         >
//           <div className="sidebar-heading">Care Resources</div>
//           <ul>
//             {sections.map((section) => (
//               <li
//                 key={section}
//                 className={selectedTab === section ? "active" : ""}
//                 onClick={() => setSelectedTab(section)}
//               >
//                 {section}
//               </li>
//             ))}
//           </ul>
//         </aside>
//       )}

//       <section className="care-content">
//         <h1 className="care-heading">{content.title}</h1>

//         {selectedTab === "Specials" ? (
//           <>
//             <p className="special para-1">{content.paragraphs[0]}</p>
//             <hr className="specials-divider" />
//             <p className="special-para-2">{content.paragraphs[1]}</p>
//           </>
//         ) : (
//           content.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
//         )}

//         {selectedTab === "Resources" && (
//           <>
//             <h3 className="office-title">Office Hours:</h3>
//             <ul className="office-hours">
//               {content.officeHours.map((hour, idx) => (
//                 <li key={idx}>{hour}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {selectedTab !== "Pay Bill" && (
//           <div className="care-buttons">
//             <button className="call-button-care">CALL: 845-421-7040</button>
//             <button className="appointment-button-care">
//               REQUEST AN APPOINTMENT
//             </button>
//           </div>
//         )}

//         {selectedTab === "Pay Bill" && <PayBillForm />}
//       </section>
//     </div>
//   );
// };

// export default CareResourcesSection;





// import React, { useEffect, useRef, useState } from "react";
// import "./CareResourcesSection.css";
// import PayBillForm from "./PayBillForm";

// const careResourcesData = {
//   Resources: {
//     title: "RESOURCES",
//     paragraphs: [
//       `At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
// Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
//     ],
//     officeHours: [
//       "Monday – 8:30am – 6pm",
//       "Tuesday – 8:30am – 4:30pm",
//       "Wednesday – 8:30am – 4:30pm",
//       "Thursday – 8:30am – 6pm",
//       "Friday – 8:30am – 3:30pm",
//       "Saturday and Sunday – Closed",
//     ],
//   },
//   Specials: {
//     title: "Specials",
//     paragraphs: [
//       "We truly appreciate our patients and the friends of our practice—that’s why we offer exclusive specials just for you!",
//       "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
//     ],
//   },
//   Insurance: {
//     title: "Insurance",
//     paragraphs: [
//       "We accept most insurance plans. Please contact our office for more details.",
//     ],
//   },
//   "Pay Bill": {
//     title: "Pay Bill"
    
//   },
// };

// const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
//   const sections = Object.keys(careResourcesData);
//   const content = careResourcesData[selectedTab] || {};

//   const sidebarRef = useRef(null);
//   const footerRef = useRef(null);
//   const [isFooterVisible, setFooterVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setFooterVisible(entry.isIntersecting),
//       {
//         root: null,
//         threshold: 0,
//       }
//     );

//     const footerEl = document.querySelector("footer"); // adjust if footer class/id is different
//     if (footerEl) {
//       footerRef.current = footerEl;
//       observer.observe(footerEl);
//     }

//     return () => {
//       if (footerRef.current) {
//         observer.unobserve(footerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="care-section">
//       <aside
//         ref={sidebarRef}
//         className={`care-sidebar ${
//           selectedTab === "Pay Bill" ? "" : "sticky-sidebar"
//         } ${isFooterVisible ? "stop-sticky" : ""}`}
//       >
//         <div className="sidebar-heading">Care Resources</div>
//         <ul>
//           {sections.map((section) => (
//             <li
//               key={section}
//               className={selectedTab === section ? "active" : ""}
//               onClick={() => setSelectedTab(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <section className="care-content">
//         <h1 className='care-heading'
         
//         >
//           {content.title}
//         </h1>
//         {selectedTab === "Specials" ? (
//   <>
//     <p className="special para-1">{content.paragraphs[0]}</p>
//     <hr className="specials-divider" />
//     <p className="special-para-2">{content.paragraphs[1]}</p>
//   </>
// ) : (
//   content.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
// )}

//         {selectedTab === "Resources" && (
//           <>
//             <h3 className="office-title">Office Hours:</h3>
//             <ul className="office-hours">
//               {content.officeHours.map((hour, idx) => (
//                 <li key={idx}>{hour}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {selectedTab !== "Pay Bill" && (
//           <div className="care-buttons">
//             <button className="call-button-care">CALL: 845-421-7040</button>
//             <button className="appointment-button-care">
//               REQUEST AN APPOINTMENT
//             </button>
//           </div>
//         )}

//         {selectedTab === "Pay Bill" && (
//           <>
           
//             <PayBillForm />
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CareResourcesSection;

// import React from "react";
// import "./CareResourcesSection.css";
// import PayBillForm from "./PayBillForm";

// const careResourcesData = {
//   Resources: {
//     title: "Resources",
//     paragraphs: [
//       `At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
// Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
//     ],
//     officeHours: [
//       "Monday – 8:30am – 6pm",
//       "Tuesday – 8:30am – 4:30pm",
//       "Wednesday – 8:30am – 4:30pm",
//       "Thursday – 8:30am – 6pm",
//       "Friday – 8:30am – 3:30pm",
//       "Saturday and Sunday – Closed",
//     ],
//   },
//   Specials: {
//     title: "Specials",
//     paragraphs: [
//       "We truly appreciate our patients and the friends of our practice—that’s why we offer exclusive specials just for you!",
//       "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
//     ],
//   },
//   Insurance: {
//     title: "Insurance",
//     paragraphs: [
//       "We accept most insurance plans. Please contact our office for more details.",
//     ],
//   },
//   "Pay Bill": {
//     title: "Pay Bill",
//     paragraphs: [
//       "You can pay your bill online securely through our payment portal.",
//     ],
//   },
// };

// const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
//   const sections = Object.keys(careResourcesData);
//   const content = careResourcesData[selectedTab] || {};

//   return (
//     <div className="care-section">
//       <aside className={`care-sidebar ${selectedTab === 'Pay Bill' ? '' : 'sticky-sidebar'}`}>
//         <ul>
//           {sections.map((section) => (
//             <li
//               key={section}
//               className={selectedTab === section ? "active" : ""}
//               onClick={() => setSelectedTab(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <section className="care-content">
//         <h1>{content.title}</h1>
//         {content.paragraphs?.map((p, idx) => (
//           <p key={idx}>{p}</p>
//         ))}

//         {selectedTab === "Resources" && (
//           <>
//             <h3 className="office-title">Office Hours:</h3>
//             <ul className="office-hours">
//               {content.officeHours.map((hour, idx) => (
//                 <li key={idx}>{hour}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {selectedTab !== "Pay Bill" && (
//           <div className="care-buttons">
//             <button className="call-button">CALL: 845-421-7040</button>
//             <button className="appointment-button">
//               REQUEST AN APPOINTMENT
//             </button>
//           </div>
//         )}

//         {selectedTab === "Pay Bill" && (
//           <>
//             <p>{content.paragraphs[0]}</p>
//             <PayBillForm />
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CareResourcesSection;

// import React from "react";
// import "./CareResourcesSection.css";
// import PayBillForm from "./PayBillForm";

// const careResourcesData = {
//   Resources: {
//     title: "Resources",
//     paragraphs: [
//       `At Dermatology , nothing means more to us than the trust and appreciation of our patients. While awards are nice, their testimonials are our greatest honor. Our main goal is your health and well-being, and we're grateful for the positive experiences shared by our patients.
// Read some of their reviews and see how Dr. Alicia Natalizio and our team make a difference.`,
//     ],
//     officeHours: [
//       "Monday – 8:30am – 6pm",
//       "Tuesday – 8:30am – 4:30pm",
//       "Wednesday – 8:30am – 4:30pm",
//       "Thursday – 8:30am – 6pm",
//       "Friday – 8:30am – 3:30pm",
//       "Saturday and Sunday – Closed",
//     ],
//   },
//   Specials: {
//     title: "Specials",
//     paragraphs: [
//       "We truly appreciate our patients and the friends of our practice—that’s why we offer exclusive specials just for you!",
//       "Stay connected with us on Facebook and Instagram for exclusive specials reserved just for our amazing fans!",
//     ],
//   },
//   Insurance: {
//     title: "Insurance",
//     paragraphs: [
//       "We accept most insurance plans. Please contact our office for more details.",
//     ],
//   },
//   "Pay Bill": {
//     title: "Pay Bill",
//     paragraphs: [
//       "You can pay your bill online securely through our payment portal.",
//     ],
//   },
// };

// const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
//   const sections = Object.keys(careResourcesData);
//   const content = careResourcesData[selectedTab] || {};

//   return (
//     <div className="care-section">
//       <aside className="care-sidebar">
//         <ul>
//           {sections.map((section) => (
//             <li
//               key={section}
//               className={selectedTab === section ? "active" : ""}
//               onClick={() => setSelectedTab(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <section className="care-content">
//         <h1>{content.title}</h1>
//         {content.paragraphs?.map((p, idx) => (
//           <p key={idx}>{p}</p>
//         ))}

//         {selectedTab === "Resources" && (
//           <>
//             <h3 className="office-title">Office Hours:</h3>
//             <ul className="office-hours">
//               {content.officeHours.map((hour, idx) => (
//                 <li key={idx}>{hour}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {selectedTab !== "Pay Bill" && (
//           <div className="care-buttons">
//             <button className="call-button">CALL: 845-421-7040</button>
//             <button className="appointment-button">
//               REQUEST AN APPOINTMENT
//             </button>
//           </div>
//         )}

//         {selectedTab === "Pay Bill" && (
//           <>
//             <p>{content.paragraphs[0]}</p>
//             <PayBillForm />
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CareResourcesSection;

// const CareResourcesSection = ({ selectedTab, setSelectedTab }) => {
//   const sections = Object.keys(careResourcesData);
//   const content = careResourcesData[selectedTab] || {};

//   return (
//     <div className="care-section">
//       <aside className="care-sidebar">
//         <ul>
//           {sections.map((section) => (
//             <li
//               key={section}
//               className={selectedTab === section ? "active" : ""}
//               onClick={() => setSelectedTab(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <section className="care-content">
//         {selectedTab === "Pay Bill" ? (
//           <PayBillForm />
//         ) : (
//           <>
//             <h2>{content.title}</h2>
//             {content.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)}
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CareResourcesSection;
