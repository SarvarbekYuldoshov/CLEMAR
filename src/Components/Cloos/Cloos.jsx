import React from 'react'
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm22.png"
import Rasm_2 from "../images/rasm23.png"
import Rasm_3 from "../images/rasm24.png"
import Rasm_4 from "../images/rasm25.png"
const Cloos = () => {
  const { t } = useTranslation  ();
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
      <h1 className='text-black font-bold text-[30px]'>{t("choose.choose_text_1")}</h1>
          <ul className='flex gap-[50px]'>
            <li className='flex items-center gap-[10px]'>
              <img className='w-[100px] h-[40px]' src={Rasm_1} alt="" />
              <p className='text-[16px] mt-[15px]'>{t("choose.choose_text_2")}</p>
            </li>
            <li className='flex items-center gap-[10px]'>
              <img className='w-[100px] h-[40px]' src={Rasm_2} alt="" />
              <p className='text-[16px] mt-[15px]'>{t("choose.choose_text_3")}</p>
            </li>
            <li className='flex items-center gap-[10px]'>
              <img className='w-[100px] h-[40px]' src={Rasm_3} alt="" />
              <p className='text-[16px] mt-[15px]'>{t("choose.choose_text_4")}</p>
            </li>
            <li className='flex items-center gap-[10px]'>
              <img className='w-[100px] h-[40px]' src={Rasm_4} alt="" />
              <p className='text-[16px] mt-[15px]'>{t("choose.choose_text_5")}</p>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Cloos


