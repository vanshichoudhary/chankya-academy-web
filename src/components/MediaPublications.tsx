
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Headphones, BookOpen, ExternalLink, Play, Calendar } from "lucide-react";
import ButtonLink from "./ButtonLink";
import SectionTitle from "./SectionTitle";

interface PodcastItem {
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  link: string;
}

interface MagazineItem {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const MediaPublications = () => {
  const [activeTab, setActiveTab] = useState("podcasts");
  
  const podcasts: PodcastItem[] = [
    {
      title: "Education Revolution: Future Skills",
      description: "Our panel discusses the essential skills students need for success in the 21st century.",
      date: "April 10, 2025",
      duration: "32 min",
      image: "/placeholder.svg",
      link: "https://example.com/podcast1"
    },
    {
      title: "Environmental Leadership in Schools",
      description: "How Chankya Academy is pioneering sustainable practices and environmental education.",
      date: "March 25, 2025",
      duration: "45 min",
      image: "/placeholder.svg",
      link: "https://example.com/podcast2"
    },
    {
      title: "International Collaborations in Education",
      description: "Exploring cross-cultural educational exchanges and their impact on student development.",
      date: "March 2, 2025",
      duration: "38 min",
      image: "/placeholder.svg",
      link: "https://example.com/podcast3"
    }
  ];
  
  const magazines: MagazineItem[] = [
    {
      title: "Chankya Connect: Spring 2025",
      description: "Our quarterly magazine featuring student achievements, educational innovations, and community initiatives.",
      date: "April 2025",
      image: "/placeholder.svg",
      link: "https://example.com/magazine1"
    },
    {
      title: "Global Education Perspectives",
      description: "A special edition exploring international educational methodologies and partnerships.",
      date: "January 2025",
      image: "/placeholder.svg",
      link: "https://example.com/magazine2"
    },
    {
      title: "Sustainability Report 2024",
      description: "Annual report on our environmental initiatives, sustainable campus developments, and green education.",
      date: "December 2024",
      image: "/placeholder.svg",
      link: "https://example.com/magazine3"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Media Publications" 
          subtitle="Explore our podcasts and magazines to learn more about our initiatives, educational philosophy, and community impact"
          center
        />
        
        <Tabs defaultValue="podcasts" className="w-full mt-8" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="podcasts" className="flex items-center gap-2">
              <Headphones size={18} />
              <span>Podcasts</span>
            </TabsTrigger>
            <TabsTrigger value="magazines" className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Magazines</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="podcasts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src={podcast.image} 
                      alt={podcast.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-3 text-white">
                        <Button variant="secondary" size="sm" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                          <Play size={16} className="mr-1" /> Listen
                        </Button>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={14} />
                          <span>{podcast.date}</span>
                        </div>
                        <div className="text-sm">
                          {podcast.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{podcast.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{podcast.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ButtonLink
                      href={podcast.link}
                      variant="outline"
                      className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                      icon={<Headphones size={16} />}
                    >
                      Listen to Episode
                    </ButtonLink>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="magazines">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {magazines.map((magazine, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={magazine.image} 
                      alt={magazine.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="line-clamp-1">{magazine.title}</CardTitle>
                      <span className="text-sm text-gray-500">{magazine.date}</span>
                    </div>
                    <CardDescription className="line-clamp-2">{magazine.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <ButtonLink
                      href={magazine.link}
                      variant="outline"
                      className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                      icon={<BookOpen size={16} />}
                    >
                      Read Magazine
                    </ButtonLink>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            className="bg-school-green hover:bg-school-brown text-white"
            onClick={() => window.open('https://example.com/media-archive', '_blank')}
          >
            View All Publications <ExternalLink size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaPublications;
