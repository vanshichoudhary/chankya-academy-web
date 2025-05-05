
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917017608009?text=Hello%2C%20I%20have%20a%20question%20about%20Chankya%20International%20Academy", "_blank");
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageSquare size={24} />
          )}
        </button>
      </div>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <h3 className="font-medium">Chat with Us</h3>
            <p className="text-sm text-green-100">We usually reply within minutes</p>
          </div>
          <div className="p-4 bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
              <p className="text-gray-700 text-sm">Hello! How can we help you today? Chat with us for:</p>
              <ul className="text-xs text-gray-600 mt-2 list-disc list-inside">
                <li>Admission inquiries</li>
                <li>Fee structure</li>
                <li>Campus visits</li>
                <li>General questions</li>
              </ul>
            </div>
            <Button 
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={handleWhatsAppClick}
            >
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
