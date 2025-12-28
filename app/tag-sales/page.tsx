/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaShoppingBag, FaTags, FaClock, FaMapMarkerAlt, FaBell, FaArrowRight, FaHeart } from "react-icons/fa";

export default function TagSales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-900 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-800 rounded-full blur-3xl opacity-5"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-medium">
              <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400">Client Services</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">Tag Sales</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium">
                    Monthly Event
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                    Tag Sales
                    <span className="block text-gray-900 mt-1 font-normal">
                      For The Community
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    Once a month, we host tag sales for the public with overstocked clothing donations to support our program. Check back to stay updated on our next Tag Sale date.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-6">
                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-all duration-500">
                        <FaCalendarAlt className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Monthly Schedule</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                          Tag sales happen once a month. Sign up for notifications to never miss an event.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-all duration-500">
                        <FaTags className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Affordable Prices</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                          Quality clothing at incredible prices. All proceeds support our suiting program.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-all duration-500">
                        <FaHeart className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Support Our Mission</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                          Every purchase helps us provide free professional attire to job seekers in need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 text-sm uppercase"
                  >
                    <FaBell className="w-4 h-4" />
                    Get Notified
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right: Event Details Card */}
              <div className="relative lg:order-last order-first">
                <div className="relative">
                  {/* Main Event Card */}
                  <div className="relative bg-white border border-gray-200 overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                        alt="Tag sale clothing"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-gray-900 text-white px-5 py-3">
                        <div className="text-xs uppercase tracking-widest mb-1 opacity-80 font-medium">Next Event</div>
                        <div className="text-lg font-light">Coming Soon</div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-10 space-y-8">
                      <div>
                        <h3 className="text-2xl font-normal text-gray-900 mb-3 tracking-tight">Monthly Tag Sale</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                          Join us for our community tag sale featuring quality clothing and accessories at unbeatable prices.
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0">
                            <FaClock className="w-4 h-4 text-gray-900" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Duration</div>
                            <div className="text-base font-normal text-gray-900">Full Day Event</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0">
                            <FaMapMarkerAlt className="w-4 h-4 text-gray-900" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Location</div>
                            <div className="text-base font-normal text-gray-900">Our Main Office</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0">
                            <FaShoppingBag className="w-4 h-4 text-gray-900" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Items</div>
                            <div className="text-base font-normal text-gray-900">Clothing & Accessories</div>
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-600 text-center font-light mb-4">
                          Want to know when the next sale is?
                        </p>
                        <a 
                          href="/contact" 
                          className="block text-center px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
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
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                What to Expect
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Shop With Purpose
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Every purchase you make helps someone take their next career step with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaShoppingBag className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Quality Items</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Browse through carefully curated overstocked donations including professional attire, casual wear, and accessories.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaTags className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Great Prices</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Find amazing deals on high-quality clothing. Tag sale prices are designed to be accessible to everyone in our community.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaHeart className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Make an Impact</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
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
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              Never Miss
              <span className="block mt-1 font-normal">A Sale Event</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Sign up to receive notifications about upcoming tag sales and be the first to know when new inventory arrives.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              <FaBell className="w-4 h-4" />
              Get Notified About Sales
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}