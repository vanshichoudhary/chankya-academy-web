
import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import VideoPlayer from "@/components/VideoPlayer";
import { 
  AirVent, 
  Laptop, 
  Waves, 
  Trophy, 
  GraduationCap, 
  Clock, 
  FlaskConical, 
  Utensils,
  BookOpen
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      title: "Fully AC Classrooms",
      icon: AirVent,
      description: "Modern, air-conditioned classrooms designed to provide a comfortable learning environment throughout the year, enhancing student concentration and performance."
    },
    {
      title: "Digital Smart Classes",
      icon: Laptop,
      description: "Technologically advanced classrooms equipped with interactive whiteboards, projectors, and digital learning tools to create an immersive learning experience."
    },
    {
      title: "Swimming Pool",
      icon: Waves,
      description: "International standard swimming pool with trained instructors, providing students with swimming lessons and opportunities for competitive aquatic sports."
    },
    {
      title: "Playground for Sports",
      icon: Trophy,
      description: "Expansive playgrounds and sports facilities for cricket, football, basketball, volleyball, and athletics, fostering physical development and team spirit."
    },
    {
      title: "International Curriculum",
      icon: GraduationCap,
      description: "Comprehensive curriculum aligned with international standards, providing a global perspective while maintaining cultural relevance."
    },
    {
      title: "Day Boarding",
      icon: Clock,
      description: "Extended day programs with supervised study hours, meals, and extracurricular activities, catering to the needs of working parents."
    },
    {
      title: "Practical Learning",
      icon: FlaskConical,
      description: "Emphasis on hands-on learning through experiments, projects, and real-world applications, making education more engaging and effective."
    },
    {
      title: "Evening Meals & Classes",
      icon: Utensils,
      description: "Nutritious evening meals followed by additional classes for reinforcement and enrichment, ensuring comprehensive development."
    }
  ];

  const imageGallery = [
    {
      src: "https://i.ibb.co/KxPWCRw4/unnamed-4.png",
      alt: "AC Classroom",
      caption: "Fully Air-Conditioned Classrooms"
    },
    {
      src: "https://i.ibb.co/N2zL9R7N/a-professional-catalog-style-image-with-Dzb-Nbe-Tn-RDio7-Re-Wdnap-A-v-UEDb-JSs-RNORn-Lv-Z25-KWxg.jpg",
      alt: "Digital Smart Class",
      caption: "Interactive Digital Smart Classes"
    },
    {
      src: "https://i.ibb.co/Cs66Yx6m/unnamed-1.png",
      alt: "Swimming Pool",
      caption: "International Standard Swimming Pool"
    },
    {
      src: "https://i.ibb.co/DgRq32HX/Whats-App-Image-2025-04-20-at-19-24-54-f92455d1.jpg",
      alt: "Sports Ground",
      caption: "Multi-Sport Playground"
    },
    {
      src: "https://i.ibb.co/hRHNVW7y/unnamed-7.png",
      alt: "Science Laboratory",
      caption: "Advanced Science Laboratories"
    },
    {
      src: "https://i.ibb.co/5Wnsmp0p/Whats-App-Image-2025-04-20-at-19-24-51-109faecc.jpg",
      alt: "Library",
      caption: "Well-Stocked Modern Library"
    }
  ];
  
  return (
    <div>
      <PageHeader 
        title="Our Facilities" 
        subtitle="State-of-the-art infrastructure designed for holistic education" 
        background="https://i.ibb.co/5WYdRhnY/Whats-App-Image-2025-04-19-at-06-32-35-579786b2.jpg"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">World-Class Facilities for Exceptional Learning</h2>
            <p className="text-gray-600 mb-8">
              At Chankya International Academy, we believe that a conducive learning environment is essential for academic excellence. Our campus is equipped with modern facilities that support our educational philosophy and provide students with everything they need to excel.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-school-green text-white mb-4">
                  <facility.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Learning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="STEM Learning & Innovative Labs" 
                subtitle="Fostering curiosity, creativity, and critical thinking through hands-on learning experiences"
              />
              <p className="text-gray-600 mb-6">
                Our STEM (Science, Technology, Engineering, and Mathematics) program integrates these disciplines into a cohesive learning paradigm. Students engage in practical experiments, design challenges, and problem-solving activities that prepare them for future academic and career success.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <FlaskConical className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Science Laboratories</h4>
                    <p className="text-gray-600 text-sm">Well-equipped physics, chemistry, and biology labs for practical experiments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Laptop className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Computer Labs</h4>
                    <p className="text-gray-600 text-sm">Modern computer labs with the latest software and high-speed internet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Interactive Learning Tools</h4>
                    <p className="text-gray-600 text-sm">Digital resources and tools that make learning engaging and effective</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <VideoPlayer videoId="dQw4w9WgXcQ" title="STEM Learning at CIA" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Facilities Gallery" 
            subtitle="Take a visual tour of our campus and facilities"
            center
          />
          <Gallery images={imageGallery} />
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://i.ibb.co/DgRq32HX/Whats-App-Image-2025-04-20-at-19-24-54-f92455d1.jpg" 
                alt="Sports Facilities" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle 
                title="Sports Facilities" 
                subtitle="Encouraging physical development and sportsmanship through world-class sports infrastructure"
              />
              <p className="text-gray-600 mb-6">
                We believe in the importance of physical education and sports in a student's overall development. Our extensive sports facilities include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-school-green" />
                  </div>
                  <span>International standard swimming pool with trained instructors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Expansive playgrounds for cricket, football, and athletics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Basketball and volleyball courts with professional equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Indoor games facilities for table tennis, chess, and carrom</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-school-green/10 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Professional coaching for various sports and physical activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Day Boarding */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Day Boarding & Evening Classes" 
            subtitle="Extended learning hours with comprehensive care and enrichment"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-school-gold mb-4">01</div>
              <h3 className="text-xl font-medium mb-3">Extended Hours</h3>
              <p className="text-gray-600">
                Our day boarding program extends beyond regular school hours, providing a structured environment for students until evening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-school-gold mb-4">02</div>
              <h3 className="text-xl font-medium mb-3">Nutritious Meals</h3>
              <p className="text-gray-600">
                Students are provided with balanced and nutritious evening meals, prepared under strict hygiene standards in our modern kitchen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-school-gold mb-4">03</div>
              <h3 className="text-xl font-medium mb-3">Evening Classes</h3>
              <p className="text-gray-600">
                Additional academic sessions focusing on homework completion, doubt clearing, and enrichment activities under teacher supervision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
