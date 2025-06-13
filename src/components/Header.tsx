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
    { label: 'Galléria', href: '#gallery' },
    { label: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
              <img src="https://styles.mediavalet.net/logos/BullfrogSpas_02142022.png" width="200" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-blue-700 hover:text-blue-900'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <button className={`p-2 transition-colors ${
                isScrolled ? 'text-blue-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
              }`}>
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-blue-950 to-blue-950 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <ShoppingBag className="w-4 h-4" />
                <span>Tervezés</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-blue-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-blue-700 hover:text-blue-900 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-r from-blue-950 from-blue-950 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-950 hover:to-blue-900 transition-all duration-200 flex items-center space-x-2 shadow-lg">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Vásárlás</span>
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