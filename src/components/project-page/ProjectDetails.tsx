import React from "react";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";
import { GitBranch, People, Star } from "../assets/Icons";

type Props = {
  projectDetailsText: string[];
};

const Stats = [
  {
    icon: <Star size={20} color="#00FF66" />,
    title: "10 Stars",
    subtitle: "On GitHub",
  },
  {
    icon: <GitBranch size={20} color="#00FF66" />,
    title: "8 Forks",
    subtitle: "Active Development",
  },
  {
    icon: <People size={20} color="#00FF66" />,
    title: "13 Contributors",
    subtitle: "Global Community",
  },
];

const ProjectDetails: React.FC<Props> = ({ projectDetailsText }) => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto w-full mt-8 sm:mt-10">
      <StyledHeading >MORE ABOUT THIS PROJECT</StyledHeading>
      
      <div className="flex gap-5 flex-col sm:flex-row w-full mt-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col w-full sm:w-3/5 mx-auto text-left"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {projectDetailsText[0]} <br /> <br /> {projectDetailsText[1]}
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="w-full sm:w-3/5 mx-auto mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4"
      >
        {Stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-start gap-3 sm:gap-4"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <h3 className="text-sm sm:text-base font-medium text-white">{stat.title}</h3>
                <h4 className="text-xs sm:text-sm text-zinc-500">{stat.subtitle}</h4>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
