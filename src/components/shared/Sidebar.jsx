import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gray-50 p-4 font-serif'>
        <div className='flex items-center px-1 py-3 gap-2'>
            <span className=' text-lg'>BERRY</span>
        </div>
       
        <div className=' flex-1'> 
          <div>
            <h2>Dashboard</h2>
            <div className='p-5'>
              <Link to={"/"}><span className=' text-lg hover: hover:bg-pink-200 '>Dashboard</span></Link> 
            </div>
          </div>
          <hr></hr>
          <div>
            <h2>Pages</h2>
            <Link to={"/Pages"}>
            <div className='p-5'>
               <span className=' text-lg hover: hover:bg-pink-200 '>Authentication</span>
            </div>
            </Link>
          </div>
          <hr></hr>
          <div >
            <h2>Utilities</h2>
            <div className='flex flex-col p-5 gap-4 '>
            <Link to={"/Typography"}><span className=' text-lg hover:bg-pink-200'>Typography</span></Link>
            <Link to={"/Color"}><span className=' text-lg hover:bg-pink-200'>Color</span></Link>
            <Link to={"/Shadow"}><span className=' text-lg hover:bg-pink-200'>Shadow</span></Link>
            </div>
          </div>
          <hr></hr>
          <div className='flex flex-col p-5 gap-4'>
          <Link to={"/Samepage"}><span className=' text-lg hover: hover:bg-pink-200'>Sample Page</span></Link>
          <Link to={""}><span className=' text-lg hover: hover:bg-pink-200'>Documentation</span></Link>
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