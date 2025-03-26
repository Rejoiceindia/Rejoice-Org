import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

type Props = {
  projectName: string;
  projectDescription: string;
  projectGithubLink: string;
};

const HeroSection: React.FC<Props> = ({
  projectName,
  projectDescription,
  projectGithubLink,
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-black from-10% to-[#080808] px-4 sm:px-6 md:px-10 py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4 sm:mb-6 md:mb-10">
          <Link to={"/"} className="flex items-center gap-2 hover:text-[#00FF66] transition-colors duration-300">
            <BsArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <div className="font-bold text-base sm:text-lg md:text-xl">REJOICE</div>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 py-6 sm:py-8 md:py-10 min-h-[400px] md:min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center items-start w-full lg:w-1/2 gap-4 sm:gap-5 md:gap-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {projectName}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              {projectDescription}
            </p>
            <motion.button 
              onClick={() => window.open(projectGithubLink, '_blank')}
              className="mt-2 sm:mt-4 flex items-center justify-center text-xs sm:text-sm md:text-base bg-gradient-to-b from-[#017f33] to-[#00fc65] hover:from-[#00FF66] hover:to-[#005923] text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-950 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <BsGithub className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> View Github
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-6 lg:pt-0"
          >
            <motion.img 
              src="/images/advaiya.png"
              alt="Advaiya"
              className="w-full max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain shadow-lg shadow-black"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
