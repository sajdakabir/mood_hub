import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

function Dashboard() {

  const statuses = {
    nums_day:0,
    time_remaining: "12:34:43",
    date: (new Date().toString())
  }

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16'>
      <div className='grid grid-cols-3 md:grid-cols-3 bg-indigo-50 p-4 gap-4 text-indigo-500 rounded-lg'>
      {Object.keys(statuses).map((status, statusIndex)=>{
        return (
          <div key={statusIndex} className='flex flex-col gap-1 sm:gap-2'>
            <p className='font-medium uppercase text-xs md:text-sm truncate '>{status.replaceAll('_', ' ')}</p>
            <p className={'text-base sm:text-lg truncate '+ fugaz.className } >{statuses[status]}</p>
          </div>
        )
      })}
      </div>
      <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center '+ fugaz.className}>How do you <span className='textGradient'>feel</span> today?</h4>
    </div>
  )
}

export default Dashboard