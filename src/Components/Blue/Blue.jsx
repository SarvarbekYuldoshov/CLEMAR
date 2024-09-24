import React from 'react'
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm44.png"
import Rasm_2 from "../images/rasm45.png"
const Blue = () => {
    const { t } = useTranslation();
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
        <h1 className='text-black font-bold text-[30px]'>{t("blue.blue_text_1")}</h1>
        <div className=''>
            <ul className='w-[700px] bg-[#007aff] h-[400px]'>
                <li className=''>
                    <h1 className='text-[#ffff] font-bold text-[20px]'>{t("blue.blue_text_2")}</h1>
                    <p className='text-[#ffff] text-[12px]'>{t("blue.blue_text_3")}</p>
                    <button className='w-[100px] text-[blue] bg-[#ffff]'>Batafsil</button>
                </li>
                <li className=''>
                    <img className='' src={Rasm_1} alt="" />
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Blue
