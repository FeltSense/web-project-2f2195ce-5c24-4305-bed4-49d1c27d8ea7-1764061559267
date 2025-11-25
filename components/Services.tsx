'use client';

import { Building2, Search, Key, TrendingUp, Shield, Users, Video, MapPin, Calculator } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Personalized Property Search',
    description: 'Our expert agents leverage exclusive networks and market intelligence to identify properties that match your exact specifications and lifestyle needs.',
    features: ['Private Listings', 'Off-Market Access', 'Custom Criteria'],
  },
  {
    icon: Video,
    title: 'Virtual & In-Person Tours',
    description: 'Experience properties through immersive 3D virtual tours or schedule private viewings with our concierge service, accommodating your schedule.',
    features: ['3D Walkthroughs', 'Drone Footage', 'Private Showings'],
  },
  {
    icon: TrendingUp,
    title: 'Investment Analysis',
    description: 'Make informed decisions with comprehensive market analysis, ROI projections, and appreciation forecasts from our financial advisory team.',
    features: ['Market Reports', 'ROI Projections', 'Portfolio Strategy'],
  },
  {
    icon: Key,
    title: 'White-Glove Transaction Management',
    description: 'From offer to closing, we handle every detail with discretion and precision, ensuring a seamless and stress-free transaction experience.',
    features: ['Negotiation Support', 'Due Diligence', 'Closing Coordination'],
  },
  {
    icon: Shield,
    title: 'Legal & Due Diligence',
    description: 'Our team of legal experts and property inspectors ensure comprehensive due diligence, protecting your interests throughout the acquisition.',
    features: ['Title Review', 'Inspections', 'Legal Support'],
  },
  {
    icon: Calculator,
    title: 'Financing & Mortgage Solutions',
    description: 'Access exclusive jumbo loan programs and private financing options through our network of premier lenders and wealth advisors.',
    features: ['Jumbo Loans', 'Private Financing', 'Rate Optimization'],
  },
  {
    icon: MapPin,
    title: 'Neighborhood Intelligence',
    description: 'Discover detailed insights about communities, schools, amenities, and lifestyle factors that make each location unique and desirable.',
    features: ['Community Profiles', 'School Ratings', 'Lifestyle Analysis'],
  },
  {
    icon: Users,
    title: 'Dedicated Concierge',
    description: 'Your personal luxury real estate concierge provides 24/7 support for property management, relocation services, and lifestyle integration.',
    features: ['24/7 Support', 'Relocation Help', 'Property Management'],
  },
  {
    icon: Building2,
    title: 'New Development Preview',
    description: 'Gain early access to upcoming luxury developments with exclusive pre-construction pricing and customization opportunities.',
    features: ['Pre-Launch Access', 'Builder Direct', 'Custom Options'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">
            Comprehensive Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Exceptional Service at Every Step
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience unparalleled expertise and personalized attention throughout your luxury real estate journey. Our comprehensive suite of services ensures a seamless, sophisticated experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">$2.4B+</div>
              <div className="text-amber-100 text-sm sm:text-base">Total Sales Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">850+</div>
              <div className="text-amber-100 text-sm sm:text-base">Luxury Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <div className="text-amber-100 text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-100 text-sm sm:text-base">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to begin your luxury property journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            Schedule a Consultation
            <Key className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}