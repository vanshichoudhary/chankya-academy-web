import React from "react";
import PageHeader from "@/components/PageHeader";
import MediaPublications from "@/components/MediaPublications";
import StudentMessages from "@/components/StudentMessages";
import Gallery from "@/components/Gallery";
import SectionTitle from "@/components/SectionTitle";
import CollaborationJourney from "@/components/CollaborationJourney";
import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, ShieldCheck, FileText } from "lucide-react";

const WeInvite = () => {
  // Sample gallery images for the gallery section
  const galleryImages = [
    { src: "https://i.ibb.co/N2zL9R7N/a-professional-catalog-style-image-with-Dzb-Nbe-Tn-RDio7-Re-Wdnap-A-v-UEDb-JSs-RNORn-Lv-Z25-KWxg.jpg", alt: "International Collaboration", caption: "Students from 5 countries working on climate solutions" },
    { src: "https://i.ibb.co/hRHNVW7y/unnamed-7.png", alt: "Innovation Workshop", caption: "Innovation workshop with tech industry partners" },
    { src: "https://i.ibb.co/KxPWCRw4/unnamed-4.png", alt: "Environmental Initiative", caption: "Tree planting initiative with local community" },
    { src: "https://i.ibb.co/6RgcwCF7/unnamed-3.png", alt: "Cultural Exchange", caption: "Cultural exchange program with visiting delegates" },
    { src: "https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg", alt: "Student Leadership", caption: "Youth leadership summit hosted at Chankya Academy" },
    { src: "https://i.ibb.co/Cs66Yx6m/unnamed-1.png", alt: "Community Service", caption: "Students leading literacy program in rural communities" }
  ];

  return (
    <div>
      <PageHeader 
        title="We Invite" 
        subtitle="Join our mission to empower the next generation through global collaboration"
        background="https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg"
      />
      
      {/* New Collaboration Journey Component */}
      <CollaborationJourney />
      
      {/* The Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Journey" 
            subtitle="From local roots to global impact, discover our path to educational excellence"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Phase 1: Foundation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://i.ibb.co/DgRq32HX/Whats-App-Image-2025-04-20-at-19-24-54-f92455d1.jpg" 
                  alt="Foundation" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Rocket size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Foundation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Established in 2005, we laid the groundwork for innovative education with a focus on core values.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Explore Our History
                </Button>
              </div>
            </div>
            
            {/* Phase 2: Innovation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://i.ibb.co/KxPWCRw4/unnamed-4.png" 
                  alt="Innovation" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Innovation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From 2010, we introduced advanced programs in STEM, arts, and leadership, fostering creativity and critical thinking.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Discover Our Programs
                    </Button>
              </div>
            </div>
            
            {/* Phase 3: Global Impact */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://i.ibb.co/N2zL9R7N/a-professional-catalog-style-image-with-Dzb-Nbe-Tn-RDio7-Re-Wdnap-A-v-UEDb-JSs-RNORn-Lv-Z25-KWxg.jpg" 
                  alt="Global Impact" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShieldCheck size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Global Impact</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Since 2018, we've expanded internationally, partnering with schools worldwide to promote cross-cultural education.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  See Our Global Initiatives
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Roadmap" 
            subtitle="Charting the course for future growth and global collaboration"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* 2024: Strengthen Partnerships */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.svg" 
                  alt="Partnerships" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">2024: Strengthen Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  Deepen relationships with existing international partners and establish new collaborations in Asia and Africa.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Learn About Our Partners
                </Button>
              </div>
            </div>
            
            {/* 2025: Launch Innovation Hubs */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Innovation Hubs" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">2025: Launch Innovation Hubs</h3>
                <p className="text-gray-600 mb-4">
                  Create regional hubs focused on STEM education, sustainable practices, and leadership development.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Explore Innovation Hubs
                </Button>
              </div>
            </div>
            
            {/* 2026: Global Education Network */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Global Network" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">2026: Global Education Network</h3>
                <p className="text-gray-600 mb-4">
                  Establish a comprehensive network connecting students, educators, and institutions worldwide.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Join Our Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Collaboration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of Collaboration" 
            subtitle="Discover the advantages of partnering with Chankya International Academy"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Enhanced Learning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Enhanced Learning" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Enhanced Learning</h3>
                <p className="text-gray-600 mb-4">
                  Access innovative teaching methods, advanced resources, and collaborative projects that enrich the learning experience.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Explore Learning Resources
                </Button>
              </div>
            </div>
            
            {/* Cultural Exchange */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Cultural Exchange" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Cultural Exchange</h3>
                <p className="text-gray-600 mb-4">
                  Participate in exchange programs, cultural events, and global initiatives that promote understanding and appreciation.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Join Our Exchange Programs
                </Button>
              </div>
            </div>
            
            {/* Global Network */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Global Network" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Global Network</h3>
                <p className="text-gray-600 mb-4">
                  Connect with a diverse community of students, educators, and leaders from around the world.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Connect With Our Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents and Resources Section */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Documents and Resources" 
            subtitle="Access essential documents and resources for collaboration"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Partnership Brochure */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Partnership Brochure" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Partnership Brochure</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn about our partnership programs, benefits, and how to get involved.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            {/* Collaboration Guidelines */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Collaboration Guidelines" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Collaboration Guidelines</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understand the guidelines and expectations for successful collaboration.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  View Guidelines
                </Button>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Application Form" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Application Form</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Apply to become a partner and start your journey with us.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Collaboration Boards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visual Collaboration Boards" 
            subtitle="Explore our collaborative projects and initiatives through visual boards"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Board 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Board 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">STEM Education Initiatives</h3>
                <p className="text-gray-600 mb-4">
                  Explore our collaborative projects in science, technology, engineering, and mathematics.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  View Board
                </Button>
              </div>
            </div>
            
            {/* Board 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Board 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Sustainable Practices</h3>
                <p className="text-gray-600 mb-4">
                  Discover our initiatives for environmental sustainability and green education.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  View Board
                </Button>
              </div>
            </div>
          
            {/* Board 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Board 3" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Leadership Development</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our programs for nurturing future leaders and promoting global citizenship.
                </p>
                <Button variant="outline" className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white">
                  View Board
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Publications Section */}
      <MediaPublications />
      
      {/* Student Messages Section */}
      <StudentMessages />
      
      {/* Gallery Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Collaboration Highlights" 
            subtitle="Visual moments from our international partnerships and initiatives"
            center
          />
          
          <div className="mt-10">
            <Gallery images={galleryImages} columns={3} />
          </div>
          
          <div className="mt-12 text-center">
            <a href="/gallery" className="inline-block px-6 py-3 bg-school-green hover:bg-school-brown text-white rounded-md transition-colors">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-school-green to-school-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Ready to Collaborate?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join us in shaping the future of education through global partnerships and innovative initiatives.
          </p>
          <Button className="bg-white text-school-green hover:bg-gray-100 hover:text-school-brown">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WeInvite;
