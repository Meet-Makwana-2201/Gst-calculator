'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loader when pathname changes
    setIsLoading(true);
    
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 transition-opacity duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Animated Logo with Glow Effect */}
        <div className="relative">
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl animate-pulse-slow scale-150" />
          <div className="absolute inset-0 rounded-3xl bg-white/5 blur-2xl animate-pulse-slow scale-125" style={{ animationDelay: '0.3s' }} />
          
          {/* Main logo container - matches header logo */}
          <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-2xl transform animate-float">
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <svg 
                className="w-full h-full text-white drop-shadow-2xl" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text & Animation */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
            GST Calculator
          </h3>
          <p className="text-white/80 text-sm md:text-base font-medium">Loading...</p>
          
          {/* Animated Loading Dots */}
          <div className="flex items-center gap-2 justify-center pt-2">
            <div 
              className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg" 
              style={{ animationDelay: '0s' }} 
            />
            <div 
              className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg" 
              style={{ animationDelay: '0.2s' }} 
            />
            <div 
              className="w-3 h-3 bg-white rounded-full animate-bounce shadow-lg" 
              style={{ animationDelay: '0.4s' }} 
            />
          </div>
        </div>

        {/* Subtle background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
}

