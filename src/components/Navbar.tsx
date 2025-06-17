
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Globe, Users, Shield } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" },
    { name: "CIA Official", path: "/cia-official" },
    { name: "UGIEP", path: "/ugiep" },
    { name: "Establishments", path: "/establishments" },
    { name: "Gallery", path: "/gallery" },
    { name: "Store", path: "/store" },
    { name: "We Invite", path: "/we-invite", highlight: true },
    { name: "Admin", path: "/admin", icon: Shield, admin: true }
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-school-green text-white hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <Phone size={14} className="mr-1" />
                <span>+91 70176 08009</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail size={14} className="mr-1" />
                <span>chanakyainternationalacademy23@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <MapPin size={14} className="mr-1" />
              <span>Rampur Maniharan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav 
        className={`w-full ${
          isScrolled 
            ? "py-2 bg-white shadow-md" 
            : "py-4 bg-white/90"
        } transition-all duration-300 z-50 sticky top-0`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-school-green">Chankya</span>
                <span className="text-sm font-medium text-school-brown">International Academy</span>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === link.path
                      ? "text-school-green border-b-2 border-school-green"
                      : "text-gray-600 hover:text-school-green"
                  } ${link.highlight ? "bg-school-beige px-4 rounded-full ml-2" : ""} ${
                    link.admin ? "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 ml-2" : ""
                  }`}
                >
                  {link.name === "We Invite" && <Globe size={16} />}
                  {link.admin && <Shield size={16} />}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Admission button */}
            <div className="hidden md:block">
              <a 
                href="https://wa.me/917017608009?text=Hello%2C%20I%20am%20interested%20in%20admission%20to%20Chankya%20International%20Academy" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-school-gold hover:bg-school-brown text-white font-medium"
                >
                  Admission Open
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-school-green hover:text-white hover:bg-school-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2">
            <div className="container mx-auto px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    location.pathname === link.path
                      ? "text-school-green bg-school-beige"
                      : "text-gray-600 hover:text-school-green hover:bg-gray-50"
                  } ${link.highlight ? "flex items-center gap-1" : ""} ${
                    link.admin ? "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name === "We Invite" && <Globe size={16} />}
                  {link.admin && <Shield size={16} />}
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-3">
                <a 
                  href="https://wa.me/917017608009?text=Hello%2C%20I%20am%20interested%20in%20admission%20to%20Chankya%20International%20Academy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button 
                    className="bg-school-gold hover:bg-school-brown text-white font-medium w-full"
                  >
                    Admission Open
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
