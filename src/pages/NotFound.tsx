import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-pearl flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-playfair text-8xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-4">Page Not Found</h2>
        <p className="text-slate mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="bg-charcoal hover:bg-slate text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
