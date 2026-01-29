import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] via-[#ededed] to-[#e8e8e8] text-gray-800 min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-300/50 shadow-sm">
              <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-700">
                Our Vision
              </span>
            </div>

            {/* Heading with decorative line */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="hidden lg:block w-1 h-20 bg-gradient-to-b from-gray-900 to-gray-400 mt-2"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-serif tracking-tight">
                  Empowering{" "}
                  <span className="block mt-1 text-gray-700">Communities</span>
                  <span className="block mt-1 italic font-light text-gray-600">
                    Through Development
                  </span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-0 lg:pl-5">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-xl">
                Discover how <span className="font-semibold text-gray-900">Suits 4 Success</span> empowers you to look and feel your best as you achieve your professional goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/client-services"
                className="group relative inline-flex items-center justify-center bg-gray-900 text-white font-semibold px-10 py-4 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3">
                  View Programs
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>

              <a
                href="/get-involved"
                className="group inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 font-semibold px-10 py-4 rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Get Involved</span>
                <div className="absolute inset-0 bg-gray-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              </a>
            </div>

            {/* Stats or features */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-300/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-600 mt-1">Lives Changed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-600 mt-1">Years Active</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image Collage - Asymmetric Design */}
          <div className="relative h-[500px] lg:h-[550px]">
            {/* Large feature image */}
            <div className="absolute top-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
              <Image
                src="/images/s4s1.jpg"
                alt="Suits 4 Success Professional"
                fill
                sizes="(max-width: 768px) 65vw, 35vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Floating label */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20">
                <p className="text-sm font-semibold text-gray-900">Professional Styling</p>
              </div>
            </div>

            {/* Medium image - top right */}
            <div className="absolute top-0 right-0 w-[32%] h-[45%] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
              <Image
                src="/images/s4s2.jpg"
                alt="Career Development"
                fill
                sizes="(max-width: 768px) 32vw, 20vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            {/* Medium image - bottom left */}
            <div className="absolute bottom-0 left-0 w-[38%] h-[42%] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
              <Image
                src="/images/s4s3.jpg"
                alt="Community Impact"
                fill
                sizes="(max-width: 768px) 38vw, 20vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            {/* Large image - bottom right */}
            <div className="absolute bottom-0 right-0 w-[58%] h-[52%] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
              <Image
                src="/images/s4s4.jpg"
                alt="Success Stories"
                fill
                sizes="(max-width: 768px) 58vw, 30vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg z-20">
                <p className="text-xs font-semibold tracking-wide">Featured</p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gray-900/20 rounded-2xl -z-10"></div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;