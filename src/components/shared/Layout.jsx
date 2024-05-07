import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
export default function Layout () {
  return (
    <div className=''>
       <Header/>
       <div className='flex'>
      <Sidebar/>
      <div className=' bg-gray-50 w-full'>
      <div>{<Outlet/>}</div>
    </div>
    </div>
    </div>
  )
}