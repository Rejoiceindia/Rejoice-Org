import React, { useRef, useState } from "react";
import ContributorCard from "./ui/ContributorCard";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";
import { Contributor } from "../../Data";

type Props = {
  contributorList: Contributor[];
};

const ContributorsSection: React.FC<Props> = ({ contributorList }) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-10 items-center justify-center py-16 bg-[#121212] w-full">
      <h2 className="text-4xl font-semibold text-white">Contributors</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
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
  );
};

export default ContributorsSection;
