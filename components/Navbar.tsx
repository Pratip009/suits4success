"use client"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSubmenuOpen(null)
  }

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <span className="text-xl md:text-2xl font-normal text-gray-900 hover:text-gray-700 transition-colors tracking-tight">
              Suits 4 Success
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium"
            >
              Home
            </Link>

            {/* Client Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/client-services"
                className="px-4 py-2 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium flex items-center gap-1"
              >
                Client Services
                <FaChevronDown className="w-3 h-3" />
              </Link>

              {openMenu === "services" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 py-2">
                  <Link
                    href="/suiting"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Suiting
                  </Link>
                  <Link
                    href="/tag-sales"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Tag Sales
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Events
                  </Link>
                  <Link
                    href="/workforce"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Workforce Readiness
                  </Link>
                  <Link
                    href="/groups"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
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
              <Link
                href="/get-involved"
                className="px-4 py-2 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium flex items-center gap-1"
              >
                Get Involved
                <FaChevronDown className="w-3 h-3" />
              </Link>


              {openMenu === "involved" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 py-2">
                  <Link
                    href="/volunteer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/donate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Donate
                  </Link>
                  <Link
                    href="/corporate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                  >
                    Corporate Donors
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-2 px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 font-normal text-sm uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-sm uppercase tracking-wide text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Client Services Mobile Submenu */}
            <div>
              <button
                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "services" ? null : "services")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm uppercase tracking-wide text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
              >
                Client Services
                <FaChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenuOpen === "services" ? "rotate-180" : ""}`}
                />
              </button>

              {mobileSubmenuOpen === "services" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/suiting"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Suiting
                  </Link>
                  <Link
                    href="/tag-sales"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Tag Sales
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Events
                  </Link>
                  <Link
                    href="/workforce"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Workforce Readiness
                  </Link>
                  <Link
                    href="/groups"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Professional Groups
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Mobile Submenu */}
            <div>
              <button
                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "involved" ? null : "involved")}
                className="w-full flex items-center justify-between px-4 py-3 text-sm uppercase tracking-wide text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
              >
                Get Involved
                <FaChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenuOpen === "involved" ? "rotate-180" : ""}`}
                />
              </button>

              {mobileSubmenuOpen === "involved" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/volunteer"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/donate"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Donate
                  </Link>
                  <Link
                    href="/corporate"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    onClick={closeMobileMenu}
                  >
                    Corporate Donors
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block px-4 py-3 bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors duration-200 font-normal text-sm uppercase tracking-wide mt-4"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}