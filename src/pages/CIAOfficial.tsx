import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import DownloadCard from "@/components/DownloadCard";
import ButtonLink from "@/components/ButtonLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  CreditCard, 
  HelpCircle, 
  MessageSquare,
  FileQuestion,
  Send,
  FileInput,
  ClipboardList
} from "lucide-react";

const CIAOfficial = () => {
  const documents = {
    applicationForms: [
      {
        title: "Admission Application Form",
        description: "General application form for student admission to all classes",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Transfer Certificate Form",
        description: "Application for obtaining transfer certificate",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Scholarship Application Form",
        description: "Application for scholarship consideration based on merit or financial need",
        fileUrl: "#",
        fileType: "pdf" as const
      }
    ],
    brochures: [
      {
        title: "School Brochure 2024-25",
        description: "Comprehensive information about the school, facilities, and programs",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Academic Programs Overview",
        description: "Detailed information about our academic programs and curriculum",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Extracurricular Activities Guide",
        description: "Information about sports, clubs, and extracurricular opportunities",
        fileUrl: "#",
        fileType: "pdf" as const
      }
    ],
    curriculum: [
      {
        title: "Primary School Curriculum",
        description: "Curriculum details for classes KG to 5th",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Middle School Curriculum",
        description: "Curriculum details for classes 6th to 8th",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Secondary School Curriculum",
        description: "Curriculum details for classes 9th to 12th",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Academic Calendar 2024-25",
        description: "School calendar with important dates, holidays, and events",
        fileUrl: "#",
        fileType: "doc" as const
      }
    ],
    feeStructure: [
      {
        title: "Fee Structure 2024-25",
        description: "Comprehensive fee details for all classes and programs",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Payment Guidelines",
        description: "Information about payment methods, deadlines, and policies",
        fileUrl: "#",
        fileType: "pdf" as const
      },
      {
        title: "Scholarship & Financial Aid Information",
        description: "Details about available scholarships and financial assistance programs",
        fileUrl: "#",
        fileType: "pdf" as const
      }
    ]
  };

  return (
    <div>
      <PageHeader 
        title="CIA Official" 
        subtitle="Access official documents, forms, and information" 
        background="https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg"
      />

      {/* Downloads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Official Documents & Downloads" 
            subtitle="Access and download application forms, brochures, curriculum guides, and other important documents"
            center
          />
          
          <Tabs defaultValue="application" className="mt-12">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="application" className="flex items-center gap-2">
                <FileText size={16} />
                <span className="hidden md:inline">Application Forms</span>
                <span className="md:hidden">Forms</span>
              </TabsTrigger>
              <TabsTrigger value="brochures" className="flex items-center gap-2">
                <Download size={16} />
                <span>Brochures</span>
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="flex items-center gap-2">
                <FileText size={16} />
                <span className="hidden md:inline">Curriculum</span>
                <span className="md:hidden">Curriculum</span>
              </TabsTrigger>
              <TabsTrigger value="fees" className="flex items-center gap-2">
                <CreditCard size={16} />
                <span>Fee Structure</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="application">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.applicationForms.map((doc, index) => (
                  <DownloadCard 
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    fileUrl={doc.fileUrl}
                    fileType={doc.fileType}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="brochures">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.brochures.map((doc, index) => (
                  <DownloadCard 
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    fileUrl={doc.fileUrl}
                    fileType={doc.fileType}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.curriculum.map((doc, index) => (
                  <DownloadCard 
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    fileUrl={doc.fileUrl}
                    fileType={doc.fileType}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fees">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.feeStructure.map((doc, index) => (
                  <DownloadCard 
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    fileUrl={doc.fileUrl}
                    fileType={doc.fileType}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Google Forms Section - Replaced Contact Forms */}
      <section className="py-16 bg-school-beige">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Online Forms & Inquiries" 
            subtitle="Submit applications, enquiries, and feedback through our Google Forms"
            center
          />
          
          <Tabs defaultValue="enquiry" className="mt-12">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3 mb-8">
              <TabsTrigger value="enquiry" className="flex items-center gap-2">
                <HelpCircle size={16} />
                <span>Enquiry</span>
              </TabsTrigger>
              <TabsTrigger value="application" className="flex items-center gap-2">
                <FileText size={16} />
                <span>Application</span>
              </TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>Feedback</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="enquiry">
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-green mb-3">General Enquiry Form</h3>
                <p className="text-gray-600 mb-6">
                  Have questions about our school or programs? Fill out our online enquiry form, and our team will get back to you shortly.
                </p>
                <div className="space-y-4">
                  <ButtonLink 
                    href="https://forms.google.com/enquiry-form" 
                    className="bg-school-green hover:bg-school-brown text-white"
                    icon={<Send size={18} />}
                  >
                    Fill Enquiry Form
                  </ButtonLink>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-2">What happens after you submit:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Our team reviews your enquiry within 24 hours</li>
                      <li>You'll receive an email confirmation immediately</li>
                      <li>A school representative will contact you directly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="application">
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-green mb-3">Online Application</h3>
                <p className="text-gray-600 mb-6">
                  Apply for admission by completing our detailed application form. Our admissions team will contact you with next steps.
                </p>
                <div className="space-y-4">
                  <ButtonLink 
                    href="https://forms.google.com/admission-application" 
                    className="bg-school-green hover:bg-school-brown text-white"
                    icon={<FileInput size={18} />}
                  >
                    Start Application Process
                  </ButtonLink>
                  
                  <ButtonLink 
                    href="https://forms.google.com/scholarship-application" 
                    variant="outline"
                    className="border-school-green text-school-green hover:bg-school-green hover:text-white"
                    icon={<ClipboardList size={18} />}
                  >
                    Apply for Scholarship
                  </ButtonLink>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-2">Application Process:</h4>
                    <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
                      <li>Complete the online application form</li>
                      <li>Submit required documents</li>
                      <li>Schedule an entrance assessment</li>
                      <li>Attend an interview</li>
                      <li>Receive admission decision</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="feedback">
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-green mb-3">Feedback & Suggestions</h3>
                <p className="text-gray-600 mb-6">
                  We value your feedback. Share your thoughts, suggestions, or concerns with us through our feedback form.
                </p>
                <div className="space-y-4">
                  <ButtonLink 
                    href="https://forms.google.com/feedback-form" 
                    className="bg-school-green hover:bg-school-brown text-white"
                    icon={<MessageSquare size={18} />}
                  >
                    Submit Feedback
                  </ButtonLink>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      Your feedback helps us improve our services and provide a better educational experience for all students. All submissions are reviewed by our management team.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Help Desk */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle 
                title="Help Desk" 
                subtitle="We're here to assist you with any questions or concerns"
              />
              <p className="text-gray-600 mb-6">
                Our dedicated help desk team is available to address your queries about admissions, academics, school policies, and more. Feel free to reach out through any of the following channels:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="mr-4 text-school-green">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">General Inquiries</h4>
                    <p className="text-gray-600">info@chankyaacademy.edu</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="mr-4 text-school-green">
                    <FileQuestion size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Admissions Support</h4>
                    <p className="text-gray-600">admissions@chankyaacademy.edu</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Help Desk Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday & Holidays</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="h-full bg-school-green rounded-lg overflow-hidden shadow-xl">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What is the admission process?</h4>
                      <p className="text-gray-200">
                        The admission process involves submitting an application form, attending an interview, and completing an assessment test. Details can be found in our admission brochure.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">What are the school timings?</h4>
                      <p className="text-gray-200">
                        Regular school hours are from 8:00 AM to 2:00 PM. Day boarding extends until 5:00 PM with evening meals and additional classes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Do you offer transportation services?</h4>
                      <p className="text-gray-200">
                        Yes, we provide safe and reliable transportation services covering major areas around Rampur Maniharan. Routes and fees are available in the transportation brochure.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">What extracurricular activities are offered?</h4>
                      <p className="text-gray-200">
                        We offer a wide range of activities including sports, music, dance, art, robotics, coding, and various clubs. Students are encouraged to participate in activities that align with their interests.
                      </p>
                    </div>
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

export default CIAOfficial;
