import React from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from '../images/rasm12.png';

const CardItem = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
          <ul className='w-[220px] h-auto border border-[#cbcbce] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] justify-center'>
              <h1 className='mt-[10px] ml-[15px]'>{t("menu.menu_text_2")}</h1>
              <img className='w-[250px] h-[180px] mt-[50px] ' src={Rasm_1} alt="Rasm 12" />
              <p className='text-white'>{t("menu.menu_text_7")}</p>
          </ul>
      </div>
    </div>
  );
};

export default CardItem;
