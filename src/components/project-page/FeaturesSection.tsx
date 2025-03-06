import React from "react";
import FeatureCard from "./ui/FeatureCard";
import StyledHeading from "./ui/StyledHeading";
import { Feature } from "../../Data";

type Props = {
  featuresList: Feature[];
};

const FeaturesSection: React.FC<Props> = ({ featuresList }) => {
  return (
    <div className="">
      <StyledHeading>FEATURES</StyledHeading>
      <div className="p-4 sm:p-10 flex flex-wrap items-center justify-center gap-20">
        <div className="sm:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-14 sm:gap-y-20 sm:gap-x-10 ">
          {featuresList.map((item, index) => {
            return <FeatureCard key={index} feature={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
