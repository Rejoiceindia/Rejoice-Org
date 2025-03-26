import React from "react";
import { motion } from "framer-motion";

type Props = {
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  children: React.ReactNode;
};

const StyledHeading: React.FC<Props> = ({ textAlign = "center", children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{
        once: true,
      }}
      style={{ textAlign: textAlign }}
      className="text-3xl w-11/12 sm:w-3/5 mx-auto text-white font-bold mb-12 tracking-tight"
    >
      {children}
    </motion.h1>
  );
};

export default StyledHeading;
