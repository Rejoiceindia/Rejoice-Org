import React from 'react';
import { motion } from 'framer-motion';

const JoinCommunitySection: React.FC = () => {
  return (
    <section id="community-section" className="w-full bg-gradient-to-t from-black from-10% to-[#0f0f0f] py-20 px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2 
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the Real Estate Tech Revolution
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Be part of the community that's reshaping the future of real estate technology. Contribute, 
          collaborate, and innovate with us.
        </motion.p>
        
        {/* Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <a 
            href="https://github.com/Rejoiceindia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-b from-[#017f33] to-[#00FF66] hover:from-[#00FF66] hover:to-[#005923] text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-950  transform hover:-translate-y-1  hover:scale-103"
          >
            Join Our Community
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinCommunitySection;
