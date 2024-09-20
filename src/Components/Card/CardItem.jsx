import React from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from '../images/rasm12.png';

const CardItem = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
        <h1 className=''>{t("menu.menu_text_2")}</h1>
        <img className='' src={Rasm_1} alt="Rasm 12" />
        <p className='text-white'>{t("menu.menu_text_7")}</p>
      </div>
    </div>
  );
};

export default CardItem;
