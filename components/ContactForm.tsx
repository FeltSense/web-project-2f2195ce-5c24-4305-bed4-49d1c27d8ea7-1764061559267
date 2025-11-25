'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    priceRange: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        priceRange: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Begin Your Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with our luxury property specialists to discover your dream estate
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-slate-600 mb-8">
                Our dedicated team of luxury real estate experts is ready to assist you in finding the perfect property that matches your lifestyle and aspirations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri 9am-7pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <Mail className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">luxury@luxeestate.com</p>
                  <p className="text-sm text-slate-500 mt-1">24/7 Response</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Office</h4>
                  <p className="text-slate-600">1250 Park Avenue</p>
                  <p className="text-slate-600">New York, NY 10028</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                "We pride ourselves on providing personalized service and expert guidance throughout your luxury property journey."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    A member of our luxury property team will contact you within 24 hours to discuss your requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-900 mb-2">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white"
                      >
                        <option value="">Select Type</option>
                        <option value="estate">Private Estate</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="villa">Villa</option>
                        <option value="mansion">Mansion</option>
                        <option value="waterfront">Waterfront Property</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="priceRange" className="block text-sm font-semibold text-slate-900 mb-2">
                      Price Range
                    </label>
                    <select
                      id="priceRange"
                      name="priceRange"
                      value={formData.priceRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white"
                    >
                      <option value="">Select Range</option>
                      <option value="1-2m">$1M - $2M</option>
                      <option value="2-5m">$2M - $5M</option>
                      <option value="5-10m">$5M - $10M</option>
                      <option value="10-20m">$10M - $20M</option>
                      <option value="20m+">$20M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your ideal property and requirements..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      I agree to receive communications from Luxe Estate Properties regarding luxury property opportunities and market insights. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you acknowledge that your information will be handled in accordance with our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}