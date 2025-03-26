import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

const JoinCommunitySection: React.FC = () => {
  return (
    <section id="community-section" className="w-full bg-gradient-to-t from-black from-10% to-gray-800/30 py-20 px-4">
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
        <Button text='Join our Community' link='https://docs.google.com/forms/d/e/1FAIpQLSf4G49XBblnjd5u6iz5H--mwaGrinFEy58nrHe12MjeN0JeUw/viewform' />
      </motion.div>
    </section>
  );
};

export default JoinCommunitySection;
