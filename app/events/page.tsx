/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaUsers, FaTrophy, FaWalking, FaHeart, FaDollarSign, FaShoppingBag, FaGraduationCap, FaArrowRight, FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function Events() {
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
              <span className="text-gray-900">Events</span>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium">
                Community Events
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                Join Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                Throughout the year, we host inspiring events that bring our community together, celebrate achievements, and raise support for our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Annual Gala */}
            <div className="group relative">
              <div className="relative grid lg:grid-cols-2 gap-0 items-center bg-white border border-gray-200 overflow-hidden">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                    alt="Annual Gala"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-gray-900 text-white px-5 py-3">
                    <div className="flex items-center gap-2">
                      <FaStar className="w-3 h-3" />
                      <span className="text-xs uppercase tracking-widest font-medium">Annual Event</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center">
                        <FaTrophy className="w-4 h-4 text-gray-900" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Once a Year</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-4 tracking-tight">Annual Gala</h2>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      Once a year, we host a gala to honor the men and women in our community and their accomplishments.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaUsers className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Celebrate community achievements</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaHeart className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Honor inspiring individuals</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaStar className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Elegant evening celebration</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    Learn More
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Power Walk */}
            <div className="group relative">
              <div className="relative grid lg:grid-cols-2 gap-0 items-center bg-white border border-gray-200 overflow-hidden">
                {/* Content - Left side on desktop */}
                <div className="p-10 lg:p-12 space-y-6 order-2 lg:order-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center">
                        <FaWalking className="w-4 h-4 text-gray-900" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Annual Fundraiser</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-4 tracking-tight">Power Walk</h2>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      Once a year, we host a Power Walk Fundraiser in Lincoln Park, NJ to raise money for our programs.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Lincoln Park, NJ location</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaDollarSign className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Fundraising for our programs</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaHeart className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Fun, family-friendly activity</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    Join the Walk
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Image - Right side on desktop */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden order-1 lg:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                    alt="Power Walk"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-gray-900 text-white px-5 py-3">
                    <div className="flex items-center gap-2">
                      <FaWalking className="w-3 h-3" />
                      <span className="text-xs uppercase tracking-widest font-medium">Fundraiser</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fashion Show */}
            <div className="group relative">
              <div className="relative grid lg:grid-cols-2 gap-0 items-center bg-white border border-gray-200 overflow-hidden">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"
                    alt="Fashion Show"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-gray-900 text-white px-5 py-3">
                    <div className="flex items-center gap-2">
                      <FaShoppingBag className="w-3 h-3" />
                      <span className="text-xs uppercase tracking-widest font-medium">Special Event</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-gray-900 flex items-center justify-center">
                        <FaShoppingBag className="w-4 h-4 text-gray-900" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Collaboration</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-4 tracking-tight">Fashion Show</h2>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      We collaborate with our sponsors to host fashion shows followed by professional development workshops and suitings.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaShoppingBag className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Professional fashion showcase</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaGraduationCap className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">Development workshops</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                      <FaUsers className="w-4 h-4 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-light text-sm">On-site suiting opportunities</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    Get Involved
                    <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
                Events That Make a Difference
              </h2>
              <p className="text-base text-gray-600 font-light max-w-xl mx-auto">
                Our community events bring people together and create lasting impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 border border-gray-900 flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">3+</div>
                <div className="text-gray-600 text-sm font-light uppercase tracking-widest">Annual Events</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-gray-900 flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">1000+</div>
                <div className="text-gray-600 text-sm font-light uppercase tracking-widest">Attendees</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-gray-900 flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
                <div className="text-gray-600 text-sm font-light uppercase tracking-widest">Community Focus</div>
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
              Be Part of
              <span className="block mt-1 font-normal">Something Special</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Stay connected with us to learn about upcoming events and find out how you can participate, volunteer, or sponsor our community initiatives.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              <FaCalendarAlt className="w-4 h-4" />
              Stay Updated on Events
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}