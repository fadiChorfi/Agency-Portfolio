"use client"
import React, { useState } from 'react';

interface DevelopmentBannerProps {
  message?: string;
  isDismissible?: boolean;
}

const DevelopmentBanner: React.FC<DevelopmentBannerProps> = ({
  message = "Our website is currently under development. Some features may not be available.",
  isDismissible = true
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-400 text-gray-900 text-center py-2 font-bold shadow-md z-50">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center">
        {/* On mobile, stack the content */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          <span className="mr-2 hidden sm:block">🚧</span>
          <p className="text-sm sm:text-base">{message}</p>
          <span className="ml-2 hidden sm:block">🚧</span>
        </div>
        
        {isDismissible && (
          <button 
            onClick={() => setIsVisible(false)}
            className="mt-1 sm:mt-0 sm:ml-4 bg-gray-800 text-white px-2 py-1 text-xs sm:text-sm rounded hover:bg-gray-700 focus:outline-none"
            aria-label="Close notification"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
};


export default DevelopmentBanner;