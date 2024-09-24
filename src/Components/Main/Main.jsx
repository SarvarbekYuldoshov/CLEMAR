import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm17.jpg"
import Rasm_2 from "../images/rasm18.jpg"
import Rasm_3 from "../images/rasm19.jpg"
import Rasm_4 from "../images/rasm20.jpg"
const Main = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px] flex'>
         <ul className=''>
          <li className='border border-black w-[200px] h-[200px]  justify-center flex rounded-[10px]'>
            <img className='w-[150px] h-[150px] mt-[20px]' src={Rasm_1} alt="" />
          </li>
          <p className=''>{t("main.main_text_1")}</p>
          
         </ul>
      </div>
    </div>
  );
}

export default Main;
