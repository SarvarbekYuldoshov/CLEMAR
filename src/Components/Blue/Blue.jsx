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
        <div className='flex gap-[20px]'>
            <ul className='w-[680px] bg-[#007aff] h-[320px] flex items-center gap-[20px] rounded-[10px]'>
                <li className=''>
                    <h1 className='text-[#ffff] font-bold text-[20px] ml-[20px]'>{t("blue.blue_text_2")}</h1>
                    <p className='text-[#ffff] text-[12px] ml-[20px] w-[350px]'>{t("blue.blue_text_3")}</p>
                    <button className='w-[120px] h-[35px] text-[blue] bg-[#ffff] ml-[20px] mt-[20px] rounded-[5px]'>Batafsil</button>
                </li>
                <li className=''>
                    <img className='w-[280px] h-[250px]' src={Rasm_1} alt="" />
                </li>
            </ul>
            <ul className='w-[450px] bg-[#2d2d2e] h-[320px] flex items-center gap-[20px] rounded-[10px]'>
                <li className=''>
                    <h1 className='text-[#ffff] font-bold text-[20px] ml-[20px]'>{t("blue.blue_text_4")}</h1>
                    <p className='text-[#ffff] text-[12px] ml-[20px] w-[300px] mt-[10px]'>{t("blue.blue_text_5")}</p>
                    <button className='w-[120px] h-[35px] text-[blue] bg-[#ffff] ml-[20px] mt-[20px] rounded-[5px]'>Batafsil</button>
                </li>
                <li className=''>
                    <img className='w-[4350px] h-[100px]' src={Rasm_2} alt="" />
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Blue
