
import React from "react";
import { Link } from "react-router-dom";
import { Building, Award, FileText, Users, ArrowRight, Shield, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-purple-50 to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-100/50 blur-2xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-indigo-100/80 px-3 py-1 text-sm font-medium text-indigo-800 mb-6">
              <Shield className="h-4 w-4 mr-1 text-indigo-700" /> Our Founding Organization
            </div>
            
            <SectionTitle 
              title="Baba Akhand Bharat Trust" 
              subtitle="The guiding foundation behind Chankya International Academy's vision and mission"
            />
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Established with a vision to promote quality education and cultural values, 
              Baba Akhand Bharat Trust is committed to fostering educational excellence and 
              holistic development across India. The trust oversees multiple educational institutions 
              with the goal of nurturing the future leaders of our nation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-indigo-50 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Building className="h-5 w-5 text-indigo-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800 mb-1">Established 2005</h4>
                    <p className="text-sm text-gray-600">Transforming education in India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-indigo-50 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-indigo-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800 mb-1">Award Winning</h4>
                    <p className="text-sm text-gray-600">Recognized for excellence</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-indigo-50 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-indigo-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800 mb-1">Distinguished Board</h4>
                    <p className="text-sm text-gray-600">Educators & community leaders</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-indigo-50 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-indigo-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800 mb-1">Fully Compliant</h4>
                    <p className="text-sm text-gray-600">Legal & regulatory standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/legal#trust">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center group">
                Learn More About The Trust 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-2xl"></div>
            <img 
              src="https://i.ibb.co/5Wnsmp0p/Whats-App-Image-2025-04-20-at-19-24-51-109faecc.jpg" 
              alt="Baba Akhand Bharat Trust" 
              className="rounded-2xl shadow-xl w-full h-auto relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-300 mr-2" />
                <p className="font-serif font-bold text-xl">Since 2005</p>
              </div>
              <p>Serving education with excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
