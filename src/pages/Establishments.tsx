
import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building, 
  Code, 
  Cpu, 
  GraduationCap, 
  Home, 
  Layers, 
  Microscope, 
  Users, 
  ArrowRight,
  BrainCircuit,
  Rocket,
  Puzzle
} from "lucide-react";

const Establishments = () => {
  const futureProjects = [
    {
      title: "Boarding Infrastructure",
      icon: Home,
      description: "State-of-the-art residential facilities for students with modern amenities, comfortable living spaces, and a home-like environment.",
      status: "Coming 2025",
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Student Hostels",
      icon: Building,
      description: "Separate hostel buildings for boys and girls with supervised care, nutritious meals, and conducive study environment.",
      status: "Coming 2025",
      color: "bg-purple-50 text-purple-700"
    },
    {
      title: "Uni-pitch & Uniford Backed Programs",
      icon: GraduationCap,
      description: "Innovative educational programs in partnership with Uniford to provide students with global learning opportunities and international certifications.",
      status: "Coming 2024",
      color: "bg-amber-50 text-amber-700"
    },
    {
      title: "AI Robotics Labs",
      icon: Cpu,
      description: "Cutting-edge robotics and AI laboratory equipped with the latest technology for hands-on learning and experimentation in automation and artificial intelligence.",
      status: "Coming 2024",
      color: "bg-green-50 text-green-700"
    }
  ];

  const clubs = [
    {
      title: "STEM Club",
      icon: Microscope,
      description: "A club dedicated to exploring science, technology, engineering, and mathematics through engaging projects and activities."
    },
    {
      title: "Coding Club",
      icon: Code,
      description: "Harvard scholars designed programming curriculum to develop computational thinking and coding skills in students."
    },
    {
      title: "Robotics Society",
      icon: Cpu,
      description: "Students learn to design, build, and program robots, participating in regional and national competitions."
    },
    {
      title: "AI Exploration Group",
      icon: BrainCircuit,
      description: "Google and Microsoft backed program introducing students to artificial intelligence concepts and applications."
    },
    {
      title: "Debate & Public Speaking Club",
      icon: Users,
      description: "Platform for students to develop communication, critical thinking, and leadership skills through debates and speeches."
    },
    {
      title: "Innovation Hub",
      icon: Puzzle,
      description: "Encourages creative thinking and problem-solving through design thinking and prototype development."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Future Establishments" 
        subtitle="Pioneering new facilities and programs for tomorrow's leaders" 
        background="/placeholder.svg"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Building for the Future</h2>
            <p className="text-gray-600 mb-8">
              At Chankya International Academy, we continuously evolve to meet the changing demands of education and prepare our students for the future. Our upcoming establishments and initiatives aim to provide cutting-edge resources and opportunities for holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Upcoming Infrastructure Projects" 
            subtitle="Expanding our campus with state-of-the-art facilities for enhanced learning experiences"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {futureProjects.map((project, index) => (
              <Card key={index} className="border-t-4 border-t-school-green transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${project.color} mb-4`}>
                    <project.icon size={24} />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full font-medium mt-2">
                      {project.status}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEM & AI Labs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Advanced STEM & AI Laboratories" 
                subtitle="Cutting-edge facilities for science, technology, engineering, mathematics, and artificial intelligence education"
              />
              <p className="text-gray-600 mb-6">
                Our upcoming STEM and AI laboratories will be equipped with the latest technology and resources to provide students with hands-on learning experiences in these critical fields. These facilities will foster innovation, critical thinking, and problem-solving skills essential for the 21st century.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Microscope className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Scientific Equipment</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art tools and instruments for scientific experiments and research</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Cpu className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Robotics & AI Workstations</h4>
                    <p className="text-gray-600 text-sm">Specialized workstations for robotics programming and AI model development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Rocket className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation Zones</h4>
                    <p className="text-gray-600 text-sm">Dedicated spaces for brainstorming, prototyping, and developing creative solutions</p>
                  </div>
                </div>
              </div>
              <Button className="bg-school-green hover:bg-school-brown text-white">
                Learn More About Our STEM Vision
              </Button>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="STEM and AI Laboratory" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Clubs & Societies" 
            subtitle="Fostering interests, talents, and skills through specialized extracurricular groups"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-school-green text-white mb-4">
                  <club.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{club.title}</h3>
                <p className="text-gray-600">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harvard & Uniford Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionTitle 
                title="International Educational Partnerships" 
                subtitle="Collaborations with global institutions to provide world-class educational opportunities"
              />
              <p className="text-gray-600 mb-6">
                Our strategic partnerships with prestigious institutions like Harvard and Uniford bring internationally recognized programs to our students. These collaborations enhance our curriculum, provide unique learning opportunities, and prepare students for global success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-serif font-bold text-lg text-school-green mb-3">Harvard-Designed Coding Program</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    A comprehensive coding curriculum designed by Harvard scholars to develop computational thinking and programming skills from an early age.
                  </p>
                  <div className="flex items-center text-school-green">
                    <Link to="#" className="flex items-center hover:underline">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-serif font-bold text-lg text-school-green mb-3">Uniford-Backed Uni-pitch Program</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    An innovative program that encourages entrepreneurial thinking and provides students with opportunities to develop and pitch their ideas.
                  </p>
                  <div className="flex items-center text-school-green">
                    <Link to="#" className="flex items-center hover:underline">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-school-green/10 p-6 rounded-lg">
                <h4 className="font-medium text-lg mb-3">Partnership Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Access to internationally recognized curricula and teaching methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Opportunities for student exchanges and international exposure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Certifications and credentials valued by global universities and employers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Faculty development through international training programs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="h-full bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/placeholder.svg" 
                  alt="International Partnerships" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-school-green mb-4">Partner with Us</h3>
                  <p className="text-gray-600 mb-6">
                    We are open to collaborations with educational institutions, organizations, and industry leaders who share our vision for innovative and quality education.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 text-school-green">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Academic Partnerships</h4>
                        <p className="text-gray-600 text-sm">Curriculum development, teacher training, and student enrichment programs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 text-school-green">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Industry Collaborations</h4>
                        <p className="text-gray-600 text-sm">Internships, mentorship programs, and career guidance initiatives</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">For partnership inquiries, please contact our Partnership Development Office:</p>
                    <p className="text-sm">partnerships@chankyaacademy.edu</p>
                    <p className="text-sm">+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Establishments;
