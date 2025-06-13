import React from 'react';
import { Award, Users, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "Premium Products" },
    { icon: <Users className="w-8 h-8" />, number: "10K+", label: "Happy Customers" },
    { icon: <Leaf className="w-8 h-8" />, number: "100%", label: "Natural Ingredients" },
    { icon: <Sparkles className="w-8 h-8" />, number: "5★", label: "Average Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              Crafted with Love,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-rose-500">
                Made for Wellness
              </span>
            </h2>
            
            <p className="text-lg text-sage-600 mb-6 leading-relaxed">
              At Serenity Spa Products, we believe that true beauty comes from nature's finest ingredients. 
              Our carefully curated collection features premium spa products that bring the luxury spa 
              experience directly to your home.
            </p>
            
            <p className="text-lg text-sage-600 mb-8 leading-relaxed">
              Every product in our collection is thoughtfully formulated with organic, sustainably sourced 
              ingredients. From rejuvenating skincare to aromatherapy essentials, we're committed to 
              providing you with products that nourish both your body and soul.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-sage-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-sage-800 mb-2">{stat.number}</div>
                  <div className="text-sage-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-sage-500 to-sage-600 text-white px-8 py-4 rounded-full font-semibold hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Shop Our Story
              </button>
              <button className="border-2 border-sage-500 text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-500 hover:text-white transition-all duration-300">
                Learn About Ingredients
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Natural Ingredients"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Product Collection"
                    className="w-full h-32 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Organic Skincare"
                    className="w-full h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Wellness Products"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full p-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;