
import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Beaker, 
  GraduationCap, 
  Bot, 
  Microscope, 
  Code, 
  BookOpen,
  Brain,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Building,
  Cpu,
  BarChart3,
  Wrench
} from "lucide-react";

const UGIEP = () => {
  const programStages = [
    {
      stage: 1,
      title: "Digital Transformation",
      description: "Implementation of digital infrastructure including website, online store, AI-powered portals, and digital learning tools.",
      status: "Active",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      features: [
        "AI-powered school website",
        "Digital store for resources",
        "Administrative portals",
        "Digital assessment tools",
        "Staff digital training"
      ]
    },
    {
      stage: 2,
      title: "Educational Programs",
      description: "Introduction of specialized educational programs including Uni-talks, Uni-pitch, and innovative learning methodologies.",
      status: "Coming Soon",
      icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
      features: [
        "Uni-talks speaker series",
        "Uni-pitch innovation programs",
        "Coding curriculum",
        "Robotics introductory courses",
        "Teacher development workshops"
      ]
    },
    {
      stage: 3,
      title: "Physical Infrastructure",
      description: "Establishment of specialized physical spaces including STEM labs, robotics labs, innovation spaces, and modern libraries.",
      status: "Future Phase",
      icon: <Building className="h-6 w-6 text-green-500" />,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700",
      features: [
        "STEM laboratories",
        "Robotics & AI labs",
        "Modern library & reading spaces",
        "Innovation hubs",
        "Smart classrooms"
      ]
    }
  ];

  const successStories = [
    {
      name: "Delhi Public School",
      location: "New Delhi",
      stage: "All 3 Stages Completed",
      highlight: "Increased student enrollment by 35%",
      quote: "UGIEP has transformed our teaching methodology and brought our institution into the digital age.",
      image: "/placeholder.svg"
    },
    {
      name: "Sacred Heart Academy",
      location: "Mumbai",
      stage: "Stages 1 & 2 Completed",
      highlight: "National recognition for innovation",
      quote: "Our students now have access to world-class learning tools and methodologies that prepare them for the future.",
      image: "/placeholder.svg"
    },
    {
      name: "St. Xavier's School",
      location: "Kolkata",
      stage: "Stage 1 Completed",
      highlight: "Digital transformation complete",
      quote: "The digital infrastructure implemented has streamlined our administrative processes and enhanced learning experiences.",
      image: "/placeholder.svg"
    }
  ];

  const technologies = [
    { 
      name: "Artificial Intelligence", 
      icon: Brain, 
      description: "Integration of AI in learning management systems, adaptive learning platforms, and administrative functions." 
    },
    { 
      name: "Robotics", 
      icon: Bot, 
      description: "Robotics education through hands-on programming, design thinking, and computational problem-solving." 
    },
    { 
      name: "STEM Education", 
      icon: Microscope, 
      description: "Comprehensive STEM curriculum with integrated projects across science, technology, engineering, and mathematics." 
    },
    { 
      name: "Coding & Programming", 
      icon: Code, 
      description: "Age-appropriate coding education from block-based programming to advanced languages like Python and JavaScript." 
    },
    { 
      name: "Digital Libraries", 
      icon: BookOpen, 
      description: "Modern digital libraries with access to global resources, e-books, research materials, and multimedia content." 
    },
    { 
      name: "Laboratory Sciences", 
      icon: Beaker, 
      description: "State-of-the-art laboratories for physics, chemistry, biology with digital experimentation capabilities." 
    }
  ];

  return (
    <div>
      <PageHeader 
        title="UGIEP" 
        subtitle="Uniford Grants for Institutional Empowerment Program" 
        background="/placeholder.svg"
      />
      
      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Transforming Education Through Innovation</h2>
            <p className="text-gray-600 mb-8">
              The Uniford Grants for Institutional Empowerment Program (UGIEP) is a comprehensive initiative designed to transform educational institutions through technology, innovation, and modern infrastructure. Our multi-stage approach helps schools and colleges build capacity for 21st-century education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-school-green hover:bg-school-brown text-white">
                Apply for UGIEP
              </Button>
              <Button variant="outline" className="border-school-green text-school-green hover:bg-school-green hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="UGIEP Journey" 
            subtitle="A three-stage approach to institutional transformation and excellence"
            center
          />
          
          <div className="relative mt-16">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {programStages.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Stage number indicator */}
                  <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-school-green items-center justify-center text-xl font-bold text-school-green">
                    {stage.stage}
                  </div>
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="md:w-1/2 p-6">
                      <div className={`p-6 rounded-lg shadow-lg border ${stage.color} h-full`}>
                        <div className="flex items-center mb-4">
                          {stage.icon}
                          <h3 className="text-2xl font-bold ml-3">{stage.title}</h3>
                        </div>
                        
                        <Badge className={`mb-4 ${stage.textColor} bg-white`}>{stage.status}</Badge>
                        
                        <p className="text-gray-600 mb-6">{stage.description}</p>
                        
                        <h4 className="font-medium mb-3">Key Implementations:</h4>
                        <ul className="space-y-2">
                          {stage.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-school-green mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Stage ${stage.stage}: ${stage.title}`}
                        className="rounded-lg shadow-md w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Innovation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Technologies & Innovations" 
            subtitle="Cutting-edge technologies and methodologies implemented through UGIEP"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-t-4 border-school-green transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-school-green/10 flex items-center justify-center">
                      <tech.icon className="h-6 w-6 text-school-green" />
                    </div>
                    <CardTitle className="ml-4">{tech.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Schools and colleges that have transformed through UGIEP"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                  <p className="text-gray-500 mb-2">{story.location}</p>
                  <Badge className="mb-4 bg-school-green text-white">{story.stage}</Badge>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-school-green">Highlight:</strong> {story.highlight}
                  </p>
                  <p className="italic text-gray-600">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Apply for UGIEP" 
                subtitle="Join the educational transformation journey"
              />
              <p className="text-gray-600 mb-6">
                The UGIEP application process is straightforward. Eligible educational institutions can apply for the program and undergo an initial assessment to determine their readiness and specific needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <BarChart3 className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Assessment</h4>
                    <p className="text-gray-600 text-sm">A comprehensive evaluation of your institution's current infrastructure and needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Wrench className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Customized Implementation Plan</h4>
                    <p className="text-gray-600 text-sm">Development of a tailored transformation roadmap based on your institution's goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phased Implementation</h4>
                    <p className="text-gray-600 text-sm">Systematic execution of the transformation plan across multiple stages</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://forms.google.com/uniford-ugiep-application" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-school-green hover:bg-school-brown text-white">
                  Submit Application
                </Button>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-school-green mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-school-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Registered educational institution with at least 3 years of operation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-school-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Minimum enrollment of 250 students</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-school-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Demonstrated commitment to educational innovation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-school-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Willingness to allocate resources for program sustainability</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-school-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated staff for program implementation and maintenance</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-3">Have Questions?</h4>
                <p className="text-gray-600 mb-4">Contact the UGIEP team for more information about eligibility and application process.</p>
                <div className="text-school-green hover:underline">
                  <Link to="#" className="flex items-center">
                    Contact UGIEP Team <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Common questions about the UGIEP initiative"
            center
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About UGIEP</TabsTrigger>
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
                <TabsTrigger value="funding">Funding & Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">What is UGIEP?</h4>
                    <p className="text-gray-600">
                      UGIEP stands for Uniford Grants for Institutional Empowerment Program. It is a comprehensive initiative designed to transform educational institutions through technology, innovation, and modern infrastructure to prepare them for 21st-century education.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">Who can apply for UGIEP?</h4>
                    <p className="text-gray-600">
                      Any registered educational institution with at least 3 years of operation and a minimum enrollment of 250 students can apply. The institution must demonstrate commitment to educational innovation and willingness to allocate resources for program sustainability.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">What are the benefits of UGIEP?</h4>
                    <p className="text-gray-600">
                      Benefits include digital infrastructure development, educational program enhancements, physical infrastructure improvements, teacher training and development, international recognition, and improved educational outcomes for students.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="implementation" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">How long does implementation take?</h4>
                    <p className="text-gray-600">
                      The implementation timeline varies based on the institution's size, current infrastructure, and specific needs. Typically, Stage 1 takes 3-6 months, Stage 2 takes 6-12 months, and Stage 3 can take 12-24 months for full implementation.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">What resources are required from the institution?</h4>
                    <p className="text-gray-600">
                      Institutions need to provide dedicated staff for program implementation, allocate space for new facilities, commit to ongoing maintenance of systems, and participate in training programs for effective utilization of new technologies.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">Is training provided for teachers and staff?</h4>
                    <p className="text-gray-600">
                      Yes, comprehensive training programs are included in the UGIEP implementation. These cover digital literacy, technology integration in teaching, new teaching methodologies, and administrative system operation.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="funding" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">How is the program funded?</h4>
                    <p className="text-gray-600">
                      UGIEP is primarily funded through the Uniford Foundation, with additional support from corporate social responsibility initiatives, educational grants, and participating institutions' contributions. The funding model is customized based on each institution's needs and capabilities.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">What ongoing support is provided?</h4>
                    <p className="text-gray-600">
                      Ongoing support includes technical maintenance, system updates, curriculum enhancements, additional training as needed, and access to the Uniford network of educational institutions for knowledge sharing and best practices.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-medium text-lg mb-2">Are there costs for the institution?</h4>
                    <p className="text-gray-600">
                      While UGIEP provides significant funding, institutions are expected to contribute a portion of the costs, particularly for ongoing maintenance and staff allocation. The exact contribution varies based on the institution's financial capacity and program scale.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UGIEP;
