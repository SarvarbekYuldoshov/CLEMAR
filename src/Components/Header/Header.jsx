import React from 'react';
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
        <ul className='flex flex-col gap-2'>
          <Link className='flex gap-5 items-center' to="#home1">
            <img className='w-6 h-6' src={Rasm_2} alt="Rasm_2" />
            <p>{t("header.header_text_1")}</p>
          </Link>
          <Link className='flex gap-5 items-center' to="#home2">
            <img className='w-6 h-6' src={Rasm_3} alt="Rasm_3" />
            <p>{t("header.header_text_2")}</p>
          </Link>
          <Link className='flex gap-5 items-center' to="#home3">
            <img className='w-6 h-6' src={Rasm_4} alt="Rasm_4" />
            <p>{t("header.header_text_3")}</p>
          </Link>
          <Link className='flex gap-5 items-center' to="#home4">
            <img className='w-6 h-6' src={Rasm_5} alt="Rasm_5" />
            <p>{t("header.header_text_4")}</p>
          </Link>
          <Link className='flex gap-5 items-center' to="#home5">
            <img className='w-6 h-6' src={Rasm_6} alt="Rasm_6" />
            <p>{t("header.header_text_5")}</p>
          </Link>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-white p-5 mt-14 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex gap-8 items-center flex-wrap">
        <div className='w-40 h-9 bg-blue-500 rounded-lg'>
          <Dropdown
            className="ml-3 mt-[5px]"
            menu={{ items }}
            placement="bottomRight"
          >
            <button className="flex items-center gap-3 bg-transparent text-white">
              <img className="w-5 h-5" src={Rasm_1} alt="Menu" />
              <span className="text-white text-lg font-semibold">{t("header.header_text_29")}</span>
            </button>
          </Dropdown>
        </div>
        <div className='flex items-center gap-5'>
          <Link className="logo" to="/">
            <img className='w-40 h-9' src={Rasm_7} alt="logo" />
          </Link>
        </div>
        <div className='flex items-center'>
          <input
            className='border border-black rounded-lg w-72 h-9 px-3'
            placeholder={t("header.header_text_30")}
          />
          <button className='w-20 h-9 bg-blue-500 rounded-tr-lg rounded-br-lg flex items-center justify-center'>
            <img className='w-5 h-5' src="https://clemar.uz/static/media/search.d2ffda43e103337068b589fd598257db.svg" alt="Search" />
          </button>
        </div>
        <Link to="/onas" className='mt-2 text-lg'>
          {t("header.header_text_31")}
        </Link>
        <div className='flex gap-3 items-center'>
          <img className='w-6 h-6' src={Rasm_9} alt="icon" />
          <p>{t("header.header_text_32")}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
