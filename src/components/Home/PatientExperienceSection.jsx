import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // 👈 Import Link
import "./PatientExperienceSection.css";
import ImageAssets from "../common/ImageAssets";

const cards = [
  {
    image: ImageAssets.Expert1,
    tag: "MIDDLETOWN MEDICAL LEADING PROVIDER",
    title: `MIDDLETOWN MEDICAL DESTINATION FOR\u00A0SKINCARE`,
    button: "SCHEDULE A CONSULT",
    link: "/contact", 
  },
  {
    image: ImageAssets.Expert2,
    tag: "Blog",
    title: "MULTICULTURAL SKINCARE EXPERTS",
    button: "READ MORE",
    link: "/blogs", 
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

            {/* Link button to respective route */}
            <Link to={card.link}>
              <button className={index === 0 ? "card-btn-primary" : "card-btn-secondary"}>
                {card.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientExperienceSection;






// import React, { useState, useEffect, useRef } from "react";
// import "./PatientExperienceSection.css";
// import ImageAssets from "../common/ImageAssets";

// const cards = [
//   {
//     image: ImageAssets.Expert1,
//     tag: "MIDDLETOWN MEDICAL LEADING PROVIDER",
//     title:`MIDDLETOWN MEDICAL DESTINATION FOR\u00A0SKINCARE`,
//     button: "SCHEDULE A CONSULT",
//   },
//   {
//     image: ImageAssets.Expert2,
//     tag: "Blog",
//     title: "MULTICULTURAL SKINCARE EXPERTS",
//     button: "READ MORE",
//   },
// ];

// const PatientExperienceSection = () => {
//   const [animate, setAnimate] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
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
//             <button className={index === 0 ? "card-btn-primary" : "card-btn-secondary"}>{card.button}</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PatientExperienceSection;

