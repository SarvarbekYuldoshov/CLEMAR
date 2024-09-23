import React from 'react'

const Main = () => {
  return (
    <div className=''>
        <div className='max-w-[1200px] mx-auto p-[20px]'>
          <ul className='card-list w-[280px] h-[350px] border border-[#cbcbce] shadow-[0_0_5px_0_rgba(0,0,0,0.2)] justify-center rounded-[10px]'>
              <h1 className='mt-[15px] ml-[15px] font-montserrat text-[1.2vw] no-underline font-bold'>{item.name_uz}</h1>
              <img className='w-[250px] h-[230px] mt-[50px] ml-[10px] ' src={item.image} alt="" />
           </ul>
        </div>
    </div>
  )
}

export default Main
