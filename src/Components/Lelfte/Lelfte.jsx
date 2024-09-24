import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Rasm_1 from "../images/rasm26.png"
import Rasm_2 from "../images/rasm27.png"
import Rasm_3 from "../images/rasm28.png"
import Rasm_4 from "../images/rasm29.png"
import Rasm_5 from "../images/rasm30.png"
import Rasm_6 from "../images/rasm31.png"
import Rasm_7 from "../images/rasm32.png"
import Rasm_8 from "../images/rasm33.png"
import Rasm_9 from "../images/rasm34.png"
import Rasm_10 from "../images/rasm35.png"
import Rasm_11 from "../images/rasm36.png"
import Rasm_12 from "../images/rasm37.png"
import Rasm_13 from "../images/rasm38.png"
import Rasm_14 from "../images/rasm39.png"
import Rasm_15 from "../images/rasm40.png"
import Rasm_16 from "../images/rasm41.png"
import Rasm_17 from "../images/rasm42.png"

const Lelfte = ({ items }) => { 
    const { t } = useTranslation();

    return (
        <div className='max-w-[1200px] mx-auto p-[20px]'>
            <h1 className='text-black font-bold text-[30px]'>{t("Lelfite.Lelfite_text_1")}</h1>
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
                className="mt-[20px]"
            >
            <SwiperSlide>
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_1} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_2} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_3} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_4} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_5} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_6} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_7} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_8} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_9} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_10} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_11} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_12} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_13} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_14} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_15} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
                <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_16} alt="" />
                </ul>
            </SwiperSlide>
            <SwiperSlide >
               <ul className='bg-[blue] w-[200px] h-[110px] flex justify-center rounded-[10px]'>
                   <img className='w-[165px] h-[75px] mt-[15px] ' src={Rasm_17} alt="" />
                </ul>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Lelfte;
