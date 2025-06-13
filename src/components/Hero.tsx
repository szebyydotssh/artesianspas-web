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
            backgroundImage: 'url("https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg)'
          }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-rose-900/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Minőség mindenek 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-rose-300">
              felett
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Fedezd fel a termék katalógusunkat, ahol a prémium minőség és a megfizethető árak találkoznak és vedd meg ma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Vásárlás</span>
            </button>
            
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Nézd meg történetünket</span>
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-white/80">Prémium termékek</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Eredetiség</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-white/80">Vásárlói értékelés</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>
    </section>
  );
};

export default Hero;