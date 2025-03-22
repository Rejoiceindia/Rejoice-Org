import React from "react";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";

interface TimelineItem {
  phase: string;
  title: string;
  period: string;
  description: string;
}

type Props = {
  items: TimelineItem[];
};

const ProjectTimeline: React.FC<Props> = ({ items }) => {
  const currentPhase = 0;

  return (
    <div className="max-w-4xl text-neutral-800 mx-auto px-4 py-12">
      <StyledHeading>PROJECT TIMELINE</StyledHeading>

      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 h-[85%] bg-indigo-500" />
        {items.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            className={`relative mb-12 last:mb-0 ml-12 ${
              index > currentPhase ? "blurred" : ""
            }`}
          >
            {index === currentPhase ? (
              <div className="absolute ring-2 ring-green-500 -left-12 w-4 h-4 rounded-full bg-indigo-500 border-8 border-indigo-500" />
            ) : (
              <div className="absolute -left-12 w-4 h-4 rounded-full bg-indigo-500 border-8 border-indigo-500" />
            )}

            <div className="space-y-2">
              <div className="flex max-sm:flex-col sm:items-center gap-4">
                <h3 className="text-lg font-medium text-gray-600 dark:duration-300 dark:text-gray-300">
                  {item.phase}
                </h3>
                <h4 className="text-lg font-medium dark:duration-300 dark:text-white">
                  {item.title}
                </h4>
                <span className="text-sm text-gray-500 italic">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-600 dark:duration-300 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
