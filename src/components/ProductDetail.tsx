import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Check, Info, Users, Layout, ShieldCheck, Droplet, Ruler, Zap, Thermometer, Volume2 } from 'lucide-react';

interface ProductDetailProps {
  product: any;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
      icon: <Droplet className="w-6 h-6" />,
      title: 'Simplicity™ vízkezelés',
      description: 'Automatikus vízkezelő rendszer kristálytiszta vízért'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-ocean-300 transition-colors mb-8 glass-button px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Vissza a termékekhez</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="glass-card rounded-3xl p-4 shadow-lg">
              <img
                src={colors[selectedColor].image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-2xl"
              />
            </div>

            {/* Color Selection */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Színválasztás</h4>
              <div className="flex space-x-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === index
                        ? 'border-ocean-400 scale-110'
                        : 'border-white/30 hover:border-white/50'
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm mt-2">{colors[selectedColor].name}</p>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-playfair font-bold text-white mb-2">
                    Bullfrog Spas {product.name}
                  </h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/70">(127 értékelés)</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`glass-button rounded-full p-3 transition-all duration-300 ${
                      isWishlisted ? 'text-red-400' : 'text-white hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="glass-button rounded-full p-3 text-white hover:text-ocean-300 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                A {product.name} a Bullfrog Spas M szériájának csúcsmodellje, amely egyesíti a luxust, 
                a technológiát és a terápiás hatásokat. Ez a prémium spa tökéletes választás azok számára, 
                akik a legmagasabb szintű relaxációt és wellness élményt keresik otthonukban.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-navy-500 to-ocean-500 text-white py-4 rounded-full font-semibold text-lg hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Ajánlatkérés</span>
                </button>
                <button className="glass-button text-white py-4 px-8 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                  Bemutóterem látogatás
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">Főbb jellemzők</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features?.map((feature: any, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="text-ocean-400 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* JetPak System */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              JetPak™ masszázs rendszer
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A forradalmi JetPak™ rendszer lehetővé teszi, hogy személyre szabd a masszázs élményt. 
              Válassz a különböző JetPak típusok közül, és alakítsd át spa-d egyedi igényeid szerint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jetPaks.map((jetpak, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <h3 className="text-2xl font-playfair font-bold text-white mb-4">{jetpak.name}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{jetpak.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-ocean-300 mb-3">Előnyök:</h4>
                  {jetpak.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">
              Műszaki specifikációk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0"
                >
                  <span className="text-white/70 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Installation & Delivery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Telepítés és szállítás</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Ingyenes helyszíni felmérés</h4>
                  <p className="text-white/70 text-sm">Szakértőink felmérik a telepítési helyet</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Professzionális telepítés</h4>
                  <p className="text-white/70 text-sm">Képzett technikusaink végzik a telepítést</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Beüzemelés és oktatás</h4>
                  <p className="text-white/70 text-sm">Részletes használati útmutató és oktatás</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Garancia és szerviz</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">7 év szerkezeti garancia</h4>
                  <p className="text-white/70 text-sm">Teljes körű védelem a szerkezeti elemekre</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">2 év alkatrész garancia</h4>
                  <p className="text-white/70 text-sm">Minden alkatrészre kiterjedő garancia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">24/7 ügyfélszolgálat</h4>
                  <p className="text-white/70 text-sm">Folyamatos támogatás és szerviz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Készen állsz a luxus spa élményre?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Lépj kapcsolatba szakértőinkkel, és fedezd fel, hogyan alakíthatod át otthonod 
              személyes wellness oázissá a {product.name} segítségével.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-navy-500 to-ocean-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-navy-600 hover:to-ocean-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Ajánlatkérés most
              </button>
              <button className="glass-button text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                Bemutóterem látogatás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;