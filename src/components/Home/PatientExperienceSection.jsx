import React, { useState, useEffect, useRef } from "react";
import "./PatientExperienceSection.css";
import ImageAssets from "../common/ImageAssets";

const cards = [
  {
    image: ImageAssets.Expert1,
    tag: "MIDDLETOWN MEDICAL LEADING PROVIDER",
    title:`MIDDLETOWN MEDICAL DESTINATION FOR\u00A0SKINCARE`,
    button: "SCHEDULE A CONSULT",
  },
  {
    image: ImageAssets.Expert2,
    tag: "Blog",
    title: "MULTICULTURAL SKINCARE EXPERTS",
    button: "READ MORE",
  },
];

const PatientExperienceSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`patient-experience-section ${animate ? "animate" : ""}`}
    >
      <div className="patient-experience-heading">
        <h2 className="patient-title">PATIENT EXPERIENCE</h2>
      </div>
      <div className="patient-cards">
        {cards.map((card, index) => (
          <div className="patient-card" key={index}>
            <img src={card.image} alt={card.title} />
            <p className="card-tag">{card.tag}</p>
            <h3 className="card-title">{card.title}</h3>
            <button className="card-button">{card.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientExperienceSection;


// import React, { useEffect, useRef, useState } from "react";
// import "./PatientExperienceSection.css";
// import ImageAssets from "../common/ImageAssets";

// const cards = [
//   {
//     image: ImageAssets.Expert1,
//     tag: "MIDDLETOWN MEDICAL LEADING PROVIDER",
//     title: "MIDDLETOWN MEDICAL DESTINATION FOR SKINCARE",
//     button: "SCHEDULE A CONSULT",
//   },
//   {
//     image: ImageAssets.Expert2,
//     tag: "Blog",
//     title: "Multicultural Skincare Experts",
//     button: "READ MORE",
//   },
// ];

// const PatientExperienceSection = () => {
//   const sectionRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const el = sectionRef.current;
//     const isInView =
//       el &&
//       el.getBoundingClientRect().top < window.innerHeight &&
//       el.getBoundingClientRect().bottom > 0;

//     if (isInView) {
//       setAnimate(true);
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (el) observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`patient-experience-section ${animate ? "animate" : ""}`}
//     >
//       <div className="patient-experience-heading">
//         <h2 className="patient-title">PATIENT EXPERIENCE</h2>
//       </div>
//       <div className="patient-cards">
//         {cards.map((card, index) => (
//           <div className="patient-card" key={index}>
//             <img src={card.image} alt={card.title} />
//             <p className="card-tag">{card.tag}</p>
//             <h3 className="card-title">{card.title}</h3>
//             <button className="card-button">{card.button}</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PatientExperienceSection;


// import React from "react";
// import "./PatientExperienceSection.css";
// import ImageAssets from "../common/ImageAssets";

// const cards = [
//   {
//     image: ImageAssets.Expert1,
//     tag: "MIDDLETOWN MEDICAL LEADING PROVIDER",
//     title: "MIDDLETOWN MEDICAL DESTINATION FOR SKINCARE",
//     button: "SCHEDULE A CONSULT",
//   },
//   {
//     image: ImageAssets.Expert2,
//     tag: "Blog",
//     title: "Multicultural Skincare Experts",
//     button: "READ MORE",
//   },
// ];

// const PatientExperienceSection = () => {
//   return (
//     <section className="patient-experience-section">
//       <div className="patient-experience-heading">
//         <h2 className="patient-title">PATIENT EXPERIENCE</h2>
//       </div>
//       <div className="patient-cards">
//         {cards.map((card, index) => (
//           <div className="patient-card" key={index}>
//             <img src={card.image} alt={card.title} />
//             <p className="card-tag">{card.tag}</p>
//             <h3 className="card-title">{card.title}</h3>
//             <button className="card-button">{card.button}</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PatientExperienceSection;
