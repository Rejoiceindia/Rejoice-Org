import React from "react";

type StyledIconProps = {
  gradient?: string; // Tailwind gradient classes
  children: React.ReactNode; // Icon component passed as a prop
  size?: "xs" | "sm" | "md" | "lg"; // Size variants
  className?: string; // Additional classes
};

const StyledIcon: React.FC<StyledIconProps> = ({
  gradient = "bg-gradient-to-b from-[#017f33] to-[#00FF66]/50",
  children,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    xs: "p-2 scale-75",
    sm: "p-3 scale-90",
    md: "p-4",
    lg: "p-5 scale-110",
  };

  return (
    <div
      className={`flex justify-center items-center rounded-full ${gradient} shadow-lg ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default StyledIcon;
