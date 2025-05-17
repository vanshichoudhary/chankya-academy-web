import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Legal = () => {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
      <PageHeader 
        title="Legal Information" 
        subtitle="Policies, terms, and legal documents of Chankya International Academy" 
        background="/placeholder.svg"
      />

      {/* Legal Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Our Policies & Terms</h2>
            <p className="text-gray-600 mb-8">
              At Chankya International Academy, we are committed to transparency and clear communication. This page contains important legal information, policies, and terms that govern our operations and your relationship with our institution, in compliance with Indian regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Information */}
      <section className="py-8 bg-gray-50" id="trust">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Baba Akhand Bharat Trust" 
              subtitle="Legal information about our founding trust"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  Baba Akhand Bharat Trust is a registered educational trust under the Indian Trusts Act, 1882, dedicated to advancing quality education in India.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Trust Registration
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>Registration details:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Registered under the Indian Trusts Act, 1882</li>
                        <li>Registration Number: BAB/TRUST/2005/7890</li>
                        <li>Date of Registration: 15th March, 2005</li>
                        <li>Registered Office: Rampur Maniharan, Uttar Pradesh</li>
                        <li>PAN: AABTB1234A</li>
                        <li>TAN: DELB12345C</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Trust Board Members
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>The Trust is governed by a board of trustees consisting of:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Chairperson: Dr. Rajendra Prasad</li>
                        <li>Secretary: Mrs. Sunita Sharma</li>
                        <li>Treasurer: Mr. Vikram Singh</li>
                        <li>Member: Dr. Anita Desai</li>
                        <li>Member: Prof. Mahesh Kumar</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Trust Objectives
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The primary objectives of Baba Akhand Bharat Trust include:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Establishing and maintaining educational institutions</li>
                        <li>Promoting quality education accessible to all sections of society</li>
                        <li>Preserving and promoting Indian cultural values and heritage</li>
                        <li>Supporting educational research and development</li>
                        <li>Providing scholarships to deserving students</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Financial Information
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The Trust maintains transparent financial records and is audited annually by certified chartered accountants. Financial statements are filed with appropriate authorities as per Indian law. The Trust enjoys tax exemptions under Section 12A and 80G of the Income Tax Act, 1961.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Registrations & Compliance */}
      <section className="py-8 bg-white" id="compliance">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="School Registrations & Compliance" 
              subtitle="Legal frameworks and compliance information"
            />
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      School Recognition
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>Chankya International Academy is recognized by:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Affiliated to CBSE (Central Board of Secondary Education)</li>
                        <li>Affiliation Number: 123456</li>
                        <li>Recognition Number: UP/2010/0023</li>
                        <li>Recognized by the Department of Education, Government of Uttar Pradesh</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Statutory Compliances
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>The school adheres to all statutory compliances including:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fire Safety Certificate as per National Building Code</li>
                        <li>Building Safety Certificate from competent authorities</li>
                        <li>Water and Sanitary Certificate from Public Health Department</li>
                        <li>Health and Hygiene Certificate from Municipal Authority</li>
                        <li>NOC from Transport Department for school buses</li>
                        <li>Compliance with RTE Act, 2009 requirements</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Staff & Safety Compliances
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The school maintains the following compliances:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Police verification of all staff members</li>
                        <li>CCTV surveillance as per CBSE guidelines</li>
                        <li>Child Protection Policy in compliance with POCSO Act, 2012</li>
                        <li>Anti-ragging committee as per regulatory requirements</li>
                        <li>Internal Complaints Committee as per Sexual Harassment Act</li>
                        <li>First aid facilities and medical room</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Financial Compliances
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The school maintains:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>GST Registration: 09AABTB1234A1Z5</li>
                        <li>Annual audited financial statements</li>
                        <li>Fee structure approved by Fee Regulatory Committee</li>
                        <li>Compliance with Income Tax regulations</li>
                        <li>Separate accounts for school funds and trust funds</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-8 bg-gray-50" id="privacy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Privacy Policy" 
              subtitle="How we collect, use, and protect your personal information"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  This Privacy Policy describes how Chankya International Academy collects, uses, and discloses personal information of students, parents, staff, and visitors.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Information We Collect
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>We collect personal information including but not limited to:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Contact information (name, address, email, phone number)</li>
                        <li>Student academic records and performance data</li>
                        <li>Health information relevant to student welfare</li>
                        <li>Financial information for fee processing</li>
                        <li>Photographs and videos of school activities</li>
                        <li>Website usage data through cookies and analytics</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      How We Use Information
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>We use the collected information for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Providing educational services and student support</li>
                        <li>Communicating with parents about student progress</li>
                        <li>Administrative purposes including fee management</li>
                        <li>Complying with legal obligations</li>
                        <li>School operations and improvement initiatives</li>
                        <li>Marketing and promotion of school activities (with consent)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Information Security
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        We implement appropriate security measures to protect personal information from unauthorized access, alteration, disclosure, or destruction. These measures include access controls, encryption, secure storage, and regular security assessments.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <p>
                  For more detailed information about our privacy practices, please contact our Privacy Officer at privacy@chankyaacademy.edu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms of Service */}
      <section className="py-8 bg-white" id="terms">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Terms of Service" 
              subtitle="The terms governing your relationship with Chankya International Academy"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  These Terms of Service outline the rules, guidelines, and agreements between Chankya International Academy and students, parents, and other stakeholders.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      General Terms
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>
                        By enrolling in or associating with Chankya International Academy, you agree to adhere to our policies, procedures, and code of conduct. The school reserves the right to modify these terms with appropriate notice to stakeholders.
                      </p>
                      <p>
                        All students and parents are expected to familiarize themselves with the school handbook, which contains detailed rules and expectations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Intellectual Property
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        All materials provided by the school, including curriculum resources, worksheets, and digital content, are the intellectual property of Chankya International Academy or their respective owners. These materials may not be reproduced, distributed, or used for commercial purposes without prior written permission.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Liability Limitations
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        While we take all reasonable precautions to ensure the safety and security of students and their belongings, Chankya International Academy is not liable for personal injuries or loss of property occurring on school premises or during school activities, except in cases of proven negligence.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Policy */}
      <section className="py-8 bg-gray-50" id="admission">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Admission Policy" 
              subtitle="Guidelines and procedures for admission to Chankya International Academy"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  Our admission policy is designed to be fair, transparent, and inclusive. We welcome applications from students of diverse backgrounds who demonstrate potential and alignment with our educational values.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Eligibility Criteria
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>Admission to different classes is based on:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Age appropriateness for the respective grade</li>
                        <li>Academic readiness as determined by assessment tests</li>
                        <li>Availability of seats in the requested grade</li>
                        <li>Compliance with document submission requirements</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Application Process
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>The admission process involves:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Submission of completed application form with required documents</li>
                        <li>Payment of non-refundable application fee</li>
                        <li>Entrance assessment (academic and aptitude)</li>
                        <li>Interview with student and parents</li>
                        <li>Review by admission committee</li>
                        <li>Communication of decision and fee payment for confirmed seats</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Selection Criteria
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Selection is based on a holistic evaluation of the student's academic potential, co-curricular interests, character, and the family's alignment with the school's educational philosophy. While we strive to accommodate all qualified applicants, preference may be given to siblings of current students and children of alumni.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Refund Policy */}
      <section className="py-8 bg-white" id="refund">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Refund Policy" 
              subtitle="Terms and conditions for refunds of fees and payments"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  This policy outlines the conditions under which refunds may be processed for various fees and payments made to Chankya International Academy.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Admission Fee Refund
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        The admission fee and registration fee are non-refundable under any circumstances as they cover the administrative costs of processing applications and securing seats.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Tuition Fee Refund
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 space-y-2">
                      <p>Tuition fee refunds are processed according to the following schedule:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Withdrawal before commencement of academic session: 75% refund</li>
                        <li>Withdrawal within first month of academic session: 50% refund</li>
                        <li>Withdrawal after first month of academic session: No refund</li>
                      </ul>
                      <p>A written application for withdrawal must be submitted for refund processing.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Other Fees and Charges
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        Refunds for transportation fees, uniform costs, and other miscellaneous charges are considered on a case-by-case basis depending on the circumstances and timing of the request. Generally, fees for services already rendered or materials already provided are not refundable.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <p>
                  All refund requests must be submitted in writing to the Finance Office. Processing time for approved refunds is typically 2-4 weeks from the date of approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTI Information */}
      <section className="py-8 bg-gray-50" id="rti">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Right to Information" 
              subtitle="Information as per RTI Act, 2005"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-gray-600">
                <p>
                  In accordance with the Right to Information Act, 2005, Chankya International Academy provides the following information:
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      Public Information Officer
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-none space-y-1">
                        <li><strong>Name:</strong> Mr. Ramesh Kumar</li>
                        <li><strong>Designation:</strong> Administrative Officer</li>
                        <li><strong>Contact:</strong> +91 9876543210</li>
                        <li><strong>Email:</strong> rti@chankyaacademy.edu</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      First Appellate Authority
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-none space-y-1">
                        <li><strong>Name:</strong> Dr. Sanjay Mathur</li>
                        <li><strong>Designation:</strong> Principal</li>
                        <li><strong>Contact:</strong> +91 9876543211</li>
                        <li><strong>Email:</strong> principal@chankyaacademy.edu</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-school-green">
                      How to File an RTI Application
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>
                        To file an RTI application, please submit a written request to the Public Information Officer along with the prescribed fee. The application should clearly specify the information sought.
                      </p>
                      <p className="mt-2">
                        Application Fee: ₹10/- through cash/DD/banker's cheque in favor of "Chankya International Academy"
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Inquiries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-school-green mb-4">Legal Inquiries</h2>
            <p className="text-gray-600 mb-6">
              For questions or clarifications regarding our legal policies, please contact our administrative office:
            </p>
            <div className="bg-gray-50 inline-block px-8 py-4 rounded-lg">
              <p className="font-medium">Email: legal@chankyaacademy.edu</p>
              <p className="font-medium">Phone: +91 9876543210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
