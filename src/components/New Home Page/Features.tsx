import React from 'react';
import { FeatureCardType, FeaturesData } from '../../Data/HomePageData';
import { motion } from 'framer-motion';


const FeatureCard: React.FC<FeatureCardType> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-[#0d0d0d] rounded-lg p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF66]/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
        <motion.div 
          className="text-[#00FF66] text-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            {icon}
        </motion.div>
        <motion.h3 
          className="text-white text-xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-400 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
            {description}
        </motion.p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="w-full bg-transparent pb-16 px-4">
        <div className="max-w-7xl mx-auto">
            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
                {FeaturesData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </motion.div>
        </div>
    </div>
  );
};

export default Features;
