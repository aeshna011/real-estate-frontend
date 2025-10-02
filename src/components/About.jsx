import React from 'react'
import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import {motion} from "motion/react"

const About = () => {
  return (
    <motion.div
    initial={{opacity:0 ,x:200}}
    animate={{opacity:1, x:0}}
    transition={{duration:1.5}}

    
    
    className='container mx-auto flex flex-col items-center justify-center w-full overflow-hidden p-14 md:px-20 lg:px-32 min-h-screen'
      id='About'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-1'>About
        <span className='underline underline-offset-4  decoration-1 font-light '> Our Brand</span></h1>
      <p className='text-gray-500 text-center max-w-80 mb-8' > Passionate About Properties, Dedicated to Your Vision </p>
      {/* flexbox for photo and about text  */}
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="About our brand" className='w-full md:w-1/2 max-w-lg mt-4' />
        {/* flexbox for about text  */}
        <div className='flex flex-col  items-center md:items-start mt-1 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full '>
            {/* grid items  */}
            <div >
              <p className='text-5xl font-bold text-gray-800'>10+</p>
              <p className='text-gray-600 text-md'>Years of Experience</p>
            </div>
            <div >
              <p className='text-5xl font-bold text-gray-800'>12+</p>
              <p className='text-gray-600 text-md'>Projects Completed</p>
            </div>
            <div >
              <p className='text-5xl font-bold text-gray-800'>20+</p>
              <p className='text-gray-600 text-md'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div >
              <p className='text-5xl font-bold text-gray-800'>25+</p>
              <p className='text-gray-600 text-md'>Ongoing Projects</p>
            </div>

          </div>
          <p className='mt-5 max-w-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium sit, alias vero recusandae ullam repellendus placeat,
             nesciunt saepe labore expedita aliquid soluta veritatis voluptas
             quasi! Vero exercitationem temporibus quae.</p>
             <button className='bg-blue-500 px-8 py-1 text-white rounded mt-7'>Learn More</button>

        </div>

      </div>

    </motion.div>
  )
}

export default About