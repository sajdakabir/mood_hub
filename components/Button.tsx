import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

function Button(props) {
    const {text, dark, full} = props
  return (
    <button className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 '+ (dark? ' text-white bg-indigo-600 ': 'text-indigo-600 ')+ (full ?' grid place-items-center w-full ' :' ')+ fugaz.className}>
        <p className='px-6 sm:px-10 whitespace-nowrap py-2 sm:py3'>{text}</p>
    </button>
  )
}

export default Button