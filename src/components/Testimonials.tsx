import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kovács Mária",
      role: "Bőrápolási szakértő",
      content: "A rózsás arcszérum teljesen átalakította a bőrömet! Soha nem láttam ilyen drámai eredményeket egy természetes terméktől. A bőröm ragyog és hihetetlenül puha.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Organikus rózsa arcszérum"
    },
    {
      name: "Nagy Péter",
      role: "Wellness coach",
      content: "Minden ügyfelemnek ajánlom ezeket a termékeket. A minőség kivételes és az eredmények magukért beszélnek. A levendula illóolaj szett az esti rutinom alapeleme lett.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Levendula illóolaj szett"
    },
    {
      name: "Szabó Eszter",
      role: "Szépség blogger",
      content: "Mint aki több száz terméket tesztel, magabiztosan mondhatom, hogy ez a márka kiemelkedik. A himalájai sós radír tiszta luxus - a bőröm soha nem volt simább!",
      rating: 5,
      image: "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Himalájai sós testradír"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-navy-900 via-slate-800 to-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Mit mondanak vásárlóink
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400">
              rólunk
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animate-delayed">
            Ne csak a mi szavunkra hagyatkozz. Itt van, amit értékes vásárlóink mondanak 
            a prémium spa termékekkel szerzett tapasztalataikról.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative hover-lift animate-whoosh"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 sm:left-8 bg-gradient-to-br from-ocean-400 to-navy-600 rounded-full p-3 shadow-lg">
                <Quote className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 mb-4 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Product */}
              <div className="bg-gradient-to-r from-navy-500/20 to-ocean-500/20 rounded-full px-3 py-1 text-xs text-ocean-300 font-medium mb-4 sm:mb-6 inline-block">
                {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-white/70 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div className="glass-card rounded-2xl p-4 sm:p-6 hover-lift animate-fade-in">
            <div className="text-2xl sm:text-3xl font-bold text-ocean-300 mb-2">4.9/5</div>
            <div className="text-white/70 text-xs sm:text-sm">Átlagos értékelés</div>
          </div>
          <div className="glass-card rounded-2xl p-4 sm:p-6 hover-lift animate-fade-in animate-delayed">
            <div className="text-2xl sm:text-3xl font-bold text-navy-300 mb-2">10K+</div>
            <div className="text-white/70 text-xs sm:text-sm">Elégedett vásárló</div>
          </div>
          <div className="glass-card rounded-2xl p-4 sm:p-6 hover-lift animate-fade-in animate-delayed-2">
            <div className="text-2xl sm:text-3xl font-bold text-ocean-300 mb-2">98%</div>
            <div className="text-white/70 text-xs sm:text-sm">Visszavásárlási arány</div>
          </div>
          <div className="glass-card rounded-2xl p-4 sm:p-6 hover-lift animate-fade-in animate-delayed-3">
            <div className="text-2xl sm:text-3xl font-bold text-navy-300 mb-2">100%</div>
            <div className="text-white/70 text-xs sm:text-sm">Természetes összetevők</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;