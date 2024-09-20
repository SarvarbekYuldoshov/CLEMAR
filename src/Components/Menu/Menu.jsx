import React from 'react';
import { Card } from 'antd'; // Import Card from antd
import './Menu.css';
import CardItem from '../Card/CardItem';

const Menu = () => {
  return (
    <div className='mt-[100px]'>
      <div className='container mx-auto'>
        {/* Example usage of antd Card */}
        <CardItem title="Ant Design Card Example" bordered={false} className='mb-[20px]'>
          <p>Content inside the Ant Design card.</p>
        </CardItem>

        {/* Rendering your custom CardItem component */}
        <CardItem />
      </div>
    </div>
  );
};

export default Menu;
