// components/NewsUpdatesSection.js
import React from 'react';

export default function NewsUpdatesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
     
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-10">
          News & Updates
        </h2>

      
        <div className="space-y-6 sm:space-y-8">
          {/* News Item 1 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
              ParkPro launches in Värndo Municipality!
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We are proud to roll out ParkPro in collaboration with local stakeholders to streamline parking case handling.
            </p>
          </div>

          {/* News Item 2 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
              New Feature: Direct chat
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Operators can now chat with reporters for faster clarifications and resolutions.
            </p>
          </div>

          {/* News Item 3 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Version 2.0 now live
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              A major update with performance improvements and a refined reporting flow.
            </p>
          </div>
        </div>

        {/* Hand Cursor Icon */}
       
      </div>
    </section>
  );
}