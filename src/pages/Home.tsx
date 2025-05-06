import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import VideoPlayer from "@/components/VideoPlayer";
import ContactForm from "@/components/ContactForm";
import { Check, GraduationCap, BookOpen, Building, Users, Award, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      description: "Comprehensive curriculum designed to foster academic achievement and critical thinking skills."
    },
    {
      title: "State-of-the-Art Facilities",
      icon: Building,
      description: "Modern classrooms, laboratories, sports facilities, and digital resources for an enriched learning experience."
    },
    {
      title: "Experienced Faculty",
      icon: Users,
      description: "Dedicated and highly qualified teachers committed to bringing out the best in every student."
    },
    {
      title: "Holistic Development",
      icon: BookOpen,
      description: "Focus on academic, physical, emotional, and social growth to nurture well-rounded individuals."
    }
  ];

  const galleryImages = [
    {
      src: "https://i.ibb.co/DgRq32HX/Whats-App-Image-2025-04-20-at-19-24-54-f92455d1.jpg",
      alt: "School Building",
      caption: "Our Modern Campus"
    },
    {
      src: "https://i.ibb.co/k23ywT35/unnamed-2.png",
      alt: "Digital Classroom",
      caption: "Smart Digital Classrooms"
    },
    {
      src: "https://i.ibb.co/Cs66Yx6m/unnamed-1.png",
      alt: "Swimming Pool",
      caption: "International Standard Swimming Pool"
    },
    {
      src: "https://i.ibb.co/Pvtk8Gbh/Whats-App-Image-2025-04-19-at-06-32-30-e51638c6.jpg",
      alt: "Sports Ground",
      caption: "Expansive Sports Facilities"
    },
    {
      src: "https://i.ibb.co/6RgcwCF7/unnamed-3.png",
      alt: "Science Lab",
      caption: "Advanced Science Laboratories"
    },
    {
      src: "https://i.ibb.co/KxPWCRw4/unnamed-4.png",
      alt: "Students in Classroom",
      caption: "Engaged Learning Environment"
    }
  ];

  return (
    <>
      {/* Hero section */}
      <div 
        className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/5Wnsmp0p/Whats-App-Image-2025-04-20-at-19-24-51-109faecc.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Nurturing Excellence at Chankya International Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Providing world-class education with international standards in Rampur Maniharan
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/facilities">
                <button className="bg-school-gold hover:bg-school-brown text-white text-lg px-6 py-6 rounded-md">
                  Explore Our Facilities
                </button>
              </Link>
              <Link to="/official">
                <button className="bg-white text-school-green hover:bg-gray-100 border-none text-lg px-6 py-6 rounded-md">
                  Apply for Admission
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-28"></div>
      </div>

      {/* Welcome section */}
      <section className="py-16 md:py-24 bg-school-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Welcome to Chankya International Academy" 
                subtitle="A premier educational institution committed to academic excellence and holistic development."
              />
              <p className="text-gray-600 mb-6">
                At Chankya International Academy, we believe in providing a nurturing environment where students can thrive academically, socially, and emotionally. Our teaching methodology combines traditional values with modern educational practices to prepare students for the challenges of the 21st century.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Fully air-conditioned classrooms for comfortable learning</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Digital smart classes with interactive learning tools</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-school-green" />
                  </div>
                  <span>International standard curriculum focused on practical learning</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Check className="h-5 w-5 text-school-green" />
                  </div>
                  <span>Day boarding facilities with evening meals and classes</span>
                </li>
              </ul>
              <Link to="/about">
                <button className="bg-school-green hover:bg-school-brown text-white px-4 py-2 rounded-md">
                  Learn More About Us <ArrowRight size={16} className="ml-2" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg" 
                alt="Students at Chankya International Academy" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute bottom-6 right-6 bg-school-green text-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg">Established 2010</p>
                <p className="text-sm">Over a decade of educational excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Chankya International Academy" 
            subtitle="We provide a comprehensive educational experience focused on excellence and holistic development."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-school-green text-white mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Experience Chankya International Academy"
            subtitle="Take a virtual tour of our campus and see what makes us special."
            center
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
            <VideoPlayer videoId="0PapbDKfYmk" title="School Virtual Tour" />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-school-green mb-4">
                Virtual Tour of Our Campus
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our state-of-the-art facilities, innovative learning spaces, and the vibrant campus environment that makes Chankya International Academy a place where students love to learn and grow.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="text-school-gold mr-2" size={20} />
                  <span>Award-winning campus</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-school-green mr-2" size={20} />
                  <span>Modern infrastructure</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-school-green mr-2" size={20} />
                  <span>Sports facilities</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-school-green mr-2" size={20} />
                  <span>Technology integration</span>
                </div>
              </div>
              <Link to="/gallery">
                <button className="bg-school-green hover:bg-school-brown text-white px-4 py-2 rounded-md">
                  View More Videos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="School Gallery"
            subtitle="Glimpses of life at Chankya International Academy"
            center
          />
          <Gallery images={galleryImages} />
          <div className="text-center mt-10">
            <Link to="/gallery">
              <button className="border-school-green text-school-green hover:bg-school-green hover:text-white px-4 py-2 rounded-md">
                View Complete Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-24 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Parents & Students Say"
            subtitle="Hear from our community about their experience with Chankya International Academy"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Rajiv Sharma</h4>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The academic rigor and personal attention my child receives at Chankya International Academy is exceptional. The teachers are dedicated and the facilities are world-class."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Ananya Patel</h4>
                  <p className="text-sm text-gray-500">Student, Grade 10</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I love the practical approach to learning at CIA. The STEM labs and coding programs have helped me discover my passion for technology and science."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Dr. Meena Gupta</h4>
                  <p className="text-sm text-gray-500">Parent & Educator</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As both a parent and an educator, I'm impressed by the holistic education approach at Chankya. The balance between academics, sports, and arts is perfect for child development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get in Touch"
                subtitle="Have questions about admissions or want to learn more about our programs? We're here to help."
              />
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600">Chankya International Academy, Rampur Maniharan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-school-green/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">chanakyainternationalacademy23@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm 
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you soon."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
