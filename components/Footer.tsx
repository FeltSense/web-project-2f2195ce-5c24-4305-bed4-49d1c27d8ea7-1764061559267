'use client';

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Luxe Estate Properties
              </h3>
              <p className="text-amber-500 font-semibold text-sm tracking-wider">
                REDEFINING LUXURY LIVING
              </p>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Specializing in ultra-premium properties for discerning clients worldwide. Our portfolio features exclusive estates, penthouses, and architectural masterpieces.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">luxury@luxeestate.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">1250 Park Avenue<br />New York, NY 10028</span>
              </div>
            </div>
          </div>

          {/* Properties Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Properties
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Featured Listings
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Luxury Estates
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Penthouses
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Waterfront Homes
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  New Developments
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  International Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Property Search
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Virtual Tours
                </a>
              </li>
              <li>
                <a href="#agents" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Expert Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Mortgage Calculator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Neighborhood Guides
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Premium Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#agents" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 pt-12 pb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-bold text-xl mb-2">
                Exclusive Property Insights
              </h4>
              <p className="text-slate-400">
                Subscribe to receive the latest luxury listings and market updates
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm order-2 md:order-1">
              <p>© {currentYear} Luxe Estate Properties. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 order-1 md:order-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-slate-400 order-3">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-amber-500 font-bold">★</span>
              </div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-amber-500 font-bold">◆</span>
              </div>
              <span>Luxury Property Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-amber-500 font-bold">✓</span>
              </div>
              <span>Global Network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}