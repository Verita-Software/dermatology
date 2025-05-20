import React from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import ImageAssets from "../components/common/ImageAssets";
import BlogSection from "../components/Blog/BlogSection";
import Breadcrumbs from "../components/common/BreadCrumbs/BreadCrumbs";

const Blog = () => {
  return (
    <>
      <Hero
        image={ImageAssets.blogBanner}
        // heading="BLOGS"
        subheading="WE CARE YOUR SKIN"
        showButton={false}
      />
      <Breadcrumbs />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;