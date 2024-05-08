import React from 'react'
import { BsArrowDownRightCircle, BsArrowUpRightCircle } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'
import { LuCopy } from 'react-icons/lu'
import { PiLockKeyThin } from 'react-icons/pi'
import { TbCalendarWeek } from 'react-icons/tb'

const DashboardStatsGrid = () => {
  return (
    <div className='grid  lg:grid-cols-3 grid-cols-1 w-full'>
        <div className=' bg-purple-800 rounded-lg border border-gray-200 flex-1 w-[23rem]'>
            <div className=' text-2xl text-white flex flex-col gap-5 p-5'>
                <div className='flex justify-between'>
                    <LuCopy/>
                    <HiDotsHorizontal/>
                </div>
                <div className='flex gap-2'>
                    <p>$ 500.00</p>
                    <BsArrowUpRightCircle/>
                </div>
                
                <p className=' text-gray-400'>Total Earning</p>
           </div>
                
        </div>
        <div className=' bg-blue-400 rounded-lg border border-gray-200 flex-1 w-[23rem]'>
            <div className=' text-2xl text-white flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <PiLockKeyThin/>
                    <div className=' flex gap-3 text-lg'>
                        <p>Month</p>
                        <button className=' border border-blue-300 rounded-lg bg-blue-300'>Year</button>
                    </div>  
                </div>
                <div className='flex gap-2' >
                    <p>$961</p>
                    <BsArrowDownRightCircle/>
                </div>
                <p className=' text-gray-400'>Total Order</p>
           </div>
        </div>
        <div className='flex flex-col gap-6'>
            <div className=' bg-blue-400 rounded-xl  border border-gray-200  flex-1 w-[23rem] h-[10rem]'>
               <div className=' text-xl text-white flex flex-col gap-5 p-5'>
                   <div className='flex gap-3'>
                        <TbCalendarWeek className=' bg-blue-950 text-2xl'/>
                        <div className='flex flex-col gap-2'>
                            <p className=' font-bold'>$203k</p>
                            <p>Total Incame</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white rounded-lg  border border-gray-200 flex items-center w-[23rem]'>
            
               <div className=' text-xl text-black flex flex-col gap-5 p-5'>
                   <div className='flex gap-3'>
                        <TbCalendarWeek  className=' bg-orange-100 text-orange-300 text-2xl'/>
                        <div className='flex flex-col gap-2'>
                            <p className=' font-bold'>$2023k</p>
                            <p>Total Incame</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default DashboardStatsGrid