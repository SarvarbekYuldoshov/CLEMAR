import React from 'react';
import { Card } from 'antd'; // Import Card from antd
import './Menu.css';
import CardItem from '../Card/CardItem';

const Menu = () => {
  return (
    <div className='mt-[100px]'>
      <div className='container mx-auto'>
        <CardItem/>
      </div>
    </div>
  );
};

export default Menu;
