import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Skincare Enthusiast",
      content: "The Rose Face Serum has completely transformed my skin! I've never seen such dramatic results from a natural product. My complexion is glowing and feels incredibly soft.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Organic Rose Face Serum"
    },
    {
      name: "David Chen",
      role: "Wellness Coach",
      content: "I recommend these products to all my clients. The quality is exceptional and the results speak for themselves. The lavender essential oil set has become a staple in my evening routine.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Lavender Essential Oil Set"
    },
    {
      name: "Emily Rodriguez",
      role: "Beauty Blogger",
      content: "As someone who tests hundreds of products, I can confidently say this brand stands out. The Himalayan salt scrub is pure luxury - my skin has never felt smoother!",
      rating: 5,
      image: "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      product: "Himalayan Salt Body Scrub"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 mb-6">
            What Our Customers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-rose-500">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have to say 
            about their experience with our premium spa products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sage-700 mb-4 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Product */}
              <div className="bg-sage-100 rounded-full px-3 py-1 text-xs text-sage-700 font-medium mb-6 inline-block">
                {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-sage-800">{testimonial.name}</h4>
                  <p className="text-sage-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-sage-800 mb-2">4.9/5</div>
            <div className="text-sage-600 text-sm">Average Rating</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-sage-800 mb-2">10K+</div>
            <div className="text-sage-600 text-sm">Happy Customers</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-sage-800 mb-2">98%</div>
            <div className="text-sage-600 text-sm">Repurchase Rate</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-sage-800 mb-2">100%</div>
            <div className="text-sage-600 text-sm">Natural Ingredients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;