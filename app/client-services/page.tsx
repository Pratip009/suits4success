"use client"
import Link from "next/link"
import { useState } from "react"
import { FaBriefcase, FaTag, FaCalendar, FaUsers, FaHandshake } from "react-icons/fa"

export default function ClientServices() {
  const [activeTab, setActiveTab] = useState("suiting")

  const services = [
    {
      id: "suiting",
      name: "Suiting",
      icon: <FaBriefcase className="w-6 h-6" />,
      title: "Professional Suiting Services",
      description: "Dress for success with our professional suiting program. We provide high-quality business attire to help you make the right impression in any professional setting."
    },
    {
      id: "tag-sales",
      name: "Tag Sales",
      icon: <FaTag className="w-6 h-6" />,
      title: "Community Tag Sales",
      description: "Access affordable professional clothing through our community tag sales. Shop quality business attire at accessible prices while supporting our mission."
    },
    {
      id: "events",
      name: "Events",
      icon: <FaCalendar className="w-6 h-6" />,
      title: "Professional Development Events",
      description: "Join our workshops and events designed to enhance your professional skills and expand your network. From resume building to interview preparation, we've got you covered."
    },
    {
      id: "workforce",
      name: "Workforce Readiness",
      icon: <FaUsers className="w-6 h-6" />,
      title: "Workforce Readiness Programs",
      description: "Prepare for career success with our comprehensive workforce readiness programs. We equip you with the skills, confidence, and resources needed to thrive in today's job market."
    },
    {
      id: "groups",
      name: "Professional Groups",
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Professional Groups & Partnerships",
      description: "Connect with like-minded professionals and organizations. Our group programs create supportive communities and valuable partnerships for career advancement."
    }
  ]

  const activeService = services.find(s => s.id === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Client Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl font-light">
            Empowering individuals with professional resources and support for career success. 
            Explore our comprehensive services designed to help you achieve your professional goals.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm uppercase tracking-wide font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activeTab === service.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {service.icon}
                <span className="hidden sm:inline">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Service Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 bg-gray-900 text-white">
                {activeService?.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
                  {activeService?.title}
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                  {activeService?.description}
                </p>
                <Link 
                  href={`/${activeService?.id}`}
                  className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 font-normal text-sm uppercase tracking-wide"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              Need Assistance?
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Our team is here to help you navigate our services and find the right fit for your needs.
            </p>
            <a href="/contact" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              Get in Touch →
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              Volunteer With Us
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Help us make a difference in the community by volunteering your time and expertise.
            </p>
            <a href="/volunteer" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              Learn More →
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              Support Our Mission
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Your donation helps us provide essential services to those seeking career advancement.
            </p>
            <a href="/donate" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              Donate Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}