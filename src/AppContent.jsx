// AppContent.js
import React, { useState } from "react";
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
import ServicePage from "./pages/ServicePage";
import BlogDetail from "./pages/BlogDetail";
import ChatWidget from "./components/common/ChatWidget";


const AppContent = ({ isMenuOpen, toggleMenu }) => {
   const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isBlogPage = location.pathname === "/blogs";
  const isContactPage = location.pathname === "/contact";


  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        variant={isAboutPage || isBlogPage ? "white" : "default"} 
        isChatOpen={isChatOpen}  
      />
      <div className="content-wrapper">
        <main>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us/:sectionSlug?" element={<About />} />
              <Route path="/patient-resources/:careSlug?" element={<CareResources />} />
              <Route path="/pay-bill" element={<PayBill />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />

              <Route path="/before-after/:sectionSlug?" element={<BeforeAfter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/:serviceSlug?" element={<ServicePage />} />
            </Routes>
          </div>
        </main>
      </div>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
       <ChatWidget
        isChatOpen={isChatOpen}          // <-- pass state and setter to ChatWidget
        setIsChatOpen={setIsChatOpen}
      />
    </>
  );
};

export default AppContent;