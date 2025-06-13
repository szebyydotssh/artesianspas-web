import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Bőrápolási kollekció",
      category: "Bőrápolás"
    },
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Illóolajok",
      category: "Aromaterápia"
    },
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Fürdő termékek",
      category: "Fürdő és test"
    },
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Természetes összetevők",
      category: "Összetevők"
    },
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Wellness eszközök",
      category: "Wellness"
    },
    {
      src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Ajándék szettek",
      category: "Ajándék kollekciók"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Termék
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-navy-400">
              bemutató
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animate-delayed">
            Fedezd fel gyönyörű prémium spa termék kollekciónkat, 
            amelyek mindegyike gondosan készült a wellness utazásod fokozására.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift animate-whoosh"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block glass-button text-white px-3 py-1 rounded-full text-xs sm:text-sm mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm sm:text-lg">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-ocean-300 transition-colors glass-button rounded-full p-2"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Galéria kép"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4">
              Készen állsz a rutinod átalakítására?
            </h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90 px-4">
              Böngészd teljes kollekciónkat és fedezd fel azokat a termékeket, amelyek felemelik önápolási rituálédat.
            </p>
            <button className="bg-gradient-to-r from-ocean-500 to-navy-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-ocean-600 hover:to-navy-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow">
              Összes termék megtekintése
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;