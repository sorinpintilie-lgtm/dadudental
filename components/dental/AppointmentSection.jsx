import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { CalendarIcon, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const services = [
  { value: 'consultatie', label: 'Consultație & Diagnostic' },
  { value: 'albire', label: 'Albire Dentară' },
  { value: 'implant', label: 'Implanturi Dentare' },
  { value: 'ortodontie', label: 'Ortodonție' },
  { value: 'chirurgie', label: 'Chirurgie Orală' },
  { value: 'estetica', label: 'Estetică Dentară' },
  { value: 'pediatrie', label: 'Stomatologie Pediatrică' },
  { value: 'urgenta', label: 'Urgență Dentară' }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    patient_name: '',
    phone: '',
    email: '',
    service: '',
    preferred_date: null,
    preferred_time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.patient_name || !formData.phone || !formData.service || !formData.preferred_date) {
      toast.error('Vă rugăm completați toate câmpurile obligatorii');
      return;
    }

    setIsSubmitting(true);
    
    await base44.entities.Appointment.create({
      ...formData,
      preferred_date: format(formData.preferred_date, 'yyyy-MM-dd'),
      status: 'nou'
    });
    
    setIsSuccess(true);
    toast.success('Programare trimisă cu succes!');
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <section id="programare" className="py-24 lg:py-32 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Mulțumim pentru programare!
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Veți fi contactat în cel mai scurt timp pentru confirmarea programării.
            </p>
            <Button 
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  patient_name: '',
                  phone: '',
                  email: '',
                  service: '',
                  preferred_date: null,
                  preferred_time: '',
                  message: ''
                });
              }}
              variant="outline"
              className="rounded-full px-8"
            >
              Nouă programare
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="programare" className="py-24 lg:py-32 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-100 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
              Programare online
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Rezervă-ți 
              <span className="text-sky-500"> consultația</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Completează formularul alăturat și te vom contacta pentru confirmarea programării în cel mai scurt timp.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Adresa', text: 'Str. Sănătății nr. 123, București' },
                { icon: '📞', title: 'Telefon', text: '0721 234 567' },
                { icon: '🕐', title: 'Program', text: 'Luni - Vineri: 09:00 - 19:00' },
                { icon: '✉️', title: 'Email', text: 'contact@dentalclinic.ro' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{item.title}</div>
                    <div className="text-slate-600">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-100 border border-slate-100">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">
                      Nume complet *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ion Popescu"
                      value={formData.patient_name}
                      onChange={(e) => setFormData({...formData, patient_name: e.target.value})}
                      className="h-12 rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-medium">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0721 234 567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12 rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">
                    Serviciul dorit *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({...formData, service: value})}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-slate-200">
                      <SelectValue placeholder="Selectează serviciul" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">
                      Data preferată *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 rounded-xl justify-start text-left font-normal border-slate-200"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                          {formData.preferred_date ? (
                            format(formData.preferred_date, 'd MMMM yyyy', { locale: ro })
                          ) : (
                            <span className="text-slate-400">Alege data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.preferred_date}
                          onSelect={(date) => setFormData({...formData, preferred_date: date})}
                          disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                          locale={ro}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">
                      Ora preferată
                    </Label>
                    <Select
                      value={formData.preferred_time}
                      onValueChange={(value) => setFormData({...formData, preferred_time: value})}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-slate-200">
                        <Clock className="mr-2 h-4 w-4 text-slate-400" />
                        <SelectValue placeholder="Alege ora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Mesaj (opțional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descrieți pe scurt motivul vizitei..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[100px] rounded-xl border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-base shadow-lg shadow-sky-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    'Trimite programarea'
                  )}
                </Button>

                <p className="text-center text-sm text-slate-500">
                  * Câmpuri obligatorii. Vă vom contacta pentru confirmare.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}