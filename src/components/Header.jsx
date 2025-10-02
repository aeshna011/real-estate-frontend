import React from 'react'
import Navigation from './Navigation'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
    style ={{backgroundImage: "url('/header_img.png')"}} id="Header">

      <Navigation/>
      <motion.div
      initial={{opacity:0 ,y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5}}
      viewport={{ once: true }}

       
      
      
      className="container mx-auto  text-center py-4 px-6 md:px-20 lg:px-32 text-white ">
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-2 '> Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="Project" className='border border-white px-8 py-3 rounded '>Projects</a>
            <a href="Contact" className='  px-8 py-3 rounded bg-blue-500'>Contact US</a>
             </div>
      </motion.div>
    </div>
  )
}

export default Header
