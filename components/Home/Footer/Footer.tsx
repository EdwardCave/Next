import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start  grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/*1st part*/}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>

            </div>
            {/*2ed part*/}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
            </div>
            {/*thrid part*/}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Service</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
            </div>
            {/*four part*/}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Concats Us</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
            </div>
        </div>
        {/*Bottom section*/}
        <div className='mt-8 w-[80%] mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright @2025</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social:</span>
                <Link href="#" className='text-gray-600 hover:text-gray-800'><FaTwitter/></Link>
                <Link href="#" className='text-gray-600 hover:text-gray-800'><FaFacebook/></Link>
                <Link href="#" className='text-gray-600 hover:text-gray-800'><FaDribbble/></Link>
            </div>
        </div>
    </div> 
  )
}

export default Footer