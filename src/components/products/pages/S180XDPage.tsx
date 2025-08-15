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
  Maximize2,
  Activity,
  Home,
  Dumbbell,
  Gamepad2,
  Expand,
  TrendingDown
} from 'lucide-react';
import products from '../products';

const S180XDPage = () => {
  const navigate = useNavigate();
  const product = products.find(p => p.name === 'S180XD');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedJetPak, setSelectedJetPak] = useState(0);
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
    { id: 'jetpaks', label: 'JetPak Opciók', icon: Award },
    { id: 'swim', label: 'Úszás & Fitnesz', icon: Dumbbell },
    { id: 'extradeep', label: 'Extra Mély', icon: Expand }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900 pt-20 pb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full animate-float"
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
        className="fixed w-5 h-5 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
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
          <span className="hover:text-ocean-300 transition-all duration-300">Swim Series™</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-transparent to-cyan-900/80 z-10"></div>
          
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
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">™</span>
              </h1>
              <div className="flex items-center space-x-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-1">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Swim Series™</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <Expand className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Extra Mély</span>
                </div>
              </div>
              <p className="text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                15 láb hosszú és extra mély - úszásra és fitneszre optimalizált egyedülálló ülésrendezéssel.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {[
                  { icon: Users, label: 'Ülőhely', value: product.seats },
                  { icon: Layout, label: 'JetPak', value: product.jetpaks },
                  { icon: Expand, label: 'Extra Mély', value: '1.52m' },
                  { icon: Waves, label: 'Szivattyú', value: product.therapyPumps }
                ].map((stat, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-cyan-500/20">
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
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
              className="relative glass-card rounded-3xl overflow-hidden group cursor-zoom-in border border-cyan-500/20"
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
              <div className="absolute top-4 left-4 glass-button px-3 py-1 rounded-full border border-cyan-400/30">
                <span className="text-white text-sm font-semibold">360°</span>
              </div>

              {/* Premium Badge */}
              <div className="absolute top-4 right-4 glass-button px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                <span className="text-cyan-300 text-sm font-semibold">Extra Mély</span>
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`glass-card rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index ? 'border-cyan-400 ring-2 ring-cyan-400/50' : 'border-transparent hover:border-white/30'
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
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                  <p className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">Swim Series™ Extra Mély</p>
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
                  { label: 'Prémium JetPak ülések', value: product.jetpaks, icon: Layout },
                  { label: 'Extra mély méret', value: '1.52m', icon: Expand },
                  { label: 'Hosszúság', value: '4.57m', icon: Ruler }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group border border-cyan-500/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <item.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-white/70 text-sm">{item.label}:</span>
                    </div>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Deep Features */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Expand className="w-5 h-5 text-cyan-400 mr-2" />
                Extra mély előnyök
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">15 láb hosszú és extra mély</h4>
                    <p className="text-white/70 text-sm">Optimális méret az úszásra és fitneszre fókuszálva, 1.52m mélységgel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Úszásra optimalizált ülésrendezés</h4>
                    <p className="text-white/70 text-sm">Egyedülálló ülésrendezés prioritással az úszóterületre, komoly úszók számára</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Fitnesz-központú design</h4>
                    <p className="text-white/70 text-sm">Tervezve azoknak, akik komolyan veszik az úszást és fitneszet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Terápia és szórakozás</h4>
                    <p className="text-white/70 text-sm">Megőrzi a terápiás és családi szórakozási funkciókat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* JetPak Selector */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 text-cyan-400 mr-2" />
                JetPak® Opciók ({product.jetPakOptions?.length})
              </h3>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {product.jetPakOptions?.slice(0, 6).map((jetpak, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedJetPak(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 border ${
                      selectedJetPak === index 
                        ? 'bg-cyan-500/20 border-cyan-400 text-white' 
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold">{jetpak.name}</div>
                    <div className="text-sm mt-1">{jetpak.description}</div>
                    <div className="text-xs mt-1 text-cyan-400">{jetpak.jetCount} jet • {jetpak.targetAreas.join(', ')}</div>
                  </button>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-3">+ További {(product.jetPakOptions?.length || 0) - 6} JetPak opció elérhető</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Extra Mély Spa tervezése árazásért</span>
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
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                Élő statisztikák
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Jelenlegi nézők', value: '18', trend: '+6' },
                  { label: 'Mai ajánlatkérések', value: '9', trend: '+3' },
                  { label: 'Extra mély érdeklődések', value: '27', trend: '+9' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/70">{stat.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold">{stat.value}</span>
                      <span className="text-cyan-400 text-sm">({stat.trend})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="mb-16">
          <div className="mb-8 glass-card p-2 max-w-3x1 mx-auto border border-cyan-500/20 rounded-xl md:rounded-full flex flex-wrap md:flex-nowrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-semibold text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass-card rounded-3xl p-8 border border-cyan-500/20">
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
                    { label: 'Extra mélység', value: '1.52m' }
                  ].map((spec, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 mb-2 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/20">
                        <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{spec.value}</div>
                      </div>
                      <span className="text-white/60 text-sm">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'extradeep' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Extra mély előnyök</h2>
                <p className="text-white/80 mb-8">
                  Az S180XD extra mély kialakítása és 15 láb hossza az úszásra és fitneszre optimalizált élményt nyújt.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-6 border border-cyan-500/10">
                      <Expand className="w-12 h-12 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Extra mély design</h3>
                      <p className="text-white/70">1.52m mélység biztosítja a megfelelő úszóteret és vízmélységet intenzív edzésekhez.</p>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 border border-blue-500/10">
                      <Dumbbell className="w-12 h-12 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Fitnesz optimalizálás</h3>
                      <p className="text-white/70">Egyedülálló ülésrendezés, amely prioritást ad az úszótérnek komoly fitnesz használóknak.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-6 border border-green-500/10">
                      <Target className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Komoly úszóknak</h3>
                      <p className="text-white/70">Tervezve azoknak, akik komolyan veszik az úszást és fitneszet, de nem akarnak lemondani a terápiáról.</p>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 border border-yellow-500/10">
                      <Activity className="w-12 h-12 text-yellow-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Multifunkciós élmény</h3>
                      <p className="text-white/70">Megőrzi a terápiás és családi szórakozási funkciókat az úszás mellé.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jetpaks' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">JetPak® Therapy System™</h2>
                <p className="text-white/80 mb-8">
                  Az S180XD egyedülálló JetPak Therapy System™-mel rendelkezik 16+ cserélhető masszázs opcióval.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.jetPakOptions?.map((jetpak, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group border border-cyan-500/10">
                      <div className="flex items-start space-x-3">
                        <Award className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{jetpak.name}</h3>
                          <p className="text-white/70 mb-3">{jetpak.description}</p>
                          <div className="space-y-1">
                            <div className="text-sm text-cyan-400">
                              <span className="font-semibold">{jetpak.jetCount} jet</span> • {jetpak.jetTypes.join(', ')}
                            </div>
                            <div className="text-sm text-white/60">
                              Célterületek: {jetpak.targetAreas.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'swim' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Úszás & Fitnesz előnyök</h2>
                <p className="text-white/80 mb-8">
                  Az S180XD különleges mérete és kialakítása a komoly úszóknak és fitnesz rajongóknak készült.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-6 border border-cyan-500/10">
                      <Activity className="w-12 h-12 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Egyedi úszóáram</h3>
                      <p className="text-white/70">Anatómiailag hangolt úszóáram rendszer az extra mély térben optimális úszásélményért.</p>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 border border-blue-500/10">
                      <Expand className="w-12 h-12 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">15 láb hosszú tér</h3>
                      <p className="text-white/70">Hosszú úszótér biztosítja a megfelelő helyet intenzív úszóedzésekhez.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-6 border border-green-500/10">
                      <Target className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Komoly edzések</h3>
                      <p className="text-white/70">Tervezve azoknak, akik komolyan veszik az úszást és fitneszet - de terápia nélkül sem maradnak.</p>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 border border-yellow-500/10">
                      <Dumbbell className="w-12 h-12 text-yellow-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">Fitnesz prioritás</h3>
                      <p className="text-white/70">Ülésrendezés, amely prioritást ad az úszótérnek a maximális fitnesz élményért.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Műszaki specifikációk</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Alapadatok</h3>
                    {[
                      { label: 'Méret', value: product.dimensions },
                      { label: 'Elérhető ülőhelyek', value: product.seats },
                      { label: 'Prémium JetPak ülések', value: product.jetpaks },
                      { label: 'Lounger ülések', value: product.loungeSeats },
                      { label: 'Víz kapacitás (max)', value: product.waterCapacity }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-3 glass-card rounded-lg border border-cyan-500/10">
                        <span className="text-white/70">{spec.label}:</span>
                        <span className="text-white font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Teljesítmény</h3>
                    {[
                      { label: 'Terápiás szivattyúk', value: product.therapyPumps },
                      { label: 'Multifunkciós segédvezérlők', value: product.auxiliaryControls },
                      { label: 'Száraz súly', value: product.dryWeight },
                      { label: 'Töltött súly', value: product.filledWeight },
                      { label: 'Garancia', value: product.warranty }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-3 glass-card rounded-lg border border-cyan-500/10">
                        <span className="text-white/70">{spec.label}:</span>
                        <span className="text-white font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-6">Beépített funkciók</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.includedFeatures?.map((feature, index) => (
                      <div key={index} className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group border border-cyan-500/10">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{feature.name}</h4>
                            <p className="text-white/70">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden group border border-cyan-500/20">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-navy-500/10 animate-gradient-shift"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-navy-500/20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Expand className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                <h2 className="text-4xl font-bold text-white">
                  Készen áll az extra mély élményre?
                </h2>
                <Dumbbell className="w-8 h-8 text-blue-400 ml-3 animate-pulse" />
              </div>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Fedezze fel az S180XD-t - 15 láb hosszú és extra mély swim spa komoly úszóknak!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Extra Mély Próba</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                <button className="glass-button text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Komoly Úszás Teszt</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>7 év garancia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Expand className="w-5 h-5 text-cyan-400" />
                  <span>Extra Mély</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>5 személyes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S180XDPage;