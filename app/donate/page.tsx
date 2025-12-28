/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaDollarSign, FaTshirt, FaHeart, FaHandHoldingHeart, FaArrowRight, FaCheckCircle, FaUsers, FaGraduationCap, FaBriefcase, FaBoxOpen } from "react-icons/fa";

export default function Donate() {
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
              <span className="text-gray-900">Donate</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-8">
                    Support Our Mission
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Make a
                    <span className="block text-gray-900 mt-1 font-normal">
                      Donation
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    We rely on donations to provide professional attire, seminars and workforce development programs. Your support directly impacts lives in our community.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-1">500+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Lives Changed</div>
                  </div>
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-1">100%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Goes to Programs</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 pt-6">
                  <a
                    href="#financial-donation"
                    className="group px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm uppercase"
                  >
                    <FaDollarSign className="w-4 h-4" />
                    Donate Now
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://forms.gle/eC7sxGxproWabmAQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-transparent text-gray-900 font-normal tracking-wide border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase flex items-center gap-3"
                  >
                    <FaTshirt className="w-4 h-4" />
                    Donate Clothing
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                    alt="People helping in community"
                    width={500}
                    height={500}
                    className="relative w-full h-125 lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/98 backdrop-blur-sm p-8 border border-gray-200">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">$50</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Suits 1 Person</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">$100</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Funds Seminar</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">$250</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Training Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Types Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Ways to Give
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Choose How to Help
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Every contribution makes a difference in someone's life
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Financial Donation */}
              <div id="financial-donation" className="group relative">
                <div className="bg-gray-50 p-10 lg:p-12 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaDollarSign className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 mb-4 tracking-tight">Financial Donation</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    Support our programs with a financial contribution. Your donation funds professional attire, seminars, and workforce development training.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-gray-200 mb-8">
                    <div className="flex items-center gap-3">
                      <FaUsers className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Fund professional suiting services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Support workforce training programs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaBriefcase className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Enable professional development seminars</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHeart className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Empower community members</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    <FaDollarSign className="w-4 h-4" />
                    Donate Financially
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Clothing Donation */}
              <div className="group relative">
                <div className="bg-gray-50 p-10 lg:p-12 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaTshirt className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 mb-4 tracking-tight">Clothing Donation</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    Donate gently used professional clothing and accessories. Your items directly help job seekers dress for success and secure employment.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-gray-200 mb-8">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Professional suits and business attire</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Dress shoes and accessories</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Gently used, clean condition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Tax deductible donation</span>
                    </div>
                  </div>

                  <a
                    href="https://forms.gle/eC7sxGxproWabmAQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    <FaTshirt className="w-4 h-4" />
                    Donate Clothing
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Your Impact
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Where Your Donation Goes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                See how your generous contribution transforms lives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Impact 1 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaTshirt className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Professional Attire</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Provide complete professional wardrobes to job seekers preparing for interviews and starting new careers.
                  </p>
                </div>
              </div>

              {/* Impact 2 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaGraduationCap className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Training Programs</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Fund workforce readiness courses teaching essential office and computer skills for career success.
                  </p>
                </div>
              </div>

              {/* Impact 3 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaBriefcase className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Professional Seminars</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Support expert-led seminars on business development, financial independence, and career growth.
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
              Every Donation
              <span className="block mt-1 font-normal">Changes a Life</span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Your generosity helps provide professional clothing, workforce training, and
              support to clients as they work toward employment and financial stability.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {/* Financial Donation */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVwo4eUetST3JHNk8alSVH_T6Nz10Rdg0xQ08nWPmQ8VwlBQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                <FaDollarSign className="w-4 h-4" />
                Make a Financial Donation
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              {/* Clothing Donation */}
              <a
                href="https://forms.gle/eC7sxGxproWabmAQA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-transparent text-white border border-white font-normal text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <FaTshirt className="w-4 h-4" />
                Donate Professional Clothing
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}