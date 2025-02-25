import React from "react";
import StyledIcon from "./StyledIcon";
import { Globe } from "../../assets/Icons";
import { motion } from "framer-motion";

type Props = {
  gradient: string;
};

const FeatureCard: React.FC<Props> = ({ gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="relative flex pt-10 items-center justify-center rounded-xl bg-white neuromorphic"
    >
      <div className="flex items-center justify-center absolute -top-10 left-[25%] sm:left-[10%]">
        <StyledIcon gradient={gradient}>
          <Globe />
        </StyledIcon>
      </div>
      <div className="flex flex-col p-5 sm:p-7  gap-5">
        <h2 className="text-lg sm:text-2xl max-sm:hidden font-medium text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <div className="text-sm sm:text-base font-light text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum
          corporis. Eaque facere deserunt alias odio asperiores nemo impedit
          itaque perspiciatis accusantium quos.
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
