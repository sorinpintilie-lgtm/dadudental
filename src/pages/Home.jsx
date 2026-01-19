import React, { useRef } from 'react';
import HeroSection from '../components/dental/HeroSection';
import ServicesSection from '../components/dental/ServicesSection';
import TeamSection from '../components/dental/TeamSection';
import TestimonialsSection from '../components/dental/TestimonialsSection';
import ContactSection from '../components/dental/ContactSection';
import Footer from '../components/dental/Footer';

export default function Home() {
  const appointmentRef = useRef(null);

  const scrollToAppointment = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection onScrollToAppointment={scrollToAppointment} />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}