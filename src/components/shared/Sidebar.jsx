import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbDashboard, TbKey, TbTypography, TbShadow } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col p-5 font-sans gap-10'>
      <div className='flex justify-between w-[10rem]'>
        <div>
          <a href="#">
            <img src="/image.jpeg" className="w-14 pl-5" alt="Logo" />
          </a>
        </div>
        <IoIosMenu className='text-purple-500 text-4xl lg:hidden' onClick={toggleSidebar} />
      </div>
      
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div>
          <h2>Dashboard</h2>
          <Link to="/" className='mt-5 flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
            <TbDashboard />
            <p>Dashboard</p>
          </Link>
        </div>
        <hr />
        <div>
          <h2>Pages</h2>
          <p className='text-sm text-gray-400'>Page Caption</p>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="group inline-flex items-center rounded-md hover:bg-purple-100 mt-5 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  <div className='flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
                    <TbKey />
                    <p>Authentication</p>
                    <IoIosArrowDown />
                  </div>
                </Popover.Button>
                <Transition as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="mt-3 w-[10rem]">
                    <div className="rounded-lg shadow-lg ring-1 ring-black/5 h-[5rem] px-5 pt-4">
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
        </div>
        <hr />
        <div>
          <h2>Utilities</h2>
          <div className='flex flex-col p-5 gap-4'>
            <Link to="/Typography" className='mt-5 flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
              <TbTypography />
              <p>Typography</p>
            </Link>
            <Link to="/Color" className='mt-5 flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
              <MdOutlineColorLens />
              <p>Color</p>
            </Link>
            <Link to="/Shadow" className='mt-5 flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
              <TbShadow />
              <p>Shadow</p>
            </Link>
          </div>
        </div>
        <hr />
        <div className='flex flex-col p-5 gap-4'>
          <div className='relative'>
            <Link to="/Samplepage"><p className='text-lg hover:bg-purple-100 focus:outline-none active:outline-none p-1 pl-4 rounded-lg'>Sample Page</p></Link>
          </div>
          <Link to="" className='flex items-center gap-2 flex-row text-lg hover:bg-purple-100 rounded-lg px-5'>
            <CiCircleQuestion />
            <p>Documentation</p>
          </Link>
        </div>
        <hr />
        <div className='border border-gray-200 rounded-xl bg-gray-100 h-40'>
          <div className='flex gap-2 p-3'>
            <p>Icons</p>
            <div className='flex flex-col'>
              <p className='text-blue-500'>Get Extra Space</p>
              <p>28/23GB</p>
            </div>
          </div>
          <div className='flex justify-between p-3'>
            <p className='text-blue-500'>Progress</p>
            <p>80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
