/**
 * NotFound (404) page
 * Displayed when route doesn't exist
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/primitives';

/**
 * NotFound page
 * 404 error page with link back to home
 */
export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-9xl font-bold text-algorand-600">404</div>
        <h1 className="text-4xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to the app.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

NotFound.displayName = 'NotFound';
