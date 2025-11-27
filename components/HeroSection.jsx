// components/HeroSection.js
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative pt-44 sm:pt-48 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in relative z-10">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <div className="text-black">DIGITAL PARKING</div>
              <div className="text-black">PLATFORM</div>
            </h1>

            {/* Subheading */}
            <div className="flex items-center text-lg sm:text-xl lg:text-2xl">
              <span className="text-black">ParkPro - The Digital Platform for a Smarter <br /> Parking Experience</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              ParkPro makes it simple to report and manage parking issues digitally. Through our mobile app, users can easily report wrongly parked vehicles, occupied rented spaces, or broken pay kiosks. Each report is automatically sent to the correct authority and can be tracked in real time. Efficient. Transparent. Fair.
            </p>

            {/* CTA Button */}
            <button className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center space-x-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span>Get in touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Background Zigzag Image */}
          <Image 
            src={'/zigg.png'} 
            width={570} 
            height={100} 
            alt="Background Pattern"
            className="absolute top-20 right-0 z-0 opacity-20 lg:opacity-100" 
          />
        
          {/* Right Content - Phone Mockup */}
          <div className="relative lg:block z-20">
            {/* Phone Mockup with Complete Animation Cycle */}
            <div className="relative mt-10 mx-auto max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] animate-phone-cycle">
              <Image 
                src={'/mob.png'} 
                width={800} 
                height={800} 
                alt="Phone Mockup" 
                className="w-full h-auto relative z-20 drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes phone-cycle {
          /* Top se aana - 0% to 15% */
          0% {
            transform: translateY(-150vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 1;
          }
          
          /* Float movement - 15% to 70% (staying phase) */
          20% {
            transform: translateY(-15px) translateX(5px) rotate(1deg);
          }
          28% {
            transform: translateY(-25px) translateX(-3px) rotate(-0.5deg);
          }
          36% {
            transform: translateY(-20px) translateX(4px) rotate(0.5deg);
          }
          44% {
            transform: translateY(-15px) translateX(-2px) rotate(-0.3deg);
          }
          52% {
            transform: translateY(-22px) translateX(3px) rotate(0.4deg);
          }
          60% {
            transform: translateY(-18px) translateX(-3px) rotate(-0.4deg);
          }
          68% {
            transform: translateY(-12px) translateX(2px) rotate(0.2deg);
          }
          70% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          
          /* Bottom mein jaana - 70% to 85% */
          85% {
            transform: translateY(150vh) translateX(0px) rotate(0deg);
            opacity: 1;
          }
          90% {
            opacity: 0;
          }
          
          /* Reset - 90% to 100% */
          100% {
            transform: translateY(-150vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-phone-cycle {
          animation: phone-cycle 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        @media (max-width: 1024px) {
          @keyframes phone-cycle {
            0% {
              transform: translateY(-120vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            15% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
              opacity: 1;
            }
            
            20% {
              transform: translateY(-12px) translateX(3px) rotate(0.8deg);
            }
            28% {
              transform: translateY(-20px) translateX(-2px) rotate(-0.4deg);
            }
            36% {
              transform: translateY(-18px) translateX(2px) rotate(0.4deg);
            }
            44% {
              transform: translateY(-12px) translateX(-1px) rotate(-0.2deg);
            }
            52% {
              transform: translateY(-16px) translateX(2px) rotate(0.3deg);
            }
            60% {
              transform: translateY(-14px) translateX(-2px) rotate(-0.3deg);
            }
            68% {
              transform: translateY(-8px) translateX(1px) rotate(0.1deg);
            }
            70% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            
            85% {
              transform: translateY(120vh) translateX(0px) rotate(0deg);
              opacity: 1;
            }
            90% {
              opacity: 0;
            }
            100% {
              transform: translateY(-120vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
          }
        }

        @media (max-width: 640px) {
          @keyframes phone-cycle {
            0% {
              transform: translateY(-100vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            15% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
              opacity: 1;
            }
            
            20% {
              transform: translateY(-10px) translateX(2px) rotate(0.5deg);
            }
            28% {
              transform: translateY(-15px) translateX(-1px) rotate(-0.3deg);
            }
            36% {
              transform: translateY(-13px) translateX(1px) rotate(0.3deg);
            }
            44% {
              transform: translateY(-10px) translateX(-1px) rotate(-0.2deg);
            }
            52% {
              transform: translateY(-12px) translateX(1px) rotate(0.2deg);
            }
            60% {
              transform: translateY(-11px) translateX(-1px) rotate(-0.2deg);
            }
            68% {
              transform: translateY(-6px) translateX(1px) rotate(0.1deg);
            }
            70% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            
            85% {
              transform: translateY(100vh) translateX(0px) rotate(0deg);
              opacity: 1;
            }
            90% {
              opacity: 0;
            }
            100% {
              transform: translateY(-100vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
          }
        }
      `}</style>
      
      <div className="w-3.5 h-14"></div>
    </section>
  );
}