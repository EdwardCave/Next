import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ChooseCard from './ChooseCard'
const Choose = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading='Why Choose Us'/>
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            {/*card*/}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <ChooseCard image='/images/c1.svg' title='Best Price Guarantee'/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='100'>
            <ChooseCard image='/images/c2.svg' title='Easy & Quick Booking'/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='200'>
            <ChooseCard image='/images/c3.svg' title='Customer Care'/>
            </div>
        </div>
    </div>
  )
}

export default Choose