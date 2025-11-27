// components/KeyFactsSection.js
import Image from 'next/image';
import React from 'react';

export default function KeyFactsSection() {
  return (
    <section className="bg-white">
      {/* Top Image - Full Width Edge to Edge */}
      <div className="w-full mb-12 sm:mb-16 lg:mb-20">
        <div className="w-full h-80 sm:h-80 lg:h-[600px] xl:h-[650px] overflow-hidden">
          <Image 
            src="/service.png" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
         
            width={1500}
            height={1000}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="py-0 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

        {/* Stats Section with Heading on Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-8 mb-16 sm:mb-20 lg:mb-24 items-center ">
          {/* Heading - Takes 1 column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-black leading-tight whitespace-nowrap">
              GET AQUANTED WITH<br />
              OUR KEY FACTS
            </h2>
          </div>
          
          {/* Spacer to push stats to the right */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Stat 1 - Trusted Users */}
          <div className="text-left">
            <div className="flex items-baseline mb-2">
              <span className="text-5xl sm:text-6xl font-bold text-black">8.2</span>
              <span className="text-5xl sm:text-6xl font-bold text-red-500">k</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Trusted Users</p>
          </div>

          {/* Stat 2 - Project Completed */}
          <div className="text-left">
            <div className="flex items-baseline mb-2">
            
              <span className="text-5xl sm:text-6xl font-bold text-black">20</span>
              <span className="text-5xl sm:text-6xl font-bold text-red-500">+</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Project Completed</p>
          </div>

          {/* Stat 3 - Clients Satisfaction */}
          <div className="text-left">
            <div className="flex items-baseline mb-2">
              <span className="text-5xl sm:text-6xl font-bold text-black">97</span>
              <span className="text-5xl sm:text-6xl font-bold text-red-500">%</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Clients Satisfaction</p>
          </div>
        </div>

        {/* For Companies & Municipalities Section */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl">
          {/* Main Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
              For Companies & Municipalities
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              ParkPro is built for organizations that require structure, traceability, and control in parking operations.
            </p>
          </div>

          {/* Bullet Points List */}
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-gray-500 mr-3 text-lg">•</span>
              <p className="text-base sm:text-lg text-gray-800">
                Centralized intake of parking reports
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-3 text-lg">•</span>
              <p className="text-base sm:text-lg text-gray-800">
                Assign cases to internal staff or external contractors
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-3 text-lg">•</span>
              <p className="text-base sm:text-lg text-gray-800">
                Statistics and insights on recurring problem areas
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-3 text-lg">•</span>
              <p className="text-base sm:text-lg text-gray-800">
                Two-way communication with the reporter when needed
              </p>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="pt-4">
            <p className="text-base sm:text-2xl text-gray-800 leading-relaxed">
              <span className="font-bold text-black">Integrations:</span> We offer API integrations to connect ParkPro with your existing systems.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}