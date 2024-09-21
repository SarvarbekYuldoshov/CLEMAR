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
      navigation={true}
      slidesPerView={5}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {[...Array(9).keys()].map((_, index) => (
        <SwiperSlide>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
