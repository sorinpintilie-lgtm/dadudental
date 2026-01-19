import React from 'react';
import { motion } from 'framer-motion';
import Button from "../../components/Button";
import { Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function HeroSection({ onScrollToAppointment }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:bg-none">
      {/* Background image for mobile */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden" 
           style={{ 
             backgroundImage: `url('/happy-woman-with-a-bright-smile-2026-01-07-23-49-51-utc.jpg')` 
           }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>
      
      {/* Background decorative elements for desktop */}
      <div className="absolute inset-0 overflow-hidden md:block">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-900 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-900 to-blue-900 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end min-h-screen pt-32 pb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6">
              Zâmbetul tău,
              <span className="block mt-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                prioritatea noastră
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Oferim servicii stomatologice complete cu tehnologie de ultimă generație și o echipă de specialiști dedicați sănătății tale orale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={onScrollToAppointment}
                size="sm" 
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-4 rounded-full text-sm font-semibold shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-all duration-300 sm:size-lg sm:px-10 sm:py-8 sm:text-lg w-full sm:w-auto"
              >
                Programează-te
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-2 border-slate-600 hover:border-sky-400 hover:bg-slate-800 px-6 py-4 rounded-full text-sm font-semibold text-slate-100 transition-all duration-300 sm:size-lg sm:px-12 sm:py-8 sm:text-lg w-full sm:w-auto"
              >
                0721 234 567
              </Button>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-slate-700"
            >
              {[
                { value: '15+', label: 'Ani experiență' },
                { value: '10k+', label: 'Pacienți fericiți' },
                { value: '98%', label: 'Rată de succes' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-slate-100">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20" />
              <img 
                src="/happy-woman-with-a-bright-smile-2026-01-07-23-49-51-utc.jpg" 
                alt="Femeie fericită cu zâmbet strălucitor"
                className="relative rounded-3xl shadow-2xl shadow-slate-200 w-full object-cover aspect-[4/5] object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
