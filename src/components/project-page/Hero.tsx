import React from "react";
import { GitHub, Moon, Sun } from "../assets/Icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full h-screen radial-gradient p-10">
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"} className="text-lg">
            Rejoice India
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button
            className="p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun width="24px" height="24px" fill="white" />
            ) : (
              <Moon width="24px" height="24px" fill="white" />
            )}
          </button>
          <Link to={projectGithubLink} target="_blank">
            <GitHub size={30} color="white" />
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col justify-center my-10 sm:my-0 items-center gap-10 h-[70vh]"
      >
        <div className="text-6xl font-bold">{projectName}</div>
        <div className="w-[90%] sm:w-[55%] text-center">
          {projectDescription}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
