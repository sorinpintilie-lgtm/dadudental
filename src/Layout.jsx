import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Button from "./components/Button";
import PromoBar from "./components/PromoBar";

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
    { href: '#contact', label: 'Programare' }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createPageUrl = (pageName) => {
    return `/${pageName.toLowerCase()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Promo Bar */}
      <PromoBar />
      
      {/* Navigation */}
      <nav className={`fixed top-[40px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-sm' 
          : 'bg-slate-900'
      }`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Dadu Dental Logo" 
                className="h-16"
              />
              <span className="text-white text-xl font-bold">Dadu Dental</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <a href__="tel:0721234567" className="flex items-center gap-2 text-sm font-medium text-white">
                <Phone className="w-4 h-4" />
                0721 234 567
              </a>
              

            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
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
              className="md:hidden bg-slate-900 border-t border-slate-700"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-3 text-white font-medium hover:text-sky-400"
                  >
                    {link.label}
                  </button>
                ))}
                <a 
                  href__="tel:0721234567" 
                  className="flex items-center gap-2 py-3 text-white font-medium"
                >
                  <Phone className="w-4 h-4" />
                  0721 234 567
                </a>
                <Button 
                  onClick={() => scrollToSection('#contact')}
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