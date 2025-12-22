"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 hover:text-orange-700 transition-colors">
              Suits 4 Success
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:gray-50 rounded-md transition-all duration-200 font-medium"
            >
              Home
            </Link>

            {/* Client Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:gray-50 rounded-md transition-all duration-200 font-medium flex items-center gap-1">
                Client Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === "services" ? "rotate-180" : ""}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMenu === "services" && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/suiting" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Suiting
                  </Link>
                  <Link 
                    href="/tag-sales" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Tag Sales
                  </Link>
                  <Link 
                    href="/events" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Events
                  </Link>
                  <Link 
                    href="/workforce" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Workforce Readiness
                  </Link>
                  <Link 
                    href="/groups" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Professional Groups
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("involved")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:gray-50 rounded-md transition-all duration-200 font-medium flex items-center gap-1">
                Get Involved
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === "involved" ? "rotate-180" : ""}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openMenu === "involved" && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/volunteer" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Volunteer
                  </Link>
                  <Link 
                    href="/donate" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Donate
                  </Link>
                  <Link 
                    href="/corporate" 
                    className="block px-4 py-2 text-gray-700 hover:gray-50 hover:text-gray-800 transition-colors"
                  >
                    Corporate Donors
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:gray-50 rounded-md transition-all duration-200 font-medium"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="ml-2 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}