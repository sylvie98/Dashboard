import React from 'react'

import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfilePieChart from './BuyerChart'
import Charts from './Charts'


const Dashboard = () => {
  return (
    <div className='flex gap-4 flex-col px-5'>
      <DashboardStatsGrid/>
     <div className='flex'>
     <TransactionChart/>
      <Charts/>
     </div>
     </div>
  )
}

export default Dashboard