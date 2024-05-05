import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRaspberryPi } from "react-icons/fa";
const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center shadow-lg'>
      <div className=' relative'>
      <FaRaspberryPi  className=' absolute top-4 -translate-y-1/2' />
        <span className='text-lg focus:outline-none active:outline-none h-10 w-[24rem] p-5'>BERRY</span>
      </div>
      <div className='border border-gray-100 rounded-lg'>
      <IoSearch  className=' absolute top-8 -translate-y-1/2'/>
        <input type='text ' placeholder='SEARCH ...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] p-5'/>
      </div>
      <div>side button</div>
  
      </div>
  ) 
}

export default Header