
import React from "react";
import { Link } from "react-router-dom";
import { Building, Award, FileText, Users, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Baba Akhand Bharat Trust" 
              subtitle="The guiding foundation behind Chankya International Academy's vision and mission"
            />
            <p className="text-gray-600 mb-6">
              Established with a vision to promote quality education and cultural values, 
              Baba Akhand Bharat Trust is committed to fostering educational excellence and 
              holistic development across India. The trust oversees multiple educational institutions 
              with the goal of nurturing the future leaders of our nation.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Building className="h-5 w-5 text-school-green mr-3 mt-1" />
                <span>Founded in 2005 with a mission to transform education in India</span>
              </li>
              <li className="flex items-start">
                <Award className="h-5 w-5 text-school-green mr-3 mt-1" />
                <span>Recognized for excellence in educational services by state authorities</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-school-green mr-3 mt-1" />
                <span>Governed by a board of distinguished educators and community leaders</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-school-green mr-3 mt-1" />
                <span>Fully compliant with all legal and regulatory requirements</span>
              </li>
            </ul>
            <Link to="/legal#trust">
              <Button className="bg-school-green hover:bg-school-brown text-white flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/5Wnsmp0p/Whats-App-Image-2025-04-20-at-19-24-51-109faecc.jpg" 
              alt="Baba Akhand Bharat Trust" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-school-gold text-school-green p-5 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif font-bold text-xl">Established 2005</p>
              <p>Serving education with excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
