
import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Rocket, 
  Lightbulb, 
  Map, 
  Award, 
  FileText, 
  Users, 
  Handshake,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollaborationJourney = () => {
  const journeySteps = [
    {
      icon: <Handshake className="text-white" />,
      title: "Connect",
      description: "Begin your partnership journey with Chankya Academy",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Lightbulb className="text-white" />,
      title: "Collaborate",
      description: "Develop innovative programs that benefit students globally",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Users className="text-white" />,
      title: "Impact",
      description: "Create meaningful change in education and sustainability",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Globe className="text-white" />,
      title: "Scale",
      description: "Expand your initiatives to reach more communities worldwide",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const benefitCategories = [
    {
      title: "Educational Institutions",
      benefits: [
        "Access to innovative curriculum and teaching methodologies",
        "Collaborative research opportunities and knowledge exchange",
        "Joint educational events, workshops and student exchange programs"
      ],
      icon: <Rocket size={24} />
    },
    {
      title: "Non-Profit Organizations",
      benefits: [
        "Platform to amplify your social impact initiatives",
        "Access to student volunteers and project collaboration",
        "Co-development of community service programs"
      ],
      icon: <Users size={24} />
    },
    {
      title: "Corporate CSR Programs",
      benefits: [
        "Mentorship opportunities and skill-sharing initiatives",
        "Sustainable development project partnerships",
        "Enhanced visibility through joint community initiatives"
      ],
      icon: <Award size={24} />
    }
  ];

  const documentTypes = [
    {
      title: "Partnership Framework",
      description: "Comprehensive guide outlining collaboration structure and expectations",
      buttonText: "Download Framework"
    },
    {
      title: "Impact Assessment",
      description: "Tools and metrics to measure the success of collaborative initiatives",
      buttonText: "Access Assessment"
    },
    {
      title: "Project Proposal Template",
      description: "Standardized format for submitting new collaboration ideas",
      buttonText: "Get Template"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-school-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-green mb-4">Join Our Global Mission</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Chankya International Academy welcomes organizations, foundations, innovators, and
            change-makers dedicated to empowering the next generation of global citizens.
          </p>
          <div className="h-1 w-32 bg-school-gold mt-6 mx-auto"></div>
        </div>

        {/* Journey Steps - Horizontal Flowing Timeline */}
        <div className="mb-20">
          <SectionTitle 
            title="Your Journey With Chankya" 
            subtitle="From initial connection to global impact - how your partnership evolves"
            center
          />
          
          <div className="relative mt-12">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200 z-0"></div>
            
            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mb-4 transform transition-transform hover:scale-110`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                  
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Expandable Cards */}
        <div className="mb-20">
          <SectionTitle 
            title="Partnership Benefits" 
            subtitle="How collaboration with Chankya Academy creates value for your organization"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefitCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4 text-school-green">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-school-green/10 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 bg-school-green rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents & Resources */}
        <div className="mb-20">
          <SectionTitle 
            title="Essential Resources" 
            subtitle="Tools and documents to facilitate effective collaboration"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {documentTypes.map((doc, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-school-green/10 flex items-center justify-center">
                    <FileText size={32} className="text-school-green" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{doc.title}</h3>
                <p className="text-gray-600 text-center mb-6">{doc.description}</p>
                <Button 
                  className="w-full bg-school-green hover:bg-school-brown text-white"
                >
                  {doc.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-school-green to-school-brown rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="mb-6 opacity-90">
                Join our global network of partners who are shaping the future of education through
                innovative collaboration and shared vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-school-green hover:bg-gray-100">
                  Become a Partner
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-full overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <img 
                src="/placeholder.svg" 
                alt="Global Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationJourney;
