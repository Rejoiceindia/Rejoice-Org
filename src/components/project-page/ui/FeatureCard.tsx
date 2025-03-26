import React from "react";
import StyledIcon from "./StyledIcon";
import { motion } from "framer-motion";
import { Feature } from "../../../Data";

type Props = {
  feature: Feature;
};

const FeatureCard: React.FC<Props> = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="relative flex flex-col pt-12 sm:pt-14 h-full justify-start rounded-xl border border-gray-800/30 bg-gradient-to-b from-black from-10% to-gray-800/30 hover:shadow-lg hover:duration-300 hover:shadow-[#00FF66]/10"
    >
      <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 sm:left-[15%] sm:transform-none">
        <StyledIcon size="sm" className="sm:scale-100">
          {feature.icon}
        </StyledIcon>
      </div>
      <div className="flex flex-col p-4 pb-6 sm:p-6 gap-2 sm:gap-4 flex-grow">
        <h2 className="text-base sm:text-lg md:text-xl font-medium text-center sm:text-left text-slate-50">
          {feature.title}
        </h2>
        <div className="text-xs sm:text-sm md:text-base text-center sm:text-left font-light text-slate-300">
          {feature.description}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
