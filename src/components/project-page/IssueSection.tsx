import { motion } from 'framer-motion';
import { Button } from '../Home Page/Button';

const IssueSec = () => {
  return (
    <motion.div 
      className="w-full bg-black px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center text-white"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          HAVE AN ISSUE ?
        </motion.h2>
        <motion.p 
          className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-gray-300 max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          If you’re encountering bugs or issues in the project, report them in <br />
          our GitHub repository to help us resolve them quickly!
        </motion.p>
        
        <Button text='Post an Issue' link='https://github.com/Rejoiceindia/Advaiya/issues'/>
      </motion.div>
    </motion.div>
  );
};

export default IssueSec;
