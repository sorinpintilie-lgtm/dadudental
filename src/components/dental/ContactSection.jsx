import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../Button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactează-ne
          </h2>
          <p className="text-slate-400 text-lg">
            Suntem aici pentru tine - programă o consultație sau întreabă orice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Adresă
                  </h3>
                  <p className="text-slate-400">
                    Aleea rozelor nr 7A, Iași
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Telefon
                  </h3>
                  <p className="text-slate-400">
                    <a href="tel:0721234567" className="hover:text-sky-400 transition-colors">
                      0721 234 567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-slate-400">
                    <a href="mailto:suport@dadudental.com" className="hover:text-sky-400 transition-colors">
                      suport@dadudental.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Program
                  </h3>
                  <p className="text-slate-400">
                    Luni - Vineri: 09:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Nume
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Nume complet"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="07XX XXX XXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Mesaj
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Descrieți problema sau ne spune ce serviciu doriți"
                  rows="4"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all">
                Trimite Mesaj
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
