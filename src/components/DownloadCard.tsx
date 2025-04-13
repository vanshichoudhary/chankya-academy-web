
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, File } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description?: string;
  fileUrl: string;
  fileType: "pdf" | "doc" | "other" | string;
  className?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ 
  title, 
  description, 
  fileUrl, 
  fileType,
  className = "" 
}) => {
  const FileIcon = fileType === "pdf" ? File : FileText;
  
  return (
    <div className={`p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start">
        <div className="mr-4">
          <FileIcon 
            size={40} 
            className={`${fileType === "pdf" ? "text-red-500" : "text-blue-500"}`} 
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
          <a 
            href={fileUrl} 
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-school-green hover:bg-school-brown text-white w-full sm:w-auto">
              <Download size={16} className="mr-2" />
              Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
