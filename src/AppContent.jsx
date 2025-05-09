// AppContent.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import CareResources from "./pages/PatientResources";
import PayBill from "./pages/PayBill";
import Blog from "./pages/Blog";
import BeforeAfter from "./pages/BeforeAfter";
import Contact from "./pages/Contact";

const AppContent = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isBlogPage = location.pathname === "/blog";
  const isContactPage = location.pathname === "/contact";


  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        variant={isAboutPage || isBlogPage ? "white" : "default"}
      />
      <div className="content-wrapper">
        <main>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/patient-resources" element={<CareResources />} />
              <Route path="/pay-bill" element={<PayBill />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/before-after" element={<BeforeAfter />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default AppContent;