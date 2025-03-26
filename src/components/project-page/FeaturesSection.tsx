import React from "react";
import FeatureCard from "./ui/FeatureCard";
import StyledHeading from "./ui/StyledHeading";
import { Feature } from "../../Data";
import { motion } from "framer-motion";

type Props = {
  featuresList: Feature[];
};

const FeaturesSection: React.FC<Props> = ({ featuresList }) => {
  return (
    <motion.div 
      className="w-full py-4 sm:py-6 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2">
          <StyledHeading>FEATURES</StyledHeading>
        </div>
        <div className="py-6 sm:py-8 md:py-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 sm:gap-x-6 md:gap-x-8 sm:gap-y-20">
            {featuresList.map((item, index) => (
              <FeatureCard key={index} feature={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
