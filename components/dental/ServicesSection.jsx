import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  CircleDot, 
  Smile, 
  Scissors, 
  Baby,
  Clock,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consultație & Diagnostic',
    description: 'Evaluare completă a sănătății orale cu echipamente digitale de ultimă generație.',
    color: 'from-sky-400 to-sky-500',
    bgLight: 'bg-sky-50'
  },
  {
    icon: Sparkles,
    title: 'Albire Dentară',
    description: 'Tratamente profesionale de albire pentru un zâmbet strălucitor și natural.',
    color: 'from-amber-400 to-amber-500',
    bgLight: 'bg-amber-50'
  },
  {
    icon: CircleDot,
    title: 'Implanturi Dentare',
    description: 'Soluții permanente pentru dinții lipsă cu implanturi de cea mai înaltă calitate.',
    color: 'from-blue-400 to-blue-500',
    bgLight: 'bg-blue-50'
  },
  {
    icon: Smile,
    title: 'Ortodonție',
    description: 'Aparate dentare moderne și alignere invizibile pentru un zâmbet perfect.',
    color: 'from-violet-400 to-violet-500',
    bgLight: 'bg-violet-50'
  },
  {
    icon: Scissors,
    title: 'Chirurgie Orală',
    description: 'Proceduri chirurgicale realizate cu precizie și minimă invazie.',
    color: 'from-rose-400 to-rose-500',
    bgLight: 'bg-rose-50'
  },
  {
    icon: Baby,
    title: 'Stomatologie Pediatrică',
    description: 'Îngrijire dentară prietenoasă și blândă pentru cei mici.',
    color: 'from-emerald-400 to-emerald-500',
    bgLight: 'bg-emerald-50'
  }
];

export default function ServicesSection() {
  return (
    <section id="servicii" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-sky-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Serviciile noastre
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Tratamente complete pentru 
            <span className="text-sky-500"> sănătatea ta</span>
          </h2>
          <p className="text-lg text-slate-600">
            Oferim o gamă completă de servicii stomatologice, de la tratamente preventive la proceduri estetice avansate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-3xl ${service.bgLight} border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-sky-600 transition-colors">
                  Află mai multe
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                Urgențe dentare?
              </h3>
              <p className="text-slate-300">
                Suntem disponibili și în afara programului pentru cazuri de urgență.
              </p>
            </div>
          </div>
          <a 
            href__="tel:0721234567"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-800 rounded-full font-semibold hover:bg-sky-50 transition-colors flex-shrink-0"
          >
            Sună acum: 0721 234 567
          </a>
        </motion.div>
      </div>
    </section>
  );
}