
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  BookOpen, 
  Beaker, 
  Bot, 
  Brain, 
  Calendar, 
  Building, 
  Layers, 
  Monitor, 
  Code, 
  ChevronRight, 
  ExternalLink,
  Route,
  ArrowRight,
  Check,
  CircleCheck
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const UGIEP = () => {
  const [activeStage, setActiveStage] = useState(1);
  
  const stages = [
    {
      title: "Stage 1: Digital Transformation",
      description: "Implementation of digital infrastructure and systems",
      items: [
        {
          title: "AI Integration",
          description: "Implementation of AI-powered learning systems and administrative tools",
          icon: Brain
        },
        {
          title: "Digital Infrastructure",
          description: "School website, digital store, and online portals for students and parents",
          icon: Monitor
        },
        {
          title: "Digital Learning Resources",
          description: "Access to digital libraries, e-books, and online learning resources",
          icon: BookOpen
        }
      ]
    },
    {
      title: "Stage 2: Program Implementation",
      description: "Specialized programs and activities to enhance learning experiences",
      items: [
        {
          title: "Uni-Talks & Uni-Pitch",
          description: "Expert talks, idea pitching events, and knowledge sharing sessions",
          icon: Calendar
        },
        {
          title: "Specialized Labs",
          description: "Setting up initial STEM, coding, and robotics training facilities",
          icon: Beaker
        },
        {
          title: "Training Programs",
          description: "Teacher and student training programs for emerging technologies",
          icon: Layers
        }
      ]
    },
    {
      title: "Stage 3: Physical Infrastructure",
      description: "Establishment of advanced physical facilities and labs",
      items: [
        {
          title: "Innovation Labs",
          description: "Fully equipped innovation and research laboratories",
          icon: Building
        },
        {
          title: "Robotics Lab",
          description: "Advanced robotics lab with state-of-the-art equipment and learning resources",
          icon: Bot
        },
        {
          title: "AI & Computer Science Facilities",
          description: "Dedicated facilities for teaching AI, machine learning, and computer science",
          icon: Code
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Learning Experience",
      description: "State-of-the-art facilities and resources that create immersive learning environments"
    },
    {
      title: "Future-Ready Skills",
      description: "Development of critical thinking, problem-solving, and 21st-century skills"
    },
    {
      title: "Global Recognition",
      description: "International standards and recognition for educational excellence"
    },
    {
      title: "Innovative Teaching Methods",
      description: "Implementation of advanced pedagogical approaches and teaching methodologies"
    },
    {
      title: "Community Development",
      description: "Creating a positive impact on the local community through education"
    },
    {
      title: "Industry Connections",
      description: "Partnerships with leading companies and organizations in various fields"
    }
  ];

  const galleryImages = [
    {
      src: "/placeholder.svg",
      alt: "STEM Lab Setup",
      caption: "STEM Laboratory Implementation"
    },
    {
      src: "/placeholder.svg",
      alt: "Robotics Workshop",
      caption: "Students engaged in robotics workshop"
    },
    {
      src: "/placeholder.svg",
      alt: "AI Integration",
      caption: "AI-powered learning systems in action"
    },
    {
      src: "/placeholder.svg",
      alt: "Digital Infrastructure",
      caption: "Modern digital infrastructure setup"
    },
    {
      src: "/placeholder.svg",
      alt: "Uni-Talks Session",
      caption: "Expert session during Uni-Talks program"
    },
    {
      src: "/placeholder.svg",
      alt: "Innovation Lab",
      caption: "Students working in the innovation lab"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Uniford Grants for Institutional Empowerment Program (UGIEP)" 
        subtitle="Transforming educational institutions through innovation, technology, and infrastructure" 
        background="/placeholder.svg"
      />

      {/* UGIEP Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="UGIEP Program" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle 
                title="About UGIEP" 
                subtitle="Empowering educational institutions to meet international standards"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  The Uniford Grants for Institutional Empowerment Program (UGIEP) is a comprehensive initiative designed to transform educational institutions by implementing cutting-edge technology, infrastructure, and teaching methodologies.
                </p>
                <p>
                  Through UGIEP, we establish STEM and robotics labs, implement high-tech AI models, develop digital infrastructure, and support innovative student projects through hackathons and problem-solving competitions.
                </p>
                <p>
                  Our program follows a three-stage implementation approach, ensuring sustainable growth and development of partner institutions. Chankya International Academy is proudly participating in this program, with this website being developed as part of Stage 1 implementation.
                </p>
                <div className="mt-8">
                  <a 
                    href="https://forms.google.com/xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-school-gold hover:bg-school-brown text-white">
                      Apply for UGIEP <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="UGIEP Implementation Journey" 
            subtitle="A strategic roadmap for institutional transformation"
            center
          />
          
          <div className="mt-12">
            <div className="relative">
              {/* Interactive Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-school-gold transform -translate-x-1/2 z-0"></div>
              
              <div className="space-y-24 relative z-10">
                {stages.map((stage, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${activeStage === index + 1 ? 'border-school-gold' : 'border-gray-200'}`}>
                          <Badge variant={activeStage === index + 1 ? "default" : "outline"} className={`mb-3 ${activeStage === index + 1 ? 'bg-school-gold' : ''}`}>
                            Stage {index + 1}
                          </Badge>
                          <h3 className="text-xl font-medium text-school-green mb-3">{stage.title.split(':')[1]}</h3>
                          <p className="text-gray-600 mb-4">{stage.description}</p>
                          <Button 
                            variant={activeStage === index + 1 ? "default" : "outline"}
                            className={activeStage === index + 1 ? "bg-school-gold hover:bg-school-brown text-white" : "text-gray-600"}
                            onClick={() => setActiveStage(index + 1)}
                          >
                            {activeStage === index + 1 ? (
                              <>Active Stage <CircleCheck size={16} className="ml-2" /></>
                            ) : (
                              <>View Details <ArrowRight size={16} className="ml-2" /></>
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className={`hidden md:flex justify-center ${index % 2 === 0 ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'}`}>
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center z-10 ${activeStage === index + 1 ? 'bg-school-gold text-white' : 'bg-white text-school-green border border-school-gold'}`}>
                          <Route size={32} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stage Details */}
          <div className="mt-16">
            <Card className="border-school-gold">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-school-green">{stages[activeStage-1].title}</CardTitle>
                <CardDescription>{stages[activeStage-1].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stages[activeStage-1].items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-school-beige p-3 rounded-full mr-4">
                          <item.icon className="h-6 w-6 text-school-gold" />
                        </div>
                        <h4 className="text-lg font-medium text-school-green">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Stages Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Implementation Approach" 
            subtitle="Explore our comprehensive transformation process"
            center
          />
          
          <div className="mt-12">
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {stages.map((stage, index) => (
                  <CarouselItem key={index}>
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-school-green">{stage.title}</CardTitle>
                        <CardDescription>{stage.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {stage.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex">
                            <div className="mr-4 mt-1">
                              <item.icon className="h-6 w-6 text-school-gold" />
                            </div>
                            <div>
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-school-gold hover:bg-school-brown text-white w-full">
                          Learn More <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of UGIEP" 
            subtitle="Creating lasting impact for educational institutions"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-school-beige p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-school-gold" />
                  </div>
                  <h3 className="text-lg font-medium text-school-green">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGIEP at Chankya */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="UGIEP at Chankya International Academy" 
            subtitle="Our journey of transformation through the UGIEP initiative"
            center
          />
          
          <div className="mt-12">
            <Tabs defaultValue="phase1" className="w-full">
              <TabsList className="w-full flex justify-center mb-8">
                <TabsTrigger value="phase1">Current Implementation</TabsTrigger>
                <TabsTrigger value="phase2">Future Plans</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phase1">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-school-green mb-4">Stage 1: Digital Transformation</h3>
                  <p className="text-gray-600 mb-6">
                    Chankya International Academy is currently implementing Stage 1 of the UGIEP program, which focuses on digital transformation. Here's what we've accomplished:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">School Website</h4>
                        <p className="text-gray-600">A modern, responsive website providing comprehensive information about our institution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Digital Store</h4>
                        <p className="text-gray-600">Online store for school supplies and access to digital learning resources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">AI-Powered Learning</h4>
                        <p className="text-gray-600">Integration of AI tools to enhance the learning experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Parent-Teacher Communication Portal</h4>
                        <p className="text-gray-600">Digital platform for seamless communication between parents and teachers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="phase2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-school-green mb-4">Future Implementation Plans</h3>
                  <p className="text-gray-600 mb-6">
                    Based on our successful implementation of Stage 1, we are planning the following future developments:
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-medium text-lg mb-3">Stage 2: Program Implementation</h4>
                      <div className="space-y-3 pl-5">
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Uni-Talks series with industry experts and academic leaders</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Uni-Pitch events for students to showcase their innovative ideas</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Establishment of initial STEM and coding labs</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-3">Stage 3: Physical Infrastructure</h4>
                      <div className="space-y-3 pl-5">
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">State-of-the-art innovation labs with cutting-edge equipment</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Advanced robotics lab for hands-on learning and experimentation</p>
                        </div>
                        <div className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Dedicated AI rooms with specialized hardware and software resources</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* UGIEP Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="UGIEP Gallery" 
            subtitle="Visual documentation of our implementation process"
            center
          />
          
          <div className="mt-12">
            <Gallery images={galleryImages} columns={3} />
          </div>
        </div>
      </section>

      {/* Join UGIEP */}
      <section className="py-16 bg-gradient-to-r from-school-green to-school-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Join the UGIEP Initiative</h2>
          <p className="max-w-3xl mx-auto mb-8 text-white/90">
            If you're an educational institution looking to transform your facilities and teaching methodologies to meet international standards, we invite you to apply for the Uniford Grants for Institutional Empowerment Program.
          </p>
          <a 
            href="https://forms.google.com/xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-white text-school-green hover:bg-school-gold hover:text-white font-medium px-8 py-6 h-auto text-lg transition-colors">
              Apply Now <ExternalLink size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default UGIEP;
