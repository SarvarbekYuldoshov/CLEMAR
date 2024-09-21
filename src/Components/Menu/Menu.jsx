import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const { t } = useTranslation();

  const getUser = () => {
    fetch('https://clean.maxone.uz/api/categories')
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        localStorage.setItem('photos', JSON.stringify(data));
      });
  };

  useEffect(() => {
    const storedPhotos = localStorage.getItem('photos');
    if (storedPhotos) {
      setPhotos(JSON.parse(storedPhotos));
    } else {
      getUser();
    }
  }, []);

  return (
    <>
    <div className='max-w-[1200px] mx-auto p-[20px]'>
      <h1 className=''>{t("menu.menu_text_1")}</h1>
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
      {
        photos.slice(0, 10).map((item, index) => (
          <SwiperSlide key={index}>
              <div className='max-w-[1200px] mx-auto p-[20px]'>
                  <ul className='card-list w-[250px] h-[270px] border border-[#cbcbce] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] justify-center rounded-[10px]'>
                      <h1 className='mt-[15px] ml-[15px] font-montserrat text-[1.2vw] no-underline'>{item.name_uz}</h1>
                      <img className='w-[220px] h-[160px] mt-[50px] ml-[10px] ' src={item.image} alt="" />
                  </ul>
              </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
    </>
  );
}
