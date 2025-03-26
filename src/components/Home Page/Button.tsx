import React from "react";
import { motion } from 'framer-motion';
 
interface ButtonProps {
    link: string;
    text: string;
    onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export const Button : React.FC<ButtonProps> = ({link, text, onClick}) => {
    return (
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <a 
            href={link}
            onClick={onClick}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-b from-[#017f33] to-[#00FF66] hover:from-[#00FF66] hover:to-[#005923] text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-950  transform hover:-translate-y-1  hover:scale-103"
          >
            {text}
          </a>
        </motion.div>
    )
}