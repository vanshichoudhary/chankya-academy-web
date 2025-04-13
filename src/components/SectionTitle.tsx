
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-school-green mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-3xl">{subtitle}</p>}
      <div className="h-1 w-24 bg-school-gold mt-4"></div>
    </div>
  );
};

export default SectionTitle;
