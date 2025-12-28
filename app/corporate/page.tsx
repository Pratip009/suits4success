/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FaBuilding, FaHandshake, FaTshirt, FaStar, FaArrowRight, FaEnvelope, FaUsers, FaAward, FaHeart, FaBoxOpen, FaChartLine } from "react-icons/fa";

export default function CorporateDonors() {
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
              <span className="text-gray-400">Get Involved</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">Corporate Donors</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-8">
                    Corporate Partnership
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Corporate
                    <span className="block text-gray-900 mt-1 font-normal">
                      Donors
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    We rely on our corporate donors to provide our clients with high quality, professional clothing. Partner with us to make a lasting impact in our community.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaTshirt className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Quality Clothing</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Provide professional attire</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaAward className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Recognition</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Brand visibility opportunities</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaUsers className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Community Impact</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Transform local lives</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaHandshake className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Partnership</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Long-term collaboration</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a 
                    href="mailto:mfatima@s4snj.org" 
                    className="group px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm uppercase inline-flex"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Contact Us to Partner
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Corporate partnership"
                    width={500}
                    height={500}
                    className="relative w-full h-125 lg:h-162.5 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Contact Box */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/98 backdrop-blur-sm p-8 border border-gray-200">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Interested in Partnership?</div>
                      <div className="text-lg font-normal text-gray-900 mb-4">Contact Our Team</div>
                      <a 
                        href="mailto:mfatima@s4snj.org"
                        className="text-sm text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900"
                      >
                        mfatima@s4snj.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Partnership Benefits
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Why Partner With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Join leading companies making a meaningful difference in our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Benefit 1 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaHeart className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Social Responsibility</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Demonstrate your company's commitment to community welfare and workforce development.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaStar className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Brand Recognition</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Receive acknowledgment at events, on our website, and through our marketing materials.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaChartLine className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Measurable Impact</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    See the direct results of your contribution through client success stories and program outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Donation Needs
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                What We're Looking For
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                High quality professional clothing and accessories that help our clients succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaTshirt className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Professional Suits & Attire</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      New or gently used business suits, blazers, dress pants, skirts, and professional dresses in all sizes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBoxOpen className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Accessories</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      Professional shoes, belts, ties, scarves, and other accessories that complete a professional look.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaStar className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Quality Standards</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      Items should be clean, in excellent condition, and appropriate for professional workplace environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBuilding className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Bulk Donations Welcome</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      We can coordinate pickup for large corporate donations and provide tax documentation for your records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Our Partners
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Thank You to Our Corporate Donors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                We're grateful for the generous support of our corporate partners
              </p>
            </div>

            <div className="bg-gray-50 p-12 border border-gray-200 text-center">
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Join the ranks of forward-thinking companies making a difference in our community through corporate giving and social responsibility.
              </p>
              <a 
                href="mailto:mfatima@s4snj.org"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
              >
                <FaEnvelope className="w-4 h-4" />
                Become a Corporate Partner
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
              Ready to Make
              <span className="block mt-1 font-normal">A Corporate Impact?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Contact us today to discuss how your company can partner with us to transform lives through professional attire and workforce development.
            </p>
            <div className="bg-gray-800 border border-gray-700 p-8 mb-12 inline-block">
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">Email Us At</div>
              <a 
                href="mailto:mfatima@s4snj.org"
                className="text-2xl font-light text-white hover:text-gray-300 transition-colors"
              >
                mfatima@s4snj.org
              </a>
            </div>
            <div>
              <a 
                href="mailto:mfatima@s4snj.org"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                Get in Touch
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}