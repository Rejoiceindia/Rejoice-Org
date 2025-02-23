import React from "react";
import TechStackItem from "./ui/TechStackItem";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";

type Props = {};

const TechStackComponent: React.FC<Props> = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col items-center gap-10">
      <StyledHeading>TECH STACK</StyledHeading>
      <div className="grid grid-cols-4 gap-10 items-center justify-center">
        {list.map((item, index) => {
          return <TechStackItem key={index} />;
        })}
      </div>
    </div>
  );
};

export default TechStackComponent;
