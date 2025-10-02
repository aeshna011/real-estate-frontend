import React from 'react'
import { assets, projectsData } from '../assets/assets'
import { useState, useEffect } from 'react'
import {motion} from "motion/react"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex == 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    useEffect(() => {
        const updateCardeToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            }
            else {
                setCardsToShow(1);
            };
        }
        updateCardeToShow();
        window.addEventListener('resize', updateCardeToShow)
        //when screen size is changed
        return () => {
            window.removeEventListener('resize', updateCardeToShow);

        }

    }, []);

    return (

        <motion.div 
        initial={{opacity:0 ,x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        viewport={{ once: true }}
        
        
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold text-center mb-2'   > Projects <span className='underline underline-offset-4 decoration-1 font-light'> Completed </span></h1>
            <p className='text-gray-500 text-center max-w-80 mx-auto mb-8'> Crafting Spaces, Building Legacies—Explore Our Portfolio </p>

            {/* slider buttons  */}
            <div className='flex justify-end items-center  gap-2 mb-8'>
                <button onClick={prevProject}>
                    <img className='p-3 bg-gray-200 cursor-pointer rounded ' src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} >
                    <img className='p-3 bg-gray-200 cursor-pointer rounded' src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/*  project slider  container   */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt="" className='w-full h-auto mb-15' />
                            {/* for text on images  */}
                            <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 shadow-md px-4 py-2'>
                                    <h2 className='text-xl font-medium text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm '> {project.price} <span className='px-1'>| </span> {project.location}</p>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Projects

