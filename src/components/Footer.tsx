
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-school-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School information */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Chankya International Academy</h3>
            <p className="text-gray-300 mb-4">Providing world-class education with an international standard curriculum in Rampur Maniharan.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-school-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ciarampur?igsh=MjVhcDQweXVmOW16" className="text-white hover:text-school-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/chankya-international-academy/" className="text-white hover:text-school-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/official" className="text-gray-300 hover:text-white transition-colors">CIA Official</Link>
              </li>
              <li>
                <Link to="/management" className="text-gray-300 hover:text-white transition-colors">Management</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-white transition-colors">Store</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-white transition-colors">Career</Link>
              </li>
              <li>
                <Link to="/ylc" className="text-gray-300 hover:text-white transition-colors">YLC</Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Chankya International Academy, Rampur Maniharan</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 70176 08009</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">chanakyainternationalacademy23@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/legal#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/legal#admission" className="text-gray-300 hover:text-white transition-colors">Admission Policy</Link>
              </li>
              <li>
                <Link to="/legal#refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/we-invite" className="text-gray-300 hover:text-white transition-colors">We Invite</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">
          @2024 - All Right Reserved. Designed and Developed by <a href="https://scholar.uniford.org/uirad" className="text-white hover:text-school-gold">UIRAD</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
