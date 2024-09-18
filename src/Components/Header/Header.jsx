import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'antd';
import 'antd/dist/reset.css';
import Rasm_1 from "../images/rasm1.png"

const Header = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home">
          {t("header.header_text")}
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home1">
          {t("header.header_text_1")}
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#home2">
          {t("header.header_text_2")}
        </a>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-md p-4 mt-[100px]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Dropdown
          className="w-[50px]"
          menu={{ items }}
          placement="bottomRight"
        >
          <button className="flex items-center p-2 bg-transparent text-white rounded hover:bg-[white] transition-colors">
            <img
              className="w-10 h-10"
              src={Rasm_1} 
              alt="Menu"
            />
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
