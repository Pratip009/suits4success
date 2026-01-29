"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling when loader is active
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after loader disappears
      document.body.style.overflow = 'unset';
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {/* Radial gradient overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-gray-400/20 to-transparent rounded-full blur-3xl"
            />

            {/* Animated lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 h-[1px] bg-gray-900"
                style={{ top: `${20 + i * 15}%` }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-4">
            {/* Logo/Brand animation */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 -m-6 sm:-m-8"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-gray-900/30 rounded-full border-t-gray-900" />
              </motion.div>

              {/* Inner pulsing circle */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900/10 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full"
                />
              </motion.div>
            </div>

            {/* Brand name with staggered animation */}
            <div className="flex flex-col items-center gap-2 overflow-hidden">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-wider text-center"
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Suits 4 Success
                </motion.span>
              </motion.div>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                className="h-[2px] w-48 sm:w-64 md:w-72 bg-gradient-to-r from-transparent via-gray-900 to-transparent"
              />

              {/* Tagline */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-gray-700 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-2 sm:mt-4"
              >
                Dress for Success
              </motion.p>
            </div>

            {/* Loading progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4"
            >
              {/* Progress bar container */}
              <div className="w-48 sm:w-64 md:w-72 h-1 bg-gray-900/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 rounded-full"
                />
              </div>

              {/* Loading dots */}
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-2 h-2 bg-gray-900 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner decorative elements - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-l-2 border-t-2 border-gray-900/40"
          />
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-r-2 border-b-2 border-gray-900/40"
          />

          {/* Cinematic vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-400/30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLoader;