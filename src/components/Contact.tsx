import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Package } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Store",
      content: "123 Wellness Avenue\nSerenity Hills, SH 12345"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567\n+1 (555) 987-6543"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@serenityspa.com\norders@serenityspa.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Store Hours",
      content: "Mon-Fri: 9AM-7PM\nSat-Sun: 10AM-6PM"
    }
  ];

  const subjects = [
    "Product Inquiry",
    "Order Support",
    "Shipping Question",
    "Return/Exchange",
    "Wholesale Inquiry",
    "General Question"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-sage-800 mb-6">
            Get in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sage-600">
              Touch
            </span>
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products? Need help with your order? 
            We're here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sage-500 to-sage-600 text-white py-4 rounded-xl font-semibold hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-sage-400 to-sage-600 rounded-full p-3 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 text-lg mb-2">{info.title}</h4>
                    <p className="text-sage-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Shipping Info */}
            <div className="bg-gradient-to-r from-rose-500 to-sage-500 rounded-2xl p-6 text-white">
              <div className="flex items-start space-x-4">
                <Package className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Free Shipping</h4>
                  <p className="opacity-90">
                    Enjoy free shipping on all orders over $75. 
                    Fast, secure delivery to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;