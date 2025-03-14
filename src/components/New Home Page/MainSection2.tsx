import React from 'react'
import Navbar2 from './Navbar2'
import Tagline2 from './Tagline2'
import Features from './Features'
import { motion } from 'framer-motion'

const MainSection2: React.FC = () => {

    return (
        <section id="main-section" className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-4">
            {/* Background Image */}
            <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <img 
                    src="/images/bnw-bg3.jpg" 
                    alt="Background" 
                    className="w-full h-full object-cover brightness-[0.12]" 
                />
                {/* Gradient */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                ></motion.div>
            </motion.div>

            
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                {/* Navbar */}
                <motion.div 
                    className="text-center mt-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Navbar2/>
                </motion.div>

                {/* Hero Content */}
                <motion.div 
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Tagline2/>
                </motion.div>

                {/* Features section */}
                <motion.div 
                    className="w-full mt-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <Features/>
                </motion.div>
            </div>
        </section>
    )
}

export default MainSection2
