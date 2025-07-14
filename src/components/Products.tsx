import React, { useState } from 'react';
import {
  Star, ShoppingCart, Heart, Eye,
  Users, Layout, ShieldCheck, Droplet, Ruler
} from 'lucide-react';
import ProductDetail from './ProductDetail';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 10,
      loungeSeats: 3,
      jetpaks: 7,
      dimensions: "2.79m x 2.39m x 0.96m",
      waterCapacity: "1,800 liter",
      emptyWeight: "450 kg",
      fullWeight: "2,250 kg",
      electrical: "230V, 32A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "A M9 a Bullfrog Spas M szériájának zászlóshajója, amely 10 személynek biztosít luxus spa élményt. 3 lounge ülésével és 7 cserélhető JetPak rendszerével tökéletes választás nagyobb családok és baráti társaságok számára.",
      features: [
        { icon: Users, label: "10 Pozíció" },
        { icon: Layout, label: "3 Lounge Ülés" },
        { icon: ShieldCheck, label: "Jetpak: 7" },
        { icon: Droplet, label: "Simplicity Water Care" },
        { icon: Ruler, label: "2.79m x 2.39m x 0.96m" }
      ],
      highlights: [
        "Legnagyobb kapacitás az M szériában",
        "Három különböző lounge pozíció",
        "Prémium JetPak™ masszázs rendszer",
        "Energiahatékony FullFoam™ szigetelés",
        "Simplicity™ automatikus vízkezelés"
      ]
    },
    {
      id: 2,
      name: "M8",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 9,
      loungeSeats: 2,
      jetpaks: 6,
      dimensions: "2.39m x 2.39m x 0.96m",
      waterCapacity: "1,650 liter",
      emptyWeight: "420 kg",
      fullWeight: "2,070 kg",
      electrical: "230V, 32A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "A M8 tökéletes egyensúlyt teremt a méret és a funkcionalitás között. 9 ülésével és 2 lounge pozíciójával ideális választás közepes méretű családok számára, akik nem szeretnének kompromisszumot kötni a luxus terén.",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "2 Lounge Ülés" },
        { icon: ShieldCheck, label: "6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.39m x 2.39m x 0.96m" }
      ],
      highlights: [
        "Kompakt, mégis tágas design",
        "Két ergonomikus lounge ülés",
        "Hatékony JetPak™ elrendezés",
        "Optimalizált vízforgalom",
        "Prémium LED világítás"
      ]
    },
    {
      id: 3,
      name: "M7",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 9,
      loungeSeats: 0,
      jetpaks: 6,
      dimensions: "2.31m x 2.31m x 0.94m",
      waterCapacity: "1,500 liter",
      emptyWeight: "380 kg",
      fullWeight: "1,880 kg",
      electrical: "230V, 32A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "A M7 a társasági spa élmény bajnoka. 9 hagyományos ülésével minden vendég kényelmesen elfér, míg a kompakt design kisebb teraszokra és udvarokra is tökéletesen illeszkedik.",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.31m x 2.31m x 0.94m" }
      ],
      highlights: [
        "Társasági használatra optimalizált",
        "Kompakt, négyzetes design",
        "Egyenletes JetPak™ eloszlás",
        "Könnyű karbantartás",
        "Kiváló ár-érték arány"
      ]
    },
    {
      id: 4,
      name: "M6",
      category: "mseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 7,
      loungeSeats: 0,
      jetpaks: 4,
      dimensions: "2.31m x 2.03m x 0.86m",
      waterCapacity: "1,300 liter",
      emptyWeight: "340 kg",
      fullWeight: "1,640 kg",
      electrical: "230V, 25A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "A M6 a tökéletes belépő modell az M szériába. Kompakt mérete ellenére 7 személynek biztosít kényelmes helyet, míg a 4 JetPak rendszer garantálja a prémium masszázs élményt.",
      features: [
        { icon: Users, label: "7 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "4 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.31m x 2.03m x 0.86m" }
      ],
      highlights: [
        "Kompakt és hatékony design",
        "Kiváló kezdő modell",
        "Alacsony üzemeltetési költség",
        "Gyors felfűtés",
        "Könnyű telepítés"
      ]
    },
    {
      id: 5,
      name: "A9L",
      category: "aseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 9,
      loungeSeats: 1,
      jetpaks: 7,
      dimensions: "2.77m x 2.39m x 0.97m",
      waterCapacity: "1,750 liter",
      emptyWeight: "430 kg",
      fullWeight: "2,180 kg",
      electrical: "230V, 32A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "Az A9L az A széria csúcsmodellje, amely egyesíti a luxust és a funkcionalitást. Az egyedi lounge ülés és a 7 JetPak rendszer garantálja a személyre szabott wellness élményt.",
      features: [
        { icon: Users, label: "9 Ülés" },
        { icon: Layout, label: "1 Lounge Ülés" },
        { icon: ShieldCheck, label: "7 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.77m x 2.39m x 0.97m" }
      ],
      highlights: [
        "A széria legnagyobb modellje",
        "Luxus lounge ülés",
        "Maximális JetPak™ kapacitás",
        "Prémium felszereltség",
        "Kiváló ár-érték arány"
      ]
    },
    {
      id: 6,
      name: "A8",
      category: "aseries",
      image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
      images: [
        "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
        "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
      ],
      seats: 8,
      loungeSeats: 0,
      jetpaks: 6,
      dimensions: "2.39m x 2.39m x 0.97m",
      waterCapacity: "1,600 liter",
      emptyWeight: "400 kg",
      fullWeight: "2,000 kg",
      electrical: "230V, 32A",
      heater: "3kW Titanium",
      insulation: "FullFoam™",
      warranty: "7 év szerkezet, 2 év alkatrész",
      description: "Az A8 a tökéletes választás azok számára, akik kiváló minőséget keresnek megfizethető áron. 8 ülésével és 6 JetPak rendszerével minden családtag megtalálja a számára ideális masszázs élményt.",
      features: [
        { icon: Users, label: "8 Ülés" },
        { icon: Layout, label: "0 Lounge Ülés" },
        { icon: ShieldCheck, label: "4-6 JetPak" },
        { icon: Droplet, label: "Simplicity Total Water Care" },
        { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
      ],
      highlights: [
        "Kiváló ár-érték arány",
        "Flexibilis JetPak™ konfiguráció",
        "Négyzetes, praktikus design",
        "Közepes méretű családoknak",
        "Egyszerű karbantartás"
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductSelect = (product: any) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToProducts = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsTransitioning(false);
    }, 300);
  };

  if (selectedProduct) {
    return (
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <ProductDetail 
          product={selectedProduct} 
          onBack={handleBackToProducts} 
        />
      </div>
    );
  }

  return (
    <section id="products" className={`py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-white mb-4 sm:mb-6 animate-fade-in tracking-tight">
            Nézd meg a 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400 animate-delayed">
              termék katalógusunkat
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animate-delayed-2 font-modern">
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
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium font-modern transition-all duration-300 text-sm sm:text-base animate-fade-in hover:scale-105 ${
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
              className="group glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-whoosh card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProductSelect(product)}
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
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle wishlist
                    }}
                    className="glass-button rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductSelect(product);
                    }}
                    className="glass-button rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-navy-500/80 to-ocean-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium font-modern">
                  {categories.find(cat => cat.id === product.category)?.label}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">
                  {product.name}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3 font-modern">
                  {product.description}
                </p>
                
                <ul className="text-white/80 text-sm space-y-2 mb-4 sm:mb-6">
                  {product.features?.slice(0, 3).map((feature: any, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-1">
                      <feature.icon className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-modern">{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductSelect(product);
                  }}
                  className="w-full bg-gradient-to-r from-navy-500 to-ocean-500 text-white py-2 sm:py-3 rounded-full font-semibold font-modern hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base btn-trendy"
                >
                  Részletek megtekintése
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500/10 via-ocean-500/10 to-purple-500/10 animate-gradient-shift"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
                Bizonytalan a medence kiválasztásánál?
              </h3>
              <p className="text-lg sm:text-xl mb-6 opacity-90 px-4 font-modern">
                Lépjen be dizájn stúdiónkba ahol tetszése szerint személyre szabhatja az Ön igényeinek
megfelelő terméket!
              </p>
              <button className="bg-gradient-to-r from-ocean-500 to-navy-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold font-modern text-base sm:text-lg hover:from-ocean-600 hover:to-navy-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow btn-trendy">
                Belépés
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;