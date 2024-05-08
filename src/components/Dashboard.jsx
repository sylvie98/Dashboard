import React from 'react'

import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerChart from './BuyerChart'


const Dashboard = () => {
  return (
    <div className='grid lg:grid-row-3 grid-cols-1 px-5 gap-10'>
      <div className='flex justify-between'>
      <DashboardStatsGrid/>
      </div>
     
      <div className=' flex justify-between'>
      <BuyerChart/>
      {/* <TransactionChart/> */}
      </div>
     </div>
  )
}

export default Dashboard