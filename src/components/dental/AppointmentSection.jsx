import React from 'react';

const AppointmentSection = () => {
  return (
    <div className="space-y-6">
      {[
        { icon: '📍', title: 'Adresa', text: 'Aleea rozelor nr 7A, Iași' },
        { icon: '📞', title: 'Telefon', text: '0721 234 567' },
        { icon: '🕐', title: 'Program', text: 'Luni - Vineri: 09:00 - 19:00' },
        { icon: '✉️', title: 'Email', text: 'Suport@dadudental.com' }
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center text-xl flex-shrink-0 border border-slate-600">
            {item.icon}
          </div>
          <div>
            <div className="font-semibold text-slate-100">{item.title}</div>
            <div className="text-slate-400">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentSection;
