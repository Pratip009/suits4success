/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import { FaHeart, FaHandsHelping, FaCalendarAlt, FaUsers, FaBoxOpen, FaTshirt, FaArrowRight, FaCheckCircle, FaClock, FaStar } from "react-icons/fa";

export default function Volunteer() {
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
              <span className="text-gray-900">Volunteer</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-8">
                    Make a Difference
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                    Become a
                    <span className="block text-gray-900 mt-1 font-normal">
                      Volunteer
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    We rely on volunteers to help conduct fittings, collect donations and organize events. Fill out the form below to let us know that you are interested!
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaTshirt className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Conduct Fittings</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Help clients find perfect attire</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaBoxOpen className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Collect Donations</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Sort and organize clothing</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaCalendarAlt className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Organize Events</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Support community programs</p>
                  </div>

                  <div className="group bg-gray-50 p-8 border border-gray-200 hover:border-gray-900 transition-all duration-500">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-all duration-500">
                      <FaUsers className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Build Community</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">Connect with like-minded people</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href="https://forms.gle/rPAbxXQBdnKq6zU1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm uppercase inline-flex"
                  >
                    <FaHeart className="w-4 h-4" />
                    Apply to Volunteer
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative lg:order-last order-first">
                <div className="relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                    alt="Volunteers helping in community"
                    width={500}
                    height={500}
                    className="relative w-full h-[500px] lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/98 backdrop-blur-sm p-8 border border-gray-200">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">50+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Volunteers</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">Weekly</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Opportunities</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">Flexible</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Schedule</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Why Volunteer
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                The Impact You'll Make
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Your time and energy help transform lives in our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Benefit 1 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaHeart className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Change Lives</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Help job seekers gain confidence and find employment through professional attire and support.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaUsers className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Build Community</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Connect with passionate individuals who share your commitment to making a difference.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaStar className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Gain Experience</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Develop valuable skills in customer service, organization, and event management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                Opportunities
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                How You Can Help
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Choose the volunteer role that fits your skills and schedule
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Opportunity 1 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaTshirt className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Suiting Volunteer</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
                      Help clients select and fit professional attire during appointments. Perfect for those with fashion sense and people skills.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="w-3 h-3" />
                      <span className="font-light">Flexible schedule</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opportunity 2 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBoxOpen className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Donation Coordinator</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
                      Sort, organize, and inventory clothing donations. Great for detail-oriented individuals who enjoy organization.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="w-3 h-3" />
                      <span className="font-light">Daytime hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opportunity 3 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCalendarAlt className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">Event Assistant</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
                      Support our community events including galas, tag sales, and fundraisers. Ideal for energetic team players.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="w-3 h-3" />
                      <span className="font-light">Event-based</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opportunity 4 */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaHandsHelping className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-2 tracking-tight">General Support</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
                      Provide general assistance wherever needed. Perfect for those who want to help in various capacities.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="w-3 h-3" />
                      <span className="font-light">Very flexible</span>
                    </div>
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
              Ready to Make
              <span className="block mt-1 font-normal">A Difference?</span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Join our team of dedicated volunteers and support our mission by helping clients
              look and feel confident as they work toward their professional goals.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0ph9yvjoE8hr3Tk2almalkueI1ZOWG-hjM0NWOrMBOgO6og/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              <FaHeart className="w-4 h-4" />
              Volunteer With Us
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}