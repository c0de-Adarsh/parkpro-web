// components/Footer.js
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const [isBottomHovered, setIsBottomHovered] = React.useState(false);

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Top Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Details */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                Company Details
              </h3>
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-gray-800">ParkPro AB</p>
                <p className="text-base sm:text-lg text-gray-800">Reg. No: [enter here]</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                Contact Info
              </h3>
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-gray-800">
                  Email: contact@parkpro.se
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-base sm:text-lg text-gray-800">
                    Phone: [enter here]
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div 
        className="px-24 sm:px-6 lg:px-8 py-28 sm:py-28 bg-gray-100 relative overflow-hidden"
        onMouseEnter={() => setIsBottomHovered(true)}
        onMouseLeave={() => setIsBottomHovered(false)}
      >
        {/* Animated Black Background */}
        <div 
          className="absolute inset-0 bg-black transition-transform duration-700 ease-in-out"
          style={{
            transform: isBottomHovered ? 'translateX(0)' : 'translateX(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 items-start">
            {/* Copyright & Social Media */}
            <div className="space-y-4">
              <p className={`text-sm transition-colors duration-700 ${
                isBottomHovered ? 'text-white' : 'text-gray-600'
              }`}>
                © 2025 ParkPro AB. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-700 ${
                    isBottomHovered 
                      ? 'bg-white hover:bg-gray-200 border-white' 
                      : 'bg-white hover:bg-gray-200 border-gray-300'
                  } border`}
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-black" />
                </a>
                <a 
                  href="#" 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-700 ${
                    isBottomHovered 
                      ? 'bg-white hover:bg-gray-200 border-white' 
                      : 'bg-white hover:bg-gray-200 border-gray-300'
                  } border`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-black" />
                </a>
                <a 
                  href="#" 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-700 ${
                    isBottomHovered 
                      ? 'bg-white hover:bg-gray-200 border-white' 
                      : 'bg-white hover:bg-gray-200 border-gray-300'
                  } border`}
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className={`text-lg font-bold mb-3 transition-colors duration-700 ${
                isBottomHovered ? 'text-white' : 'text-black'
              }`}>
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-700 ${
                      isBottomHovered 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-700 ${
                      isBottomHovered 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className={`text-lg font-bold mb-3 transition-colors duration-700 ${
                isBottomHovered ? 'text-white' : 'text-black'
              }`}>
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-700 ${
                      isBottomHovered 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    contact@parkpro.se
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-700 ${
                      isBottomHovered 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    Contact form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Very Bottom - Made With */}
      <div 
        className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-4 bg-gray-100 relative overflow-hidden"
        onMouseEnter={() => setIsBottomHovered(true)}
        onMouseLeave={() => setIsBottomHovered(false)}
      >
        {/* Animated Black Background */}
        <div 
          className="absolute inset-0 bg-black transition-transform duration-700 ease-in-out"
          style={{
            transform: isBottomHovered ? 'translateX(0)' : 'translateX(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className={`text-xs sm:text-sm transition-colors duration-700 ${
            isBottomHovered ? 'text-white' : 'text-gray-600'
          }`}>
            Made With @showavetc3 All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}