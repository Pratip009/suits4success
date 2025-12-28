"use client"
import Link from "next/link"
import { useState } from "react"
import { FaHardHat, FaDollarSign, FaUsers, FaBuilding, FaGift } from "react-icons/fa"

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState("volunteer")

  const options = [
    {
      id: "volunteer",
      name: "Volunteer",
      icon: <FaHardHat className="w-6 h-6" />,
      title: "Volunteer Your Time",
      description: "Make a direct impact in our community by volunteering with us. Whether you have a few hours a week or can commit to regular shifts, your time and skills can help transform lives and empower individuals on their career journey."
    },
    {
      id: "donate",
      name: "Donate",
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Make a Donation",
      description: "Your financial support enables us to provide essential services to those seeking career advancement. Every contribution, large or small, helps us expand our reach and impact in the community."
    },
    {
      id: "corporate",
      name: "Corporate Donors",
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Corporate Donors",
      description: "Partner with us to make a lasting impact on workforce development in our community. We offer various partnership opportunities that align with your organization's values and corporate social responsibility goals."
    },
   
  ]

  const activeOption = options.find(o => o.id === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Get Involved
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl font-light">
            Join us in empowering individuals to achieve their professional goals. There are many ways 
            you can support our mission and make a meaningful difference in our community.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm uppercase tracking-wide font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activeTab === option.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {option.icon}
                <span className="hidden sm:inline">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Option Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 bg-gray-900 text-white">
                {activeOption?.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
                  {activeOption?.title}
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                  {activeOption?.description}
                </p>
                <Link 
                  href={`/${activeOption?.id}`}
                  className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 font-normal text-sm uppercase tracking-wide"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight text-center">
            Your Impact Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">5,000+</div>
              <p className="text-gray-600 font-light">Individuals Served Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">300+</div>
              <p className="text-gray-600 font-light">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">50+</div>
              <p className="text-gray-600 font-light">Corporate Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              Questions?
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Have questions about getting involved? Our team is ready to help you find the perfect way to contribute.
            </p>
            <a href="/contact" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              Contact Us →
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              Our Services
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Learn more about the programs and services your support makes possible for our clients.
            </p>
            <a href="/client-services" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              View Services →
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">
              About Us
            </h3>
            <p className="text-gray-600 font-light mb-4">
              Discover our mission, values, and the story behind our commitment to workforce development.
            </p>
            <a href="/about" className="text-gray-900 hover:text-gray-700 font-medium text-sm uppercase tracking-wide inline-flex items-center">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}