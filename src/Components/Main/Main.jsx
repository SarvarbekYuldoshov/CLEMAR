import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const { t } = useTranslation();

  const getUser = () => {
    fetch('https://clean.maxone.uz/api/top_products/')
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        localStorage.setItem('photos', JSON.stringify(data));
      })
      .catch(err => console.error("Failed to fetch data:", err));
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
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px] flex'>
         <ul className=''>
          
         </ul>
      </div>
    </div>
  );
}

export default Main;
