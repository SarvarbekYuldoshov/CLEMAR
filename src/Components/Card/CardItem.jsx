import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from '../images/rasm12.png';
import "./CardItem.css"
const CardItem = () => {
  const { t } = useTranslation();
  const [photos,setPhotos] = useState([])

  const  getUser = () =>{
    fetch('https://clean.maxone.uz/api/categories').then(res=>res.json()).then(photo => {
      setPhotos(photo)
    })
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
          <ul className='card-list w-[200px] h-auto border border-[#cbcbce] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] justify-center rounded-[10px]'>
              <h1 className='mt-[15px] ml-[15px] font-montserrat text-[1.2vw] no-underline'>{t("menu.menu_text_2")}</h1>
              <img className='w-[200px] h-[150px] mt-[50px] ml-[10px] card-img' src={Rasm_1} alt="Rasm 12" />
              <p className='font-montserrat text-[0.9vw] font-normal no-underline ml-[20px]'>{t("menu.menu_text_7")}</p>
          </ul>
      </div>
    </div>
  );
};

export default CardItem;
