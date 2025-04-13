
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonLink = ({ 
  href, 
  variant = "default", 
  className = "",
  icon,
  children 
}: ButtonLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block w-full"
    >
      <Button 
        variant={variant} 
        className={`w-full ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
        <ExternalLink size={16} className="ml-2" />
      </Button>
    </a>
  );
};

export default ButtonLink;
