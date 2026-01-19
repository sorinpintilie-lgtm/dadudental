import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function HeroSection({ onScrollToAppointment }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-50 to-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sky-100 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-600">Clinică dentară de excelență</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Zâmbetul tău,
              <span className="block mt-2 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                prioritatea noastră
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Oferim servicii stomatologice complete cu tehnologie de ultimă generație și o echipă de specialiști dedicați sănătății tale orale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onScrollToAppointment}
                size="lg" 
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-all duration-300"
              >
                Programează-te acum
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-200 hover:border-sky-300 hover:bg-sky-50 px-8 py-6 rounded-full text-base font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                0721 234 567
              </Button>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-slate-100"
            >
              {[
                { value: '15+', label: 'Ani experiență' },
                { value: '10k+', label: 'Pacienți fericiți' },
                { value: '98%', label: 'Rată de succes' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
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
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
                alt="Cabinet stomatologic modern"
                className="relative rounded-3xl shadow-2xl shadow-slate-200 w-full object-cover aspect-[4/5]"
              />
              
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 bottom-20 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Programare confirmată</div>
                    <div className="text-sm text-slate-500">Dr. Maria Popescu</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}