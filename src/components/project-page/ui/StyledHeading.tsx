import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const StyledHeading: React.FC<Props> = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{
        once: true,
      }}
      className="text-3xl text-zinc-800 font-bold mb-12 tracking-tight"
    >
      {children}
    </motion.h1>
  );
};

export default StyledHeading;
