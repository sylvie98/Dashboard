import React from 'react'
import { Link } from 'react-router-dom'
import { TbDashboard } from "react-icons/tb";
import { TbKey } from "react-icons/tb";
import { TbTypography } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { TbShadow } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosArrowDown } from 'react-icons/io';
import { Popover } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';


const Sidebar = () => {
  return (
    <div className='flex flex-col  p-5 font-sans gap-10'>
        <div> 
          <div>
            <h2>Dashboard</h2>
              <Link to={"/"} className='mt-5 flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5' >
                <TbDashboard/>
                <p>Dashboard</p></Link>  
          </div>
          <hr></hr>
          <div>
            <h2>Pages</h2>
            <p className='text-sm text-gray-400'>Page Caption</p>
              {/* <Link to={"/Pages"} > */}
              <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : ''}
                group inline-flex items-center rounded-md hover:bg-purple-100 mt-5    text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <div  className='flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5'>
              <TbKey />
           <p>Authentication</p>
           <IoIosArrowDown /> 
              </div>
             
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=" mt-3 w-[10rem]">
                <div className=" rounded-lg shadow-lg ring-1 ring-black/5 h-[5rem] px-5 pt-4">
                  <ul>
                    <li><a href='https://learn-react-beige.vercel.app'>Login</a></li>
                    <li><a href='https://learn-react-beige.vercel.app'>Register</a></li>
                  </ul>
                  </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
          </Popover>
           
         
                {/* </Link> */}
          </div>
          <hr></hr>
          <div>
            <h2>Utilities</h2>
            <div className='flex flex-col p-5 gap-4'>
                <Link to={"/Typography"}  className='mt-5 flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5'>
                  <TbTypography/>
                  <p>Typography</p>
                </Link>
              
             
                <Link to={"/Color"}  className='mt-5 flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5'>
                  <MdOutlineColorLens />
                  <p>Color</p>
                </Link>

                <Link to={"/Shadow"}  className='mt-5 flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5'>
                  <TbShadow />
                  <p>Shadow</p>
                </Link>
            </div>
          </div>
          <hr></hr>
          <div className='flex flex-col p-5 gap-4 '>
            <div className='relative'>
              <Link to={"/Samepage"}><p className=' text-lg hover: hover:bg-purple-100 focus:outline-none active:outline-none p-1 pl-4 rounded-lg'>Sample Page</p></Link>
            </div>
          
             <Link to={""} className='flex items-center gap-2 flex-row text-lg hover: hover:bg-purple-100 rounded-lg px-5'>
                <CiCircleQuestion/>
                <p>Documentation</p>
              </Link>
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