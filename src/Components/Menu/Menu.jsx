import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardItem from '../Card/CardItem';

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {[...Array(9).keys()].map((_, index) => (
        <SwiperSlide>
          <CardItem/>
        </SwiperSlide>
        ,
        <SwiperSlide>
           <CardItem/>
        </SwiperSlide>
        ,
        <SwiperSlide>
           <CardItem/>
        </SwiperSlide>
        ,
        <SwiperSlide>
           <CardItem/>
        </SwiperSlide>
        ,
        <SwiperSlide>
           <CardItem/>
        </SwiperSlide>
        ,
        <SwiperSlide>
           <CardItem/>
        </SwiperSlide>   
      ))}
    </Swiper>
  );
}
