import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DentalClinic</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Clinică stomatologică de excelență dedicată sănătății și frumuseții zâmbetului tău.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href__="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Link-uri rapide</h4>
            <ul className="space-y-3">
              {['Acasă', 'Servicii', 'Echipa', 'Programare', 'Contact'].map((link) => (
                <li key={link}>
                  <a href__={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicii</h4>
            <ul className="space-y-3">
              {['Consultație', 'Albire dentară', 'Implanturi', 'Ortodonție', 'Chirurgie orală'].map((service) => (
                <li key={service}>
                  <a href__="#servicii" className="text-slate-400 hover:text-sky-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Aleea rozelor nr 7A, Iași</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href__="tel:0721234567" className="text-slate-400 hover:text-sky-400 transition-colors">
                  0721 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href__="mailto:Suport@dadudental.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Suport@dadudental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Luni - Vineri: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DentalClinic. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href__="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              Politica de confidențialitate
            </a>
            <a href__="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              Termeni și condiții
            </a>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm">Powered by</span>
              <img src="/skyro.png" alt="Skyro" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}