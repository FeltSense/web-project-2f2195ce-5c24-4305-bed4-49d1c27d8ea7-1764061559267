'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Home, Bed, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
    title: 'Modern Waterfront Estate',
    location: 'Malibu, California',
    price: '$12,500,000',
    beds: 6,
    baths: 7,
    sqft: '8,500',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    title: 'Contemporary Mountain Villa',
    location: 'Aspen, Colorado',
    price: '$18,900,000',
    beds: 7,
    baths: 9,
    sqft: '12,000',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    title: 'Luxury Urban Penthouse',
    location: 'Manhattan, New York',
    price: '$24,750,000',
    beds: 5,
    baths: 6,
    sqft: '6,800',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  const currentProperty = featuredProperties[currentSlide];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image Slider */}
      {featuredProperties.map((property, index) => (
        <div
          key={property.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Previous property"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Next property"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featuredProperties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl space-y-8">
            {/* Property Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Featured Luxury Property
            </div>

            {/* Title & Location */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {currentProperty.title}
              </h1>
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                {currentProperty.location}
              </div>
            </div>

            {/* Property Stats */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-500" />
                <span className="text-2xl font-bold">{currentProperty.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-amber-500" />
                <span className="text-lg">{currentProperty.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-amber-500" />
                <span className="text-lg">{currentProperty.sqft} sqft</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City, neighborhood, or ZIP"
                      value={searchData.location}
                      onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Property Type
                  </label>
                  <select
                    value={searchData.propertyType}
                    onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="estate">Estate</option>
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="mansion">Mansion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Price Range
                  </label>
                  <select
                    value={searchData.priceRange}
                    onChange={(e) => setSearchData({ ...searchData, priceRange: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="all">Any Price</option>
                    <option value="5m">$5M+</option>
                    <option value="10m">$10M+</option>
                    <option value="20m">$20M+</option>
                    <option value="50m">$50M+</option>
                  </select>
                </div>

                <button className="md:col-span-2 lg:col-span-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-auto">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}