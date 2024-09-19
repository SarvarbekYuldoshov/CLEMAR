import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import Rasm_1 from "../images/rasm10.png"
import Rasm_2 from "../images/rasm11.png"

const Hero = () => {
  return (
    <div className='hero-container mt-[150px]'>
      <div className='swiper-container'>
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
          <SwiperSlide>
            <img src={Rasm_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Rasm_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Rasm_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Rasm_2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
