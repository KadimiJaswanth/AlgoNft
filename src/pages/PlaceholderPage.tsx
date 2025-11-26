/**
 * PlaceholderPage component
 * Generic placeholder for pages not yet implemented
 */

import React from 'react';
import { Button, Card } from '@/components/primitives';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
}

/**
 * PlaceholderPage component
 * Shows a placeholder for pages awaiting implementation
 */
export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl">{icon}</div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            This page is being developed. Let us know what features you'd like to see!
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => window.location.href = '/'}
          >
            Go Back Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

PlaceholderPage.displayName = 'PlaceholderPage';
