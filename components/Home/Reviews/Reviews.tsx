import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-[#13357b] pt-20 pb-20'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            {/*Text Content*/}
            <div>
                <h1 className='text-2xl font-medium text-white'> What our customers are saying us?</h1>
                <p className='text-gray-200 mt-6'> you must be hard,then you may be have a happy life.or you must be hard,please study hard</p>
                {/*rating*/}
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                        </div>
                    </div>
                </div>
            </div>
            {/*slider*/}
            <div className='overflow-hidden'>
                <ReviewSlider/>
            </div>
        </div>
    </div>
  )
}

export default Reviews