
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users,
  Quote,
  MessageSquare, 
  ThumbsUp,
  Globe,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

interface StudentMessage {
  name: string;
  grade: string;
  country: string;
  message: string;
  image: string;
}

const StudentMessages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages: StudentMessage[] = [
    {
      name: "Aisha Rahman",
      grade: "Grade 10",
      country: "Malaysia",
      message: "Being part of the international exchange program at Chankya Academy opened my eyes to new perspectives and gave me friendships that span continents. The collaborative projects with Indian students taught me so much about cultural integration.",
      image: "/placeholder.svg"
    },
    {
      name: "Carlos Mendoza",
      grade: "Grade 11",
      country: "Mexico",
      message: "The environmental initiative I participated in at Chankya Academy was truly life-changing. Working alongside dedicated students to address climate challenges gave me hope and practical skills I've brought back to my community.",
      image: "/placeholder.svg"
    },
    {
      name: "Sophia Chen",
      grade: "Grade 9",
      country: "Singapore",
      message: "The innovation lab at Chankya provided tools and mentorship that helped me develop my first app. The supportive environment encourages us to think critically and create solutions for real-world problems.",
      image: "/placeholder.svg"
    },
    {
      name: "David Okafor",
      grade: "Grade 12",
      country: "Nigeria",
      message: "Participating in Chankya's leadership program transformed my approach to community service. The mentorship I received empowered me to start a literacy program in my hometown that now reaches hundreds of children.",
      image: "/placeholder.svg"
    }
  ];
  
  const handlePrevious = () => {
    setCurrentMessageIndex((prev) => 
      prev === 0 ? messages.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentMessageIndex((prev) => 
      prev === messages.length - 1 ? 0 : prev + 1
    );
  };
  
  const currentMessage = messages[currentMessageIndex];

  return (
    <section className="py-16 bg-school-beige">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Voices of Our Global Community" 
          subtitle="Hear directly from international students about their experiences with Chankya initiatives"
          center
        />
        
        <div className="mt-10 max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 h-full">
                <div className="h-full relative overflow-hidden bg-school-green">
                  <img 
                    src={currentMessage.image} 
                    alt={currentMessage.name} 
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-school-green/30 to-school-green/90 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold">{currentMessage.name}</h3>
                    <div className="flex items-center gap-2 mt-1 opacity-90">
                      <Users size={16} />
                      <span>{currentMessage.grade}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 opacity-90">
                      <Globe size={16} />
                      <span>{currentMessage.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-school-green">
                    <Quote size={32} />
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">
                    {currentMessage.message}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full border-gray-300"
                      onClick={handlePrevious}
                    >
                      <ArrowLeft size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full border-gray-300"
                      onClick={handleNext}
                    >
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex gap-1">
                    {messages.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block w-2 h-2 rounded-full mx-1 ${
                          index === currentMessageIndex ? "bg-school-green" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentMessageIndex(index)}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-school-green hover:text-school-brown hover:bg-transparent"
                    >
                      <ThumbsUp size={16} className="mr-1" />
                      Inspiring
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="bg-white border-school-green text-school-green hover:bg-school-green hover:text-white"
          >
            <MessageSquare size={16} className="mr-2" />
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentMessages;
