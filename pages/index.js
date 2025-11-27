// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '@/components/ServiceSection';
import KeyFactsSection from '@/components/FacrSection';
import PrimaryUseCasesSection from '@/components/PrimaryUseCasesSection';
import NewsUpdatesSection from '@/components/NewsUpdate';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <KeyFactsSection />
      <div id="about">
        <PrimaryUseCasesSection />
      </div>
      <div id="news">
        <NewsUpdatesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}