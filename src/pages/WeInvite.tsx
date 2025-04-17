
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Globe, 
  Users, 
  BookOpen, 
  Award, 
  FileText, 
  Rocket, 
  Lightbulb, 
  Handshake, 
  ArrowRight, 
  Building,
  Download,
  ExternalLink,
  Flag
} from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonLink from "@/components/ButtonLink";

const WeInvite: React.FC = () => {
  const navigate = useNavigate();

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Journey milestones
  const journeyMilestones = [
    {
      title: "Connect",
      description: "Reach out to us and share your organization's vision",
      icon: <Handshake className="text-school-green h-8 w-8" />,
    },
    {
      title: "Collaborate",
      description: "Design collaborative programs that benefit students",
      icon: <Users className="text-school-green h-8 w-8" />,
    },
    {
      title: "Implement",
      description: "Launch initiatives that empower the next generation",
      icon: <Rocket className="text-school-green h-8 w-8" />,
    },
    {
      title: "Impact",
      description: "Measure and celebrate the positive change created",
      icon: <Award className="text-school-green h-8 w-8" />,
    },
  ];

  // Benefits for partners
  const benefits = [
    {
      title: "Global Visibility",
      description: "Showcase your social impact to a global audience through our network",
      icon: <Globe className="h-8 w-8 text-school-gold" />,
    },
    {
      title: "Youth Engagement",
      description: "Direct access to bright young minds eager to engage with global issues",
      icon: <Users className="h-8 w-8 text-school-gold" />,
    },
    {
      title: "Innovation Hub",
      description: "Co-create innovative solutions to pressing educational challenges",
      icon: <Lightbulb className="h-8 w-8 text-school-gold" />,
    },
    {
      title: "Community Impact",
      description: "Create lasting positive change in rural Indian communities",
      icon: <Building className="h-8 w-8 text-school-gold" />,
    },
  ];

  // Available documents
  const documents = [
    {
      title: "Partnership Framework",
      description: "Guidelines and structure for organizational partnerships",
      buttonText: "Download Framework",
      link: "https://forms.gle/1234567890"
    },
    {
      title: "Impact Report 2024",
      description: "Our achievements and impact on student development",
      buttonText: "View Report",
      link: "https://forms.gle/2345678901"
    },
    {
      title: "Collaboration Proposal",
      description: "Template for submitting your collaboration ideas",
      buttonText: "Get Template",
      link: "https://forms.gle/3456789012"
    },
  ];

  // Collaboration areas
  const collaborationAreas = [
    {
      title: "Educational Workshops",
      description: "Conduct specialized workshops that enrich our curriculum and expose students to global perspectives",
    },
    {
      title: "Technology & Innovation",
      description: "Help implement modern technological solutions in our classrooms and teaching methodologies",
    },
    {
      title: "Environmental Initiatives",
      description: "Partner on sustainability projects that teach students about environmental stewardship",
    },
    {
      title: "Cultural Exchange",
      description: "Create opportunities for cultural exchange and global awareness",
    },
    {
      title: "Scholarships & Funding",
      description: "Support deserving students through scholarship programs",
    },
  ];

  return (
    <div className="bg-school-beige min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Join Us in Empowering the Next Generation" 
        subtitle="Chankya International Academy invites global partners to shape the future of education"
        background="/placeholder.svg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Our Invitation to the World</h2>
            <p className="text-lg text-gray-700 mb-8">
              Chankya International Academy extends a warm invitation to worldwide international organizations, 
              non-profit foundations, CSR programs, clubs, societies, initiatives, philanthropists, 
              social activists, environmental heroes, innovators, and all youths who want to contribute 
              to our mission of empowering the next generation.
            </p>
            <div className="flex justify-center space-x-4">
              <ButtonLink
                href="https://forms.gle/abcdefgh12345"
                variant="default"
                className="bg-school-green hover:bg-school-green/90 text-white font-medium px-8 py-3"
                icon={<Flag />}
              >
                Start Your Journey With Us
              </ButtonLink>
              <ButtonLink
                href="https://forms.gle/ijklmnop67890"
                variant="outline"
                className="border-school-green text-school-green hover:bg-school-green/10 font-medium px-8 py-3"
                icon={<ExternalLink />}
              >
                Schedule a Meeting
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gradient-to-br from-white to-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Your Collaboration Journey" 
            subtitle="A simple process to create meaningful impact together"
            center
          />
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {journeyMilestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full border-t-4 border-school-green">
                  <div className="flex justify-center mb-4">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-center mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-center">{milestone.description}</p>
                  
                  {/* Connector line (except for the last item) */}
                  {index < journeyMilestones.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-school-gold">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-4 w-4 text-school-gold" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center mt-4">
                  <div className="bg-school-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Partnership Benefits" 
            subtitle="Why collaborating with Chankya International Academy creates value for your organization"
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{benefit.icon}</div>
                  <CardTitle className="text-xl font-serif">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gradient-to-br from-school-beige to-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Essential Documents" 
            subtitle="Resources to help you understand our mission and collaboration opportunities"
            center
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {documents.map((doc, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader className="pb-2">
                  <div className="mb-2 text-school-green">
                    <FileText className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-serif">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <ButtonLink
                    href={doc.link}
                    className="w-full bg-school-green text-white hover:bg-school-green/90"
                    icon={<Download className="h-5 w-5" />}
                  >
                    {doc.buttonText}
                  </ButtonLink>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Areas Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Areas of Collaboration" 
            subtitle="Explore the different ways your organization can partner with us"
            center
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {collaborationAreas.map((area, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:text-school-green">
                    {area.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {area.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-school-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join our global network of partners who are helping shape the future of education 
            and empower the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.open("https://forms.gle/qrstuvwxyz12345", "_blank")}
              className="bg-white text-school-green hover:bg-gray-100 font-medium px-8 py-6 text-lg rounded-lg"
            >
              <Globe className="mr-2 h-5 w-5" />
              Apply for Partnership
            </Button>
            <Button 
              onClick={() => window.open("https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20partnering%20with%20Chankya%20International%20Academy", "_blank")}
              className="bg-school-gold text-white hover:bg-school-brown font-medium px-8 py-6 text-lg rounded-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeInvite;
