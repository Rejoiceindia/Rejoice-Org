import React from "react";
import TechStackItem from "./ui/TechStackItem";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";
import {
  SiGit,
  SiLua,
  SiNextcloud,
  SiSurrealdb,
  SiTypescript,
  SiWebassembly,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { DiRust } from "react-icons/di";

type Props = {};

const TechStackComponent: React.FC<Props> = () => {
  const techStack = [
    {
      name: "WebAssembly",
      icon: <SiWebassembly size={40} color="white" />,
    },
    {
      name: "SurrealDB",
      icon: <SiSurrealdb size={40} color="white" />,
    },

    {
      name: "GoLang",
      icon: <FaGolang size={40} color="white" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={40} color="white" />,
    },
    {
      name: "Rust",
      icon: <DiRust size={40} color="white" />,
    },

    {
      name: "NextCloud",
      icon: <SiNextcloud size={40} color="white" />,
    },

    {
      name: "Git",
      icon: <SiGit size={40} color="white" />,
    },
    {
      name: "Lua",
      icon: <SiLua size={40} color="white" />,
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-10 py-16 w-full">
      <StyledHeading>TECH STACK</StyledHeading>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {techStack.map((tech, index) => (
          <TechStackItem key={index} icon={tech.icon} name={tech.name} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackComponent;
