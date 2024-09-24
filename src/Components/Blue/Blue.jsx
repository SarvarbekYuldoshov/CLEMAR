import React from 'react'
import { useTranslation } from 'react-i18next';

const Blue = () => {
    const { t } = useTranslation();
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto p-[20px]'>
        <h1 className='text-black font-bold text-[30px]'>{t("blue.blue_text_1")}</h1>
      </div>
    </div>
  )
}

export default Blue
