import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";

import "./Product.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

function SlidProduct({ data, title }) {
  // console.log(data); // for test
  return (
    <div className="slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            cumque?
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 4 },
            900: { slidesPerView: 3 },
            600: { slidesPerView: 2 }, 
            0: { slidesPerView: 1 },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlidProduct;
