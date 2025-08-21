// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import heroslider1 from "../img/banner_Hero1.jpg";
import heroslider2 from "../img/banner_Hero2.jpg";
import heroslider3 from "../img/banner_Hero3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

function HeroSlider() {
  return (
    <>
    <div className="hero">
        <div className="container">
        <Swiper         
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
            <div className="content">
                <h4>Interduction the new</h4>
                <h3>Microsoft Xbox <br />  360 cntroller</h3>
                <p>Windows XP/10/8/7/11 Ps3, tv</p>
                <Link to={'/'} className="btn">Shop now</Link>
            </div>
            <img src={heroslider1} alt="Slider hero 1" />
        </SwiperSlide>
                <SwiperSlide>
            <div className="content">
                <h4>Interduction the new</h4>
                <h3>Microsoft Xbox <br />  360 cntroller</h3>
                <p>Windows XP/10/8/7/11 Ps3, tv</p>
                <Link to={'/'} className="btn">Shop now</Link>
            </div>
            <img src={heroslider2} alt="Slider hero 1" />
        </SwiperSlide>
                <SwiperSlide>
            <div className="content">
                <h4>Interduction the new</h4>
                <h3>Microsoft Xbox <br />  360 cntroller</h3>
                <p>Windows XP/10/8/7/11 Ps3, tv</p>
                <Link to={'/'} className="btn">Shop now</Link>
            </div>
            <img src={heroslider3} alt="Slider hero 1" />
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
    </>
  );
}

export default HeroSlider;
