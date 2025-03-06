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
      className="relative flex pt-10 items-center justify-center rounded-[21px] bg-white shadow-[10px_10px_20px_#ebebeb,_-10px_-10px_20px_#ffffff] dark:rounded-[21px] dark:bg-zinc-800 dark:shadow-[10px_10px_20px_#141414,_-10px_-10px_20px_#000000]"
    >
      <div className="flex items-center justify-center absolute -top-10 left-[37%] sm:left-[10%]">
        <StyledIcon gradient={feature.gradient}>{feature.icon}</StyledIcon>
      </div>
      <div className="flex flex-col p-5 sm:p-7  gap-5">
        <h2 className="text-lg sm:text-2xl max-sm:hidden font-medium text-slate-900 dark:text-slate-50">
          {feature.title}
        </h2>
        <div className="text-sm text-center sm:text-left sm:text-base font-light text-slate-700 dark:text-slate-300">
          {feature.description}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
