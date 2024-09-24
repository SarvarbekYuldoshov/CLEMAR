import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px] flex'>
         <ul className=''>
          <li className=''>
            <img src="" alt="" />
          </li>
         </ul>
      </div>
    </div>
  );
}

export default Main;
