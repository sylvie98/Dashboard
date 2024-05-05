import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRaspberryPi } from "react-icons/fa";
import { HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi';
import { IoIosMenu } from 'react-icons/io';
import { Popover } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import { CiSettings } from 'react-icons/ci';

const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center shadow-lg'>
      <div className=' relative'>
        <FaRaspberryPi className=' absolute top-4 -translate-y-1/2 text-purple-500' />
        <span className='text-lg focus:outline-none active:outline-none h-10 w-[24rem] p-5'>BERRY</span>
        
      </div>
      <IoIosMenu className=' text-purple-500 text-2xl'/>
      <div className='border border-gray-100 rounded-lg mr-96'>
      <IoSearch  className=' absolute top-8 -translate-y-1/2'/>
        <input type='text ' placeholder='SEARCH ...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] p-5 pl-11'/>
      </div>
      <div className='flex items-center gap-2 mr-2'>
        
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md hover:bg-purple-700 bg-purple-200 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <HiOutlineBell/>
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
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[20rem] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 h-[30rem]">
                  <p> ALL NOTIFICATION HERE</p>
                  </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
          </Popover>

          
           
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                <div className='h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url("https://source.unsplash.com/88*88?face")'}}>
                   <span className=' sr-only'>nash nelly</span>
                 
                </div>
                <CiSettings className=' text-blue-400 text-2xl mt-3'/>  
              </Menu.Button>
            </div>
          </Menu>
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
              <Popover.Panel className="absolute left-2/3 z-10 mt-3 w-[8rem] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 h-[30rem]">
                  <p> Your account here</p>
                  </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
          </Popover>
      </div>
    </div>
  )   
}

export default Header