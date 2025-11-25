'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-amber-600' : 'bg-white'
            }`}>
              <Home className={`w-6 h-6 ${
                isScrolled ? 'text-white' : 'text-amber-600'
              }`} />
            </div>
            <div>
              <div className={`text-xl font-bold tracking-tight ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Luxe Estate
              </div>
              <div className={`text-xs tracking-widest ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                PROPERTIES
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-white text-gray-900 hover:bg-amber-600 hover:text-white'
              }`}
            >
              Schedule Viewing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-amber-600 text-white text-center rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Schedule Viewing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}