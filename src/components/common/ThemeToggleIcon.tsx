import React from 'react';

interface ThemeToggleIconProps {
  className?: string;
}

export const ThemeToggleIcon: React.FC<ThemeToggleIconProps> = ({ 
  className = "w-4 h-4" 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 0 0 20V2z" fill="currentColor" stroke="none" />
    </svg>
  );
};

export default ThemeToggleIcon;
