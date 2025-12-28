/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaCheck, FaClock, FaUser, FaBox, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

export default function Page() {
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
              <span className="text-gray-900">Suiting</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-8">
                    Professional Attire
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Look Your Best,
                    <span className="block text-gray-900 mt-1 font-normal">
                      Land Your Dream Job
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    We collect professional clothing and accessories through corporate and individual donors. Our staff will provide suits, shirts, pants, dresses, skirts, shoes, bags etc. as needed to our clients during fittings.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaCheck className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Free Service</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Complete professional wardrobe at no cost</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaClock className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Flexible Appointments</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Schedule at your convenience</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaUser className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Personal Styling</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Expert fitting and styling advice</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaBox className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Complete Outfit</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Suits, accessories, and more</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Professional business woman in attire"
                    width={500}
                    height={500}
                    className="relative w-full h-[500px] lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Simple Process
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Getting suited is easy! Follow these simple steps to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="absolute -top-4 left-10 w-12 h-12 bg-gray-900 flex items-center justify-center text-white font-light text-xl tracking-tight">
                    1
                  </div>
                  <div className="mt-8">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                      <FaCalendarAlt className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Schedule Appointment</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Contact us to book your free suiting appointment at a time that works for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="absolute -top-4 left-10 w-12 h-12 bg-gray-900 flex items-center justify-center text-white font-light text-xl tracking-tight">
                    2
                  </div>
                  <div className="mt-8">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                      <FaCheckCircle className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Get Fitted</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Our stylists will help you select and fit professional attire that suits you perfectly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="absolute -top-4 left-10 w-12 h-12 bg-gray-900 flex items-center justify-center text-white font-light text-xl tracking-tight">
                    3
                  </div>
                  <div className="mt-8">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                      <FaThumbsUp className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Ace Your Interview</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
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
      <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Don't let your wardrobe hold you back. Book your free suiting appointment today and step into your future with confidence.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeVr4PSMBF8MEakMu7wcbeaBp7lyFOdeGVA4eMl6PaEgjXKvA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              Schedule a Suiting Appointment
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}