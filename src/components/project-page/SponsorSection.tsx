import React from "react";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";

type Props = {
  sponsorList: string[];
};

const BecomeASponsor: React.FC = () => {
  return (
    <div className="w-[95%] sm:w-4/5 mx-auto rounded-2xl radial-gradient-v2 flex items-center justify-center px-5 py-10 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{
          once: true,
        }}
        className="max-w-2xl w-full text-center"
      >
        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Be a Catalyst for Change
        </h1>

        <p className="text-gray-300 text-sm sm:text-lg mb-8 leading-relaxed">
          We're excited to partner with organizations and individuals who want
          to make a lasting impact on the real estate landscape. As a sponsor,
          you'll receive prominent exposure and a chance to be part of a
          game-changing project that has the potential to transform how real
          estate businesses operate.
        </p>

        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg transition-colors duration-300  cursor-pointer active:scale-90">
          Become a Sponsor
        </button>
      </motion.div>
    </div>
  );
};

const SponsorList: React.FC = () => {
  const list = [1, 2, 3, 4];
  return (
    <div className="flex flex-col items-center gap-10">
      <StyledHeading>OUR SPONSORS</StyledHeading>
      <div className="flex gap-10 items-center justify-center">
        {list.map((item, index) => {
          return (
            <div key={index} className="w-44 h-20 rounded-2xl bg-white"></div>
          );
        })}
      </div>
    </div>
  );
};

const SponsorSection: React.FC<Props> = ({ sponsorList }) => {
  return (
    <div className="px-2 sm:px-10 flex flex-col gap-20">
      {sponsorList.length > 0 && <SponsorList />}
      <BecomeASponsor />
    </div>
  );
};

export default SponsorSection;
