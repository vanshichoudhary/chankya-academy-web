import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ButtonLink from "@/components/ButtonLink";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, Book, Shirt, BookOpen, FileText, ShoppingBag, Laptop, IndianRupee, CreditCard, AlertCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsApp";
import { toast } from "sonner";

const Store = () => {
  const [cartItems, setCartItems] = useState(0);
  const navigate = useNavigate();

  const addToCart = (product) => {
    openWhatsApp(product.name, product.price);
    toast.success("Opening WhatsApp to place your order");
  };

  const physicalProducts = [
    {
      id: 1,
      name: "School Uniform (Summer)",
      category: "Uniforms",
      price: 1200,
      image: "/placeholder.svg",
      description: "Official summer uniform for all students including shirt, pants/skirt, and tie."
    },
    {
      id: 2,
      name: "School Uniform (Winter)",
      category: "Uniforms",
      price: 1800,
      image: "/placeholder.svg",
      description: "Official winter uniform including sweater, jacket, and full sleeves shirt."
    },
    {
      id: 3,
      name: "Sports Kit",
      category: "Uniforms",
      price: 950,
      image: "/placeholder.svg",
      description: "Sports uniform including track suit, t-shirt, and shorts for physical education classes."
    },
    {
      id: 4,
      name: "School Bag",
      category: "Accessories",
      price: 850,
      image: "/placeholder.svg",
      description: "Durable and ergonomic school bag with the school logo and multiple compartments."
    },
    {
      id: 5,
      name: "Textbook Set - Grade 1",
      category: "Books",
      price: 1500,
      image: "https://i.ibb.co/4qwtJss/unnamed-10.png",
      description: "Complete set of textbooks for Grade 1 students as per the curriculum."
    },
    {
      id: 6,
      name: "Textbook Set - Grade 2",
      category: "Books",
      price: 1600,
      image: "/placeholder.svg",
      description: "Complete set of textbooks for Grade 2 students as per the curriculum."
    },
    {
      id: 7,
      name: "School Shoes",
      category: "Accessories",
      price: 750,
      image: "/placeholder.svg",
      description: "Black school shoes that comply with the uniform requirements."
    },
    {
      id: 8,
      name: "Stationery Kit",
      category: "Accessories",
      price: 450,
      image: "/placeholder.svg",
      description: "Essential stationery items including notebooks, pens, pencils, and geometry box."
    }
  ];

  const digitalResources = [
    {
      id: 1,
      name: "Mathematics Study Materials",
      grade: "Grades 6-8",
      fileType: "PDF",
      fileSize: "15 MB",
      image: "https://i.ibb.co/R1rq4VG/unnamed-9.png",
      description: "Comprehensive study materials for mathematics covering all topics in the curriculum with practice problems and solutions."
    },
    {
      id: 2,
      name: "Science Laboratory Manual",
      grade: "Grades 9-10",
      fileType: "PDF",
      fileSize: "20 MB",
      image: "/placeholder.svg",
      description: "Detailed laboratory manual with instructions for science experiments, observations, and analysis."
    },
    {
      id: 3,
      name: "English Literature Notes",
      grade: "Grades 11-12",
      fileType: "PDF",
      fileSize: "12 MB",
      image: "/placeholder.svg",
      description: "Notes for English literature including character analysis, themes, and critical appreciation of texts in the syllabus."
    },
    {
      id: 4,
      name: "History Study Guide",
      grade: "Grades 8-10",
      fileType: "PDF",
      fileSize: "18 MB",
      image: "/placeholder.svg",
      description: "Comprehensive study guide for history with timelines, key events, figures, and practice questions."
    },
    {
      id: 5,
      name: "Computer Science Programming Resources",
      grade: "Grades 9-12",
      fileType: "ZIP",
      fileSize: "25 MB",
      image: "/placeholder.svg",
      description: "Programming resources, code examples, and practice exercises for computer science students."
    },
    {
      id: 6,
      name: "Geography Maps & Workbook",
      grade: "Grades 6-8",
      fileType: "PDF",
      fileSize: "22 MB",
      image: "/placeholder.svg",
      description: "Geography workbook with maps, diagrams, and exercises for practice and revision."
    }
  ];

  // Fee payment options
  const feePayments = [
    {
      id: 1,
      name: "Tuition Fee Payment",
      description: "Pay your quarterly or annual tuition fees online",
      amount: "Varies by class",
      icon: <Book size={40} className="text-school-green" />,
      buttonText: "Pay Tuition Fee"
    },
    {
      id: 2,
      name: "Transportation Fee",
      description: "Pay school bus and transportation charges",
      amount: "₹3,000 - ₹8,000",
      icon: <ShoppingBag size={40} className="text-school-green" />,
      buttonText: "Pay Transport Fee"
    },
    {
      id: 3,
      name: "Examination Fee",
      description: "Pay for term exams and assessment tests",
      amount: "₹500 - ₹2,000",
      icon: <FileText size={40} className="text-school-green" />,
      buttonText: "Pay Exam Fee"
    },
    {
      id: 4,
      name: "Activity & Excursion Fee",
      description: "Pay for extracurricular activities and field trips",
      amount: "₹1,000 - ₹5,000",
      icon: <Laptop size={40} className="text-school-green" />,
      buttonText: "Pay Activity Fee"
    }
  ];

  const handlePayment = (feeType) => {
    toast.info(`Opening payment gateway for ${feeType}`);
    // In a real implementation, this would redirect to a payment gateway
    navigate("/payment", { state: { feeType } });
  };

  return (
    <div>
      <PageHeader 
        title="School Store" 
        subtitle="Purchase uniforms, books, pay fees, and access free digital resources" 
        background="https://i.ibb.co/y2ZnvYL/Whats-App-Image-2025-04-20-at-19-24-50-89ab4c50.jpg"
      />

      {/* Store Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-school-green mb-6">Welcome to CIA Store</h2>
            <p className="text-gray-600 mb-8">
              Our school store offers everything students need for their academic journey, from uniforms and books to digital resources. Parents can conveniently purchase school supplies and pay fees online.
            </p>
          </div>
        </div>
      </section>

      {/* Store Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="physical" className="mb-12">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="physical" className="flex items-center gap-2">
                <ShoppingBag size={18} />
                <span>Physical Store</span>
              </TabsTrigger>
              <TabsTrigger value="digital" className="flex items-center gap-2">
                <Laptop size={18} />
                <span>Digital Resources</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard size={18} />
                <span>Pay Fees</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Physical Store */}
            <TabsContent value="physical">
              <div className="flex justify-between items-center mb-8">
                <SectionTitle 
                  title="Physical Store" 
                  subtitle="Purchase uniforms, books, and other school supplies via WhatsApp"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {physicalProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>
                            <Badge variant="outline" className="mt-1">
                              {product.category}
                            </Badge>
                          </CardDescription>
                        </div>
                        <span className="font-bold text-school-green">₹{product.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Order via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Looking for something specific? Contact us directly on WhatsApp for custom orders.</p>
                <Button onClick={() => openWhatsApp("Custom Order")} variant="outline" className="border-school-green text-school-green hover:bg-school-green hover:text-white">
                  Request Custom Order
                </Button>
              </div>
            </TabsContent>
            
            {/* Digital Resources - Keep this section mostly the same */}
            <TabsContent value="digital">
              <SectionTitle 
                title="Digital Resources" 
                subtitle="Free downloadable materials to support student learning"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden">
                     <div className="h-40 overflow-hidden bg-gray-100 flex items-center justify-center">
                        {resource.image ? (
                          <img src={resource.image} alt={resource.name} className="w-full h-full object-cover" />
                        ) : (
                          resource.fileType === "PDF" ? (
                            <FileText size={60} className="text-gray-400" />
                          ) : (
                            <Book size={60} className="text-gray-400" />
                          )
                        )}
                      </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{resource.name}</CardTitle>
                          <CardDescription className="flex flex-col items-start">
                            <Badge variant="outline" className="mt-1">
                              {resource.grade}
                            </Badge>
                            <span className="text-xs mt-1">
                              {resource.fileType} • {resource.fileSize}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-gray-600 text-sm line-clamp-2">{resource.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        variant="outline"
                        className="w-full border-school-green text-school-green hover:bg-school-green hover:text-white"
                      >
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="bg-school-beige p-6 rounded-lg shadow-md mt-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 flex justify-center">
                    <BookOpen size={80} className="text-school-green" />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-serif font-bold text-school-green mb-2">Student Resource Portal</h3>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive online portal offers additional resources including video lectures, interactive practice exercises, and past examination papers for all grades. Access requires student login credentials.
                    </p>
                    <Button className="bg-school-green hover:bg-school-brown text-white">
                      Access Resource Portal
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* New Fee Payments Tab */}
            <TabsContent value="payments">
              <SectionTitle 
                title="Fee Payments" 
                subtitle="Pay school fees securely through our online payment system"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {feePayments.map((fee) => (
                  <Card key={fee.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-gray-50 p-6 flex justify-center items-center">
                        {fee.icon}
                      </div>
                      <div className="md:w-3/4 p-6">
                        <h3 className="text-xl font-bold text-school-green mb-2">{fee.name}</h3>
                        <p className="text-gray-600 mb-3">{fee.description}</p>
                        <div className="flex items-center mb-4">
                          <IndianRupee size={16} className="text-gray-500 mr-1" />
                          <span className="text-gray-700 font-medium">{fee.amount}</span>
                        </div>
                        <Button 
                          className="w-full bg-school-green hover:bg-school-brown text-white"
                          onClick={() => handlePayment(fee.name)}
                        >
                          <CreditCard size={16} className="mr-2" />
                          {fee.buttonText}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-10">
                <div className="flex items-start">
                  <AlertCircle className="text-amber-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Important Information</h4>
                    <ul className="text-amber-700 text-sm space-y-2">
                      <li>All online payments are secured by industry-standard encryption</li>
                      <li>Please keep your payment receipt for reference</li>
                      <li>For any payment-related issues, contact our accounts department</li>
                      <li>Late payment fees may apply after due dates</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-school-green mb-4">Alternative Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Bank Transfer</h4>
                    <p className="text-sm text-gray-600">Transfer fees directly to our bank account</p>
                    <ButtonLink 
                      href="https://forms.google.com/bank-details" 
                      variant="outline"
                      className="mt-3 border-school-green text-school-green hover:bg-school-green hover:text-white"
                    >
                      Get Bank Details
                    </ButtonLink>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">School Office</h4>
                    <p className="text-sm text-gray-600">Pay at the school accounts office</p>
                    <Button 
                      variant="outline"
                      className="mt-3 border-school-green text-school-green hover:bg-school-green hover:text-white"
                      onClick={() => openWhatsApp("Payment at School Office")}
                    >
                      Contact Office
                    </Button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Request Fee Structure</h4>
                    <p className="text-sm text-gray-600">Get detailed fee structure for all classes</p>
                    <ButtonLink 
                      href="https://forms.google.com/fee-structure-request" 
                      variant="outline"
                      className="mt-3 border-school-green text-school-green hover:bg-school-green hover:text-white"
                    >
                      Request Details
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Store Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-school-green mb-4">Store Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday & Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  The store remains open during school hours and special extended hours during the beginning of new academic sessions.
                </p>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-school-green mb-4">Payment Information</h3>
              <p className="text-gray-600 mb-4">
                We accept various payment methods for your convenience:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>Cash payments at the school store</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>Debit and Credit cards</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>Online bank transfers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>UPI payments</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  For bulk orders, special payment arrangements can be made by contacting the store manager.
                </p>
              </div>
            </div>
            
            {/* Order & Delivery */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-school-green mb-4">Order & Delivery</h3>
              <p className="text-gray-600 mb-4">
                For your convenience, we offer multiple ways to purchase and receive items:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>In-store purchase and immediate pickup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>Pre-order via phone for later pickup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-school-green mr-2"></div>
                  <span>Online ordering with delivery options</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-text-gray-600 text-sm">
                  For inquiries about orders or delivery, please contact:
                  <br />
                  <span className="font-medium">store@chankyaacademy.edu</span>
                  <br />
                  <span className="font-medium">+91 9876543210</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Orders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-school-green text-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-serif font-bold mb-4">Special & Bulk Orders</h3>
                <p className="text-gray-200 mb-6">
                  Need customized uniforms, bulk textbook orders, or special items? We provide tailored solutions for specific requirements. Our store management can assist with bulk orders for classes, special sizes for uniforms, and custom school supplies.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Shirt className="mr-3 text-school-gold h-5 w-5" />
                    <p className="text-gray-200">Custom uniform sizing and alterations</p>
                  </div>
                  <div className="flex items-start">
                    <Book className="mr-3 text-school-gold h-5 w-5" />
                    <p className="text-gray-200">Class-wise bulk textbook packages</p>
                  </div>
                  <div className="flex items-start">
                    <ShoppingBag className="mr-3 text-school-gold h-5 w-5" />
                    <p className="text-gray-200">Personalized school supply kits</p>
                  </div>
                </div>
                <Button className="bg-white text-school-green hover:bg-gray-200">
                  Contact for Special Orders
                </Button>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="/placeholder.svg" 
                  alt="School Store" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
