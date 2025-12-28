/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaLaptop, FaUsers, FaCertificate, FaChalkboardTeacher, FaArrowRight, FaCheckCircle, FaBriefcase, FaGraduationCap, FaClock, FaChartLine, FaHandshake, FaBook } from "react-icons/fa";
import newImage from "../../public/images/new.jpg";
export default function WorkforceReadiness() {
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
              <span className="text-gray-900">Workforce Readiness</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium">
                    Professional Training
                  </span>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                    <span className="italic">Workforce Readiness</span>
                    <span className="block text-gray-900 mt-1 font-normal">
                      Course
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    This is a course designed to help students develop basic office management and computer skills to succeed in today's professional environment.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-1">Beginner</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Friendly Level</div>
                  </div>
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <div className="text-2xl font-light text-gray-900 mb-1">Practical</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Hands-On Skills</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 pt-6">
                  <a
                    href="/contact"
                    className="group px-10 py-4 bg-gray-900 text-white font-normal tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm uppercase"
                  >
                    Enroll Now
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
                    src={newImage}
                    alt="Workforce readiness training"
                    width={500}
                    height={500}
                    className="relative w-full h-[500px] lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/98 backdrop-blur-sm p-8 border border-gray-200">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">Expert</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Instructors</div>
                      </div>
                      <div className="border-x border-gray-200">
                        <div className="text-4xl font-light text-gray-900 tracking-tight">10+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Core Skills</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light text-gray-900 tracking-tight">Free</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-medium">Training Cost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                What You'll Learn
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Course Curriculum
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Master essential skills that employers are looking for in today's workplace
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Skill 1 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaLaptop className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Computer Basics</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Learn fundamental computer operations, file management, and digital literacy skills essential for any office environment.
                  </p>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaBook className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Microsoft Office</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Master Word, Excel, and PowerPoint to create professional documents, spreadsheets, and presentations.
                  </p>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaBriefcase className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Office Management</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Develop organizational skills, time management, and professional workplace etiquette for success.
                  </p>
                </div>
              </div>

              {/* Skill 4 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaUsers className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Communication Skills</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Learn professional email writing, phone etiquette, and effective workplace communication strategies.
                  </p>
                </div>
              </div>

              {/* Skill 5 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaChartLine className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Data Entry & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Build accuracy and speed in data entry while learning basic analysis and reporting techniques.
                  </p>
                </div>
              </div>

              {/* Skill 6 */}
              <div className="relative group">
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 transition-all duration-500 h-full">
                  <div className="w-12 h-12 border border-gray-900 flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-500">
                    <FaHandshake className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">Professional Development</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Build confidence, interview skills, and career readiness to succeed in your job search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Students learning"
                  width={500}
                  height={500}
                  className="relative w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Right: Benefits */}
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium mb-6">
                    Course Benefits
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                    Why Take This Course?
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white p-6 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2">Free Training</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">
                        Access comprehensive workforce training at no cost to you
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaChalkboardTeacher className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2">Expert Instructors</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">
                        Learn from experienced professionals who understand workplace needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaClock className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2">Flexible Schedule</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">
                        Study at your own pace with supportive instruction and guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCertificate className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2">Career Ready</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">
                        Gain practical skills that employers value in today's job market
                      </p>
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
              Ready to Start
              <span className="block mt-1 font-normal">Your Journey?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Take the first step toward building valuable workplace skills. Enroll in our Workforce Readiness course today and unlock your professional potential.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
            >
              <FaGraduationCap className="w-4 h-4" />
              Enroll in Course
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}