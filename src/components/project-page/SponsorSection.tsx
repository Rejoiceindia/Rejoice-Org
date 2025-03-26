import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Home Page/Button';
import SponsorPopup from '../Home Page/SponsorPopup';
import StyledHeading from './ui/StyledHeading';

type SponsorSecProps = {
    sponsorList: string[];
}

const SponsorComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
    <motion.div 
      className="w-full pt-0 pb-6 sm:pb-8 md:pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-t from-black from-10% to-gray-800/30 border border-gray-800/30 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <motion.p
            className="text-[#00FF66] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Be a Catalyst for Change
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sponsor Our Project
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 lg:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're excited to partner with organizations and individuals who want
            to make a lasting impact on the real estate landscape. As a sponsor,
            you'll receive prominent exposure and a chance to be part of a
            game-changing project that has the potential to transform how real
            estate businesses operate.
          </motion.p>
          
          <Button link="#" onClick={openModal} text='Become a Sponsor'/>
           
          <SponsorPopup isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SponsorList: React.FC = () => {
    const list = [1, 2, 3, 4];
    return (
      <motion.div 
        className="w-full max-w-6xl mx-auto py-6 sm:py-8 md:py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <StyledHeading>OUR SPONSORS</StyledHeading>
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center px-4">
          {list.map((index) => (
            <motion.div 
              key={index} 
              className="w-full max-w-xs h-16 sm:h-20 md:h-24 rounded-xl bg-gradient-to-r from-gray-800/40 to-gray-800/10 border border-gray-700/30 flex items-center justify-center shadow-md"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 255, 102, 0.1)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-gray-400 text-sm sm:text-base font-medium">Sponsor {index}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

const SponsorSec: React.FC<SponsorSecProps> = ({ sponsorList }) => {
  return (
    <div className="w-full bg-black px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        {sponsorList.length > 0 && <SponsorList />}
        <SponsorComponent />
      </div>
    </div>
  );
};

export default SponsorSec;
