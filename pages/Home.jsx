import React, { useRef } from 'react';
import HeroSection from '@/components/dental/HeroSection';
import ServicesSection from '@/components/dental/ServicesSection';
import TeamSection from '@/components/dental/TeamSection';
import AppointmentSection from '@/components/dental/AppointmentSection';
import TestimonialsSection from '@/components/dental/TestimonialsSection';
import Footer from '@/components/dental/Footer';

export default function Home() {
  const appointmentRef = useRef(null);

  const scrollToAppointment = () => {
    document.getElementById('programare')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onScrollToAppointment={scrollToAppointment} />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
}