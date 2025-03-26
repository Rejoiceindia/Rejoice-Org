import React from "react";
import ContributorCard from "./ui/ContributorCard";
import { motion } from "framer-motion";
import { Contributor } from "../../Data";
import StyledHeading from "./ui/StyledHeading";

type Props = {
  contributorList: Contributor[];
};

const ContributorsSection: React.FC<Props> = ({ contributorList }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-2">
        <StyledHeading>CONTRIBUTORS</StyledHeading>
      </div>
      
      <div className="py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
          {contributorList.map((contributor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex justify-center"
            >
              <ContributorCard
                name={contributor.name || `User ${index + 1}`}
                position={contributor.role || "Developer"}
                socialLinks={contributor.socialLinks}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
