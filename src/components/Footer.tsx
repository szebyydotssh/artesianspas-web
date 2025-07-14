import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "Rólunk", href: "#about" },
    { label: "Termékek", href: "#products" },
    { label: "Galéria", href: "#gallery" },
    { label: "Kapcsolat", href: "#contact" },
    { label: "Online vásárlás", href: "#" }
  ];

  const productCategories = [
    { label: "M Széria", href: "#" },
    { label: "A Széria", href: "#" },
    { label: "X Széria", href: "#" },
    { label: "Swim Széria", href: "#" },
    { label: "STIL Széria", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-navy-950 to-ocean-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://styles.mediavalet.net/logos/BullfrogSpas_02142022.png" 
                width="150" 
                alt="Bullfrog Spas" 
                className="brightness-0 invert"
              />
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
Prémium Spa termékek
 az Ön igényeire szabva

            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-button rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animate-delayed">
            <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-6">Gyors linkek</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-ocean-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="animate-fade-in animate-delayed-2">
            <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-6">Termék kategóriák</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-navy-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in animate-delayed-3">
            <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-6">Kapcsolat</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm sm:text-base">
                  <p>Rákóczi utca 16.</p>
                  <p>1039 Budapest</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                <a href="tel:+3612345678" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                  +36 1 234 5678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-400 flex-shrink-0" />
                <a href="mailto:info@bullfrogspas.hu" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                  info@bullfrogspas.hu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm text-center md:text-left">
              © 2024 Bullfrog Spas Magyarország. Minden jog fenntartva.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Adatvédelmi irányelvek</a>
              <a href="#" className="hover:text-white transition-colors">Felhasználási feltételek</a>
              <a href="#" className="hover:text-white transition-colors">Szállítási feltételek</a>
              <a href="#" className="hover:text-white transition-colors">Visszaküldés</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;