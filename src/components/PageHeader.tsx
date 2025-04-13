
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, background = "/placeholder.svg" }) => {
  return (
    <div 
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})` }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
