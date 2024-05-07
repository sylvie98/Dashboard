import React from 'react'

import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfilePieChart from './BuyerChart'

const Dashboard = () => {
  return (
    <div className='flex gap-4 flex-col px-5'>
      <DashboardStatsGrid/>
      <TransactionChart/>
      {/* <BuyerProfilePieChart/> */}
     </div>
  )
}

export default Dashboard