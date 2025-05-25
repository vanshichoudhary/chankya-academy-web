
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRefresh = () => {
    // Try to navigate to home and then to the requested path
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-9xl font-bold text-school-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! The page you're looking for cannot be found.</p>
        <p className="text-gray-500 mb-4">
          If you refreshed the page or accessed this URL directly, this might be a routing issue.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> If you're seeing this after refreshing a page, please contact the site administrator to configure proper URL rewriting for single-page applications.
          </p>
        </div>
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
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
            onClick={handleRefresh}
          >
            <RefreshCw size={18} className="mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
