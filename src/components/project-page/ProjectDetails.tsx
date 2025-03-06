import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";

type Props = {
  projectDetailsText: string[];
  projectDetalsImage: string;
};

const ProjectDetails: React.FC<Props> = ({
  projectDetailsText,
  projectDetalsImage,
}) => {
  const [image, setImage] = useState<string>(projectDetalsImage);

  return (
    <div className="flex flex-col gap-8 p-10">
      <StyledHeading>MORE ABOUT THIS PROJECT</StyledHeading>
      <div className="flex gap-5 flex-col sm:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex-1"
        >
          <p className="text-gray-700 dark:text-gray-300 dark:duration-300 mb-4">
            {projectDetailsText[0]}
          </p>
          <p className="text-gray-700 dark:text-gray-300 dark:duration-300">
            {projectDetailsText[1]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex-1 rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            src={image}
            alt="Laptop and Phone with Adyaia AI Assistant"
            className="object-cover h-4/5 "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
