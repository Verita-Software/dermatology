import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./Services.css";

const serviceData = {
  Services: {
    paragraphs: ["We provide a range of medical and cosmetic dermatology services."],
  },
  "Skin Care": {
    paragraphs: [
      "Our skin care services include custom facials, skin rejuvenation, and more tailored to your needs."
    ],
  },
  "Laser Treatments": {
    paragraphs: [
      "We offer advanced laser treatments for hair removal, pigmentation, and skin resurfacing."
    ],
  },
  "Medical Dermatology": {
    paragraphs: [
      "Diagnosis and treatment of skin conditions like acne, eczema, psoriasis, and more."
    ],
  },
};

const ServiceSection = ({ selectedTab, setSelectedTab }) => {
  const tabs = Object.keys(serviceData);
  const content = serviceData[selectedTab] || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
          <Select
            value={{ value: selectedTab, label: selectedTab }}
            onChange={(opt) => setSelectedTab(opt.value)}
            options={selectOptions}
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
        {content.paragraphs?.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <div className="service-buttons">
          <button className="call-btn-service">CALL 845-421-7040</button>
          <button className="appt-btn-service">REQUEST AN APPOINTMENT</button>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
