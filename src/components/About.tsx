import React from 'react';
import { Award, Users, Sparkles, Check } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />, number: "100+", label: "Prémium termék" },
    { icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />, number: "99+", label: "Elégedett vásárló" },
    { icon: <Check className="w-6 sm:w-8 h-6 sm:h-8" />, number: "100%", label: "Eredetiség" },
    { icon: <Sparkles className="w-6 sm:w-8 h-6 sm:h-8" />, number: "5★", label: "Átlagos értékelés" }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-navy-900 via-slate-800 to-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Szeretettel készítve,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400">
                Wellness-re hangolva
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed font-modern">
A Bullfrog Spas-nál hiszünk abban, hogy az igazi szépség a természetből ered. 
Alalposan átgondolt a legnagyobb gondosággal megtervezett kollekciónk prémium termékeket foglal magában, melyek a legkifinomultabb Spa élményt hozzák otthonába.

            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-4 sm:p-6 text-center hover-lift animate-fade-in card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-ocean-400 mb-2 sm:mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-modern text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-white/70 text-xs sm:text-sm font-medium font-modern">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-navy-500 to-ocean-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold font-modern hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base btn-trendy">
                Termékek megtekintése
              </button>
              <button className="glass-button text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold font-modern hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105 text-sm sm:text-base">
                Dizájn stúdió látogatása
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-3xl p-2 shadow-lg hover-lift card-hover">
                  <img
                    src="https://cdn.mediavalet.com/usca/bullfrogspas/nOWYeovpeUeHqQQfr-9mNQ/lnKvUfsEvkW-WZ7f7DLDeg/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
                    alt="Természetes összetevők"
                    className="w-full h-32 sm:h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="glass-card rounded-3xl p-2 shadow-lg hover-lift card-hover">
                  <img
                    src="https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
                    alt="Termék kollekció"
                    className="w-full h-24 sm:h-32 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card rounded-3xl p-2 shadow-lg hover-lift card-hover">
                  <img
                    src="https://cdn.mediavalet.com/usca/bullfrogspas/g0F-p1HTIkqidBSjny3ibA/-AAVobIt1E6KvsjBzeQ_8w/Large/Stil_Snow-Slate_Lifestyle.jpeg"
                    alt="Organikus bőrápolás"
                    className="w-full h-24 sm:h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="glass-card rounded-3xl p-2 shadow-lg hover-lift card-hover">
                  <img
                    src="https://cdn.mediavalet.com/usca/bullfrogspas/69lDyfRwFkK1-YTM6uB6Ig/nAYG9N3mb0eYaBaaBoLfgw/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
                    alt="Wellness termékek"
                    className="w-full h-32 sm:h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-ocean-400 to-navy-500 rounded-full p-4 sm:p-6 shadow-lg animate-float">
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;