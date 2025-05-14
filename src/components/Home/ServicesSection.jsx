
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import ImageAssets from '../common/ImageAssets';
import './ServicesSection.css';

import { IconButton } from '@mui/material';
// import { ArrowForward, ArrowBack } from '@mui/icons-material';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ServicesSection = () => {
  const images = [
    { src: ImageAssets.cosmeticServices, name: "Cosmetic Services" },
    { src: ImageAssets.injectables, name: "Injectables" },
    { src: ImageAssets.cosmeticServices, name: "Skin Rejuvenation" },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="services-section-wrapper">
       <div className="services-header">
        <h2 className="services-heading">Our Services</h2>
        <div className="nav-buttons">
          <IconButton
          style={{backgroundColor:"#475666",color:"#FFF"}}
            className="nav-btn"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            className="nav-btn"
            style={{backgroundColor:"#475666",color:"#FFF"}}
           
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
     </div>

      <div className="services-slider-container">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // initialSlide={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,reverseDirection: true,
           
          }} 
          // slidesPerView={'auto'} 
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          speed={800}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Autoplay, EffectCoverflow]}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1,centeredSlides: false,
            },
            800: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="slide-container">
                <img
                  src={img.src}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <p className="slide-caption">{img.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;






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
