
import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import VideoPlayer from "@/components/VideoPlayer";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Calendar,
  Image,
  Video,
  GraduationCap,
  Trophy,
  Music,
  Palette,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: Image },
    { id: "campus", label: "Campus", icon: GraduationCap },
    { id: "events", label: "Events", icon: Calendar },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "activities", label: "Activities", icon: Users },
    { id: "arts", label: "Arts & Culture", icon: Palette }
  ];

  const campusImages = [
    { src: "https://i.ibb.co/DgRq32HX/Whats-App-Image-2025-04-20-at-19-24-54-f92455d1.jpg", alt: "School Building", caption: "Main School Building" },
    { src: "https://i.ibb.co/5Wnsmp0p/Whats-App-Image-2025-04-20-at-19-24-51-109faecc.jpg", alt: "Main School Building", caption: "Main School Building" },
    { src: "/placeholder.svg", alt: "School Building", caption: "Main School Building" },
    { src: "/placeholder.svg", alt: "Classroom", caption: "Modern Air-Conditioned Classroom" },
    { src: "/placeholder.svg", alt: "Library", caption: "Central Library" },
    { src: "/placeholder.svg", alt: "Computer Lab", caption: "State-of-the-Art Computer Lab" },
    { src: "/placeholder.svg", alt: "Science Lab", caption: "Advanced Science Laboratory" },
    { src: "/placeholder.svg", alt: "Cafeteria", caption: "Student Cafeteria" },
    { src: "/placeholder.svg", alt: "Auditorium", caption: "Multi-Purpose Auditorium" },
    { src: "/placeholder.svg", alt: "Reception", caption: "School Reception Area" }
  ];

  const eventsImages = [
    { src: "/placeholder.svg", alt: "Annual Day", caption: "Annual Day Celebration" },
    { src: "/placeholder.svg", alt: "Science Exhibition", caption: "Science & Technology Exhibition" },
    { src: "/placeholder.svg", alt: "Independence Day", caption: "Independence Day Celebration" },
    { src: "/placeholder.svg", alt: "Teachers Day", caption: "Teachers' Day Function" },
    { src: "/placeholder.svg", alt: "Children's Day", caption: "Children's Day Activities" },
    { src: "/placeholder.svg", alt: "Graduation Ceremony", caption: "Graduation Ceremony" }
  ];

  const sportsImages = [
    { src: "https://i.ibb.co/Cs66Yx6m/unnamed-1.png", alt: "Swimming Pool", caption: "Swimming Competition" },
    { src: "/placeholder.svg", alt: "Cricket Match", caption: "Inter-School Cricket Tournament" },
    { src: "/placeholder.svg", alt: "Swimming", caption: "Swimming Competition" },
    { src: "/placeholder.svg", alt: "Basketball", caption: "Basketball Championship" },
    { src: "/placeholder.svg", alt: "Athletics", caption: "Annual Sports Meet" },
    { src: "/placeholder.svg", alt: "Football", caption: "Football League" },
    { src: "/placeholder.svg", alt: "Table Tennis", caption: "Table Tennis Tournament" }
  ];

  const activitiesImages = [
    { src: "https://i.ibb.co/6RgcwCF7/unnamed-3.png", alt: "Science Lab", caption: "STEM Learning Workshop" },
    { src: "/placeholder.svg", alt: "Robotics", caption: "Robotics Competition" },
    { src: "/placeholder.svg", alt: "Debate", caption: "Inter-Class Debate Competition" },
    { src: "/placeholder.svg", alt: "Quiz", caption: "General Knowledge Quiz" },
    { src: "/placeholder.svg", alt: "Field Trip", caption: "Educational Field Trip" },
    { src: "/placeholder.svg", alt: "Community Service", caption: "Community Service Initiative" }
  ];

  const artsImages = [
    { src: "https://i.ibb.co/KxPWCRw4/unnamed-4.png", alt: "Art Exhibition", caption: "Student Art Exhibition" },
    { src: "/placeholder.svg", alt: "Dance Performance", caption: "Classical Dance Performance" },
    { src: "/placeholder.svg", alt: "Music Concert", caption: "Annual Music Concert" },
    { src: "/placeholder.svg", alt: "Art Exhibition", caption: "Student Art Exhibition" },
    { src: "/placeholder.svg", alt: "Drama", caption: "Annual Drama Production" },
    { src: "/placeholder.svg", alt: "Cultural Day", caption: "Cultural Day Celebration" },
    { src: "/placeholder.svg", alt: "Literary Festival", caption: "Literary Festival" }
  ];

  const videos = [
    { id: "dQw4w9WgXcQ", title: "School Campus Tour" },
    { id: "dQw4w9WgXcQ", title: "Annual Day Highlights" },
    { id: "dQw4w9WgXcQ", title: "Sports Day Celebrations" },
    { id: "dQw4w9WgXcQ", title: "STEM Learning Activities" },
    { id: "dQw4w9WgXcQ", title: "Cultural Performances" },
    { id: "dQw4w9WgXcQ", title: "A Day at Chankya Academy" }
  ];

  // Filter images based on active category
  const getGalleryImages = () => {
    switch (activeCategory) {
      case "campus":
        return campusImages;
      case "events":
        return eventsImages;
      case "sports":
        return sportsImages;
      case "activities":
        return activitiesImages;
      case "arts":
        return artsImages;
      default:
        // For "all" category, take a mix of images from each category
        return [
          ...campusImages.slice(0, 3),
          ...eventsImages.slice(0, 3),
          ...sportsImages.slice(0, 3),
          ...activitiesImages.slice(0, 3),
          ...artsImages.slice(0, 3)
        ];
    }
  };

  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="Capturing moments and memories from Chankya International Academy" 
        background="https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg"
      />

      {/* Gallery Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Our Visual Journey</h2>
            <p className="text-gray-600 mb-8">
              Welcome to our gallery, a visual showcase of the vibrant life at Chankya International Academy. From academic pursuits to sporting achievements, cultural celebrations to innovative projects, explore the diverse experiences that make our school special.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="photos" className="mb-12">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Image size={18} />
                <span>Photos</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video size={18} />
                <span>Videos</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="photos">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`flex items-center gap-2 ${
                      activeCategory === category.id 
                        ? "bg-school-green hover:bg-school-brown text-white" 
                        : "text-gray-700 hover:text-school-green"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <category.icon size={16} />
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>
              
              <SectionTitle 
                title={`${activeCategory === 'all' ? 'Photo Gallery' : `${categories.find(c => c.id === activeCategory)?.label} Gallery`}`} 
                subtitle="A glimpse into our school's vibrant environment and activities"
                center
              />
              
              <Gallery images={getGalleryImages()} columns={3} />
            </TabsContent>
            
            <TabsContent value="videos">
              <SectionTitle 
                title="Video Gallery" 
                subtitle="Watch videos showcasing various aspects of school life"
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <div key={index} className="space-y-3">
                    <VideoPlayer videoId={video.id} title={video.title} />
                    <h3 className="text-lg font-medium text-center mt-3">{video.title}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Photo Categories */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore by Category" 
            subtitle="Dive deeper into specific aspects of school life through our categorized galleries"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Campus */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Campus" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Campus</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore our modern facilities including classrooms, laboratories, library, and sports infrastructure.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                  onClick={() => setActiveCategory("campus")}
                >
                  View Campus Gallery
                </Button>
              </div>
            </div>
            
            {/* Events */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Events" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Events</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Relive special moments from our annual events, celebrations, and ceremonies.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                  onClick={() => setActiveCategory("events")}
                >
                  View Events Gallery
                </Button>
              </div>
            </div>
            
            {/* Sports */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Sports" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy size={20} className="text-school-green mr-2" />
                  <h3 className="text-xl font-medium">Sports</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  See our students excelling in various sports activities and competitions.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                  onClick={() => setActiveCategory("sports")}
                >
                  View Sports Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Memories" 
            subtitle="Highlighting special moments from recent school events"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Annual Function" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-school-green mb-4">Annual Function 2023</h3>
              <p className="text-gray-600 mb-6">
                Our Annual Function was a spectacular showcase of talent, creativity, and hard work. Students from all grades participated in various performances including classical and contemporary dance, music, drama, and cultural shows.
              </p>
              <p className="text-gray-600 mb-6">
                The event was graced by distinguished guests from the education sector and local community leaders who praised the students' performances and the school's commitment to holistic education.
              </p>
              <Button 
                className="bg-school-green hover:bg-school-brown text-white"
                onClick={() => setActiveCategory("events")}
              >
                See More Event Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Photos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle 
              title="Share Your Memories" 
              subtitle="Parents and students are welcome to share their photographs of school events and activities"
              center
            />
            <p className="text-gray-600 mb-8">
              Have photos from school events, field trips, or activities? Share them with our community! Selected photos will be featured in our gallery and school publications.
            </p>
            <Button className="bg-school-green hover:bg-school-brown text-white">
              Submit Your Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
