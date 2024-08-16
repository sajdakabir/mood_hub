import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
      {/* <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' +fugaz.className }>You’re tracking your <span className='textGradient'>GitHub</span>  contributions, now let’s commit to your<span className='textGradient'>mood!</span></h1> */}
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' +fugaz.className }>You are tracking your <span className='textGradient'>GitHub</span>  contributions, why not your <span className='textGradient'>mood</span><span className='text-red-500'>?</span></h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center'>Track your mood like it’s part of your repo<span className='font-medium'>—because your mood deserves a daily commit too!</span></p>
    </div>
  )
}

export default Hero