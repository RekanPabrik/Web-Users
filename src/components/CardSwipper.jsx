import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import dataContactUs from "../utility/dataContactUs";
import "../css/TeamSlider.css";

const CardSwiper = () => {
  const data = dataContactUs;

  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <div class="slider-wrapper">
              <div class="card-list swiper-wrapper">
                <div class="card-item swiper-slide">
                  <img src={member.img} alt={member.nama} class="user-image" />
                  <h2 class="user-name">{member.nama}</h2>
                  <p class="user-profession">{member.posisi}</p>
                  <button class="message-button">Message</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-slide-button swiper-button-next"></div>
      <div className="swiper-slide-button swiper-button-prev"></div>
    </div>
  );
};

export default CardSwiper;
