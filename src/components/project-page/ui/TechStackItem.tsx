import React from "react";
import { motion } from "framer-motion";

type Props = {
  icon: React.ReactNode;
  name: string;
};

const TechStackItem: React.FC<Props> = ({ icon, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-gray-800/30 border-gray-800/30  rounded-lg hover:border-1 hover:border-gray-600 transition-all hover:duration-300"
    >
      <div className="text-white mb-3">{icon}</div>
      <p className="text-white text-center">{name}</p>
    </motion.div>
  );
};

export default TechStackItem;
