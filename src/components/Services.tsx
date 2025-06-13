import React from 'react';
import { Leaf, Heart, Sparkles, Flower, Sun, Waves } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Aromatherapy Massage",
      description: "Indulge in our signature aromatherapy massage using premium essential oils to restore balance and harmony.",
      price: "From $120",
      duration: "60-90 mins",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Deep Tissue Therapy",
      description: "Target muscle tension and knots with our therapeutic deep tissue massage for ultimate relaxation.",
      price: "From $140",
      duration: "60-90 mins",
      image: "https://images.pexels.com/photos/3865921/pexels-photo-3865921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Facial",
      description: "Rejuvenate your skin with our premium facial treatments using organic, natural ingredients.",
      price: "From $100",
      duration: "60 mins",
      image: "https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Hot Stone Massage",
      description: "Experience the healing power of heated basalt stones to melt away stress and tension.",
      price: "From $160",
      duration: "75-90 mins",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Body Detox Wrap",
      description: "Purify and nourish your skin with our detoxifying body wraps using mineral-rich ingredients.",
      price: "From $110",
      duration: "75 mins",
      image: "https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Couples Retreat",
      description: "Share a blissful experience with your loved one in our private couples treatment room.",
      price: "From $280",
      duration: "90 mins",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 mb-6">
            Our Signature
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-rose-500">
              Treatments
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium spa treatments, 
            each designed to provide you with an unforgettable wellness experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-sage-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-sage-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-sage-700">{service.price}</span>
                  <span className="text-sage-500 text-sm bg-sage-100 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-sage-500 to-sage-600 text-white py-3 rounded-full font-semibold hover:from-sage-600 hover:to-sage-700 transition-all duration-300 transform hover:scale-105">
                  Book Treatment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sage-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Not Sure Which Treatment to Choose?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let our expert therapists recommend the perfect treatment for your needs.
            </p>
            <button className="bg-white text-sage-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;