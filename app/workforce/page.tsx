/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaLaptop, FaUsers, FaCertificate, FaChalkboardTeacher, FaArrowRight, FaCheckCircle, FaBriefcase, FaGraduationCap, FaClock, FaChartLine, FaHandshake, FaBook } from "react-icons/fa";

export default function WorkforceReadiness() {
  return (
    <div className="min-h-screen bg-[#ededed]">
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
              <span className="text-gray-900 font-semibold">WORKFORCE READINESS</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 uppercase">
                    Professional Training
                  </span>
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight">
                    Workforce
                    <span className="block text-gray-800 mt-2 italic font-serif">
                      Readiness Course
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
                    This is a course designed to help students develop basic office management and computer skills to succeed in today's professional environment.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                    <div className="text-3xl font-bold text-gray-900 mb-1">Beginner</div>
                    <div className="text-sm text-gray-600 font-medium tracking-wide">Friendly Level</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                    <div className="text-3xl font-bold text-gray-900 mb-1">Practical</div>
                    <div className="text-sm text-gray-600 font-medium tracking-wide">Hands-On Skills</div>
                  </div>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex flex-wrap gap-5 pt-6">
                  <a 
                    href="/contact" 
                    className="group px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold tracking-wide shadow-2xl shadow-gray-900/30 hover:shadow-gray-900/50 hover:bg-black transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 text-lg"
                  >
                    Enroll Now
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                  <a 
                    href="/about" 
                    className="px-10 py-5 bg-white/90 backdrop-blur text-gray-900 rounded-2xl font-bold tracking-wide border-2 border-gray-300 hover:border-gray-900 hover:bg-white hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right: Premium Image */}
              <div className="relative lg:order-last order-first">
                <div className="absolute -inset-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[3rem] transform rotate-2 opacity-10"></div>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                    alt="Workforce readiness training"
                    className="relative rounded-[2.5rem] shadow-2xl w-full h-[550px] lg:h-[650px] object-cover transform group-hover:scale-[1.01] transition-all duration-700 border-8 border-white/80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent rounded-[2.5rem]"></div>
                  
                  {/* Premium Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div className="group cursor-default">
                        <div className="text-4xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300 tracking-tight">100+</div>
                        <div className="text-xs text-gray-600 mt-2 font-semibold tracking-wider uppercase">Students Trained</div>
                      </div>
                      <div className="group cursor-default border-x border-gray-200">
                        <div className="text-4xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300 tracking-tight">10+</div>
                        <div className="text-xs text-gray-600 mt-2 font-semibold tracking-wider uppercase">Core Skills</div>
                      </div>
                      <div className="group cursor-default">
                        <div className="text-4xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300 tracking-tight">Free</div>
                        <div className="text-xs text-gray-600 mt-2 font-semibold tracking-wider uppercase">Training Cost</div>
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
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 mb-6 uppercase">
                What You'll Learn
              </span>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                Course Curriculum
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Master essential skills that employers are looking for in today's workplace
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Skill 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaLaptop className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Computer Basics</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Learn fundamental computer operations, file management, and digital literacy skills essential for any office environment.
                  </p>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaBook className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Microsoft Office</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Master Word, Excel, and PowerPoint to create professional documents, spreadsheets, and presentations.
                  </p>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaBriefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Office Management</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Develop organizational skills, time management, and professional workplace etiquette for success.
                  </p>
                </div>
              </div>

              {/* Skill 4 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaUsers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Communication Skills</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Learn professional email writing, phone etiquette, and effective workplace communication strategies.
                  </p>
                </div>
              </div>

              {/* Skill 5 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaChartLine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Data Entry & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Build accuracy and speed in data entry while learning basic analysis and reporting techniques.
                  </p>
                </div>
              </div>

              {/* Skill 6 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-10 border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <FaHandshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Professional Development</h3>
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
      <section className="py-24 bg-[#ededed] relative">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Students learning"
                  className="relative rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover border-8 border-white/80"
                />
              </div>

              {/* Right: Benefits */}
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest shadow-2xl shadow-gray-900/20 mb-6 uppercase">
                    Course Benefits
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Why Take This Course?
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Free Training</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Access comprehensive workforce training at no cost to you
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <FaChalkboardTeacher className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Learn from experienced professionals who understand workplace needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <FaClock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Study at your own pace with supportive instruction and guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCertificate className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Career Ready</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
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
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-700 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E')"}}></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Ready to Start
              <span className="block mt-2 italic font-serif">Your Journey?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Take the first step toward building valuable workplace skills. Enroll in our Workforce Readiness course today and unlock your professional potential.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gray-900 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 tracking-wide"
            >
              <FaGraduationCap className="w-6 h-6" />
              Enroll in Course
              <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}