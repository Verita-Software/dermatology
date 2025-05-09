import React from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import BlogSection from "../components/Blog/BlogSection";

const Blog = () => {
  return (
    <>
      <Hero
        image={ImageAssets.blogBanner}
        heading="BLOGS"
        subheading="WE CARE YOUR SKIN"
        showButton={false}
      />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;