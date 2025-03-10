import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full bg-black pt-16 pb-16'>
        <BsEnvelope className='text-4xl w-16 h-16 mt-20 text-white'/>
        <h1 className='text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest'>Your Travel Starts from Here</h1>
        <p className='text-white mt-3 text-xs sm:text-sm'>Welcome to join us</p>
        <div className='w-full'>
            <input type="text" className='bg-white px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto block rounded-lg outline-none'
            placeholder='email' />
            <button className='bg-blue-900 hover:bg-blue-600 cursor-pointer transition-all duration-200 px-6 py-3.5 mt-3 text-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto block rounded-lg outline-none'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter