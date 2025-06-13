import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Kezdőlap', href: '#home' },
    { label: 'Termékek', href: '#products' },
    { label: 'Rólunk', href: '#about' },
    { label: 'Galéria', href: '#gallery' },
    { label: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-dark shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <img 
              src="https://styles.mediavalet.net/logos/BullfrogSpas_02142022.png" 
              width="150" 
              height="auto"
              alt="Bullfrog Spas" 
              className="sm:w-[180px] md:w-[200px] transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-bold-italic transition-all duration-300 relative group animate-fade-in ${
                  isScrolled
                    ? 'text-white hover:text-ocean-300'
                    : 'text-white hover:text-ocean-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-400 to-ocean-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <button className={`p-2 rounded-full glass-button transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-white hover:text-ocean-300' : 'text-white hover:text-ocean-200'
              }`}>
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-navy-600 to-ocean-600 text-white px-4 sm:px-6 py-2.5 rounded-full font-bold-italic hover:from-navy-700 hover:to-ocean-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Tervezés</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-full glass-button transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-white hover:text-ocean-300' : 'text-white hover:text-ocean-200'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-dark shadow-2xl animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-white hover:text-ocean-300 font-bold-italic py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 px-4">
                <button className="p-3 text-white hover:text-ocean-300 transition-colors glass-button rounded-full">
                  <Search className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-r from-navy-600 to-ocean-600 text-white px-6 py-3 rounded-full font-bold-italic hover:from-navy-700 hover:to-ocean-700 transition-all duration-300 flex items-center space-x-2 shadow-lg flex-1 justify-center">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Tervezés</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;