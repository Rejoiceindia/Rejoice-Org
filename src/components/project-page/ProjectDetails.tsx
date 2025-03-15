import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";
import { GitBranch, People, Star } from "../assets/Icons";

type Props = {
  projectDetailsText: string[];
};

const Stats = [
  {
    icon: <Star size={20} color="yellow" />,
    title: "10 Stars",
    subtitle: "On GitHub",
  },
  {
    icon: <GitBranch size={20} color="green" />,
    title: "35 Forks",
    subtitle: "Active Development",
  },
  {
    icon: <People size={20} color="blue" />,
    title: "38 Contributors",
    subtitle: "Global Community",
  },
];

const ProjectDetails: React.FC<Props> = ({ projectDetailsText }) => {
  return (
    <div className="flex  flex-col gap-8 p-10">
      <StyledHeading textAlign="left">MORE ABOUT THIS PROJECT</StyledHeading>
      <div className="flex gap-5 flex-col sm:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col w-3/5 mx-auto text-left items-center justify-center"
        >
          <p className="text-gray-700 dark:text-gray-300 dark:duration-300 mb-4">
            {projectDetailsText[0]}
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
        className="flex w-3/5 mx-auto flex-col sm:flex-row items-center justify-between"
      >
        {Stats.map((stat, index) => {
          return (
            <div key={index} className="flex items-center justify-center gap-4">
              {stat.icon}
              <div className="flex flex-col gap-2 items-start justify-center">
                <h3 className="text-base text-white">{stat.title}</h3>
                <h4 className="text-sm text-zinc-500">{stat.subtitle}</h4>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
