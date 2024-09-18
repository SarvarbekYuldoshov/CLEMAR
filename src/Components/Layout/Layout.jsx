import React from 'react'

const Layout = () => {
  return (
    <div className='bg-[#007aff]'>
      <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between items-center'>
         <ul className='flex gap-[20px] items-center'>
            <img src="https://clemar.uz/static/media/location.8f50ce0bbe934fcda50814961114ab24.svg" alt="" />
            <a href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783" className='text-[#cbc9c9]'>Location:</a>
            <a href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783" target="_blank" class="min-text text-[white]">Tashkent</a>
         </ul>
         <ul className='flex gap-[30px] items-center'>
            <li className='flex gap-[10px] items-center'>
                <img className='w-[30px] h-[20px]' src="https://clemar.uz/static/media/instagram.15618e7f7e625b7694935dd597571837.svg" alt="" />
                <p className='text-[white]'>Instagram</p>
            </li>
            <li className='flex gap-[10px] items-center'>
                <img src="https://clemar.uz/static/media/telegram.c595f804c186181bf4a1da46dcaaa231.svg" alt="" />
                <p className='text-[white]'>Telegram</p>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Layout
