
import React from "react";
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
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Management = () => {
  const managementTeam = [
    {
      name: "Dr. Rajiv Kumar",
      position: "Chairman",
      image: "/placeholder.svg",
      education: "Ph.D. in Education, MBA",
      description: "Dr. Rajiv Kumar brings over 25 years of experience in educational leadership. His vision and commitment to excellence have been instrumental in establishing Chankya International Academy as a premier educational institution.",
      socialLinks: {
        email: "chairman@chankyaacademy.edu",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mrs. Sunita Sharma",
      position: "Director",
      image: "/placeholder.svg",
      education: "M.Ed., M.Phil. in Educational Leadership",
      description: "Mrs. Sunita Sharma oversees the day-to-day operations of the school, curriculum development, and strategic planning. Her innovative approach to education has transformed the learning experience at CIA.",
      socialLinks: {
        email: "director@chankyaacademy.edu",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mr. Aditya Verma",
      position: "Principal",
      image: "/placeholder.svg",
      education: "M.Sc., B.Ed.",
      description: "Mr. Aditya Verma leads the academic team, ensuring high standards of teaching and learning. His student-centered approach focuses on holistic development and academic excellence.",
      socialLinks: {
        email: "principal@chankyaacademy.edu",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const administrativeTeam = [
    {
      name: "Ms. Priya Singh",
      position: "Administrative Officer",
      image: "/placeholder.svg",
      department: "Administration"
    },
    {
      name: "Mr. Rahul Gupta",
      position: "Finance Manager",
      image: "/placeholder.svg",
      department: "Finance"
    },
    {
      name: "Mrs. Neha Patel",
      position: "Admissions Coordinator",
      image: "/placeholder.svg",
      department: "Admissions"
    },
    {
      name: "Mr. Vijay Sharma",
      position: "IT Manager",
      image: "/placeholder.svg",
      department: "Information Technology"
    }
  ];

  const academicTeam = [
    {
      name: "Dr. Ananya Das",
      position: "Head of Science Department",
      image: "/placeholder.svg",
      department: "Science"
    },
    {
      name: "Mr. Suresh Mehta",
      position: "Head of Mathematics Department",
      image: "/placeholder.svg",
      department: "Mathematics"
    },
    {
      name: "Mrs. Kavita Joshi",
      position: "Head of Languages Department",
      image: "/placeholder.svg",
      department: "Languages"
    },
    {
      name: "Mr. Prakash Reddy",
      position: "Head of Social Studies Department",
      image: "/placeholder.svg",
      department: "Social Studies"
    },
    {
      name: "Ms. Lakshmi Iyer",
      position: "Head of Arts Department",
      image: "/placeholder.svg",
      department: "Arts"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Head of Physical Education",
      image: "/placeholder.svg",
      department: "Physical Education"
    }
  ];

  const classroomImages = [
    {
      src: "/placeholder.svg",
      alt: "Science Class",
      caption: "Hands-on Learning in Science Class"
    },
    {
      src: "/placeholder.svg",
      alt: "Mathematics Class",
      caption: "Interactive Mathematics Session"
    },
    {
      src: "/placeholder.svg",
      alt: "Language Class",
      caption: "Engaging Language Learning"
    },
    {
      src: "/placeholder.svg",
      alt: "Art Class",
      caption: "Creative Expression in Art Class"
    },
    {
      src: "/placeholder.svg",
      alt: "Physical Education",
      caption: "Sports and Physical Development"
    },
    {
      src: "/placeholder.svg",
      alt: "Computer Lab",
      caption: "Technology Integration in Learning"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Management & Staff" 
        subtitle="Meet the dedicated team behind Chankya International Academy" 
        background="/placeholder.svg"
      />

      {/* Leadership Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Leadership Messages" 
            subtitle="Insights and vision from our school leadership"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Chairman's Message */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/placeholder.svg" 
                  alt="Chairman" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Dr. Rajiv Kumar</h3>
                    <p>Chairman</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-school-green mb-4">Chairman's Message</h3>
                <div className="text-gray-600 space-y-4">
                  <p>
                    "Dear Parents and Students,
                  </p>
                  <p>
                    At Chankya International Academy, we believe that education is not just about academics but about nurturing well-rounded individuals who are prepared to face the challenges of the future.
                  </p>
                  <p>
                    Our commitment to excellence in education is reflected in our state-of-the-art facilities, innovative teaching methodologies, and dedicated faculty. We strive to create an environment where students can discover their talents, pursue their passions, and develop the skills needed for success in the 21st century.
                  </p>
                  <p>
                    As we prepare our students for a rapidly changing world, we remain rooted in values of integrity, respect, and social responsibility. I invite you to join us on this exciting journey of learning and growth.
                  </p>
                  <p className="italic">
                    Sincerely,<br />
                    Dr. Rajiv Kumar
                  </p>
                </div>
              </div>
            </div>
            
            {/* Director's Message */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="/placeholder.svg" 
                  alt="Director" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Mrs. Sunita Sharma</h3>
                    <p>Director</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-school-green mb-4">Director's Message</h3>
                <div className="text-gray-600 space-y-4">
                  <p>
                    "Greetings from Chankya International Academy!
                  </p>
                  <p>
                    Education is a transformative journey that shapes the future of our children and society. At CIA, we are committed to providing a holistic educational experience that balances academic rigor with character development.
                  </p>
                  <p>
                    Our innovative curriculum, coupled with practical learning approaches, ensures that students not only excel academically but also develop critical thinking, creativity, and problem-solving skills. We focus on personalized learning experiences that cater to the unique talents and potential of each student.
                  </p>
                  <p>
                    I invite you to explore all that CIA has to offer and join us in our mission to nurture the leaders of tomorrow.
                  </p>
                  <p className="italic">
                    Warm regards,<br />
                    Mrs. Sunita Sharma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Management Team" 
            subtitle="Meet the visionaries leading Chankya International Academy"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {managementTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="flex flex-col">
                    <span className="text-school-green font-medium">{member.position}</span>
                    <span className="text-sm">{member.education}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4 border-t pt-4">
                  <a href={`mailto:${member.socialLinks.email}`} className="text-gray-500 hover:text-school-green">
                    <Mail size={18} />
                  </a>
                  <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-blue-600">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.socialLinks.twitter} className="text-gray-500 hover:text-blue-400">
                    <Twitter size={18} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Staff Directory" 
            subtitle="Our team of dedicated professionals committed to educational excellence"
            center
          />
          
          <Tabs defaultValue="academic" className="mt-12">
            <TabsList className="mb-8 flex justify-center">
              <TabsTrigger value="academic">Academic Staff</TabsTrigger>
              <TabsTrigger value="administrative">Administrative Staff</TabsTrigger>
            </TabsList>
            
            <TabsContent value="academic">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {academicTeam.map((member, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{member.name}</h3>
                      <p className="text-school-green text-sm">{member.position}</p>
                      <p className="text-gray-600 text-xs">{member.department}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="administrative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {administrativeTeam.map((member, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-school-green text-sm">{member.position}</p>
                      <p className="text-gray-600 text-xs">{member.department}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Classroom Activities */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Classroom Activities" 
            subtitle="Glimpses of dynamic learning environments and engaging educational experiences"
            center
          />
          
          <Gallery images={classroomImages} />
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="School Vision" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle 
                title="Our Vision & Mission" 
                subtitle="Guiding principles that shape our educational approach"
              />
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold text-school-green mb-3">Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be a globally recognized educational institution that nurtures future leaders with a perfect blend of academic excellence, moral values, and 21st-century skills.
                </p>
                
                <h3 className="text-xl font-serif font-bold text-school-green mb-3">Mission</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Provide a stimulating learning environment that encourages critical thinking, creativity, and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Integrate technology and practical applications into the teaching-learning process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Foster a culture of inclusivity, respect, and environmental consciousness</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Develop well-rounded individuals with strong academic foundations and essential life skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-school-green mr-2">•</div>
                    <span>Collaborate with parents, community, and global partners to enhance educational experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
