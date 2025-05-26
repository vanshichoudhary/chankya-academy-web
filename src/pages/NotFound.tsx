
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRefresh = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-9xl font-bold text-school-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 text-left">
          <div className="flex items-start">
            <AlertCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Server Configuration Issue</h3>
              <p className="text-sm text-amber-700 mb-3">
                If you're seeing this error after refreshing a page that normally works, your server needs to be configured to handle client-side routing.
              </p>
              <div className="text-xs text-amber-600">
                <p className="font-medium mb-1">Quick fixes by platform:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Vercel:</strong> vercel.json file added</li>
                  <li><strong>Netlify:</strong> _redirects file added</li>
                  <li><strong>Apache:</strong> .htaccess file added</li>
                </ul>
              </div>
            </div>
          </div>
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
