import React from "react";
import { GitHub } from "../assets/Icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  projectName: string;
  projectDescription: string;
  projectGithubLink: string;
};

const HeroSection: React.FC<Props> = ({
  projectName,
  projectDescription,
  projectGithubLink,
}) => {
  return (
    <div className="w-full h-screen radial-gradient p-10">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg">Rejoice India</span>
        </div>
        <Link to={projectGithubLink} target="_blank">
          <GitHub size={30} color="white" />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col justify-center items-center gap-10 h-[70vh]"
      >
        <div className="text-6xl font-bold">{projectName}</div>
        <div className="w-[55%] text-center">{projectDescription}</div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
