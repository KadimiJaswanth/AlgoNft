/**
 * Spinner primitive component
 * Loading indicator
 */

import React from 'react';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

/**
 * Spinner component
 * @param size - Spinner size (default: 'md')
 * @param color - Spinner color (default: 'algorand')
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'algorand',
  className = '',
  ...props
}) => {
  return (
    <div className={`${sizeClasses[size]} ${className}`} {...props}>
      <svg
        className={`animate-spin h-full w-full text-${color}-600`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

Spinner.displayName = 'Spinner';
