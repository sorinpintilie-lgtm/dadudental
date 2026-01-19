import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Maria V.',
    service: 'Albire dentară',
    text: 'Experiență extraordinară! Echipa este foarte profesionistă și prietenoasă. Rezultatul albirii a depășit așteptările mele.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Mihai P.',
    service: 'Implant dentar',
    text: 'După ani de ezitare, am ales această clinică pentru implant. Procedura a fost fără durere, iar rezultatul este perfect!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    name: 'Elena C.',
    service: 'Ortodonție',
    text: 'Dr. Ionescu mi-a schimbat complet zâmbetul cu aparatul invizibil. Recomand cu încredere!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 to-slate-900" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sky-900/30 text-sky-400 rounded-full text-sm font-medium mb-4">
            Testimoniale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Ce spun
            <span className="text-sky-400"> pacienții</span>
          </h2>
          <p className="text-lg text-slate-400">
            Sute de pacienți mulțumiți ne recomandă în fiecare an.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-gradient-to-b from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 shadow-lg shadow-slate-900/50 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-900" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-6 border-t border-slate-600">
                  <div className="font-semibold text-slate-100">{testimonial.name}</div>
                  <div className="text-sm text-sky-400">{testimonial.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-slate-100">4.9</span>
            <span className="text-slate-500">din 5</span>
          </div>
          <div className="h-8 w-px bg-slate-700 hidden md:block" />
          <div className="text-slate-400">
            Bazat pe <span className="font-semibold text-slate-100">500+</span> recenzii verificate
          </div>
        </motion.div>
      </div>
    </section>
  );
}