import React from "react";
import { motion } from "framer-motion";

type Props = {};

const TechStackItem: React.FC<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{
        once: true,
      }}
      className="bg-zinc-700 w-28 h-28 rounded-2xl mx-2"
    ></motion.div>
  );
};

export default TechStackItem;
