import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Layout, 
  ShieldCheck, 
  Droplet, 
  Ruler,
  Heart,
  Share2,
  ChevronRight,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Eye,
  Zap,
  Award,
  Sparkles,
  Camera,
  RotateCcw,
  MousePointer,
  Crown,
  Waves,
  Settings,
  DollarSign,
  TrendingUp,
  Target,
  Maximize2
} from 'lucide-react';
import products from '../products';

const X8Page = () => {
  const navigate = useNavigate();
  const product = products.find(p => p.name === 'X8');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTrimLevel, setSelectedTrimLevel] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 pt-20 flex items-center justify-center">
        <div className="text-center text-white py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ocean-400 mx-auto mb-4"></div>
          <p>Termék nem található.</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 transition-all duration-300 hover:scale-125 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`} 
      />
    ));
  };

  const handleImageHover = (e: React.MouseEvent) => {
    if (imageRef.current && isImageZoomed) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const img = imageRef.current.querySelector('img');
      if (img) {
        img.style.transformOrigin = `${x}% ${y}%`;
      }
    }
  };

  const tabs = [
    { id: 'overview', label: 'Áttekintés', icon: Eye },
    { id: 'specs', label: 'Specifikációk', icon: Ruler },
    { id: 'features', label: 'Funkciók', icon: Award },
    { id: 'trims', label: 'Szintek', icon: Settings },
    { id: 'value', label: 'Ár-érték', icon: DollarSign }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 pt-20 pb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/25 to-purple-400/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Custom cursor */}
      <div 
        className="fixed w-5 h-5 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      {/* Enhanced Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className={`flex flex-wrap items-center gap-2 text-white/60 text-xs sm:text-sm transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button onClick={() => navigate('/')} className="hover:text-ocean-300 transition-all duration-300 hover:scale-105">
            Főoldal
          </button>
          <ChevronRight className="w-4 h-4 animate-pulse" />
          <button onClick={() => navigate('/products')} className="hover:text-ocean-300 transition-all duration-300 hover:scale-105">
            Spa-k
          </button>
          <ChevronRight className="w-4 h-4 animate-pulse" />
          <span className="hover:text-ocean-300 transition-all duration-300">X Széria®</span>
          <ChevronRight className="w-4 h-4 animate-pulse" />
          <span className="text-white font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Back Button */}
        <button
          onClick={() => navigate('/products')}
          className={`flex items-center space-x-2 text-white/70 hover:text-white mb-8 transition-all duration-500 group glass-button px-6 py-3 rounded-full hover:bg-white/10 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-all duration-300" />
          <span>Vissza a termékekhez</span>
        </button>

        {/* Hero Section with Video Background */}
        <div className={`relative mb-16 glass-card rounded-3xl overflow-hidden transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-transparent to-purple-900/80 z-10"></div>
          
          {/* Video Background */}
          <div className="absolute inset-0">
            <video 
              autoPlay 
              muted={isMuted} 
              loop 
              className="w-full h-full object-cover"
              poster={product.image}
            >
              <source src="https://player.vimeo.com/external/434045018.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </div>

          {/* Video Controls */}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-12">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-bold text-white mb-4 animate-fade-in-up">
                {product.name}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">®</span>
              </h1>
              <div className="flex items-center space-x-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating || 0)}
                  <span className="text-white/70 ml-2 text-lg">{product.rating}</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <span className="text-white/70 text-lg">{product.reviews} Értékelés</span>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Kiváló Ár</span>
                </div>
              </div>
              <p className="text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Nagy spa kiváló áron - luxus és tágas élmény prémium minőségben, olyan áron, amelyet csak az X Series tud kínálni.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {[
                  { icon: Users, label: 'Ülőhely', value: product.seats },
                  { icon: Maximize2, label: 'Tágas', value: 'XL' },
                  { icon: TrendingUp, label: 'Ár-érték', value: 'TOP' },
                  { icon: Waves, label: 'Szivattyú', value: product.therapyPumps }
                ].map((stat, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-blue-500/20">
                    <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Product Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Enhanced Image Gallery */}
          <div className={`space-y-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div 
              ref={imageRef}
              className="relative glass-card rounded-3xl overflow-hidden group cursor-zoom-in border border-blue-500/20"
              onMouseMove={handleImageHover}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={`w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-700 ${
                  isImageZoomed ? 'scale-150' : 'scale-100 group-hover:scale-110'
                }`}
              />
              
              {/* Image overlay controls */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <button className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Camera className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsImageZoomed(!isImageZoomed);
                    }}
                    className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    {isImageZoomed ? <RotateCcw className="w-5 h-5" /> : <MousePointer className="w-5 h-5" />}
                  </button>
                  <button className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 360° Indicator */}
              <div className="absolute top-4 left-4 glass-button px-3 py-1 rounded-full border border-blue-400/30">
                <span className="text-white text-sm font-semibold">360°</span>
              </div>

              {/* Premium Badge */}
              <div className="absolute top-4 right-4 glass-button px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <span className="text-blue-300 text-sm font-semibold">X Series® Értékarány</span>
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`glass-card rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-transparent hover:border-white/30'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Product Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Product Header */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                  <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">X Széria® Nagy Spa Kiváló Áron</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`glass-button p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isWishlisted ? 'text-red-400 bg-red-400/20' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="glass-button p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Elérhető ülőhelyek', value: product.seats, icon: Users },
                  { label: 'Prémium JetPak® ülések', value: 'Hagyományos jet-ek', icon: Zap },
                  { label: 'Lounger ülések', value: product.loungeSeats || 'Nincs', icon: Layout },
                  { label: 'Méret', value: product.dimensions, icon: Ruler }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group border border-blue-500/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <item.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="text-white/70 text-sm">{item.label}:</span>
                    </div>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <DollarSign className="w-5 h-5 text-blue-400 mr-2" />
                Kiváló ár-érték arány
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Nagy spa kiváló áron</h4>
                    <p className="text-white/70 text-sm">Tágas 8 üléses spa olyan áron, amelyet csak az X Series tud kínálni</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Prémium minőség</h4>
                    <p className="text-white/70 text-sm">Luxus élmény, amely megegyezik más prémium spa-kkal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Bőséges lábtér</h4>
                    <p className="text-white/70 text-sm">Nyitott ülésrendszer és tágas belső tér</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Családi és baráti élmények</h4>
                    <p className="text-white/70 text-sm">Ideális maradandó kapcsolatok építéséhez</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trim Level Selector */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                Szint opciók
              </h3>
              <div className="space-y-3">
                {product.trimLevels?.map((trim, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTrimLevel(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 border ${
                      selectedTrimLevel === index 
                        ? 'bg-blue-500/20 border-blue-400 text-white' 
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold">X Series™ {trim}</div>
                    <div className="text-sm mt-1">
                      {index === 0 && 'Prémium szűrés, érintőképernyős vezérlők, belső és külső világítás'}
                      {index === 1 && 'Alap szint kiváló ár-érték aránnyal'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Spa tervezése árazásért</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="glass-button text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105">
                  <Eye className="w-4 h-4 inline mr-2" />
                  Specifikációk
                </button>
                <button className="glass-button text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105">
                  <Download className="w-4 h-4 inline mr-2" />
                  Brosúra
                </button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                Élő statisztikák
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Jelenlegi nézők', value: '29', trend: '+8' },
                  { label: 'Mai ajánlatkérések', value: '22', trend: '+12' },
                  { label: 'Foglalt bemutóterem látogatások', value: '15', trend: '+9' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/70">{stat.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold">{stat.value}</span>
                      <span className="text-green-400 text-sm">({stat.trend})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="mb-16">
          <div className="mb-8 glass-card p-2 max-w-3x1 mx-auto border border-blue-500/20 rounded-xl md:rounded-full flex flex-wrap md:flex-nowrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-semibold text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass-card rounded-3xl p-8 border border-blue-500/20">
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Termék áttekintés</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                
                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {[
                    { label: 'Terápiás szivattyúk', value: product.therapyPumps },
                    { label: 'Száraz súly', value: product.dryWeight },
                    { label: 'Töltött súly', value: product.filledWeight },
                    { label: 'Víz kapacitás', value: product.waterCapacity },
                    { label: 'Értékelés', value: `${product.rating}/5` }
                  ].map((spec, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 mb-2 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 border border-blue-400/20">
                        <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{spec.value}</div>
                      </div>
                      <span className="text-white/60 text-sm">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">X Series® beépített funkciók</h2>
                <p className="text-white/80 mb-8">
                  Élvezze időtöltését ebben a többfunkcionális hátsó kerti vízi élményben az X Series® testreszabható funkcióinak köszönhetően.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.includedFeatures?.map((feature, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group border border-blue-500/10">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{feature.name}</h3>
                          <p className="text-white/70">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'trims' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Szint lehetőségek</h2>
                <p className="text-white/80 mb-8">
                  Az X8 két különböző szinten elérhető, mindegyik egyedi funkciókkal és ár-érték aránnyal.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.trimLevels?.map((trim, index) => (
                    <div 
                      key={index} 
                      className={`glass-card rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105 border-2 ${
                        selectedTrimLevel === index 
                          ? 'border-blue-400 bg-blue-500/10' 
                          : 'border-blue-500/20 hover:border-blue-400/50'
                      }`}
                      onClick={() => setSelectedTrimLevel(index)}
                    >
                      <div className="text-center">
                        <div className="mb-4">
                          <Settings className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                          <h3 className="text-xl font-bold text-white">X Series™ {trim}</h3>
                        </div>
                        <div className="space-y-3 text-left">
                          {index === 0 && (
                            <>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Prémium szűrés</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Érintőképernyős vezérlők</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Prémium világítási csomag</span>
                              </div>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Alap vezérlők</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Standard világítás</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white/70">Kiváló ár-érték arány</span>
                              </div>
                            </>
                          )}
                        </div>
                        <button className="w-full mt-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white py-2 rounded-lg font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30">
                          Részletek megtekintése
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'value' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Ár-érték arány</h2>
                <p className="text-white/80 mb-8">
                  Az X8 a legjobb ár-érték arányt kínálja a nagy spa kategóriában.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card rounded-2xl p-6 text-center border border-blue-500/10">
                    <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Kiváló ár</h3>
                    <p className="text-white/70">Nagy spa olyan áron, amelyet csak az X Series tud kínálni</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 text-center border border-purple-500/10">
                    <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Prémium minőség</h3>
                    <p className="text-white/70">Luxus élmény, amely megegyezik más prémium spa-kkal</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 text-center border border-green-500/10">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Hosszú távú érték</h3>
                    <p className="text-white/70">EnduraFrame™ konstrukció hosszú élettartamra</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden group border border-blue-500/20">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-navy-500/10 animate-gradient-shift"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-navy-500/20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
                <h2 className="text-4xl font-bold text-white">
                  Készen áll a kiváló ár-érték arányra?
                </h2>
                <Target className="w-8 h-8 text-purple-400 ml-3 animate-pulse" />
              </div>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Tapasztalja meg az X8 nagyszerű értékét - nagy spa luxus élmény olyan áron, amelyet csak az X Series tud kínálni!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Nagy spa kiváló áron</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                <button className="glass-button text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Ár-érték próba</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span>7 év garancia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  <span>Kiváló ár-érték</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>8 személyes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default X8Page;