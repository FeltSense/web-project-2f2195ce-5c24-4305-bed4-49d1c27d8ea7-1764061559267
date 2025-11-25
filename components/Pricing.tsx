'use client';

import { Check, Crown, Star, Gift, Sparkles } from 'lucide-react';

const benefits = [
  'Early access to off-market luxury listings',
  'Exclusive pre-launch property previews',
  'Priority scheduling for property viewings',
  'Complimentary market analysis & investment reports',
  'Dedicated account manager & concierge',
  'Private virtual tours & 3D walkthroughs',
  'VIP invitations to luxury property showcases',
  'Quarterly luxury real estate market briefings',
  'Access to exclusive buyer networking events',
  'Preferred rates with partner mortgage lenders',
  'Complimentary property valuation services',
  'Premium listing notifications via SMS & email',
];

const exclusivePerks = [
  { icon: Crown, text: 'Private Buyer Events' },
  { icon: Star, text: 'First Look at Listings' },
  { icon: Gift, text: 'Closing Gift Package' },
  { icon: Sparkles, text: 'White-Glove Service' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">
            <Crown className="w-4 h-4" />
            Limited Time Founding Member Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join Our Exclusive Buyer's Circle
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Secure lifetime access to our premium luxury property network with exclusive founding member benefits. Limited to the first 100 members.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Premium Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                FOUNDING MEMBER EXCLUSIVE
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-amber-500/20">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Pricing */}
                <div className="text-white">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-6xl font-bold">$29</span>
                      <span className="text-gray-400 text-xl line-through">$299</span>
                    </div>
                    <div className="text-amber-500 font-semibold text-lg mb-2">
                      One-Time Founding Member Fee
                    </div>
                    <div className="text-gray-400">
                      Lifetime access • No recurring charges • Cancel anytime
                    </div>
                  </div>

                  {/* Special Offer Highlights */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Gift className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">
                            90% Launch Discount
                          </div>
                          <div className="text-sm text-gray-400">
                            Save $270 as a founding member - regular price $299
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold">Spots Remaining</span>
                        <span className="text-amber-500 font-bold">23/100</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{ width: '77%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Exclusive Perks */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {exclusivePerks.map((perk, index) => {
                      const Icon = perk.icon;
                      return (
                        <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
                          <Icon className="w-6 h-6 text-amber-500 mb-2" />
                          <span className="text-sm text-gray-300">{perk.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-center font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Secure Your Founding Membership
                  </a>

                  <div className="mt-4 text-center text-sm text-gray-400">
                    🔒 Secure payment • 30-day money-back guarantee
                  </div>
                </div>

                {/* Right Column - Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Everything You Need to Find Your Dream Property
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Money Back Guarantee */}
                  <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-2">
                          100% Satisfaction Guaranteed
                        </div>
                        <div className="text-gray-400 text-sm">
                          If you're not completely satisfied within 30 days, we'll refund your membership fee in full—no questions asked.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm">
              <span className="font-semibold text-gray-900">77 discerning buyers</span> joined this week
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Join an exclusive community of high-net-worth property seekers
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>No Recurring Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}