import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const TransactionChart = () => {
  return (
    <div className=' w-[28rem] h-[50rem] bg-white border border-gray-50 flex flex-col gap-5 justify-between px-5'>
      <div className='flex justify-between'>
         <p>Popular</p>
         <HiOutlineDotsHorizontal className=' text-blue-400'/>
       </div>
       <div className=' bg-purple-100 border border-purple-100 rounded-xl h-[15rem]'>
         <div className=' flex justify-between px-5 mt-4'>
            <div>
                <p>Bajaj Finery</p>
                <p>10% Profit</p>
            </div>
            <div>
                <p>$1839.00</p>
            </div>
         </div>
       </div>
      <div className='flex flex-col gap-5'>
        <div className=' flex justify-between'>
          <div>
              <p>Bajaj Finery</p>
              <p className=' text-green-500'>10% Profit</p>
          </div>
          <div className='flex gap-2'>
              <p>$1839.00</p>
              <IoMdArrowDropup className=' text-green-500 bg-green-200 mt-1'/>
        </div>
        </div>
        <hr></hr>
        <div className='flex justify-between'>
          <div>
              <p>TTML</p>
              <p className=' text-red-400'>10% Loss</p>
          </div>
          <div className='flex gap-2'>
              <p>$ 100.00</p>
              <IoMdArrowDropdown className=' text-orange-700 bg-red-300 mt-1'/>
          </div>
        </div>
        <hr></hr>
        <div className=' flex justify-between'>
          <div>
            <p>Reliance</p>
            <p className=' text-green-500'>10% Profit</p>
          </div>
          <div className='flex gap-2'>
              <p>$189.00</p>
              <IoMdArrowDropup className=' text-green-500 bg-green-200 mt-1'/>
          </div>
        </div>
        <hr></hr>
        <div className='flex justify-between'>
          <div>
              <p>TTML</p>
              <p className=' text-red-400'>10% Loss</p>
          </div>
          <div className='flex gap-2'>
              <p>$ 189.00</p>
              <IoMdArrowDropdown className=' text-orange-700 bg-red-300 mt-1'/>
          </div>
        </div>
        <hr></hr>
        <div className='flex justify-between'>
          <div>
              <p>Stolon</p>
              <p className=' text-red-400'>10% Loss</p>
          </div>
          <div className='flex gap-2'>
              <p>$ 189.00</p>
              <IoMdArrowDropdown className=' text-orange-700 bg-red-300 mt-1'/>
          </div>
        </div>
       <div className=' flex justify-center gap-2'>
        <p className=' text-blue-500'>View All</p>
        <IoIosArrowForward className='text-blue-500 mt-1'/>
       </div>
      </div>
    </div>
  )
}

export default TransactionChart