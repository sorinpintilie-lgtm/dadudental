import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Star } from 'lucide-react';

const team = [
  {
    name: 'Dr. Maria Popescu',
    role: 'Medic Primar Stomatolog',
    specialty: 'Implantologie & Protetică',
    experience: '18 ani experiență',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    rating: 4.9
  },
  {
    name: 'Dr. Andrei Ionescu',
    role: 'Specialist Ortodont',
    specialty: 'Ortodonție & Estetică',
    experience: '12 ani experiență',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    rating: 4.8
  },
  {
    name: 'Dr. Elena Dumitrescu',
    role: 'Chirurg Oro-Maxilo-Facial',
    specialty: 'Chirurgie & Implanturi',
    experience: '15 ani experiență',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    rating: 4.9
  },
  {
    name: 'Dr. Alexandru Marin',
    role: 'Stomatolog Pediatru',
    specialty: 'Pedodonție',
    experience: '10 ani experiență',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    rating: 5.0
  }
];

export default function TeamSection() {
  return (
    <section id="echipa" className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sky-900/30 text-sky-400 rounded-full text-sm font-medium mb-4">
            Echipa noastră
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Specialiști 
            <span className="text-sky-400"> dedicați</span>
          </h2>
          <p className="text-lg text-slate-400">
            Echipa noastră de medici stomatologi combină expertiza cu empatia pentru a vă oferi cea mai bună îngrijire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-700 shadow-lg shadow-slate-900 hover:shadow-xl hover:shadow-slate-900 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                
                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-600">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-semibold text-slate-100">{member.rating}</span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sky-300 font-medium text-sm mb-2">{member.role}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {member.specialty}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-300 mt-1">
                    <Award className="w-3.5 h-3.5" />
                    {member.experience}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}