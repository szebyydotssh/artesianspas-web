import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Package } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Űrlap elküldve:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Látogass el üzletünkbe",
      content: "Wellness utca 123\nBudapest, 1234"
    },
    {
      icon: <Phone className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Hívj minket",
      content: "+36 1 234 5678\n+36 1 987 6543"
    },
    {
      icon: <Mail className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Írj nekünk",
      content: "info@bullfrogspas.hu\nrendeles@bullfrogspas.hu"
    },
    {
      icon: <Clock className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Nyitvatartás",
      content: "Hétfő-Péntek: 9:00-19:00\nSzombat-Vasárnap: 10:00-18:00"
    }
  ];

  const subjects = [
    "Termék érdeklődés",
    "Rendelés támogatás",
    "Szállítási kérdés",
    "Visszaküldés/csere",
    "Nagykereskedelmi érdeklődés",
    "Általános kérdés"
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Lépj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400">
              kapcsolatba
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animate-delayed">
            Kérdéseid vannak termékeinkkel kapcsolatban? Segítségre van szükséged a rendeléssel? 
            Itt vagyunk, hogy segítsünk wellness utazásodban.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-lg animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-4 sm:mb-6">
              Küldj üzenetet
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Teljes név *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-button rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50"
                    placeholder="A te neved"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email cím *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-button rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50"
                    placeholder="te@email.hu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-button rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 text-white placeholder-white/50"
                    placeholder="+36 1 234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Tárgy
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-button rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 text-white"
                  >
                    <option value="" className="bg-slate-800">Válassz tárgyat</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject} className="bg-slate-800">{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Üzenet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-button rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-white/50"
                  placeholder="Hogyan segíthetünk ma?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-navy-500 to-ocean-500 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Üzenet küldése</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-ocean-400 to-navy-600 rounded-full p-3 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg mb-2">{info.title}</h4>
                    <p className="text-white/80 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Shipping Info */}
            <div className="bg-gradient-to-r from-ocean-500 to-navy-500 rounded-2xl p-4 sm:p-6 text-white animate-fade-in animate-delayed-3">
              <div className="flex items-start space-x-4">
                <Package className="w-5 sm:w-6 h-5 sm:h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Ingyenes szállítás</h4>
                  <p className="opacity-90 text-sm sm:text-base">
                    Élvezd az ingyenes szállítást minden 25.000 Ft feletti rendelésnél. 
                    Gyors, biztonságos kiszállítás az ajtódig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;