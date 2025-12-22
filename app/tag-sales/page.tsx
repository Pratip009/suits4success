import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaShoppingBag, FaTags, FaClock, FaMapMarkerAlt, FaBell, FaArrowRight, FaHeart } from "react-icons/fa";

export default function TagSales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Premium Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-400 to-gray-500 rounded-full blur-3xl opacity-15"></div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Premium Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm tracking-wide">
              <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">HOME</Link>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 font-medium">CLIENT SERVICES</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-900 font-semibold">TAG SALES</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 uppercase">
                    Monthly Event
                  </span>
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight">
                    Tag Sales
                    <span className="block text-gray-800 mt-2 italic font-serif">
                      For The Community
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
                    Once a month, we host tag sales for the public with overstocked clothing donations to support our program. Check back to stay updated on our next Tag Sale date!
                  </p>
                </div>

                {/* Premium Info Cards */}
                <div className="space-y-4">
                  <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                        <FaCalendarAlt className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Monthly Schedule</h3>
                        <p className="text-gray-600 font-light leading-relaxed text-lg">
                          Tag sales happen once a month. Sign up for notifications to never miss an event.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                        <FaTags className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Affordable Prices</h3>
                        <p className="text-gray-600 font-light leading-relaxed text-lg">
                          Quality clothing at incredible prices. All proceeds support our suiting program.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                        <FaHeart className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Support Our Mission</h3>
                        <p className="text-gray-600 font-light leading-relaxed text-lg">
                          Every purchase helps us provide free professional attire to job seekers in need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-6">
                  <a 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold tracking-wide shadow-2xl shadow-gray-900/30 hover:shadow-gray-900/50 hover:bg-black transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 text-lg"
                  >
                    <FaBell className="w-5 h-5" />
                    Get Notified
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right: Event Details Card */}
              <div className="relative lg:order-last order-first">
                <div className="absolute -inset-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[3rem] transform rotate-2 opacity-10"></div>
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-3xl opacity-20"></div>
                  
                  {/* Main Event Card */}
                  <div className="relative bg-white rounded-[2.5rem] shadow-2xl border-8 border-white/80 overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                        alt="Tag sale clothing"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl backdrop-blur-sm">
                        <div className="text-xs tracking-wider mb-1 opacity-80">NEXT EVENT</div>
                        <div className="text-lg">Coming Soon</div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-10 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Monthly Tag Sale</h3>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                          Join us for our community tag sale featuring quality clothing and accessories at unbeatable prices.
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaClock className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Duration</div>
                            <div className="text-lg font-bold text-gray-900">Full Day Event</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaMapMarkerAlt className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Location</div>
                            <div className="text-lg font-bold text-gray-900">Our Main Office</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
                          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaShoppingBag className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Items</div>
                            <div className="text-lg font-bold text-gray-900">Clothing & Accessories</div>
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="pt-4 border-t-2 border-gray-100">
                        <p className="text-gray-600 text-center font-light mb-4">
                          Want to know when the next sale is?
                        </p>
                        <a 
                          href="/contact" 
                          className="block text-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Stay Updated
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 mb-6 uppercase">
                What to Expect
              </span>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                Shop With Purpose
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Every purchase you make helps someone take their next career step with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <FaShoppingBag className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Quality Items</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    Browse through carefully curated overstocked donations including professional attire, casual wear, and accessories.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <FaTags className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Great Prices</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    Find amazing deals on high-quality clothing. Tag sale prices are designed to be accessible to everyone in our community.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <FaHeart className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Make an Impact</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    Your purchases directly fund our free suiting services, helping job seekers dress for success and achieve their goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-700 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Never Miss
              <span className="block mt-2 italic font-serif">A Sale Event</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Sign up to receive notifications about upcoming tag sales and be the first to know when new inventory arrives.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gray-900 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 tracking-wide"
            >
              <FaBell className="w-6 h-6" />
              Get Notified About Sales
              <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}