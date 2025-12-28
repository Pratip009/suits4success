/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

'use client'

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 bg-gray-900 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-gray-800 rounded-full blur-3xl opacity-5"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-medium">
              <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">Contact</span>
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-8">
              <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest font-medium">
                Get in Touch
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                Contact
                <span className="block text-gray-900 mt-1 font-normal">
                  Our Team
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                Have questions or want to get involved? We're here to help. Reach out to us through any of the methods below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left: Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">
                    Visit us during our office hours or schedule an appointment at your convenience.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center shrink-0 mt-1">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Address</h3>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        910 Bergen Avenue<br />
                        Suite 207<br />
                        Jersey City, NJ 07306
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center shrink-0 mt-1">
                      <FaClock className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Office Hours</h3>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        1st & 3rd Saturday of every month<br />
                        10:00 AM - 3:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center shrink-0 mt-1">
                      <FaPhone className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Phone</h3>
                      <a href="tel:15513495910" className="text-gray-600 font-light text-sm hover:text-gray-900 transition-colors">
                        1 (551) 349-5910
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-200">
                    <div className="w-10 h-10 border border-gray-900 flex items-center justify-center shrink-0 mt-1">
                      <FaEnvelope className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-gray-900 mb-2 tracking-tight">Email</h3>
                      <a href="mailto:mfatima@s4snj.org" className="text-gray-600 font-light text-sm hover:text-gray-900 transition-colors">
                        mfatima@s4snj.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://forms.gle/R74xY4Ubb37kuTXn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
                  >
                    <FaCalendarAlt className="w-4 h-4" />
                    Schedule an Appointment
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-gray-50 p-10 border border-gray-200">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 font-light text-sm mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-700 mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 font-light focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-700 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 font-light focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-700 mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 font-light focus:outline-none focus:border-gray-900 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-700 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 font-light focus:outline-none focus:border-gray-900 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group w-full px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wide"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
                Visit Our Office
              </h2>
              <p className="text-gray-600 font-light">
                910 Bergen Avenue, Suite 207, Jersey City, NJ 07306
              </p>
            </div>

            <div className="border border-gray-200 overflow-hidden h-125">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0358247899234!2d-74.0583!3d40.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d6c1a0a7af%3A0x7e9a6e0f0e0f0e0f!2s910%20Bergen%20Ave%2C%20Jersey%20City%2C%20NJ%2007306!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location Map"
              />
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/dir//910+Bergen+Ave+Suite+207+Jersey+City+NJ+07306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wide"
              >
                <FaMapMarkerAlt className="w-4 h-4" />
                Get Directions
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-150 h-150 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-gray-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 leading-[1.1] tracking-tight">
              We're Here
              <span className="block mt-1 font-normal">To Help</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you need professional attire, want to volunteer, or wish to support our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:15513495910"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-normal text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                <FaPhone className="w-4 h-4" />
                Call Us Now
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:mfatima@s4snj.org"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-transparent text-white border border-white font-normal text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                Email Us
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}