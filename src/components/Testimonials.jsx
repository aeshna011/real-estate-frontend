import React from 'react'
import { useState,useEffect } from 'react'
import { assets,testimonialsData } from '../assets/assets'
import {motion} from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0 ,x:100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.2}}
    viewport={{ once: true }}

    
    className='container py-4 pt-20 mx-auto px-6 md:px-20 lg:px-32 overflow-hidden w-full'  id='Testimonials'>
        
        <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'> Customer <span className='underline underline-offset-4 decoration-1 font-light'> Tesimonials</span></h1>
        <p className='text-gray-500 text-center  max-w-80 mx-auto mb-8  '> Real Stories from Those Who Found Home with Us</p>

{/* testimonials  */}
        <div className='overflow-hidden'>
            <div className='flex flex-wrap   justify-center items-center   gap-8 mb-23'>
                {testimonialsData.map((testimonial,index)=>(
            // children of flexbox 
             <div key={index} className='shadow-lg max-w-[340px] border border-gray-200 rounded px-8 py-12 text-center '>
                <img src={testimonial.image}  className='w-20 h-20 mx-auto rounded-full mb-5'alt=''/>
                    <h2 className='font-medium text-gray-800 text-xl '>{testimonial.name}</h2>
                    <p className='text-gray-400 text:sm mb-4'>{testimonial.title}</p>
                    <div>  
                        {Array.from}      
                         </div>
                
                <p className='text-gray-600'>{testimonial.text}</p>
                </div>

                ))}
            </div>

        </div>


        
    </motion.div>
  )
}

export default Testimonials