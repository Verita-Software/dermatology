import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ImageAssets from "../common/ImageAssets";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './ServicesSection.css';

const ServicesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay(autoplayOptions)]
  );

  const baseImages = [
    {
      src: ImageAssets.cosmeticServices,
      name: "Cosmetic Services",
      link: "/services/cosmetic-services",
    },
    {
      src: ImageAssets.injectables,
      name: "Injectables",
      link: "/services/injectables",
    },
    {
      src: ImageAssets.acneTreatment,
      name: "Acne Treatment",
      link: "/services/acne-treatment",
    },
    {
      src: ImageAssets.skinreju,
      name: "Skin Rejuvenation",
      link: "/services/skin-rejuvenation",
    },
  ];

  const images = Array.from({ length:50 }, (_, i) => baseImages[i % 4]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const prevIndex = (selectedIndex - 1 + images.length) % images.length;
  const nextIndex = (selectedIndex + 1) % images.length;

  return (
    <div className="services-section-wrapper">
      <div className="services-heading-wrapper">
        <h2 className="services-heading">OUR SERVICES</h2>
        <div className="nav-buttons">
          <button className="nav-btn"  onClick={() => emblaApi?.scrollPrev()}>
            <ArrowBackIosNewIcon />
          </button>
          <button className="nav-btn"
            
            onClick={() => emblaApi?.scrollNext()}
            sx={{ ml: 2 }}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => {
            let slideClass = "hidden-slide";
            if (index === selectedIndex) slideClass = "center-slide";
            else if (index === prevIndex || index === nextIndex)
              slideClass = "side-slide";

            const showCaption = index === selectedIndex;

            return (
              <div key={index} className={`embla__slide ${slideClass}`}>
                <div className="slide-content">
                  <a href={img.link}>
                    <img src={img.src} alt={img.name} />
                  </a>
                  <div className="caption-wrapper">
                    {showCaption ? (
                      <p className="caption">{img.name}</p>
                    ) : (
                      <div className="caption-placeholder" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default ServicesSection;

// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import ImageAssets from "../common/ImageAssets";
// import Autoplay from "embla-carousel-autoplay";

// const ServicesSection = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//     const autoplayOptions = {
//     delay: 3000,
//     stopOnInteraction: false,
//   };

// const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       skipSnaps: false,
//     },
//     [Autoplay(autoplayOptions)]
//   );

//   const baseImages = [
//     {
//       src: ImageAssets.cosmeticServices,
//       name: "Cosmetic Services",
//       link: "/services/cosmetic-services",
//     },
//     {
//       src: ImageAssets.injectables,
//       name: "Injectables",
//       link: "/services/injectables",
//     },
//     {
//       src: ImageAssets.acneTreatment,
//       name: "Acne Treatment",
//       link: "/services/acne-treatment",
//     },
//     {
//       src: ImageAssets.skinreju,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation",
//     },
//   ];

//   const images = Array.from({ length: 100 }, (_, i) => baseImages[i % 4]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   const prevIndex = (selectedIndex - 1 + images.length) % images.length;
//   const nextIndex = (selectedIndex + 1) % images.length;

//   return (
//     <div className="services-section-wrapper">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container">
//           {images.map((img, index) => {
//             let slideClass = "hidden-slide";
//             if (index === selectedIndex) slideClass = "center-slide";
//             else if (index === prevIndex || index === nextIndex)
//               slideClass = "side-slide";

//             const showCaption = index === selectedIndex;

//             return (
//               <div key={index} className={`embla__slide ${slideClass}`}>
//                 <div className="slide-content">
//                   <a href={img.link}>
//                     <img src={img.src} alt={img.name} />
//                   </a>
//                   <div className="caption-wrapper">
//                     {showCaption ? (
//                       <p className="caption">{img.name}</p>
//                     ) : (
//                       <div className="caption-placeholder" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         .services-section-wrapper {
//           /* max-width: 1200px; */
//           margin: 0 auto;
//           padding: 60px 20px;
//           text-align: center;
//           overflow: hidden;
//           background-color: #f7f7f7;
//         }

//         .services-heading {
//           font-size: 2.5rem;
//           margin-bottom: 40px;
//         }

//         .embla {
//           overflow: hidden;
//         }

//         .embla__container {
//   display: flex;
//   max-width: 1000px; /* optional: controls overall layout */
//   margin: 0 auto;
// }

//         .embla__slide {
//           flex: 0 0 33.3333%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: transform 0.5s ease;
//           padding: 0 10px;
//           box-sizing: border-box;
//         }

//         .slide-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .embla__slide img {
//           width: 250px;
//           height: 320px;
//           object-fit: cover;
//           border-radius: 12px;
//           transition: all 0.4s ease;
//         }

//         .center-slide img {
//           width: 437px;
//           height: 518px;
//           opacity: 1;
//           filter: none;
//           z-index: 2;
//           transform: none;
//         }

//         .side-slide img {
//           /* transform: scale(0.8); */
//           opacity: 0.5;
//           filter: blur(2px);
//           z-index: 1;
//           transform: scaleX(1.1);
//         }

//         .hidden-slide {
//           opacity: 0;
//           pointer-events: none;
//           transform: scale(0);
//           width: 0;
//           height: 0;
//           overflow: hidden;
//         }

//         .caption-wrapper {
//           height: 32px; /* Reserve space for caption */
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-top: 16px;
//         }

//         .caption {
//           font-family:"Shippori Micho B1",sans-serif;
//           font-size: 44px;
//           font-weight:500;
//           color: #333;
//           text-align: center;
//         }

//         .caption-placeholder {
//           height: 1.1rem;
//         }

//         @media (max-width: 768px) {
//           .embla__slide {
//             flex: 0 0 100%;
//           }

//           .side-slide img,
//           .center-slide img {
//             transform: scale(1);
//             filter: none;
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesSection;

// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import ImageAssets from "../common/ImageAssets"; // Adjust as needed

// const ServicesSection = () => {
//   const images = [
//     {
//       src: ImageAssets.cosmeticServices,
//       name: "Cosmetic Services",
//       link: "/services/cosmetic-services",
//     },
//     {
//       src: ImageAssets.injectables,
//       name: "Injectables",
//       link: "/services/injectables",
//     },
//     {
//       src: ImageAssets.acneTreatment,
//       name: "Acne Treatment",
//       link: "/services/skin-rejuvenation",
//     },
//     {
//       src: ImageAssets.skinreju,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation",
//     },
//   ];

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 500,
//     // arrows: true,
//     focusOnSelect: true,
//     // autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="services-section-wrapper">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="custom-slider-wrapper">
//         <Slider {...settings} className="services-slider">
//           {images.map((img, idx) => (
//             <div key={idx} className="slide-item">
//               <a href={img.link}>
//                 <img src={img.src} alt={img.name} />
//                 <p className="slide-caption">{img.name}</p>
//               </a>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <style jsx>{`
//         .services-section-wrapper {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 60px 20px;
//           text-align: center;
//         }

//         .services-heading {
//           font-size: 2.5rem;
//           margin-bottom: 40px;
//           color: #475666;
//           font-family: "Poppins", sans-serif;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         /* NEW WRAPPER: ensure overflow visible */
//         .custom-slider-wrapper {
//           overflow: visible;
//           padding: 80px 0; /* more vertical room */
//         }

//         .services-slider {
//           overflow: visible;
//         }

//         .services-slider .slick-list {
//           overflow: visible !important;
//         }

//         .services-slider .slick-track {
//           display: flex;
//           align-items: center;
//         }

//         .services-slider .slick-slide > div {
//           display: flex !important;
//           justify-content: center;
//           align-items: center;
//           padding: 75px;
//           margin: -80px;
//         }

//         .slide-item {
//           transition: transform 0.3s ease, filter 0.3s ease;
//           outline: none;
//           text-align: center;
//           overflow: visible;
//           margin: 50px;
//         }

//         .slide-item img {
//           width: 300px;
//           height: 250px;
//           border-radius: 10px;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .slick-center .slide-item img {
//           width: 441px;
//           height: 455px; /* ✅ increased height */
//           transform: scale(1.1);
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
//           z-index: 2;
//         }

//         .slick-center .slide-caption {
//           display: block;
//         }

//         .slick-slide:not(.slick-center) .slide-item img {
//           transform: scale(0.85);
//           opacity: 0.6;
//           filter: blur(2px);
//           padding: 0px 40px;

//         }

//         .slide-caption {
//           font-size: 1.2rem;
//           font-weight: 500;
//           color: #313942;
//           font-family: "Shippori Mincho B1", serif;
//           display: none;
//           margin-top: 12px;
//         }

//         @media (max-width: 768px) {
//           .slide-item img {
//             width: 100%;
//             max-width: 300px;
//             height: auto;
//             transform: scale(1);
//             filter: none;
//           }

//           .slick-slide:not(.slick-center) .slide-item img {
//             transform: scale(1);
//             opacity: 1;
//             filter: none;
//           }

//           .slide-caption {
//             display: block;
//             font-size: 1rem;
//             margin-top: 10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesSection;

// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import ImageAssets from "../common/ImageAssets"; // Your image import

// const ServicesSection = () => {
//   const images = [
//     {
//       src: ImageAssets.cosmeticServices,
//       name: "Cosmetic Services",
//       link: "/services/cosmetic-services",
//     },
//     {
//       src: ImageAssets.injectables,
//       name: "Injectables",
//       link: "/services/injectables",
//     },
//     {
//       src: ImageAssets.acneTreatment,
//       name: "Acne Treatment",
//       link: "/services/skin-rejuvenation",
//     },
//     {
//       src: ImageAssets.skinreju,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation",
//     },
//   ];

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 500,
//     arrows: true,
//     focusOnSelect: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//           autoplay: true,
//           autoplaySpeed: 3000,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="services-section-wrapper">
//       <h2 className="services-heading">Our Services</h2>
//       <Slider {...settings} className="services-slider">
//         {images.map((img, idx) => (
//           <div key={idx} className="slide-item">
//             <a href={img.link}>
//               <img src={img.src} alt={img.name} />
//               <p className="slide-caption">{img.name}</p>
//             </a>
//           </div>
//         ))}
//       </Slider>

//       <style jsx>{`
//         .services-section-wrapper {
//           max-width: 1200px;
//           height: 600px;
//           margin: 0 auto;
//           padding: 60px 20px;
//           text-align: center;
//         }

//         .services-heading {
//           font-size: 2.5rem;
//           margin-bottom: 40px;
//           color: #475666;
//           font-family: "Poppins", sans-serif;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         .services-slider .slick-slide > div {
//           display: flex !important;
//           justify-content: center;
//         }

//         .slide-item {
//           transition: transform 0.3s ease, filter 0.3s ease;
//           outline: none;
//           text-align: center;
//         }

//         .slide-item img {
//           width: 350px;
//           height: 250px;
//           border-radius: 10px;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }

//         .slide-caption {
//           font-size: 1.2rem;
//           font-weight: 500;
//           color: #313942;
//           font-family: "Shippori Mincho B1", serif;
//           display: none;
//           margin-top: 12px;
//         }

//        .slick-center .slide-item img {
//   transform: scale(1.2);
//   height: 300px; /* ✅ add this */
//   width: 400px;  /* ✅ optional: adjust width too */
//   filter: none !important;
//   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
//   z-index: 1;
// }

//         .slick-center .slide-caption {
//           display: block;
//         }

//         .slick-slide:not(.slick-center) .slide-item img {
//           transform: scale(0.85);
//           filter: blur(3px);
//           opacity: 0.6;
//         }

//         @media (max-width: 768px) {
//           .services-section-wrapper {
//             height: auto;
//           }

//           .slide-item img {
//             width: 100%;
//             max-width: 300px;
//             height: auto;
//             transform: scale(1);
//             filter: none;
//           }

//           .slick-slide:not(.slick-center) .slide-item img {
//             filter: none;
//             opacity: 1;
//             transform: scale(1);
//           }

//           .slide-caption {
//             display: block;
//             font-size: 1rem;
//             margin-top: 10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesSection;

// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import ImageAssets from "../common/ImageAssets"; // Your image import

// const ServicesSection = () => {
//   const images = [
//     {
//       src: ImageAssets.cosmeticServices,
//       name: "Cosmetic Services",
//       link: "/services/cosmetic-services",
//     },
//     {
//       src: ImageAssets.injectables,
//       name: "Injectables",
//       link: "/services/injectables",
//     },
//     {
//       src: ImageAssets.acneTreatment,
//       name: "Acne Treatment",
//       link: "/services/skin-rejuvenation",
//     },
//     {
//       src: ImageAssets.skinreju,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation",
//     },
//   ];

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 500,
//     arrows: true,
//     focusOnSelect: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//           autoplay: true,
//           autoplaySpeed: 3000,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="services-section-wrapper">
//       <h2 className="services-heading">Our Services</h2>
//       <Slider {...settings} className="services-slider">
//         {images.map((img, idx) => (
//           <div key={idx} className="slide-item">
//             <a href={img.link}>
//               <img src={img.src} alt={img.name} />
//               <p className="slide-caption">{img.name}</p>
//             </a>
//           </div>
//         ))}
//       </Slider>

//       <style jsx>{`
//         .services-section-wrapper {
//           max-width: 900px;
//           margin: 0 auto;
//           padding: 40px 20px;
//           text-align: center;
//         }

//         .services-heading {
//           font-size: 2rem;
//           margin-bottom: 30px;
//           color: #475666;
//           font-family: "Poppins", sans-serif;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         .services-slider .slick-slide > div {
//           display: flex !important;
//           justify-content: center;
//         }

//         .slide-item {
//           transition: transform 0.3s ease, filter 0.3s ease;
//           outline: none;
//           text-align: center;
//         }

//         .slide-item img {
//           width: 250px;
//           border-radius: 10px;
//           transition: transform 0.3s ease;
//         }

//         .slide-caption {
//           font-size: 1.2rem;
//           font-weight: 500;
//           color: #313942;
//           font-family: "Shippori Mincho B1", serif;
//           display: none; /* hidden by default */
//           margin-top: 12px;
//         }

//         .slick-center .slide-item img {
//           transform: scale(1.2);
//           filter: none !important;
//           box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
//         }

//         .slick-center .slide-caption {
//           /* display: block;  */
//         }

//         .slick-slide:not(.slick-center) .slide-item img {
//           transform: scale(0.85);
//           filter: blur(3px);
//           opacity: 0.6;
//         }

//         @media (max-width: 768px) {
//           .slide-item img {
//             width: 100%;
//             max-width: 300px;
//             transform: scale(1);
//             filter: none;
//           }

//           .slick-slide:not(.slick-center) .slide-item img {
//             filter: none;
//             opacity: 1;
//           }

//           .slide-caption {
//             display: block;
//             font-size: 1rem;
//             margin-top: 10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesSection;

// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay';
// import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import ImageAssets from '../common/ImageAssets';
// import './ServicesSection.css';

// import { IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const ServicesSection = () => {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     {
//       src: ImageAssets.cosmeticServices,
//       name: "Cosmetic Services",
//       link: "/services/cosmetic-services"
//     },
//     {
//       src: ImageAssets.injectables,
//       name: "Injectables",
//       link: "/services/injectables"
//     },
//     {
//       src: ImageAssets.acneTreatment,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation"
//     },
//     {
//       src: ImageAssets.skinreju,
//       name: "Skin Rejuvenation",
//       link: "/services/skin-rejuvenation"
//     },
//   ];

//   return (
//     <div className="services-section-wrapper">
//       <div className="services-header">
//         <h2 className="services-heading">Our Services</h2>
//         <div className="nav-buttons">
//           <IconButton
//             style={{ backgroundColor: "#475666", color: "#FFF" }}
//             className="nav-btn"
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//           >
//             <ArrowBackIosNewIcon />
//           </IconButton>
//           <IconButton
//             className="nav-btn"
//             style={{ backgroundColor: "#475666", color: "#FFF" }}
//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//           >
//             <ArrowForwardIosIcon />
//           </IconButton>
//         </div>
//       </div>

//       <div className="services-slider-container">
//         <Swiper
//           ref={swiperRef}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loopAdditionalSlides={0}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             reverseDirection: true,
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//             slideShadows: false,
//           }}
//           speed={800}
//           slidesPerView={3}
//           spaceBetween={30}
//           modules={[Autoplay, EffectCoverflow]}
//           navigation={false}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               centeredSlides: false,
//             },
//             768: {
//               slidesPerView: 1,
//               centeredSlides: false,
//             },
//             800: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {images.map((img, index) => {
//             const isActive = index === activeIndex;

//             const slideContent = (
//               <div className="slide-container">
//                 <img
//                   src={img.src}
//                   alt={`Slide ${index + 1}`}
//                   className="slide-image"
//                 />
//                 <p className="slide-caption">{img.name}</p>
//               </div>
//             );

//             return (
//               <SwiperSlide key={index}>
//                 {isActive ? (
//                   <a href={img.link} className="active-slide-link">
//                     {slideContent}
//                   </a>
//                 ) : (
//                   slideContent
//                 )}
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay';
// import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import ImageAssets from '../common/ImageAssets';
// import './ServicesSection.css';

// import { IconButton } from '@mui/material';
// // import { ArrowForward, ArrowBack } from '@mui/icons-material';
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const ServicesSection = () => {
//   const images = [
//     { src: ImageAssets.cosmeticServices, name: "Cosmetic Services" },
//     { src: ImageAssets.injectables, name: "Injectables" },
//     { src: ImageAssets.acneTreatment, name: "Skin Rejuvenation" },
//     // { src: ImageAssets.acneTreatment, name: "Skin Rejuvenation" },
//   ];

//   const swiperRef = useRef(null);

//   return (
//     <div className="services-section-wrapper">
//        <div className="services-header">
//         <h2 className="services-heading">Our Services</h2>
//         <div className="nav-buttons">
//           <IconButton
//           style={{backgroundColor:"#475666",color:"#FFF"}}
//             className="nav-btn"
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//           >
//             <ArrowBackIosNewIcon />
//           </IconButton>
//           <IconButton
//             className="nav-btn"
//             style={{backgroundColor:"#475666",color:"#FFF"}}

//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//           >
//             <ArrowForwardIosIcon />
//           </IconButton>
//         </div>
//      </div>

//       <div className="services-slider-container">
//         <Swiper
//           ref={swiperRef}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           // initialSlide={1}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,reverseDirection: true,

//           }}
//           // slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//             slideShadows: false,
//           }}
//           speed={800}
//           slidesPerView={3}
//           spaceBetween={30}
//           modules={[Autoplay, EffectCoverflow]}
//           navigation={false}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               centeredSlides: false,
//             },
//             768: {
//               slidesPerView: 1,centeredSlides: false,
//             },
//             800: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <div className="slide-container">
//                 <img
//                   src={img.src}
//                   alt={`Slide ${index + 1}`}
//                   className="slide-image"
//                 />

//                 <p className="slide-caption">{img.name}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/autoplay';
// import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import ImageAssets from '../common/ImageAssets';
// import './ServicesSection.css';
// import { IconButton } from '@mui/material';
// import { ArrowForward, ArrowBack } from '@mui/icons-material'

// const ServicesSection = () => {
//   const images = [
//     { src: ImageAssets.cosmeticServices, name: "Cosmetic Services" },
//     { src: ImageAssets.injectables, name: "Injectables" },
//     { src: ImageAssets.cosmeticServices, name: "Cosmetic Services" },
//   ];

//   const swiperRef = useRef(null);

//   return (
//     <div className="services-section-wrapper">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="nav-buttons">
//           <IconButton
//             className="nav-btn"
//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//           >
//             <ArrowBack />
//           </IconButton>
//           <IconButton
//             className="nav-btn"
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//           >
//             <ArrowForward />
//           </IconButton>
//         </div>

//       <div className="services-slider-container">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,reverseDirection: true,
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//             slideShadows: false,
//           }}
//           speed={800}
//           slidesPerView={3}
//           spaceBetween={30}
//           modules={[Autoplay, EffectCoverflow]}
//           navigation={false}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <div className="slide-container">
//                 <img
//                   src={img.src}
//                   alt={`Slide ${index + 1}`}
//                   className="slide-image"
//                 />
//                 <p className="slide-caption">{img.name}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/navigation';
// // import 'swiper/css/autoplay';
// // import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
// // import ImageAssets from '../common/ImageAssets';
// // import './ServicesSection.css'; // ✅ Add CSS file

// // const ServicesSection = () => {
// //   const images = [
// //     ImageAssets.cosmeticServices,
// //     ImageAssets.injectables,
// //     ImageAssets.cosmeticServices,

// //   ];

// //   return (
// //     <div style={{ width: '90%', margin: 'auto', paddingTop: '40px' }}>
// //       <Swiper
// //         effect="coverflow"
// //         grabCursor={true}
// //         centeredSlides={true}
// //         loop={true}
// //         autoplay={{
// //           delay: 3000,
// //           disableOnInteraction: false,
// //           reverseDirection: true,
// //         }}
// //         navigation={false}
// //         coverflowEffect={{
// //           rotate: 0,
// //           stretch: 0,
// //           depth: 100,
// //           modifier: 2.5,
// //           slideShadows: false,
// //         }}

// //         speed={800}
// //         slidesPerView={3} // ✅ Ensures left, center, right
// //         spaceBetween={30}
// //         modules={[Autoplay, EffectCoverflow, Navigation]}
// //       >
// //         {images.map((img, index) => (
// //           <SwiperSlide key={index}>
// //             <img
// //               src={img}
// //               alt={`Slide ${index + 1}`}
// //               className="slide-image"
// //             />
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default ServicesSection;
