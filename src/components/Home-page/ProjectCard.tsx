import React from "react"
import { ProjectDetailsType } from "../../Data/types"
import { DocumentText, GitHub, Heart } from "../assets/Icons"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface ProjectCardProps extends ProjectDetailsType {
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, description, image, techStack, links, contributors, index }) => {
  
    return (
    <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
            duration: 0.7, // Adjust duration to control overall speed
            // ease: "easeInOut", // Smooth easing for consistent speed
        }}
        className="max-w-xl bg-white dark:bg-[#1e1c1c] dark:duration-300 border-2 hover:border-[#4F67FF] dark:border-2 border-gray-300 dark:border-gray-900 dark:hover:shadow-black hover:shadow-gray-400 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-xl"
    >
        <div className="p-6">
            <h2 className="text-3xl dark:text-white font-bold mb-6 transition-colors duration-300">
                {projectName}
            </h2>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech) => (
                    <span 
                        key={tech}
                        className="px-3 py-1 bg-[#eeeded] dark:bg-[#0d0d0d] dark:duration-300 dark:text-gray-300 rounded-full text-sm text-gray-800 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-black hover:-translate-y-1"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Project Image */}
            <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src={image} alt={projectName} className="w-full transition-transform duration-700 hover:scale-105"/>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 dark:duration-300 my-6">
                {description}
            </p>

            {/* Contributors */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2 relative">
                    {contributors.map((dev, i) => (
                        <div 
                            key={i}
                            className="relative group"
                        >
                            <img className="w-10 h-10 rounded-full border-2 border-white dark:border-none transform transition-transform duration-300 hover:scale-110 hover:z-10"
                                src={dev.image} alt={dev.name}/>
                            
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-[#0d0d0d] dark:duration-300 text-white text-xs rounded whitespace-nowrap transition-opacity duration-300 mb-2 pointer-events-none z-30 min-w-max">
                                {dev.name}
                                <div className="absolute w-2 h-2 dark:bg-[#0d0d0d] dark:duration-300 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 top-full -mt-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 dark:duration-300">
                    {contributors.length} contributors
                </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-6">
                <a className="pr-3 py-2 dark:duration-300 dark:bg-[#0d0d0d] dark:hover:bg-black dark:text-white bg-gray-100 text-gray-700 rounded-md transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 flex items-center text-sm"
                    href={links.github}>
                        <GitHub height='22px' /> View on GitHub
                </a>
                <a className="pr-3 py-2 dark:duration-300 dark:bg-[#0d0d0d] dark:hover:bg-black dark:text-white bg-gray-100 text-gray-700 rounded-md transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 flex items-center text-sm"
                    href={links.documentation}>
                        <DocumentText height='22px'/> Documentation
                </a>
            </div>
        </div>

        {/* Buttons */}
        <div className="bg-white dark:bg-[#1e1c1c] dark:duration-300 flex flex-col gap-4 p-6">
            <Link to='/Advaiya' className="w-full font-semibold text-gray-600 dark:text-gray-300 dark:duration-300 py-2 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-[#110f0f] text-center">
                    Learn More About This Project →
            </Link>
            <button className="w-full flex items-center justify-center dark:duration-300 dark:hover:shadow-lg dark:hover:shadow-black bg-gradient-to-b from-[#3344b7] to-[#425af7] text-white font-semibold py-2 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
                <Heart height='16px' />
                <span>Become a Sponsor</span>
            </button>
        </div>
    </motion.div>
  )
}

export default ProjectCard
