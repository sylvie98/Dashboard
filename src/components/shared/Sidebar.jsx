import React from 'react'
import { Link } from 'react-router-dom'
import { TbDashboard } from "react-icons/tb";
import { TbKey } from "react-icons/tb";
import { TbTypography } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { TbShadow } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className='flex flex-col  p-4 font-serif gap-5'>
        <div className=' flex-1'> 
          <div>
            <h2>Dashboard</h2>
            <div className='relative p-5'>
              <Link to={"/"}><TbDashboard  className=' absolute top-8 -translate-y-1/2'/><span className=' p-5 text-lg hover: hover:bg-pink-200 focus:outline-none active:outline-none'>Dashboard</span></Link> 
            </div>
          </div>
          <hr></hr>
          <div>
            <h2>Pages</h2>
            <p className='text-sm text-gray-400'>Page Caption</p>
            <div className='relative p-5'>
              <Link to={"/Pages"}><TbKey className=' absolute top-8 -translate-y-1/2' /><span className=' text-lg hover: hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Authentication</span> </Link>
            </div>
           
          </div>
          <hr></hr>
          <div>
            <h2>Utilities</h2>
            <div className='flex flex-col p-5 gap-4'>
              <div className='relative'>
                <Link to={"/Typography"}><TbTypography className=' absolute top-3 -translate-y-1/2' /><span className=' text-lg hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Typography</span></Link>
              </div>
              <div className='relative'>
                <Link to={"/Color"}><MdOutlineColorLens className=' absolute top-3 -translate-y-1/2' /><span className=' text-lg hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Color</span></Link>
              </div>
              <div className='relative'>
                <Link to={"/Shadow"}><TbShadow className=' absolute top-3 -translate-y-1/2' /><span className=' text-lg hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Shadow</span></Link>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='flex flex-col p-5 gap-4 '>
            <div className='relative'>
              <Link to={"/Samepage"}><span className=' text-lg hover: hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Sample Page</span></Link>
            </div>
            <div className='relative'>
             <Link to={""}><CiCircleQuestion className=' absolute top-3 -translate-y-1/2'/><span className=' text-lg hover: hover:bg-pink-200 focus:outline-none active:outline-none p-6'>Documentation</span></Link>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className=' border border-gray-200 rounded-xl bg-gray-100 h-40'> 
        <div className='flex gap-2 p-3'>
          <p>Icons</p>
          <div className='flex flex-col'>
            <p className=' text-blue-500'>Get Extra Space</p>
            <p>28/23GB</p>
          </div>
          </div>
          <div className='flex justify-between p-3'>
            <p className='text-blue-500'>Progress</p>
            <p>80%</p>
          </div>
        
        </div>
    </div>
  )
}

export default Sidebar