import React from 'react';
import "./Header.css";
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'antd';
import 'antd/dist/reset.css';
import Rasm_1 from "../images/rasm1.png";
import { Link } from 'react-router-dom';
import Rasm_2 from "../images/rasm3.png";
import Rasm_3 from "../images/rasm2.png";
import Rasm_4 from "../images/rasm4.png";
import Rasm_5 from "../images/rasm5.png";
import Rasm_6 from "../images/rasm6.png";
import Rasm_7 from "../images/rasm7.png";
import Rasm_9 from "../images/rasm9.png";


const Header = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: '1',
      label: (
        <ul className=''>
          <Link className='flex gap-[20px]' to="#home1">
            <img className='w-[25px] h-[25px]' src={Rasm_2} alt="Rasm_2" />
            <p>{t("header.header_text_1")}</p>
          </Link>
          <Link className='flex gap-[20px]' to="#home2">
            <img className='w-[25px] h-[25px]' src={Rasm_3} alt="Rasm_3" />
            <p>{t("header.header_text_2")}</p>
          </Link>
          <Link className='flex gap-[20px]' to="#home3">
            <img className='w-[25px] h-[25px]' src={Rasm_4} alt="Rasm_4" />
            <p>{t("header.header_text_3")}</p>
          </Link>
          <Link className='flex gap-[20px]' to="#home4">
            <img className='w-[25px] h-[25px]' src={Rasm_5} alt="Rasm_5" />
            <p>{t("header.header_text_4")}</p>
          </Link>
          <Link className='flex gap-[20px]' to="#home5">
            <img className='w-[25px] h-[25px]' src={Rasm_6} alt="Rasm_6" />
            <p>{t("header.header_text_5")}</p>
          </Link>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-white p-[20px] mt-[60px] header">
      <div className="max-w-[1200px] mx-auto flex gap-[30px] items-center mt-[-26px] flex-wrap">
        <div className='border border-[blue] w-[150px] h-[35px] bg-[#007aff] rounded-[7px]'>
          <Dropdown
            className="w-[30px] h-[26] ml-[10px]"
            menu={{ items }}
            placement="bottomRight"
          >
            <button className="flex items-center  bg-transparent text-white rounded gap-[10px]">
              <img className="" src={Rasm_1} alt="Menu" />
              <span className="text-white text-[18px] font-semibold mt-[5px]">{t("header.header_text_29")}</span>
            </button>
          </Dropdown>
        </div>
        <div className='flex  gap-[20px] items-center'>
          <ul className=''>
            <a className="logo" href="/">
                <img className='w-[150px] h-[35px] mt-[15px]' src={Rasm_7} alt="logo" />
            </a>
          </ul>
        </div>
        <ul className='flex items-center justify-center'>
              <input className='border border-black rounded-[3px] w-[280px] h-[35px] mt-[20px] max' type="" placeholder={t("header.header_text_30")}/>
             <li className='w-[80px] h-[35px] bg-[blue] mb-[-20px] ml-[-5px] rounded-tr-[5px] rounded-br-[5px]'>
                 <img className='ml-[30px] mt-[5px]' src="	https://clemar.uz/static/media/search.d2ffda43e103337068b589fd598257db.svg" alt="" />
             </li>
          </ul>
           <ul className='mt-[25px]'>
              <Link to="/onas" className=''>
                  {t("header.header_text_31")}
              </Link>
            </ul>
          <div className='flex gap-[10px] items-center'>
           <img className='w-[25px] h-[23px] mt-[10px]' src={Rasm_9} alt="" />
           <p className='h-[23px] mt-[30px]'>{t("header.header_text_32")}</p>
        </div>
        </div>
      </div>
  );
};

export default Header;
