/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaCheck, FaClock, FaUser, FaBox, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-500 rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-500">Client Services</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Suiting</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                    Professional Attire
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Look Your Best,
                    <span className="block text-gray-800 mt-2">
                      Land Your Dream Job
                    </span>
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    We collect professional clothing and accessories through corporate and individual donors. 
                    Set up a suiting appointment to get fitted in professional attire for your upcoming job interview.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-400 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Free Service</h3>
                    <p className="text-gray-600 text-sm">Complete professional wardrobe at no cost</p>
                  </div>

                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-400 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaClock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Appointments</h3>
                    <p className="text-gray-600 text-sm">Schedule at your convenience</p>
                  </div>

                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-400 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaUser className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Styling</h3>
                    <p className="text-gray-600 text-sm">Expert fitting and styling advice</p>
                  </div>

                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-400 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaBox className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Outfit</h3>
                    <p className="text-gray-600 text-sm">Suits, accessories, and more</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="/contact" 
                    className="group px-8 py-4 bg-gray-800 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                  >
                    Book Appointment
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/about" 
                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold border-2 border-gray-300 hover:border-gray-800 hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="absolute inset-0 bg-gray-400 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gray-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80"
                    alt="Professional business attire"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-3xl"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="group">
                        <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">500+</div>
                        <div className="text-sm text-gray-600 mt-1 font-medium">Clients Suited</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">100%</div>
                        <div className="text-sm text-gray-600 mt-1 font-medium">Free Service</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform">50+</div>
                        <div className="text-sm text-gray-600 mt-1 font-medium">Donors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
                Simple Process
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Getting suited is easy! Follow these simple steps to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -top-6 left-8 w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div className="mt-8">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <FaCalendarAlt className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule Appointment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Contact us to book your free suiting appointment at a time that works for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -top-6 left-8 w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <div className="mt-8">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Fitted</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our stylists will help you select and fit professional attire that suits you perfectly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -top-6 left-8 w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="mt-8">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <FaThumbsUp className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ace Your Interview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Walk into your interview with confidence, dressed for success and ready to impress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't let your wardrobe hold you back. Book your free suiting appointment today and step into your future with confidence.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-800 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Schedule Your Appointment
              <FaArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}