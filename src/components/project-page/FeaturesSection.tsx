import React from "react";
import FeatureCard from "./ui/FeatureCard";
import StyledHeading from "./ui/StyledHeading";

type Props = {};

const FeaturesSection: React.FC<Props> = ({}) => {
  return (
    <div className="p-4 sm:p-10 flex flex-col items-center justify-center gap-20">
      <StyledHeading>FEATURES</StyledHeading>
      <div className="sm:w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-14 sm:gap-y-20 sm:gap-x-10 ">
        <FeatureCard gradient="bg-gradient-to-br from-[#4B688E] to-[#6A96D1]" />
        <FeatureCard gradient="bg-gradient-to-br from-[#BB7308] to-[#F1A800]" />
        <FeatureCard gradient="bg-gradient-to-br from-[#277056] to-[#3CD9A2]" />
        <FeatureCard gradient="bg-gradient-to-br from-[#D14B60] to-[#9C27B0]" />
      </div>
    </div>
  );
};

export default FeaturesSection;
