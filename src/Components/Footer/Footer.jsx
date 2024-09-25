import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className=''>
      <div className=''>
        <div className=''>
            <h1 className=''>{t("footer.footer_text_1")}</h1>
            <p className=''></p>
            <p class="min-text"></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
