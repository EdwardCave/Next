'use client'
import React, { use, useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Choose from './Choose/Choose'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import NewsLetter from './NewLetter/NewsLetter'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos')
       AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAos()
  }, [])
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Destination/>
        <Hotel/>
        <Choose/>
        <Reviews/>
        <News/>
        <NewsLetter/>
       
    </div>
  )
}

export default Home