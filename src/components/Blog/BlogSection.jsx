import React, { useEffect, useRef } from "react";
import "./BlogSection.css";
import ImageAssets from "../common/ImageAssets";

const blogs = [
  {
    title: "Rosacea Understanding Causes and Solutions with Dermatologist Expertise",
    date: "March 3, 2025",
    content: " When it comes to answering the question, what is rosacea, the easy answer is that ros",
    image: ImageAssets.blog1,
  },
  {
    title: "Early-Stage Skin Cancer: Could It Look Like a Rash?",
    date: "February 24, 2025",
    content: "Itchy skin, whether from dryness, allergies, or a minor irritation, is a temporary an...",
    image: ImageAssets.blog2,
  },
  {
    title: "Best Facial Treatment for Your Age: Tailored Skincare Solutions Every Decade",
    date: "February 24, 2025",
    content: "As we age, our skin’s needs evolve, and so should our skincare routines...",
    image: ImageAssets.blog3,
  },
  {
    title: "Acne Extractions: How to Get Rid of Pimples Safely with a Dermatologist",
    date: "February 24, 2025",
    content: "Acne is one of the most frustrating skin conditions, and breakouts can be very diffic...",
    image: ImageAssets.blog4,
  },
  {
    title: "Top Dermatologist-Recommended Skincare Tips for 2025",
    date: "February 22, 2025",
    content: "Stay ahead in skincare with these expert tips that keep your skin glowing all year round...",
    image: ImageAssets.blog5,
  },
];

const BlogSection = () => {
  const blogRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    blogRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // eslint-disable-next-line 
      blogRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="blog-item fade-up"
          ref={(el) => (blogRefs.current[index] = el)}
        >
          <img src={blog.image} alt={blog.title} />
          <div className="blog-text">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-content">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;












// src/pages/BlogSection.js
// import React from "react";
// import "./BlogSection.css";
// import ImageAssets from "../common/ImageAssets";

// const blogs = [
//   {
//     title: "Rosacea Understanding Causes and Solutions with Dermatologist Expertise",
//     date: "March 3, 2025",
//     content: " When it comes to answering the question, what is rosacea, the easy answer is that ros",
//     image: ImageAssets.blog1,
//   },
//   {
//     title: "Early-Stage Skin Cancer: Could It Look Like a Rash?",
//     date: "February 24, 2025",
//     content: "Itchy skin, whether from dryness, allergies, or a minor irritation, is a temporary an...",
//     image: ImageAssets.blog2,
//   },
//   {
//     title: "Best Facial Treatment for Your Age: Tailored Skincare Solutions Every Decade",
//     date: "February 24, 2025",
//     content: "As we age, our skin’s needs evolve, and so should our skincare routines...",
//     image: ImageAssets.blog3,
//   },
//   {
//     title: "Acne Extractions: How to Get Rid of Pimples Safely with a Dermatologist",
//     date: "February 24, 2025",
//     content: "Acne is one of the most frustrating skin conditions, and breakouts can be very diffic...",
//     image: ImageAssets.blog4,
//   },
//   {
//     title: "Top Dermatologist-Recommended Skincare Tips for 2025",
//     date: "February 22, 2025",
//     content: "Stay ahead in skincare with these expert tips that keep your skin glowing all year round...",
//     image: ImageAssets.blog5,
//   },
// ];

// const BlogSection = () => {
//   return (
//     <div className="blog-container">
//       {blogs.map((blog, index) => (
//         <div key={index} className="blog-item">
//           <img src={blog.image} alt={blog.title} />
//           <div className="blog-text">
//             <h3 className="blog-title">{blog.title}</h3>
//             <p className="blog-date">{blog.date}</p>
//             <p className="blog-content">{blog.content}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogSection;