import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Check, Info, Users, Layout, ShieldCheck, Droplet, Ruler, Zap, Thermometer, Volume2 } from 'lucide-react';

interface ProductDetailProps {
  product: any;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const colors = [
    { name: 'Timber', color: '#8B4513', image: product.images?.[0] || product.image },
    { name: 'Sterling', color: '#C0C0C0', image: product.images?.[1] || product.image },
    { name: 'Midnight', color: '#2F4F4F', image: product.images?.[2] || product.image },
    { name: 'Sahara', color: '#F4A460', image: product.images?.[3] || product.image }
  ];

  const specifications = [
    { label: 'Méretek', value: product.dimensions || '2.79m x 2.39m x 0.96m' },
    { label: 'Víz kapacitás', value: product.waterCapacity || '1,800 liter' },
    { label: 'Súly (üres)', value: product.emptyWeight || '450 kg' },
    { label: 'Súly (tele)', value: product.fullWeight || '2,250 kg' },
    { label: 'Elektromos igény', value: product.electrical || '230V, 32A' },
    { label: 'Fűtőelem', value: product.heater || '3kW Titanium' },
    { label: 'Szigetelés', value: product.insulation || 'FullFoam™' },
    { label: 'Garancia', value: product.warranty || '7 év szerkezet, 2 év alkatrész' }
  ];

