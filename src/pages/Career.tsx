
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, Filter, Link, Mail, Phone, HelpCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Types for job listings
type JobType = "Full-Time" | "Part-Time" | "Intern";
type JobStatus = "Open" | "Closed";
type Department = "Tech" | "Marketing" | "HR" | "Operations" | "Teaching" | "Administration";
type Experience = "Fresher" | "Mid" | "Lead";
type Location = "Remote" | "In-Office" | "Hybrid";

interface Job {
  id: number;
  title: string;
  department: Department;
  status: JobStatus;
  type: JobType;
  experience: Experience;
  location: Location;
  responsibilities: string[];
  reporting: string;
  teamCollaboration: string;
  salary: string;
  benefits: string[];
}

const Career = () => {
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filterDepartment, setFilterDepartment] = useState<Department | "All">("All");
  const [filterLocation, setFilterLocation] = useState<Location | "All">("All");
  const [filterExperience, setFilterExperience] = useState<Experience | "All">("All");

  // Sample jobs data
  const jobs: Job[] = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Teaching",
      status: "Open",
      type: "Full-Time",
      experience: "Mid",
      location: "In-Office",
      responsibilities: [
        "Develop and deliver mathematics curriculum for middle and high school students",
        "Prepare students for competitive examinations and board exams",
        "Conduct regular assessments and provide feedback to students",
        "Collaborate with other faculty members to enhance teaching methodologies"
      ],
      reporting: "Reports to Head of Mathematics Department",
      teamCollaboration: "Works closely with Science and Technology faculty",
      salary: "As per industry standards and experience",
      benefits: ["Health insurance", "Educational allowance", "Professional development support", "Annual retreat"]
    },
    {
      id: 2,
      title: "School Counselor",
      department: "Administration",
      status: "Open",
      type: "Full-Time",
      experience: "Lead",
      location: "In-Office",
      responsibilities: [
        "Provide counseling services to students facing academic and personal challenges",
        "Conduct group counseling sessions on various developmental topics",
        "Assist students in career planning and college applications",
        "Work with parents and teachers to support student wellbeing"
      ],
      reporting: "Reports to School Principal",
      teamCollaboration: "Works with teaching faculty, parents, and external specialists",
      salary: "Competitive package based on qualifications",
      benefits: ["Mental health support", "Flexible hours", "Professional training", "Work-life balance initiatives"]
    },
    {
      id: 3,
      title: "Web Developer",
      department: "Tech",
      status: "Open",
      type: "Full-Time",
      experience: "Mid",
      location: "Remote",
      responsibilities: [
        "Maintain and enhance school website and learning management systems",
        "Develop new web applications to support academic and administrative functions",
        "Ensure website security and performance optimization",
        "Train staff on using digital platforms effectively"
      ],
      reporting: "Reports to IT Manager",
      teamCollaboration: "Works with academic departments and administration",
      salary: "Competitive based on skills and experience",
      benefits: ["Remote work options", "Latest technology tools", "Skills development budget", "Flexible hours"]
    },
    {
      id: 4,
      title: "Admissions Coordinator",
      department: "Operations",
      status: "Open",
      type: "Full-Time",
      experience: "Fresher",
      location: "In-Office",
      responsibilities: [
        "Handle student enrollment and registration processes",
        "Conduct school tours for prospective families",
        "Prepare admission materials and information packages",
        "Maintain accurate records of applications and admissions"
      ],
      reporting: "Reports to Admissions Director",
      teamCollaboration: "Works with administration, faculty, and finance department",
      salary: "Starting package with growth opportunities",
      benefits: ["Performance bonuses", "Professional growth path", "Regular team events", "Education allowance"]
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      status: "Open",
      type: "Part-Time",
      experience: "Mid",
      location: "Hybrid",
      responsibilities: [
        "Develop and implement marketing strategies for the school",
        "Manage social media accounts and digital marketing campaigns",
        "Create content for school website, brochures, and newsletters",
        "Organize events to enhance school visibility and reputation"
      ],
      reporting: "Reports to Communications Director",
      teamCollaboration: "Works with administration, events team, and external vendors",
      salary: "Competitive hourly rate plus performance incentives",
      benefits: ["Flexible work schedule", "Growth opportunities", "Creative freedom", "Event participation"]
    },
    {
      id: 6,
      title: "HR Assistant",
      department: "HR",
      status: "Open",
      type: "Intern",
      experience: "Fresher",
      location: "In-Office",
      responsibilities: [
        "Assist with recruitment and onboarding processes",
        "Help maintain employee records and documentation",
        "Support staff engagement initiatives and events",
        "Assist in implementing HR policies and procedures"
      ],
      reporting: "Reports to HR Manager",
      teamCollaboration: "Works with all departments and staff members",
      salary: "Stipend with performance-based conversion opportunity",
      benefits: ["Learning opportunities", "Mentorship", "Networking events", "Certificate of experience"]
    }
  ];

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => 
    (filterDepartment === "All" || job.department === filterDepartment) &&
    (filterLocation === "All" || job.location === filterLocation) &&
    (filterExperience === "All" || job.experience === filterExperience)
  );

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job);
    setIsJobDetailsOpen(true);
  };

  const handleApplyNow = () => {
    setIsJobDetailsOpen(false);
    setIsApplicationFormOpen(true);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplicationFormOpen(false);
    setIsConfirmationOpen(true);
  };

  const getDepartmentColor = (department: Department) => {
    const colors: Record<Department, string> = {
      "Tech": "bg-blue-100 text-blue-800",
      "Marketing": "bg-purple-100 text-purple-800",
      "HR": "bg-pink-100 text-pink-800",
      "Operations": "bg-amber-100 text-amber-800",
      "Teaching": "bg-green-100 text-green-800",
      "Administration": "bg-indigo-100 text-indigo-800"
    };
    return colors[department];
  };

  const getStatusColor = (status: JobStatus) => {
    return status === "Open" 
      ? "bg-green-100 text-green-800" 
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Find Your Next Role. Build a Career That Matters." 
        subtitle="View open roles, apply directly, and unlock your full potential with us at Chankya International Academy."
        showCta={true}
        ctaText="View Open Roles"
        ctaLink="#opportunities"
        background="/images/career-bg.jpg"
      />

      {/* Filterable Opportunity Grid */}
      <section id="opportunities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Open Opportunities</h2>
          
          {/* Filters */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            {/* Department Filter */}
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="department-filter">Department</Label>
              <select 
                id="department-filter"
                className="w-full mt-1 rounded-md border border-gray-300 p-2"
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value as Department | "All")}
              >
                <option value="All">All Departments</option>
                <option value="Tech">Tech</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Operations">Operations</option>
                <option value="Teaching">Teaching</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
            
            {/* Location Filter */}
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="location-filter">Location</Label>
              <select 
                id="location-filter"
                className="w-full mt-1 rounded-md border border-gray-300 p-2"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value as Location | "All")}
              >
                <option value="All">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            
            {/* Experience Filter */}
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="experience-filter">Experience</Label>
              <select 
                id="experience-filter"
                className="w-full mt-1 rounded-md border border-gray-300 p-2"
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value as Experience | "All")}
              >
                <option value="All">All Levels</option>
                <option value="Fresher">Fresher</option>
                <option value="Mid">Mid-Level</option>
                <option value="Lead">Senior/Lead</option>
              </select>
            </div>
          </div>
          
          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{job.type}</CardDescription>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-gray-500" />
                      <span className={`text-sm font-medium px-2 py-0.5 rounded ${getDepartmentColor(job.department)}`}>
                        {job.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Experience: {job.experience}</span>
                      <span className="mx-1.5 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">Location: {job.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2" 
                    onClick={() => handleViewDetails(job)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No positions match your filters. Try adjusting your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setFilterDepartment("All");
                  setFilterLocation("All");
                  setFilterExperience("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Company Policies & Perks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Why Work With Us</h2>
          
          <Tabs defaultValue="culture">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              <TabsTrigger value="culture">Culture & Policies</TabsTrigger>
              <TabsTrigger value="wellness">Wellness Support</TabsTrigger>
              <TabsTrigger value="learning">Learning & Growth</TabsTrigger>
              <TabsTrigger value="balance">Work-Life Balance</TabsTrigger>
              <TabsTrigger value="events">Team & Recognition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="culture" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Culture & Values</CardTitle>
                  <CardDescription>What makes Chankya International Academy special</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>At Chankya International Academy, we foster a culture built on excellence, innovation, and respect. Our workplace celebrates diversity and emphasizes continuous improvement.</p>
                    
                    <h4 className="font-medium text-lg">Key Policies:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Equal opportunity employment</li>
                      <li>Zero tolerance for discrimination</li>
                      <li>Open-door communication policy</li>
                      <li>Regular performance reviews with constructive feedback</li>
                      <li>Employee-friendly grievance redressal mechanism</li>
                    </ul>
                    
                    <p>We believe in nurturing not just our students but also our staff, creating an environment where everyone can thrive professionally and personally.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="wellness" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Wellness & Mental Health Support</CardTitle>
                  <CardDescription>Because your wellbeing matters to us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>We understand that a healthy mind leads to better productivity and satisfaction. Our wellness initiatives include:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comprehensive health insurance covering mental health services</li>
                      <li>Regular wellness workshops and stress management sessions</li>
                      <li>Access to professional counseling services</li>
                      <li>Meditation and yoga facilities on campus</li>
                      <li>Mental health days included in leave policy</li>
                    </ul>
                    
                    <p>We strive to create a supportive atmosphere where staff feel valued and cared for beyond their professional contributions.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="learning" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Learning & Upskilling Support</CardTitle>
                  <CardDescription>Grow with us professionally</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Continuous learning is at the heart of our institution. We support our staff's professional development through:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Annual professional development allowance for courses and certifications</li>
                      <li>Regular in-house training workshops and skill development programs</li>
                      <li>Opportunities to attend conferences and educational events</li>
                      <li>Mentorship programs pairing junior staff with experienced professionals</li>
                      <li>Clear career progression paths within the organization</li>
                    </ul>
                    
                    <p>We believe in investing in our people, helping them acquire new skills that benefit both their personal growth and our institution's excellence.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="balance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Leave & Work-Life Balance</CardTitle>
                  <CardDescription>Flexibility that respects your personal life</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>We value the importance of rest and personal time in maintaining productivity and job satisfaction:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Generous paid time off including personal and sick leave</li>
                      <li>Summer breaks aligned with academic calendar</li>
                      <li>Flexible working arrangements where possible</li>
                      <li>Parental leave for new parents</li>
                      <li>Sabbatical options for long-term employees</li>
                      <li>Remote work options for eligible positions</li>
                    </ul>
                    
                    <p>Our policies are designed to ensure our staff can manage their professional responsibilities while maintaining a fulfilling personal life.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="events" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Team Events & Recognition</CardTitle>
                  <CardDescription>Celebrating achievements and building community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>We believe in acknowledging excellence and fostering a sense of community among our staff:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Annual Teacher Excellence Awards recognizing outstanding contributions</li>
                      <li>Quarterly staff appreciation events</li>
                      <li>Team-building retreats and outings</li>
                      <li>Recognition program for innovative teaching practices</li>
                      <li>Service anniversary celebrations</li>
                      <li>Cultural and festival celebrations</li>
                    </ul>
                    
                    <p>We create opportunities for our staff to connect beyond work responsibilities, building a collaborative and supportive community.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Guide & Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-4">How to Create a Great Portfolio</h2>
              <p className="text-gray-600 mb-6">Stand out from other applicants with a well-crafted portfolio that showcases your skills and experience.</p>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link size={18} />
                    Creating Your Portfolio Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>A well-organized portfolio gives you a significant advantage in the application process. Here's how to create one:</p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h4 className="font-medium text-lg text-blue-700">Recommended Tools:</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1.5">
                      <li>Notion (free templates available)</li>
                      <li>Google Drive (public view settings)</li>
                      <li>Behance (for creative roles)</li>
                      <li>Personal website builders like Carrd</li>
                      <li>LinkedIn profile (comprehensive version)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg">Key Elements to Include:</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Professional resume with education and work history</li>
                      <li>Past projects with measurable outcomes</li>
                      <li>Certificates and relevant qualifications</li>
                      <li>Testimonials or references from previous employers</li>
                      <li>Teaching philosophy or professional statement</li>
                      <li>Sample lesson plans or work samples (if applicable)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <h4 className="font-medium text-amber-700">Pro Tips:</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1.5">
                      <li>Make sure your portfolio link is accessible to anyone with the link</li>
                      <li>Keep navigation simple and intuitive</li>
                      <li>Include a brief video introduction for a personal touch</li>
                      <li>Highlight achievements relevant to the position you're applying for</li>
                      <li>Check all links and documents before submitting</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-school-green text-white h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Need Support?</CardTitle>
                  <CardDescription className="text-gray-200">We're here to help with your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-gray-200 text-sm mt-1">careers@chankyainternationalacademy.org</p>
                      <p className="text-gray-200 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">Phone Support</h4>
                      <p className="text-gray-200 text-sm mt-1">+91 70176 08009</p>
                      <p className="text-gray-200 text-sm">Monday to Friday: 9 AM - 5 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">FAQ</h4>
                      <p className="text-gray-200 text-sm mt-1">Check our frequently asked questions about the application process</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-white text-school-green hover:bg-gray-100">
                    Contact HR Team
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={isJobDetailsOpen} onOpenChange={setIsJobDetailsOpen}>
        <DialogContent className="max-w-3xl">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 items-center mt-2">
                  <span className={`px-2 py-0.5 text-sm font-medium rounded ${getDepartmentColor(selectedJob.department)}`}>
                    {selectedJob.department}
                  </span>
                  <span className="mx-1.5 text-gray-300">•</span>
                  <span>{selectedJob.type}</span>
                  <span className="mx-1.5 text-gray-300">•</span>
                  <span>{selectedJob.location}</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 my-2">
                <div>
                  <h4 className="text-lg font-medium mb-2">Roles & Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Reporting Structure</h4>
                    <p className="text-gray-600">{selectedJob.reporting}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Team Collaboration</h4>
                    <p className="text-gray-600">{selectedJob.teamCollaboration}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Salary & Compensation</h4>
                  <p className="text-gray-600">{selectedJob.salary}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Benefits & Perks</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsJobDetailsOpen(false)}>
                  Close
                </Button>
                <Button onClick={handleApplyNow}>
                  Apply Now
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Form Modal */}
      <Dialog open={isApplicationFormOpen} onOpenChange={setIsApplicationFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Application Form</DialogTitle>
            <DialogDescription>
              {selectedJob ? `Apply for ${selectedJob.title}` : "Submit your application"}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitApplication} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" placeholder="Enter your full name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio Link</Label>
              <Input id="portfolio" placeholder="https://your-portfolio-link.com" required />
              <p className="text-sm text-gray-500">See our guide on creating effective portfolio links</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume (PDF, Max 5MB)</Label>
              <Input id="resume" type="file" accept=".pdf" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover Letter / Message</Label>
              <Textarea 
                id="cover-letter" 
                placeholder="Tell us why you're interested in this position and what makes you a great fit"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="terms" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I've read the guidelines to create a valid portfolio link
                </Label>
              </div>
            </div>
            
            <DialogFooter className="pt-4">
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Your application has been successfully submitted. We'll review it and get back to you within 48 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <div className="bg-green-100 text-green-800 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsConfirmationOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Career;
