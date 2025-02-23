import React from "react";
import { motion } from "framer-motion";

type Props = {};

const IssueSection: React.FC<Props> = ({}) => {
  return (
    <div className="w-[75%]  mx-auto rounded-2xl bg-gray-300 flex items-center justify-center py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="max-w-2xl w-full text-center"
        viewport={{
          once: true,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-6">
          HAVE AN ISSUE ?
        </h1>

        <p className="text-zinc-800 text-lg mb-8 leading-relaxed">
          If you’re encountering bugs or issues in the project, report them in
          our GitHub repository to help us resolve them quickly!
        </p>

        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300  cursor-pointer active:scale-90">
          Post Issue
        </button>
      </motion.div>
    </div>
  );
};

export default IssueSection;
