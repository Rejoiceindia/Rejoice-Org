import React from 'react'
import { GitHub } from '../assets/Icons'
import { motion } from 'framer-motion'

const Tagline2: React.FC = () => {
    return (
        <div className="my-16 md:my-24 lg:my-32 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
            <motion.p 
                className="text-[#00FF94] text-center font-semibold text-sm mb-2 md:mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                REJOICE INDIA PROPTECH
            </motion.p>
            
            <motion.h1 
                className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-wider mb-4 md:mb-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Revolutionizing Real Estate <br className="hidden sm:block" />
                <span className="sm:inline">Tech with Open Source</span>
            </motion.h1>
            
            <motion.p 
                className="text-gray-400 text-center text-sm sm:text-base md:text-lg lg:text-lg mb-6 md:mb-8 w-full sm:w-[95%] md:max-w-3xl lg:max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Where the future of real estate tech is driven by open-source and AI innovations. With 
                global collaboration, we develop transparent, AI-powered tools using LLMs to enhance 
                workflows, automate tasks, and enable smarter decisions, reshaping the industry 
                efficiently.
            </motion.p>

            <motion.div 
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
            >
                <button onClick={() => window.open('https://github.com/Rejoiceindia', '_blank')}
                className=" flex items-center justify-center text-xs sm:text-sm md:text-base bg-gradient-to-b from-[#017f33] to-[#00fc65] hover:from-[#00FF66] hover:to-[#005923] text-black font-semibold py-4 px-8 rounded-xl  transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-950 transform hover:-translate-y-1  hover:scale-103">
                    <GitHub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" /> Explore our Github
                </button>
            </motion.div>
        </div>
    )
}

export default Tagline2
