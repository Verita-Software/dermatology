// App.js
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import ScrollToTop from "./components/common/ScrollTop";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <div className="app">
        <AppContent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState } from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import About from "./pages/About";
// import CareResources from "./pages/CareResources";
// import PayBill from "./pages/PayBill";
// import Blog from "./pages/Blog";
// import BeforeAfter from "./pages/BeforeAfter";
// import Contact from "./pages/ContactSection";

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     console.log('Opening',isMenuOpen)
//     setIsMenuOpen((prev)=>!prev);
//     console.log('Change', !isMenuOpen)
//   };
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
//         <div className="content-wrapper">
//           <main>
//             <div className="page-container">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/patient-resources" element={<CareResources />} />
//                 <Route path="/pay-bill" element={<PayBill />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/before-after" element={<BeforeAfter />} />
//                 <Route path="/contact" element={<Contact />} />
                
//               </Routes>
//             </div>
//           </main>
//         </div>
//         <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
