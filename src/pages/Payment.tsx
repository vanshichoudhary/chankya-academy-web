
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CreditCard, 
  IndianRupee, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight,
  Wallet,
  QrCode
} from "lucide-react";
import { toast } from "sonner";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const feeType = location.state?.feeType || "School Fee";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      if (step === 1) {
        setStep(2);
      } else {
        setSuccess(true);
        toast.success("Payment successful!");
      }
    }, 1500);
  };
  
  const goBack = () => {
    if (step > 1 && !success) {
      setStep(step - 1);
    } else {
      navigate("/store");
    }
  };
  
  useEffect(() => {
    // If there's no feeType in location state, redirect to store
    if (!location.state?.feeType) {
      navigate("/store");
    }
  }, [location.state, navigate]);
  
  if (success) {
    return (
      <div>
        <PageHeader 
          title="Payment Success" 
          subtitle="Your payment has been processed successfully" 
          background="/placeholder.svg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <CheckCircle2 size={80} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-school-green mb-4">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">
                Your payment for {feeType} has been successfully processed. A receipt has been sent to your registered email address.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-medium">TXN{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Completed</span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/store")}
                className="bg-school-green hover:bg-school-brown text-white"
              >
                Return to Store
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  return (
    <div>
      <PageHeader 
        title="Payment Gateway" 
        subtitle={`Process your payment for ${feeType}`} 
        background="/placeholder.svg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={goBack}
              className="mb-6 text-gray-600"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b">
                <h2 className="text-xl font-bold text-school-green">{feeType}</h2>
                <div className="flex items-center text-school-green font-bold text-xl">
                  <IndianRupee size={18} />
                  <span>2,500.00</span>
                </div>
              </div>
              
              {step === 1 && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Select Payment Method</h3>
                    <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "card" ? "border-school-green bg-green-50" : "border-gray-200"}`}>
                        <RadioGroupItem value="card" id="card" className="sr-only" />
                        <Label htmlFor="card" className="flex flex-col items-center cursor-pointer">
                          <CreditCard className="h-6 w-6 mb-2 text-gray-600" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                      <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "upi" ? "border-school-green bg-green-50" : "border-gray-200"}`}>
                        <RadioGroupItem value="upi" id="upi" className="sr-only" />
                        <Label htmlFor="upi" className="flex flex-col items-center cursor-pointer">
                          <QrCode className="h-6 w-6 mb-2 text-gray-600" />
                          <span>UPI Payment</span>
                        </Label>
                      </div>
                      <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "netbanking" ? "border-school-green bg-green-50" : "border-gray-200"}`}>
                        <RadioGroupItem value="netbanking" id="netbanking" className="sr-only" />
                        <Label htmlFor="netbanking" className="flex flex-col items-center cursor-pointer">
                          <Wallet className="h-6 w-6 mb-2 text-gray-600" />
                          <span>Net Banking</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="student-id" className="block mb-2">Student ID / Admission Number</Label>
                    <Input id="student-id" placeholder="Enter student ID" required />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="student-name" className="block mb-2">Student Name</Label>
                    <Input id="student-name" placeholder="Enter student name" required />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="class" className="block mb-2">Class / Grade</Label>
                    <Input id="class" placeholder="E.g. Class 8-A" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-school-green hover:bg-school-brown text-white"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Continue"}
                    {!loading && <ArrowRight size={16} className="ml-2" />}
                  </Button>
                </form>
              )}
              
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  {paymentMethod === "card" && (
                    <>
                      <div className="mb-6">
                        <Label htmlFor="card-number" className="block mb-2">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <Label htmlFor="expiry" className="block mb-2">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="block mb-2">CVV</Label>
                          <Input id="cvv" placeholder="123" type="password" required />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <Label htmlFor="name" className="block mb-2">Cardholder Name</Label>
                        <Input id="name" placeholder="Enter name on card" required />
                      </div>
                    </>
                  )}
                  
                  {paymentMethod === "upi" && (
                    <div className="mb-6 text-center">
                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <QrCode size={180} className="mx-auto mb-4" />
                        <p className="text-gray-600">Scan this QR code with any UPI app to pay</p>
                      </div>
                      <div className="mb-6">
                        <Label htmlFor="upi-id" className="block mb-2">Or enter UPI ID</Label>
                        <Input id="upi-id" placeholder="username@upi" required />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === "netbanking" && (
                    <div className="mb-6">
                      <Label htmlFor="bank" className="block mb-2">Select Bank</Label>
                      <select 
                        id="bank" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-green"
                        required
                      >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                      </select>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Fee Amount</span>
                      <div className="flex items-center">
                        <IndianRupee size={14} />
                        <span>2,500.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Processing Fee</span>
                      <div className="flex items-center">
                        <IndianRupee size={14} />
                        <span>0.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total Amount</span>
                      <div className="flex items-center">
                        <IndianRupee size={14} />
                        <span>2,500.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-school-green hover:bg-school-brown text-white"
                    disabled={loading}
                  >
                    {loading ? "Processing Payment..." : "Pay Now"}
                    {!loading && <CreditCard size={16} className="ml-2" />}
                  </Button>
                </form>
              )}
            </Card>
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Secure payment powered by Razorpay Payment Gateway</p>
              <p className="mt-2">For payment issues, contact: payments@chankyaacademy.edu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
