'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Victoria Ashford',
    title: 'CEO, Ashford Ventures',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    rating: 5,
    quote: 'The team at Luxe Estate Properties made finding our dream home an absolute pleasure. Their market knowledge, attention to detail, and unwavering commitment to our needs exceeded all expectations. Within weeks, we closed on a stunning Malibu estate that perfectly matches our lifestyle.',
    property: 'Malibu Oceanfront Estate - $18.5M',
  },
  {
    id: 2,
    name: 'Dr. Marcus Chen',
    title: 'Medical Director',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    quote: 'As someone with limited time, I needed a team that could handle everything seamlessly. Luxe Estate delivered exceptional white-glove service from start to finish. They found off-market opportunities I never would have discovered on my own. Truly the gold standard in luxury real estate.',
    property: 'Central Park Penthouse - $24M',
  },
  {
    id: 3,
    name: 'Isabella & James Morrison',
    title: 'Entrepreneurs',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    rating: 5,
    quote: 'We\'ve worked with many real estate firms over the years, but none compare to Luxe Estate Properties. Their personalized approach, market insights, and negotiation skills saved us over $2 million on our Aspen retreat. They truly understand the luxury market and their clients.',
    property: 'Aspen Mountain Chalet - $16.8M',
  },
  {
    id: 4,
    name: 'Richard Beaumont',
    title: 'Private Investor',
    location: 'Miami Beach, FL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    quote: 'The investment analysis and market intelligence provided by Luxe Estate was instrumental in building my luxury property portfolio. Their team identified emerging markets and undervalued properties that have already appreciated significantly. Exceptional strategic partnership.',
    property: 'Miami Beach Compound - $32M',
  },
  {
    id: 5,
    name: 'Sophia Laurent',
    title: 'Fashion Executive',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    rating: 5,
    quote: 'From our first consultation to closing day, the experience was flawless. The 3D virtual tours saved me countless hours, and when we found "the one," their concierge team handled every detail. I can\'t recommend Luxe Estate Properties highly enough for discerning buyers.',
    property: 'Hollywood Hills Modern - $12.3M',
  },
  {
    id: 6,
    name: 'Alexander & Catherine Wolfe',
    title: 'Tech Executives',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    rating: 5,
    quote: 'Relocating from overseas required a real estate partner we could trust implicitly. Luxe Estate provided comprehensive neighborhood intelligence, handled all logistics, and found us a spectacular property in Pacific Heights. Their global perspective and local expertise is unmatched.',
    property: 'Pacific Heights Victorian - $22M',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-semibold mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trusted by Discerning Clients
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover why high-net-worth individuals and families choose Luxe Estate Properties for their luxury real estate needs.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-700 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-amber-500/20">
              <Quote className="w-20 h-20" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Property Info */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-amber-500 text-sm font-medium">
                  {currentTestimonial.property}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <div className="text-white font-semibold text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-amber-500 text-sm">
                    {currentTestimonial.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-amber-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`group relative aspect-square rounded-xl overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-amber-500 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white text-left">
                  <div className="text-xs font-semibold truncate">
                    {testimonial.name.split(' ')[0]}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">4.9/5.0</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">500+</div>
            <div className="text-gray-400 text-sm">Five-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">95%</div>
            <div className="text-gray-400 text-sm">Referral Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">$45M</div>
            <div className="text-gray-400 text-sm">Average Sale Price</div>
          </div>
        </div>
      </div>
    </section>
  );
}