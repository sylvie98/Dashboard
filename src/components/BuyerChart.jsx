import React from 'react'
import Chart from 'react-apexcharts'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'


const BuyerChart = () => {
  return (
	<div className='grid lg:grid-cols-2 grid-cols-1 justify-between gap-60'>
	<div className=' bg-white border border-white w-[45rem]'>
		<React.Fragment>
			<div>
				<h2>Restruants Charts</h2>
				<Chart
				type='bar'
				width={700}
				height={700}
				series={[
					{
						name:"Investment",
						data:[45,78,98,32,65,78,67,97,10,60,34,20],
						color:"#a2d2ff"
					},
					{
						name:"Loss",
						data:[95,18,50,132,5,67,97,10,60,34,20,30],
						color:"#4895ef"
						
					},
					{
						name:"Profite",
						data:[145,98,38,50,65,67,97,60,34,20,89,23],
						color:"#5e60ce",
					},
					{
						name:"Maintance",
						data:[67,97,10,60,34,20,97,67,34,10,20,88,],
						color:"#fff0f3",
					}
					
				]}
				options={{
					title:{
						text:"$ 3.245.00"
					},
					chart:{
						stacked:true,
					},
					xaxis:{
						tickPlacement: "on",
						categories:["Jan","Feb","March","April","May","Jun","July","Aust","Sept","Oct","Nov","Dec"]
					}

				}}
				/>
			</div>
		</React.Fragment>
	</div>
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
	</div>
  )
}

export default BuyerChart