import React from 'react';
import { ArrowRight, Play, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.mediavalet.com/usca/bullfrogspas/NP9EjmCodEuZXOJt1rCHNw/vD83xlS7X0qf0qhZymRD8A/Original/Swimming_Male_no%20tether.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg")'
          }}
        ></div>
      </div>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 via-slate-800/40 to-ocean-900/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl max-w-5xl mx-auto animate-scale-in">
          <h1 className="font-bold font-modern text-white mb-4 sm:mb-6 leading-tight animate-fade-in tracking-tight">
            Minőség mindenek 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-navy-300 animate-delayed text-glow">
              felett
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-medium font-modern animate-fade-in animate-delayed-2 px-2">
            Fedezd fel a termék katalógusunkat, ahol a prémium minőség és a megfizethető árak találkoznak. Vásárolj még ma!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in animate-delayed-3">
            <button className="w-full sm:w-auto bg-gradient-to-r from-navy-500 to-ocean-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold font-modern text-base sm:text-lg hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2 animate-pulse-glow btn-trendy">
              <ShoppingBag className="w-5 h-5" />
              <span>Vásárlás most</span>
            </button>
            
            <button className="w-full sm:w-auto glass-button text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold font-modern text-base sm:text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2 hover:scale-105">
              <Play className="w-5 h-5" />
              <span className="hidden sm:inline">Nézd meg történetünket</span>
              <span className="sm:hidden">Történetünk</span>
            </button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white">
            <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift animate-fade-in card-hover">
              <div className="text-2xl sm:text-3xl font-bold font-modern mb-2 text-ocean-300">100+</div>
              <div className="text-white/80 text-sm sm:text-base font-medium font-modern">Prémium termékek</div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift animate-fade-in animate-delayed card-hover">
              <div className="text-2xl sm:text-3xl font-bold font-modern mb-2 text-navy-300">100%</div>
              <div className="text-white/80 text-sm sm:text-base font-medium font-modern">Eredetiség</div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift animate-fade-in animate-delayed-2 card-hover">
              <div className="text-2xl sm:text-3xl font-bold font-modern mb-2 text-ocean-300">5★</div>
              <div className="text-white/80 text-sm sm:text-base font-medium font-modern">Vásárlói értékelés</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-navy-400/20 to-ocean-400/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-ocean-400/20 to-navy-400/20 rounded-full animate-float animate-delayed hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;