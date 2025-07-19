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
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlidProduct;
