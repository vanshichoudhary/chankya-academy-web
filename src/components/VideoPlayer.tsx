
import React from "react";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoId, 
  title = "YouTube video player", 
  className = "",
  aspectRatio = "16:9"
}) => {
  const aspectRatioClass = {
    "16:9": "aspect-w-16 aspect-h-9",
    "4:3": "aspect-w-4 aspect-h-3",
    "1:1": "aspect-w-1 aspect-h-1",
  };

  return (
    <div className={`${aspectRatioClass[aspectRatio]} ${className} rounded-lg overflow-hidden shadow-lg`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
