// components/HeroSection.tsx
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] via-[#ededed] to-[#e8e8e8] text-gray-800 py-5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* Left Text */}
          <div className="lg:w-[50%] text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-600 border-b-2 border-gray-800 pb-2">
                Our Vision
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-serif tracking-tight">
              Empowering <span className="italic text-gray-700">Individuals</span> Through Professional Development
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing professional clothing and training to low-income and unemployed individuals in Hudson County. Helping clients look and feel their best to reach their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#programs"
                className="group relative inline-flex items-center justify-center bg-gray-900 text-white font-semibold px-10 py-4 rounded-sm overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="relative z-10">View Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 font-semibold px-10 py-4 rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Get Involved
              </a>
            </div>
          </div>

          {/* Right Staggered Grid */}
          {/* Right Equal Grid */}
          <div className="lg:w-[50%] flex items-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-[550px] h-[400px] lg:h-[500px]">

              {[
                "/images/s4s1.jpg",
                "/images/s4s2.jpg",
                "/images/s4s3.jpg",
                "/images/s4s4.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-2xl group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

                  <Image
                    src={img}
                    alt={`Professional Clothing ${index + 1}`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}

            </div>
          </div>


        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;