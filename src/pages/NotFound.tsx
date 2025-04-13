
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-9xl font-bold text-school-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for cannot be found.</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-school-green hover:bg-school-brown text-white w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border-school-green text-school-green hover:bg-school-green hover:text-white w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
