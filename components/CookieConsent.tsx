"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Delay showing the banner for better UX
      setTimeout(() => {
        setShowConsent(true);
        setIsVisible(true);
      }, 1500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={declineCookies}
          />

          {/* Cookie consent banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-5xl"
          >
            <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300" />

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-900/20" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-900/20" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-900/20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-900/20" />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                  {/* Icon/Logo section */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      {/* Animated ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-3"
                      >
                        <div className="w-20 h-20 border-2 border-gray-300 rounded-full border-t-gray-900" />
                      </motion.div>
                      
                      {/* Cookie icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1 space-y-3">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 font-serif"
                    >
                      Your Privacy Matters
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl"
                    >
                      We use cookies to enhance your browsing experience, analyze site traffic, 
                      and personalize content. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                      <a href="/privacy-policy" className="inline-flex items-center gap-1 ml-1 text-gray-900 font-semibold hover:underline transition-all">
                        Learn more
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.p>
                  </div>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
                  >
                    {/* Accept button */}
                    <button
                      onClick={acceptCookies}
                      className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 min-w-[140px]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Accept All
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>

                    {/* Decline button */}
                    <button
                      onClick={declineCookies}
                      className="group px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden min-w-[140px]"
                    >
                      <span className="relative z-10">Decline</span>
                      <div className="absolute inset-0 bg-gray-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                    </button>
                  </motion.div>
                </div>

                {/* Cookie preferences links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-gray-600"
                >
                  <a href="/cookie-policy" className="hover:text-gray-900 hover:underline transition-colors">
                    Cookie Policy
                  </a>
                  <span className="text-gray-300">•</span>
                  <a href="/privacy-policy" className="hover:text-gray-900 hover:underline transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-gray-300">•</span>
                  <button onClick={declineCookies} className="hover:text-gray-900 hover:underline transition-colors">
                    Manage Preferences
                  </button>
                </motion.div>
              </div>

              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;