  const jetPaks = [
    {
      name: 'DeepRelief™',
      description: 'Mély izommasszázs erős, célzott vízsugárral',
      benefits: ['Izomfeszültség oldása', 'Javított vérkeringés', 'Stressz csökkentés']
    },
    {
      name: 'EuroSoak™',
      description: 'Lágy, körkörösen örvénylő masszázs',
      benefits: ['Teljes test relaxáció', 'Aromaterápia kompatibilis', 'Csendes működés']
    },
    {
      name: 'WaveLounge™',
      description: 'Hullámzó masszázs a teljes hátnak',
      benefits: ['Gerinc masszázs', 'Nyaki feszültség oldás', 'Ergonomikus támogatás']
    },
    {
      name: 'JetStream™',
      description: 'Erős, egyirányú vízsugár masszázs',
      benefits: ['Célzott kezelés', 'Állítható intenzitás', 'Precíz masszázs']
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Személyre szabott ülések',
      description: `${product.seats || 10} egyedileg tervezett ülés maximális kényelemért`
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'JetPak™ rendszer',
      description: `${product.jetpaks || 7} cserélhető JetPak a személyre szabott masszázsért`
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Energiahatékonyság',
      description: 'FullFoam™ szigetelés az optimális energiahatékonyságért'
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Precíz hőmérséklet',
      description: 'Digitális hőmérséklet szabályozás ±0.5°C pontossággal'
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: 'Prémium audio',
      description: 'Bluetooth kompatibilis hangrendszer víz alatti hangszórókkal'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 py-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-navy-400/10 to-ocean-400/10 rounded-full transition-all duration-2000 ${isLoaded ? 'animate-float opacity-100' : 'opacity-0 translate-y-10'}`}></div>
        <div className={`absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-ocean-400/10 to-purple-400/10 rounded-full transition-all duration-2000 delay-300 ${isLoaded ? 'animate-float opacity-100' : 'opacity-0 translate-y-10'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-navy-400/10 rounded-full transition-all duration-2000 delay-500 ${isLoaded ? 'animate-float opacity-100' : 'opacity-0 translate-y-10'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Back Button */}
        <div className={`transition-all duration-800 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-ocean-300 transition-all duration-300 mb-8 glass-button px-6 py-3 rounded-full font-medium font-modern hover:scale-105 hover:shadow-lg group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Vissza a termékekhez</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Animated Product Images */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {/* Main Image with Zoom Effect */}
            <div className="glass-card rounded-3xl p-4 shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={colors[selectedColor].image}
                  alt={product.name}
                  className="w-full h-100 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

          </div>

          {/* Animated Product Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Header with Staggered Animation */}
            <div className="glass-card rounded-3xl p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className={`text-4xl font-display font-bold text-white mb-2 transition-all duration-800 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Bullfrog Spas {product.name}
                  </h1>
                  <div className={`flex items-center space-x-2 mb-4 transition-all duration-800 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 text-yellow-400 fill-current transition-all duration-300`}
                          style={{ animationDelay: `${i * 100 + 700}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-white/70 font-modern">(127 értékelés)</span>
                  </div>
                </div>
                <div className={`flex space-x-2 transition-all duration-800 delay-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`glass-button rounded-full p-3 transition-all duration-300 hover:scale-110 ${
                      isWishlisted ? 'text-red-400 bg-red-400/10' : 'text-white hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-6 h-6 transition-all duration-300 ${isWishlisted ? 'fill-current scale-110' : ''}`} />
                  </button>
                  <button className="glass-button rounded-full p-3 text-white hover:text-ocean-300 transition-all duration-300 hover:scale-110">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <p className={`text-white/80 text-lg leading-relaxed mb-6 font-modern transition-all duration-800 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                A {product.name} a Bullfrog Spas M szériájának csúcsmodellje, amely egyesíti a luxust, 
                a technológiát és a terápiás hatásokat. Ez a prémium spa tökéletes választás azok számára, 
                akik a legmagasabb szintű relaxációt és wellness élményt keresik otthonukban.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className="flex-1 bg-gradient-to-r from-navy-500 to-ocean-500 text-white py-4 rounded-full font-semibold font-modern text-lg hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 btn-trendy">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Ajánlatkérés</span>
                </button>
                <button className="glass-button text-white py-4 px-8 rounded-full font-semibold font-modern hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105">
                  Bemutóterem látogatás
                </button>
              </div>
            </div>

            {/* Animated Key Features */}
            <div className={`glass-card rounded-3xl p-8 transition-all duration-800 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Főbb jellemzők</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features?.map((feature: any, index: number) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 transition-all duration-500 hover:scale-105`}
                    style={{ animationDelay: `${index * 100 + 1100}ms` }}
                  >
                    <feature.icon className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-modern">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Detailed Features */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover-lift card-hover`}
              style={{ animationDelay: `${index * 150 + 1300}ms` }}
            >
              <div className="text-ocean-400 mb-4 transition-transform duration-300 hover:scale-110">{feature.icon}</div>
              <h4 className="text-xl font-semibold font-modern text-white mb-3">{feature.title}</h4>
              <p className="text-white/70 leading-relaxed font-modern">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Animated JetPak System */}
        <div className={`mt-16 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              JetPak masszázs rendszer
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-modern">
            A forradalmi JetPak rendszer lehetővé teszi, hogy Ön személyre szabja a masszázsélményt.
            Válasszon igényének megfelelően a 16 különböző JetPak típusból.


            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jetPaks.map((jetpak, index) => (
              <div
                key={index}
                className={`glass-card rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover-lift card-hover`}
                style={{ animationDelay: `${index * 200 + 1600}ms` }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-4">{jetpak.name}</h3>
                <p className="text-white/80 mb-6 leading-relaxed font-modern">{jetpak.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold font-modern text-ocean-300 mb-3">Előnyök:</h4>
                  {jetpak.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex} 
                      className={`flex items-center space-x-2 transition-all duration-300`}
                      style={{ animationDelay: `${benefitIndex * 100 + index * 200 + 1700}ms` }}
                    >
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm font-modern">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Technical Specifications */}
        <div className={`mt-16 transition-all duration-1000 delay-1800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Műszaki specifikációk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-4 border-b border-white/10 last:border-b-0 transition-all duration-300 hover:bg-white/5 rounded-lg px-4`}
                  style={{ animationDelay: `${index * 100 + 1900}ms` }}
                >
                  <span className="text-white/70 font-medium font-modern">{spec.label}</span>
                  <span className="text-white font-semibold font-modern">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Installation & Delivery */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Telepítés és szállítás</h3>
            <div className="space-y-4">
              {[
                { title: "Ingyenes helyszíni felmérés", desc: "Szakértőink felmérik a telepítési helyet" },
                { title: "Professzionális telepítés", desc: "Képzett technikusaink végzik a telepítést" },
                { title: "Beüzemelés és oktatás", desc: "Részletes használati útmutató és oktatás" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 hover:translate-x-2`}
                  style={{ animationDelay: `${index * 150 + 2100}ms` }}
                >
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-modern">{item.title}</h4>
                    <p className="text-white/70 text-sm font-modern">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Garancia és szerviz</h3>
            <div className="space-y-4">
              {[
                { title: "7 év szerkezeti garancia", desc: "Teljes körű védelem a szerkezeti elemekre" },
                { title: "2 év alkatrész garancia", desc: "Minden alkatrészre kiterjedő garancia" },
                { title: "24/7 ügyfélszolgálat", desc: "Folyamatos támogatás és szerviz" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 hover:translate-x-2`}
                  style={{ animationDelay: `${index * 150 + 2250}ms` }}
                >
                  <ShieldCheck className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold font-modern">{item.title}</h4>
                    <p className="text-white/70 text-sm font-modern">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-2400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500/10 via-ocean-500/10 to-purple-500/10 animate-gradient-shift"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Készen áll egy felejthetetlen Spa élményre?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-modern">
Lépjen kapcsolatba szakértőinkkel és fedezze fel hogyan alakíthatja át otthonát
egy különleges wellness oázissá!

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-navy-500 to-ocean-500 text-white px-8 py-4 rounded-full font-semibold font-modern text-lg hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 btn-trendy">
                  Ajánlatkérés most
                </button>
                <button className="glass-button text-white px-8 py-4 rounded-full font-semibold font-modern hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105">
                  Bemutóterem látogatás
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;