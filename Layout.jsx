import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicii', label: 'Servicii' },
    { href: '#echipa', label: 'Echipa' },
    { href: '#programare', label: 'Programare' }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                DentalClinic
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <a href__="tel:0721234567" className="flex items-center gap-2 text-sm font-medium text-sky-600">
                <Phone className="w-4 h-4" />
                0721 234 567
              </a>
              
              <Button 
                onClick={() => scrollToSection('#programare')}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-6 shadow-lg shadow-sky-200"
              >
                Programare
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-3 text-slate-600 font-medium hover:text-sky-500"
                  >
                    {link.label}
                  </button>
                ))}
                <a 
                  href__="tel:0721234567" 
                  className="flex items-center gap-2 py-3 text-sky-600 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  0721 234 567
                </a>
                <Button 
                  onClick={() => scrollToSection('#programare')}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full"
                >
                  Programare online
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  );
}