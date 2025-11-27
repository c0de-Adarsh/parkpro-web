// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-0' : 'bg-transparent py-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold">
              <Image src={'/logo.png'} alt="ParkPro Logo" width={70} height={30} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium">
              News & Updates
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium">
              Contact
            </button>
          </div>

          {/* App Store Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="#" className="transition-transform duration-200 hover:scale-105">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <div className="text-xs">
                 <Image src="/appleb.png" alt="Apple Logo" width={95} height={95} />
                 
                </div>
              </div>
            </a>
            <a href="#" className="transition-transform duration-200 hover:scale-105">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <div className="text-xs">
                  <Image src="/playstore.png" alt="Apple Logo" width={95} height={95} />
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} color='black' /> : <Menu color='black' size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96  opacity-100 mt-4' : 'max-h-0 opacity-0  overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium text-left">
              News & Updates
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-gray-600 transition-colors duration-200 font-medium text-left">
              Contact
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="#" className="bg-black text-white px-4 py-2 rounded-lg text-center text-sm font-semibold">
                Download on App Store
              </a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded-lg text-center text-sm font-semibold">
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}