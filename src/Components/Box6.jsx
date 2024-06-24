import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Box.css';
import { useState, useRef } from 'react'
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

// const swiper = new Swiper(...)

const Box6 = () => {
  return (
    <div className='movie-slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide className="Movie-1"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-2"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-3"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-4"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-5"><button>See the schedule</button></SwiperSlide>
        <SwiperSlide className="Movie-6"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-7"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-8"><button>See the schedule</button></SwiperSlide>
        <SwiperSlide className="Movie-9"><button>Stream Now</button></SwiperSlide>
        <SwiperSlide className="Movie-10"><button>Stream Now</button></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Box6
