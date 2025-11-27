// components/PrimaryUseCasesSection.js
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function PrimaryUseCasesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0);
  const [desktopAnimate, setDesktopAnimate] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimate(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mobile phone carousel animation - infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoneIndex((prev) => (prev + 1) % 2);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Desktop infinite loop animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Hide phones (move them out)
      setDesktopAnimate(false);
      
      // Show phones again (bring them back)
      setTimeout(() => {
        setDesktopAnimate(true);
      }, 1000); // Wait for hide animation to complete
      
    }, 5000); // Total cycle: 1s hide + 1s show + 3s pause

    return () => clearInterval(interval);
  }, []);

  // Click handler to repeat animation
  const handleSectionClick = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  };

  return (
    <section 
      ref={sectionRef} 
      onClick={handleSectionClick}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white cursor-pointer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Primary Use Cases */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Primary Use Cases
            </h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 text-lg">•</span>
                <p className="text-base sm:text-lg text-gray-800">
                  Wrongly parked vehicles
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 text-lg">•</span>
                <p className="text-base sm:text-lg text-gray-800">
                  Occupied rented spaces
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 text-lg">•</span>
                <p className="text-base sm:text-lg text-gray-800">
                  Broken pay kiosks
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3 text-lg">•</span>
                <p className="text-base sm:text-lg text-gray-800">
                  General disturbances on private or public parking areas
                </p>
              </li>
            </ul>

            <p className="text-base sm:text-2xl text-gray-800 leading-relaxed pt-4">
              Ideal for municipalities, parking operators, housing associations (BRFs), and property owners.
            </p>
          </div>

          {/* Right Content - Two Phones */}
          <div className="relative flex items-center justify-center lg:justify-end h-[500px] sm:h-[600px]">
            {/* Desktop Version - Both Phones */}
            <div className="hidden lg:block relative w-full h-full overflow-hidden">
              {/* Large Phone - Left - Animates from TOP with Float */}
              <div 
                className={`absolute left-0 z-20 w-[280px] sm:w-[310px] transform transition-all duration-1000 ease-in-out ${
                  desktopAnimate ? 'translate-y-0 opacity-100 animate-gentle-float-1' : '-translate-y-[800px] opacity-0'
                }`}
              >
                <Image src="/phone1.png" alt="Phone" className="w-full h-full object-cover" width={1500} height={1000} />
              </div>

              {/* Small Phone - Right - Animates from BOTTOM with Float */}
              <div 
                className={`absolute right-0 lg:right-2 top-8 z-10 w-[260px] sm:w-[280px] transform transition-all duration-1000 ease-in-out delay-150 ${
                  desktopAnimate ? 'translate-y-0 opacity-100 animate-gentle-float-2' : 'translate-y-[800px] opacity-0'
                }`}
              >
                <Image src="/phone2.png" alt="Phone" className="w-full h-full object-cover" width={1500} height={1000} />
              </div>
            </div>

            {/* Mobile Version - Single Phone with Loop Animation and Float */}
            <div className="lg:hidden relative w-full h-full flex items-center justify-center">
              {/* Phone 1 */}
              <div className={`absolute w-[280px] transform transition-all duration-700 ease-in-out ${
                currentPhoneIndex === 0 
                  ? 'translate-x-0 opacity-100 scale-100 animate-gentle-float-mobile' 
                  : 'translate-x-full opacity-0 scale-95'
              }`}>
                <Image src="/phone1.png" alt="Phone 1" className="w-full h-full object-cover" width={1500} height={1000} />
              </div>

              {/* Phone 2 */}
              <div className={`absolute w-[280px] transform transition-all duration-700 ease-in-out ${
                currentPhoneIndex === 1 
                  ? 'translate-x-0 opacity-100 scale-100 animate-gentle-float-mobile' 
                  : '-translate-x-full opacity-0 scale-95'
              }`}>
                <Image src="/phone2.png" alt="Phone 2" className="w-full h-full object-cover" width={1500} height={1000} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - How It Work */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone with Red Circle */}
          <div className="relative flex items-center justify-center order-4 lg:order-1 h-[500px] sm:h-[550px] lg:h-[600px]">
            {/* Red Circle Background - Responsive */}
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] border-4 border-red-500 rounded-full"></div>
            <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] border-4 border-red-500 rounded-full"></div>
            
            {/* Animated Smoke Effect - Behind Phone */}
            <div className="absolute z-10">
              <div className="relative w-[240px] h-[400px] sm:w-[260px] sm:h-[450px] lg:w-[280px] lg:h-[500px]">
                {/* Smoke blobs */}
                <div className="absolute inset-0 animate-smoke-1">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-yellow-200/40 rounded-full blur-3xl transition-colors duration-700 hover:bg-red-200/40"></div>
                </div>
                <div className="absolute inset-0 animate-smoke-2">
                  <div className="absolute top-1/3 right-1/4 w-36 h-36 sm:w-44 sm:h-44 bg-yellow-300/30 rounded-full blur-3xl transition-colors duration-700 hover:bg-red-300/30"></div>
                </div>
                <div className="absolute inset-0 animate-smoke-3">
                  <div className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-48 sm:h-48 bg-yellow-100/35 rounded-full blur-3xl transition-colors duration-700 hover:bg-red-100/35"></div>
                </div>
                <div className="absolute inset-0 animate-smoke-4">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 bg-yellow-200/30 rounded-full blur-3xl transition-colors duration-700 hover:bg-red-200/30"></div>
                </div>
                <div className="absolute inset-0 animate-smoke-5">
                  <div className="absolute top-2/3 right-1/3 w-38 h-38 sm:w-46 sm:h-46 bg-yellow-300/25 rounded-full blur-3xl transition-colors duration-700 hover:bg-red-300/25"></div>
                </div>
              </div>
            </div>
            
            {/* Phone - Centered - Above Smoke - WITH FLOATING ANIMATION */}
            <div className="relative z-20 w-[240px] sm:w-[260px] lg:w-[280px] animate-gentle-float-3">
              <Image src="/phone3.png" alt="Phone" className="w-full h-full object-cover drop-shadow-2xl" width={1500} height={1000} />
            </div>

            {/* CSS for smoke animation and phone floating */}
            <style jsx>{`
              @keyframes smoke-1 {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
                50% { transform: translate(15px, -15px) scale(1.15); opacity: 0.6; }
              }
              @keyframes smoke-2 {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                50% { transform: translate(-20px, 15px) scale(1.25); opacity: 0.5; }
              }
              @keyframes smoke-3 {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
                50% { transform: translate(18px, 12px) scale(1.2); opacity: 0.55; }
              }
              @keyframes smoke-4 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
                50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.45; }
              }
              @keyframes smoke-5 {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
                50% { transform: translate(-12px, -18px) scale(1.18); opacity: 0.5; }
              }
              .animate-smoke-1 { animation: smoke-1 5s ease-in-out infinite; }
              .animate-smoke-2 { animation: smoke-2 7s ease-in-out infinite; }
              .animate-smoke-3 { animation: smoke-3 6s ease-in-out infinite; }
              .animate-smoke-4 { animation: smoke-4 8s ease-in-out infinite; }
              .animate-smoke-5 { animation: smoke-5 6.5s ease-in-out infinite; }

              /* Phone Floating Animations */
              @keyframes gentle-float-1 {
                0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
                }
                25% {
                  transform: translateY(-12px) translateX(4px) rotate(0.8deg);
                }
                50% {
                  transform: translateY(-18px) translateX(-3px) rotate(-0.5deg);
                }
                75% {
                  transform: translateY(-10px) translateX(3px) rotate(0.4deg);
                }
              }

              @keyframes gentle-float-2 {
                0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
                }
                25% {
                  transform: translateY(-10px) translateX(-4px) rotate(-0.6deg);
                }
                50% {
                  transform: translateY(-16px) translateX(3px) rotate(0.4deg);
                }
                75% {
                  transform: translateY(-8px) translateX(-2px) rotate(-0.3deg);
                }
              }

              @keyframes gentle-float-3 {
                0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
                }
                25% {
                  transform: translateY(-14px) translateX(5px) rotate(0.7deg);
                }
                50% {
                  transform: translateY(-20px) translateX(-4px) rotate(-0.6deg);
                }
                75% {
                  transform: translateY(-12px) translateX(3px) rotate(0.4deg);
                }
              }

              @keyframes gentle-float-mobile {
                0%, 100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
                }
                33% {
                  transform: translateY(-10px) translateX(3px) rotate(0.5deg);
                }
                66% {
                  transform: translateY(-15px) translateX(-2px) rotate(-0.4deg);
                }
              }

              .animate-gentle-float-1 {
                animation: gentle-float-1 5s ease-in-out infinite;
              }

              .animate-gentle-float-2 {
                animation: gentle-float-2 6s ease-in-out infinite;
              }

              .animate-gentle-float-3 {
                animation: gentle-float-3 5.5s ease-in-out infinite;
              }

              .animate-gentle-float-mobile {
                animation: gentle-float-mobile 4s ease-in-out infinite;
              }
            `}</style>
          </div>

          {/* Right Content - How It Work */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                How It Work
              </h2>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                  1. Snap & Submit
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Open the app, select the issue type, enter key details, and upload a photo.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                  2. Automatic Routing
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The report is routed to the responsible party based on address or location.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                  3. Track & Follow-Up
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The responsible will confirm and update the status until resolved (pending or traceable).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}