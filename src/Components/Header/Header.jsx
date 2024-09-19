import React from 'react';
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'antd';
import 'antd/dist/reset.css';
import Rasm_1 from "../images/rasm1.png"
import { Link } from 'react-router-dom';
import Rasm_2 from "../images/rasm3.png"
import Rasm_3 from "../images/rasm2.png"
import Rasm_4 from "../images/rasm4.png"
import Rasm_5 from "../images/rasm5.png"
import Rasm_6 from "../images/rasm6.png"

const Header = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: '1',
      label: (
        <ul className=''>
          <Link>
              <img className='w-[25px] h-[25px]' src={Rasm_2} alt="" />
              <p className=''>Pol yuvish mashinalari</p>
          </Link>
          <Link>
              <img className='w-[25px] h-[25px]' src={Rasm_3} alt="" />
              <p className=''></p>
          </Link>
          <Link>
              <img className='w-[25px] h-[25px]' src={Rasm_4} alt="" />
              <p className=''></p>
          </Link>
          <Link>
              <img className='w-[25px] h-[25px]' src={Rasm_5} alt="" />
              <p className=''></p>
          </Link>
          <Link>
              <img className='w-[25px] h-[25px]' src={Rasm_6} alt="" />
              <p className=''></p>
          </Link>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-white  p-[20px] mt-[50px] header ">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center ">
        <ul className='border border-[blue] w-[150px] h-[55px] bg-[#007aff] rounded-[7px]'>
        <Dropdown
          className="w-[65px]"
          menu={{ items }}
          placement="bottomRight"
        >
          <button className="flex items-center p-2 bg-transparent text-white rounded  gap-[10px]">
            <img className="w-20 h-10" src={Rasm_1} alt="Menu"/> 
            <span className="ml-[10px] text-[white] text-[18px] font-semibold">Катаlog</span>
          </button>
        </Dropdown>
        </ul>
      </div>
    </div>
  );
};

export default Header;
