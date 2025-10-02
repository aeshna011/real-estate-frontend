import React from 'react'
import { useState,useEffect } from 'react'
import {assets} from '../assets/assets'

const Navigation = () => {

    //usestate for mobilemenu 
    const[showMobileMenu,setShowMobileMenu]=useState(false)

    // for controlling the scrolling when mobilemenu is clicked 
    useEffect(()=>{                        
        if(showMobileMenu){
            document.body.style.overflow= 'hidden'
        }
        else{
            document.body.style.overflow= 'auto'
        }
        return ()=> {
            document.body.style.overflow= 'auto'
        };
    },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
            <img src={assets.logo} alt=""/>
            <ul className="hidden md:flex gap-7 text-white ">
                <a href='#Header' className="cursor-pointer hover:text-brown-400">Home </a>
                <a href='#About' className="cursor-pointer hover:text-brown-400">About </a>
                <a href='#Projects' className="cursor-pointer hover:text-brown-400">Projects</a>
                <a href='#Testimonials' className="cursor-pointer hover:text-brown-400">Testimonials </a>
            </ul>
            <button className="hidden md:block bg-white px-8  py-2 rounded-full"> Sign Up </button>
              <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon}  className="md:hidden w-7 cursor-pointer"   alt=""/>
        </div>
        <div>
            {/* mobile menu  */}
            <div className={`block md:hidden  ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'  }  right-0 top-0 bottom-0 overflow-hidden left-0 bg-white transition-all `}>
                <div  onClick={()=>setShowMobileMenu(false)} className='flex justify-end p-4 cursor-pointer' >
                    <img src={assets.cross_icon} className='w-7'/>
                </div>
                <ul className='flex  flex-col items-center gap-2 text-lg mt-5 px-6 font-bold'>
                    <a  onClick={()=>setShowMobileMenu(false)}href="#Header" className='px-4 py-2' > Home</a>
                    <a  onClick={()=>setShowMobileMenu(false)}href="#About"  className='px-4 py-2'> About</a>
                    <a  onClick={()=>setShowMobileMenu(false)}href="#Project" className='px-4 py-2'> Projects</a>
                    <a  onClick={()=>setShowMobileMenu(false)}href="#Testimonials" className='px-4 py-2' > Testimonials </a>
                </ul>
            </div>
        </div>
      
    </div> 
  )
}

export default Navigation

