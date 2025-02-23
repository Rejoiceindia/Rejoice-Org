import React, { useRef, useState } from "react";
import ContributorCard from "./ui/ContributorCard";
import { motion } from "framer-motion";
import StyledHeading from "./ui/StyledHeading";

type Props = {};

const ContributorsSection: React.FC<Props> = ({}) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-10 items-center justify-center my-10">
      <StyledHeading>PROJECT TIMELINE</StyledHeading>
      <div className="w-4/5 mx-auto overflow-hidden" ref={constraintsRef}>
        <motion.div
          drag="x"
          dragSnapToOrigin={false}
          dragConstraints={{ right: 100, left: -500 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex gap-5 py-10 cursor-grab active:cursor-grabbing"
          style={{ touchAction: "none" }}
        >
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
          <div style={{ pointerEvents: isDragging ? "none" : "auto" }}>
            <ContributorCard name="John Doe" position="Web Developer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributorsSection;
