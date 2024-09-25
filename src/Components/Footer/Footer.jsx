import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className='bg-[#1d1d41]'>
      <div className='max-w-[1200px] mx-auto p-[20px] flex gap-[100px]'>
        <div className=''>
            <h1 className='text-[#FFFF] font-bold text-[25px] w-[300px]'>{t("footer.footer_text_1")}</h1>
            <p className='text-[#FFFF] text-[20px]'>{t("footer.footer_text_2")}</p>
            <p className='text-[#FFFF]  font-bold text-[20px]'>{t("footer.footer_text_3")}</p>
            <li className='text-[#FFFF] list-none flex gap-[10px]'>
              <img src="https://clemar.uz/static/media/location1.a49cff35b40ac85375264e46519bf880.svg" alt="" />
              <a href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783" target="_blank" class="map round-05">{t("footer.footer_text_4")}</a>
            </li>
            <li className='text-[#FFFF] list-none flex items-center gap-[10px] mt-[20px] '>
                <img src="https://clemar.uz/static/media/email.acb6ca4a206f028599f0b5bcc3c86b4c.svg" alt="" />
                <p className='mt-[18px]'>info@clemar.uz</p>
            </li>
            <ul className='gap-[10px] flex'>
                <img className='w-[30px]' src="https://clemar.uz/static/media/instagram2.67046cd701fa394c01013399494c5ccd.svg" alt="" />
                <img className='w-[30px]' src="https://clemar.uz/static/media/facebook2.e3364866a6024a6763a513f171d26099.svg" alt="" />
                <img className='w-[30px]' src="https://clemar.uz/static/media/youtube.6dfdc0639e27fb555fbd310760675953.svg" alt="" />
                <img className='w-[30px]' src="	https://clemar.uz/static/media/telegram1.9e6e4f687f5b2ee526bfeb979cccbe6c.svg" alt="" /> 
            </ul>
        </div>
        <div className='list-none'>
            <li className=''>
                <a className='text-[#FFFF] font-bold text-[25px]' href="">{t("footer.footer_text_5")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_6")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_7")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_8")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_9")}</a>
            </li>
        </div>
        <div className='list-none'>
            <li className=''>
                <a className='text-[#FFFF] font-bold text-[25px]' href="">{t("footer.footer_text_10")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_11")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_12")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_13")}</a>
            </li>
            <br />
            <li className=''>
                <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_14")}</a>
            </li>
        </div>
        <div className=''>
            <ul>
                <li className='w-[250px] mt-[5px]'>
                    <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_15")}</a>
                </li>
                <li className='w-[200px] mt-[45px]'>
                    <a className='text-[#FFFF] text-[14px]' href="">{t("footer.footer_text_16")}</a>
                </li>
                <li className='mt-[30px] '>
                     <a href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783"  target="_blank" class="map round-[10px]"><img className='mt-[20px] rounded-[10px]' src="https://clemar.uz/static/media/map.30c444482438ea78ad82.jpg" alt="img" class="img"></img></a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
