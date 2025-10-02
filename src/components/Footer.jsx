import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='  py-4 pt-20 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900 '  id='Footer'>
        <div className='flex flex-col md:flex-row mx-auto justify-between items-center ' >
            <div className='w-full md"w-1/3  mb-8 md:mb-0'>
                <img className='mb-4 '  src={assets.logo_dark} alt="Logo"  />
                <p className='text-gray-400 text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eveniet repellat ipsum eius perspiciatis sapiente quo ducimus enim ex corrupti natus cumque, harum vero velit voluptatibus earum hic quae eum?
                </p>
            </div>
            <div className='  w-full md:w-1/3 mb-8 md:mb-0 md:mx-10'> 
                <h3 className='text-white font-bold text-lg mb-4 '>Company</h3>
                <ul className='flex flex-col '>
                    <a href='#Header' className='hover:text-white text-gray-400 mb-1' > Home</a>
                    <a href='#About' className='hover:text-white text-gray-400 mb-1' > About Us</a>
                    <a href='#Contact' className='hover:text-white text-gray-400 mb-1'> Home</a>
                    <a href='#Header' className='hover:text-white text-gray-400 mb-1'>Privacy Policy</a>
                    
                </ul>
            </div>
            <div className='w-full md:1/3 mb-8 md:mb-0'>
                <h3 className='text-white font-bold text-lg mb-4'> Subscribe to Our Newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.

                   </p>
                   <div className='flex flex-row '>
                   <input className='py-2 px-32 border border-gray-700 rounded bg-gray-500 focus:outline-none text-white' type='email ' placeholder='Enter your email ' required />
                   <button className='text-white bg-blue-600 border rounded border-none py-2 px-6 mx-3'>Subscribe</button>
                   </div>
                 </div>
        
            
            </div>

            <div className='mt-10'> 

    <p className=' border-t border-gray-600 text-center mb-3 text-gray-500 p-4'>Copyright 2024 © GreatStack. All Right Reserved</p>

            </div>
        </div>
    
  )
}

export default Footer