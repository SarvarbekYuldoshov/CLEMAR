import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { t } from 'i18next';

const Section = () => {
  const [photos, setPhotos] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch('https://clean.maxone.uz/api/sub_categories');
      const data = await response.json();
      setPhotos(data);
      localStorage.setItem('photos', JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch photos:", error);
    }
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
    <div className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto p-[20px]">
        <h1 className="text-3xl font-bold text-center mb-8">{t('Your Title Here')}</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {photos.slice(0, 10).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card-wrapper flex justify-center items-center">
                <div className="card-list w-[240px] h-[300px] border border-[#cbcbce] shadow-lg rounded-[10px] overflow-hidden flex justify-center items-center">
                  <img
                    className="w-[220px] h-[160px] object-cover"
                    src={item.image}
                    alt={`Item ${index + 1}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
