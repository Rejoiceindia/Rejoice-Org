import React from "react";

type StyledIconProps = {
  gradient?: string; // Tailwind gradient classes
  children: React.ReactNode; // Icon component passed as a prop
};

const StyledIcon: React.FC<StyledIconProps> = ({
  gradient = "bg-gradient-to-br from-[#277056] to-[#3CD9A2]",
  children,
}) => {
  return (
    <div
      className={`flex justify-center items-center p-4 rounded-full ${gradient} shadow-lg`}
    >
      {children}
    </div>
  );
};

export default StyledIcon;
