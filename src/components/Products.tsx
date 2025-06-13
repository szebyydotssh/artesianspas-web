import React, { useState } from 'react';
import {
  Star, ShoppingCart, Heart, Eye,
  Users, Layout, ShieldCheck, Droplet, Ruler
} from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Összes' },
    { id: 'mseries', label: 'M Széria' },
    { id: 'aseries', label: 'A Széria' },
    { id: 'xseries', label: 'X Széria' },
    { id: 'swimseries', label: 'Swim Széria' },
    { id: 'stilseries', label: 'STIL Széria' }
  ];

  const products = [
    {
      id: 1,
      name: "M9",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
      features: [
        { icon: Users, label: "10 Ülés" },
        { icon: Layout, label: "3 Lounge Ülés" },
        { icon: ShieldCheck, label: "7 JetPak" },
        { icon: Droplet, label: "Simplicity Water Care" },
        { icon: Ruler, label: "2.79m x 2.39m x 0.96m" }
      ]
    },
    {
      id: 2,
      name: "M8",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "2 Lounge Ülés" },
        { icon: ShieldCheck, label: "6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.39m x 2.39m x 0.96m" }
      ]
    },
    {
      id: 3,
      name: "M7",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.31m x 2.31m x 0.94m" }
      ]
    },
    {
      id: 4,
      name: "M6",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
      features: [
        { icon: Users, label: "7 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "4 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.31m x 2.03m x 0.86m" }
      ]
    },
    {
      id: 5,
      name: "A9L",
      category: "aseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "1 Lounge Ülés" },
        { icon: ShieldCheck, label: "7 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.77m x 2.39m x 0.97m" }
      ]
    },
    {
      id: 6,
      name: "A8",
      category: "aseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
      features: [
        { icon: Users, label: "8 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "4-6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Nézd meg a 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400 animate-delayed">
              kollekciónkat
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animate-delayed-2">
            Fedezd fel gondosan válogatott luxus spa termékeinket, amelyeket a minőség és a kényelem jegyében terveztek. 
            Válassz a különböző szériák közül, és tapasztald meg a prémium élményt otthonodban.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base animate-fade-in hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-navy-500 to-ocean-500 text-white shadow-lg animate-pulse-glow'
                  : 'glass-button text-white hover:bg-white/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-whoosh"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="glass-button rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="glass-button rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-navy-500/80 to-ocean-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === product.category)?.label}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-white mb-3 sm:mb-4">
                  {product.name}
                </h3>
                
                <ul className="text-white/80 text-sm space-y-2 mb-4 sm:mb-6">
                  {product.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                      <feature.icon className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-navy-500 to-ocean-500 text-white py-2 sm:py-3 rounded-full font-semibold hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                  Részletek megtekintése
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4">
              Nem találsz megfelelő terméket?
            </h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90 px-4">
              Lépj be a dizájn stúdiónkba, ahol személyre szabott tanácsadást és tervezést kínálunk számodra.
            </p>
            <button className="bg-gradient-to-r from-ocean-500 to-navy-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-ocean-600 hover:to-navy-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
              Irány a dizájn stúdióba
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;