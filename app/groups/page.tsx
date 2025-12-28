/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FaUsers, FaBriefcase, FaChartLine, FaLightbulb, FaHandshake, FaArrowRight, FaCalendarAlt, FaMicrophone, FaGraduationCap, FaTrophy } from "react-icons/fa";

export default function Groups() {
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
              <span className="text-gray-900">Professional Groups</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-8">
                    Community Programs
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Professional
                    <span className="block text-gray-900 mt-1 font-normal">
                      Groups
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    We invite professional speakers to host seminars to discuss their local businesses, keys to success and tips to become financially independent.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaMicrophone className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Expert Speakers</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Professional leaders share insights</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaBriefcase className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Business Focus</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Learn from local entrepreneurs</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaChartLine className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Financial Independence</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Build wealth and security</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaHandshake className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Networking</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Connect with like-minded professionals</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 pt-6">
                  <a 
                    href="/contact" 
                    className="group px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm uppercase"
                  >
                    Join a Group
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="/about" 
                    className="px-10 py-4 bg-transparent text-gray-900 font-normal tracking-wide border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
                    alt="Professional networking event"
                    width={500}
                    height={500}
                    className="relative w-full h-[500px] lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/98 backdrop-blur-sm p-8 border border-gray-200">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">2</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Groups</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">Monthly</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Seminars</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Our Groups
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Choose Your Path
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Join a supportive community of professionals committed to growth and success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Women's Group */}
              <div className="group relative">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaUsers className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 mb-4 tracking-tight">Professional Women's Group</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    A dedicated space for women professionals to learn from successful business leaders, share experiences, and build meaningful connections within our community.
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <FaMicrophone className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Guest speakers and panel discussions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaLightbulb className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Keys to business success</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHandshake className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Networking opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaChartLine className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Financial independence strategies</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide mt-8"
                  >
                    Join Women's Group
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Men's Group */}
              <div className="group relative">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaUsers className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-gray-900 mb-4 tracking-tight">Professional Men's Group</h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    Connect with fellow male professionals to gain insights from industry leaders, develop business acumen, and build a strong network of support and collaboration.
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <FaMicrophone className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Expert business presentations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaLightbulb className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Success strategies and tips</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHandshake className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Professional networking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaChartLine className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Wealth building guidance</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide mt-8"
                  >
                    Join Men's Group
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                What to Expect
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Seminar Topics
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Our professional speakers cover a wide range of topics to help you succeed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Topic 1 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaBriefcase className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Local Business Insights</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Learn from successful local entrepreneurs about building and growing businesses in our community.
                  </p>
                </div>
              </div>

              {/* Topic 2 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaTrophy className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Keys to Success</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Discover proven strategies and principles that drive professional achievement and personal growth.
                  </p>
                </div>
              </div>

              {/* Topic 3 */}
              <div className="relative group">
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaChartLine className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Financial Independence</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Gain practical tips and strategies for building wealth and achieving long-term financial security.
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
              Ready to Grow
              <span className="block mt-1 font-normal">Your Professional Network?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Join one of our professional groups today and start learning from the best in your community.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              <FaCalendarAlt className="w-4 h-4" />
              Join a Professional Group
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}