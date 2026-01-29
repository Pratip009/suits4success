import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../public/images/s4s.png";
export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <Image
              src={logo}
              width={250}
              height={250}
              alt="Suits 4 Success"
              className="h-8 md:h-20 w-auto object-contain"
            />
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Empowering low-income and unemployed individuals in Hudson County
              through professional attire and workforce development.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Suits-4-Success/61586020936022/"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.instagram.com/suits4successnj/"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/company/suits4success/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/suiting", label: "Suiting" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/donate", label: "Donate" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                910 Bergen Avenue, Suite 207
                <br />
                Jersey City, NJ 07306
              </p>
              <a
                href="tel:5513495910"
                className="block hover:text-gray-800 transition"
              >
                (551) 349-5910
              </a>
              <a
                href="mailto:mfatima@s4snj.org"
                className="block hover:text-gray-800 transition break-all"
              >
                mfatima@s4snj.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Suits 4 Success. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-800 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-800 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
