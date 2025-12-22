import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaUsers, FaTrophy, FaWalking, FaHeart, FaDollarSign, FaShoppingBag, FaGraduationCap, FaArrowRight, FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Premium Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-400 to-gray-500 rounded-full blur-3xl opacity-15"></div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Premium Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm tracking-wide">
              <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">HOME</Link>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 font-medium">CLIENT SERVICES</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-900 font-semibold">EVENTS</span>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-5xl mx-auto space-y-8">
              <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 uppercase">
                Community Events
              </span>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight">
                Join Us
                <span className="block text-gray-800 mt-2 italic font-serif">
                  At Our Events
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                Throughout the year, we host inspiring events that bring our community together, celebrate achievements, and raise support for our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Annual Gala */}
            <div className="group relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden lg:rounded-l-[2.3rem] rounded-t-[2.3rem] lg:rounded-tr-none">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                    alt="Annual Gala"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-bold shadow-2xl">
                    <div className="flex items-center gap-2">
                      <FaStar className="w-4 h-4" />
                      <span className="text-sm tracking-wider">ANNUAL EVENT</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                        <FaTrophy className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Once a Year</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Annual Gala</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      Once a year, we host a gala to honor the men and women in our community and their accomplishments.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaUsers className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Celebrate community achievements</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaHeart className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Honor inspiring individuals</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaStar className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Elegant evening celebration</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                  >
                    Learn More
                    <FaArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Power Walk */}
            <div className="group relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden">
                {/* Content - Left side on desktop */}
                <div className="p-10 lg:p-12 space-y-6 order-2 lg:order-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                        <FaWalking className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Annual Fundraiser</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Power Walk</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      Once a year, we host a Power Walk Fundraiser in Lincoln Park, NJ to raise money for our programs.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaMapMarkerAlt className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Lincoln Park, NJ location</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaDollarSign className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Fundraising for our programs</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaHeart className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Fun, family-friendly activity</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                  >
                    Join the Walk
                    <FaArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>

                {/* Image - Right side on desktop */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden lg:rounded-r-[2.3rem] rounded-t-[2.3rem] lg:rounded-tl-none order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                    alt="Power Walk"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-bold shadow-2xl">
                    <div className="flex items-center gap-2">
                      <FaWalking className="w-4 h-4" />
                      <span className="text-sm tracking-wider">FUNDRAISER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fashion Show */}
            <div className="group relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden lg:rounded-l-[2.3rem] rounded-t-[2.3rem] lg:rounded-tr-none">
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                    alt="Fashion Show"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-bold shadow-2xl">
                    <div className="flex items-center gap-2">
                      <FaShoppingBag className="w-4 h-4" />
                      <span className="text-sm tracking-wider">SPECIAL EVENT</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                        <FaShoppingBag className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Collaboration</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Fashion Show</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      We collaborate with our sponsors to host fashion shows followed by professional development workshops and suitings.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaShoppingBag className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Professional fashion showcase</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaGraduationCap className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Development workshops</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <FaUsers className="w-6 h-6 text-gray-900 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">On-site suiting opportunities</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                  >
                    Get Involved
                    <FaArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Events That Make a Difference
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                Our community events bring people together and create lasting impact
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FaCalendarAlt className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Annual Events</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FaUsers className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Attendees</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FaHeart className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Community Focus</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FaTrophy className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Many</div>
                <div className="text-gray-600 font-medium">Lives Changed</div>
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
              Be Part of
              <span className="block mt-2 italic font-serif">Something Special</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Stay connected with us to learn about upcoming events and find out how you can participate, volunteer, or sponsor our community initiatives.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gray-900 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 tracking-wide"
            >
              <FaCalendarAlt className="w-6 h-6" />
              Stay Updated on Events
              <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}