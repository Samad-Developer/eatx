"use client";
import MobileMockupShowcase from "@/components/mockup-showcase/MobileMockupShowcase";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "motion/react";

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const gradientPulse = {
  initial: { backgroundPosition: "0% 50%" },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <>
      <Navbar />

      <div className="relative">
        {/* Background gradient elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-600 to-orange-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main hero content */}
        <div className="mx-auto max-w-5xl pt-36 sm:pt-40 px-4">
          <div className="text-center">
            <motion.div
              className="text-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl lg:text-7xl"
                variants={item}
              >
                <span className="block">
                  All-in-One Restaurant Management Platform{" "}
                  <motion.span
                    className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
                    variants={gradientPulse}
                    initial="initial"
                    animate="animate"
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    EatX
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p
                className="mt-4 text-base leading-relaxed text-pretty text-gray-500 sm:text-lg sm:mt-5 sm:max-w-xl sm:mx-auto md:text-xl md:max-w-2xl lg:mt-6 lg:text-lg xl:text-xl"
                variants={item}
              >
                From dine-in to delivery, kitchen to accounting—EATX empowers restaurants with everything they need to thrive, scale, and delight customers.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                variants={item}
              >
                <motion.a
                  href="#pricing"
                  className="relative rounded-full bg-red-600 px-6 py-3 text-base sm:text-lg font-semibold text-white hover:shadow-xl transition-all hover:bg-orange-700 "
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a Demo
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add the mockup showcase at the bottom */}
      <div className="relative z-10 ">
        <MobileMockupShowcase />
      </div>
    </>
  );
}
